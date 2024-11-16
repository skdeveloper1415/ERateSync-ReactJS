import React from 'react';
import Schema from './schema';
import * as d3 from "d3";
import vizuly from './libs/vizuly_core.min';
import weighted_tree from './libs/vizuly_weightedtree.min';
// import classes from './style.module.less';
// import './style.css';
import { Modal } from 'antd';

//import Webix from './webix-pro/webix'


// import "./libs/styles/vizuly_weightedtree.css";
// import { toMillion } from '@/utils/CurrencyUTIL'
import LoaderContainer from '../LoaderContainer';
// import LoaderContainer from '../loaderContainer';
// import { toMillion } from '../../utils/CurrencyUTIL';

vizuly.viz.weighted_tree = weighted_tree;

const data = {};
const root = 'drilldwn'
let viz_container, viz;
var selectedVals = [], selectedLevels = [], selectedNodeData, propsCalled = 0;
export default class TreeGraphComponent extends Schema {


    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    toogleModal = (visible) => {
        // const { dispatch } = this.props;
        // dispatch(Events.ON_TOGGLE_MODAL(visible));
    };

    showModal = () => {
        this.toogleModal(true)
    }

    closeModal = () => {
        this.toogleModal(false)
    }

    renderTreeGraph = (props) => {
        //check if there is a rendered chart
        let graph = document.querySelector("#viz_container");
        if (graph.children.length)
            graph.removeChild(graph.children[0])


        let screenWidth;
        let screenHeight;
        let rect;

        rect = document.body.getBoundingClientRect();

        //Set display size based on window size.
        screenWidth = (rect.width < 960) ? Math.round(rect.width * .95) : Math.round((rect.width - 210) * .95);

        screenHeight = 750;

        d3.select("#currentDisplay")
            .attr("item_value", (String(screenWidth) + "," + String(screenHeight)))
            .attr("class", "selected")
            .html("<a>" + screenWidth + "px - " + screenHeight + "px</a>");

        // Set the size of our container element.
        viz_container = d3.selectAll("#viz_container")
            .style("width", screenWidth + "px")
            .style("height", screenHeight + "px");

        this.loadData(props);
        if (this.root) {
            this.changeSize(`${this.root.offsetWidth},${this.root.offsetHeight}`);
        }

    };

    loadData = (props) => {

        data.values = this.prepData(props);
        this.initialize(props);
    };

    prepData = (props) => {
        // debugger;
        const { nestedFields, valueField, valueFields, selectedMetric } = props;
        let values = [];
        let data = this.getTreeGraphPlaceHolders(props)
        let dataset = data[0];//this.mergeData(data);
        if (dataset.length) {
            this.target = dataset[0].ACTUAL_VALUE;
        } else
            return;
        //Clean federal budget data and remove all rows where all values are zero or no labels
        Array.isArray(dataset) && dataset.forEach(function (row, i) {
            let sum = 0;
            for (let counter = 0; counter < valueFields.length; counter++) {
                sum += Number(row[valueFields[counter]] ? row[valueFields[counter]] : 0);
            }
            if (sum > 0) {
                values.push(row);
            }
        });

        if (!values.length) {
            const obj = {}
            for (let counter = 0; counter < valueFields.length; counter++) {
                obj[valueFields[counter]] = 0.0000000001;
                obj[nestedFields[counter]] = "NO_DATA";
            }
            values.push(obj);
        }

        //Make our data into a nested tree.  If you already have a nested structure you don't need to do this.

        let nest = d3.nest();

        nestedFields.forEach((field, index) => {
            nest = nest.key((row) => row[field] || "");
        });

        nest = nest.entries(values);
        let sumValues = 0;
        let counter = 0;
        //This will be a viz.data function;
        vizuly.core.util.aggregateNest(nest, valueFields, function (a, b) {
            return b;
        });

        //Remove empty child nodes left at end of aggregation and add unqiue ids
        function removeEmptyNodes(node, parentId, childId) {
            if (!node) return;
            node.id = parentId + "_" + childId;
            if (node.values) {
                for (let i = node.values.length - 1; i >= 0; i--) {
                    node.id = parentId + "_" + i;
                    if (!node.values[i].key) {
                        node.values.splice(i, 1);
                    }
                    else {
                        removeEmptyNodes(node.values[i], node.id, i)
                    }
                }
            }
        }

        let node = {};
        node.values = nest;
        removeEmptyNodes(node, "0", "0");

        return nest;

    };
    getTreeGraphPlaceHolders = (props) => {
        let { data, nestedFields, valueFields } = props;
        var finalData = [];
        data.forEach(function (row) {
            let parent_value = row[valueFields[0]]
            nestedFields.forEach((nested, index) => {
                // if (index != 0) {
                var nestedObj = {};
                nestedFields.forEach((nested, index) => {
                    nestedObj[valueFields[index]] = row[valueFields[index]];
                    nestedObj[nestedFields[index]] = row[nestedFields[index]];
                })
                finalData.push(Object.assign(nestedObj, row));
                // }
            })

        })

        return [finalData];
    }

