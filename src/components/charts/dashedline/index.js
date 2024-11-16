import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic } from 'echarts';


export default function Dashedline({ data, gradiantcolor1, gradiantcolor2, legend, grid, lineName, yAxisName, yAxisNameGap, yAxisNamePosition
    , xAxisName, xAxisNameGap, xAxisNamePosition, }) {
 

    const options = {
        legend: legend,
        grid: grid,
        xAxis: {
            name: xAxisName,
            type: 'category',
            label: {
                show: false,
            },
            axisTick: { show: false },
            data: data.labels,
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: "#8F91AD"
                  }
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false,
            },
            name: yAxisName,
            axisLabel: {
                show: false,
            }
        },
        series: [
            {
                name: lineName,
                data: data.values,
                type: 'line',
                showSymbol: false,
                smooth: true,
                label: {
                    show: false
                },
                lineStyle: {
                    color: '#7C94DE',
                    width: 2,
                    type: 'dashed',
                },
                areaStyle: {
                    color: new graphic.LinearGradient(0, 0, 0, 2, [
                        {
                            offset: 0,
                            color: gradiantcolor1
                        },
                        {
                            offset: 1,
                            color: gradiantcolor2
                        }])
                },
            }
        ]
    };

    return (
        <div data-aos="fade-up" data-aos-duration="800">
        <ReactEcharts
            echarts={echarts}
            option={options}
            style={{height: '100%'}} 
        />
        </div>
    )


};