    initialize = (props) => {
        // debugger;
        const { valueField, valueFields, selectedMetric } = props;
        viz = vizuly.viz.weighted_tree(document.getElementById("viz_container"));
        if (props.theme) {
            const it = vizuly.theme.weighted_tree(viz);
            it.skin(vizuly.skin.WEIGHTED_TREE_AXIIS);
            it.skin().node_fill = this.getColor;
            it.skin().node_stroke = this.getColor;
            it.skin().link_stroke = ({ target }) => this.getColor(target);
        }
        viz.data(data)
        .width(250)
        .height(250)
        .margin({ top: '30%', bottom: '0%', left: 130, right: '0%' })

            .children(function (d) {
                return d.values
            })
            .key(function (d) {
                return d.id
            })
            .value(function (target) {
                // console.log("target", target)
                const { depth } = target;
                return (Number(target['childProp_' + valueFields?.[depth - 1]]));
            })
            .fixedSpan(-1)
            .branchPadding(.15)
            .label((target) => {
                const { MetricType } = this.props;
                const { depth, key } = target;
                // console.log("target",target.values[0]['childProp_label'])
                let maxLength = 20;
                let name = (key && typeof key === 'string' && key.length > maxLength)
                    ? key.slice(0, maxLength) + "..."
                    : key || '';  // Return an empty string if key is undefined or null
                if (depth === 0) {
                    return `${(target.values && target.values[0]['childProp_label']) || 'Sales'}: ${MetricType === "number" ? target.values[0]['childProp_ACTUAL'] + "\n\n"  : target.values[0]['childProp_NUMBERVALUE']?.toFixed(0) + "\n\n" + "(100%)"}`;
                    // return `${(target.values && target.values[0]['childProp_label']) || 'ACTUAL'}: ${target['childProp_METRIC_TYPE'] === "percentage" ? d3?.format(",.1f")(this.target) : 100}%`;
                }
                // console.log("aaww", target)
                // debugger
                // console.log("aaww", valueFields)
                let calculatePercentage = ((target["childProp_" + valueFields[depth - 1]] /
                    target["childProp_" + (valueFields[depth - 2] || "actual")]) * 100).toFixed(2)
                if (isNaN(calculatePercentage)) {
                    return `${key == null ? '-' : key} ${
                        // target["childProp_metricType"] === "number"
                        // ? 
                        target["childProp_" + valueFields[depth - 1]] || 0
                        //   +"(-%)" 
                        //   : null
                        }`;
                }
                else {

                    return `${key} ${

                        // target["childProp_metricType"] === "number"
                        // ?
                        (target["childProp_" + valueFields[depth - 1]]).toFixed(2) || 0
                        //   +"(" + d3.format("")(
                        //     calculatePercentage
                        //     ) +
                        //     "%)" 
                        // : null
                        }`;
                }

            })
            .on("measure", this.onMeasure)
            .on("click", this.onClick);


        // this.changeSize("100,300");

        // Open up some of the tree branches.
        //viz.toggleNode(data.values[2]);
        // viz.toggleNode(data.values[2].values[0]);
        // viz.toggleNode(data.values[3]);
        data && data.values && data.values.map(d => {
            // viz.toggleNode(d);
        })
    };
    getColor = (target) => {
        // debugger

        const { depth } = target;
        if (depth === 0) {
            return '#2C4089';
        }
        const { valueFields } = this.props;

        // if (target['childProp_METRIC_INDICATOR_TYPE'] === 'positive') {
        //     return target['childProp_' + valueFields[depth - 1]] > this.target ? '#0f7d1d' : '#940f0f';
        // } else {
        //     // return target['childProp_' + valueFields[depth - 1]] > this.target ? '#940f0f' : '#0f7d1d';
        //     return target['childProp_' + valueFields[depth - 1]] < 1170000 && target['childProp_' + valueFields[depth - 1]] > 0 ? '#F0074D' : target['childProp_' + valueFields[depth - 1]] > 1170000 && target['childProp_' + valueFields[depth - 1]] < 31970000 ? '#F2C94C' : '#03832F';
        // }

        console.log("target", depth - 1)
        // ["#B07AA1", "#EDC948", "#B7E1CD", "#1570ef", "#29d478", "#84e1bc", "#f98080", "#e3a008", "#7287f1"]
        if (target['childProp_METRIC_INDICATOR_TYPE'] === 'positive') {
            switch (depth - 1) {
                case 0:
                    return '#B07AA1'
                case 1:
                    return '#EDC948'
                case 2:
                    return '#B7E1CD'
                default:
                    return '#7287f1'

            }
            // ["#012D27", "#D0FBE9", "#A4F6D8", "#6AEBC5", "#0ABF95", "#007C65", "#036251", "#045044"]
            // return target['childProp_' + valueFields[depth - 1]] > this.target ? '#b17aa1' : '#b17aa1';
        } else {
            switch (depth - 1) {
                case 0:
                    return '#B07AA1'
                case 1:
                    return '#6AEBC5'
                case 2:
                    return '#EDC948'
                case 3:
                    return '#012D27'
                default:
                    return '#f98080'
                // case 0:
                //     return '#B07AA1'
                // case 1:
                //     return '#EDC948'
                // case 2:
                //     return '#B7E1CD'
                // default:
                //     return '#f98080'

            }
            // return target['childProp_' + valueFields[depth - 1]] > this.target ? '#b17aa1' : '#b17aa1';
        }
    };

    onMeasure = () => {
        // Allows you to manually override vertical spacing
        viz.validate()
        viz.tree().nodeSize([60, 0]);
    };

    onClick = (g, d, i) => {
        // debugger;
        const { depth } = d;
        let dummyValue = d.values?.filter(item => item.key != "DUMMY") && d.values.filter(item => item.key != "DUMMY").length
        const { nestedFields, dispatch, handleTreeOnClick } = this.props;
        handleTreeOnClick(d);
        if (nestedFields.length == depth) {
            return;
        }
        selectedNodeData = d;
        selectedVals.push(d.id)
        if ((selectedVals.includes(d.id) || !d.id) && dummyValue) {
            viz.toggleNode(d);
            return;
        }

        const fields = Object.assign([], nestedFields).slice(depth, depth + 1);
        const filterFields = Object.assign([], nestedFields).slice(depth - 1, depth);

        let payloadValues = {}, payloadFilterValues = {};
        fields.map(field => {
            const selectedLevelValue = d["childProp_" + field];
            payloadValues[field] = selectedLevelValue || "";
        });
        filterFields.map(field => {
            const selectedLevelValue = d["childProp_" + field];
            payloadFilterValues[field] = selectedLevelValue || "";
        });
        // dispatch(Events.ON_CLICK({payloadValues,payloadFilterValues}));

    };

    updateTreeMap = (d) => {
        // debugger;
        viz.toggleNode(d);

        viz.update();
    }

    updateChild = (graphData, props) => {
        // debugger;
        const { data, nestedFields, valueFields } = props;
        let id = graphData.id;


        let depth = graphData.depth + 1;

        data && data[0] && Array.isArray(data[0]) && data[0].forEach((n, i) => {

            for (var prop in n) {
                if (prop != "key") {
                    n[`childProp_${prop}`] = n[prop]
                }
            }

            nestedFields.forEach((nested, index) => {
                if (index == (depth - 1)) {
                    n[`agg_value${index + 1}`] = n["value1"] || 0
                    n[`childProp_value${index + 1}`] = n["value1"] || 0
                    n[`childProp_${nested}`] = n[nested] || ""
                } else {
                    n[`agg_value${index + 1}`] = graphData[`agg_value${index + 1}`] || 0
                    n[`childProp_value${index + 1}`] = graphData[`childProp_value${index + 1}`] || 0
                    n[`childProp_${nestedFields[index]}`] = graphData[`childProp_${nestedFields[index]}`] || ""
                }
            })
            var new_id = id.split("_"); new_id.pop();

            n.values = []; n._children = []; n.depth = depth; n.id = new_id.join("_") + "_" + String(i) + "_0"; n.key = n[`childProp_${nestedFields[depth - 1]}`];
            n[`childProp_dimension`] = graphData[`childProp_dimension`];
            n[`childProp_valueFields`] = graphData[`childProp_valueFields`]
            n["childProp_percent_value" + valueFields[depth - 1]] = (n["childProp_" + valueFields[depth - 1]] / n["childProp_" + valueFields[depth - 2]]) * 100;
        })

        var sortedDataSet = data[0] && Array.isArray(data[0]) && data[0].sort(function (a, b) {
            return b[valueFields[depth - 1]] - a[valueFields[depth - 1]]
        }) || []
        graphData.values = sortedDataSet;
        graphData._children = JSON.parse(JSON.stringify(sortedDataSet));

        //viz.toggleNode(graphData)
        //viz.update();
        this.updateTreeMap(graphData)
    }

    changeSize = (val) => {
        let s = String(val).split(",");
        if (!viz_container)
            return;
        viz_container.transition().duration(300).style('width', s[0] + 'px').style('height', s[1] + 'px');
        setTimeout(() => {
            viz.width(s[0]).height(s[1] * 1.5).update();
        }, 0);
    };

    componentDidMount() {
        this.renderTreeGraph(JSON.parse(JSON.stringify(this.props)));
        this.lastData = (JSON.stringify(this.props));
    }



    componentWillReceiveProps(nextProps) {
        // debugger
        const nextData = (JSON.stringify(nextProps.data));
        const prevData = (JSON.stringify(this.props.data));
        if ((JSON.stringify(nextProps.nestedFields) != JSON.stringify(this.props.nestedFields)) || (JSON.stringify(nextProps.treeFilters) != JSON.stringify(this.props.treeFilters))) {
            selectedNodeData = undefined;
            selectedVals = [];
        }

        if (true) {
            this.prevData = prevData;
            this.lastData = nextData;

            if (selectedNodeData) {
                if (nextData != prevData) {
                    this.renderTreeGraph(JSON.parse(JSON.stringify(nextProps)));
                }
            }
            else {

                if (nextData != prevData) {
                    this.renderTreeGraph(JSON.parse(JSON.stringify(nextProps)));
                }

            }



        }
    }

    renderModal = (modal = { onClose: () => { }, onApply: () => { } }) => {
        return (
            <Modal
                visible={modal.visible}
                bodyStyle={modal.style}
                footer={null}
                width={modal.width || '600px'}
                closable={false}
                onCancel={this.closeModal}
            >
                {/* <Webix data={modal.data} config={modal.config} dispatch={this.props.dispatch} onApply={modal.onApply} defaultSelected={this.props.nestedFields} /> */}
            </Modal>
        )
    }

    render() {
        const { modal, loading, DarkMode } = this.props;
        return (
          
            <div className={root} style={{ width: "100%", height: "100%", backgroundColor: '' }} ref={(e) => {
                this.root = e;
            }}>

               
                    <div id="viz_container" className="z-depth-3"></div>
                {/* <div id="viz_container" className="z-depth-3"></div> */}
            </div>
             
        )
    }

}