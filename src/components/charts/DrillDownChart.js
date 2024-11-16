import React from 'react'
import ReactEcharts from "echarts-for-react";

export const DrillDownChart = () => {

  const drillDownCharts = {

    series: [{
      type: "tree",
      emphasis: false,
      data: [{
        name: (() => {
          return "Spending \n $125K"
        })(),
        label: {
          show: true,
          position: "inside",
          color: '#19212A',
          background: '#ECEFF3',
          fontSize: 14,
          fontWeight: '600',
          textAlign: 'left',
          display:'flex',
          justifyConent:'start',
          borderWidth: 2,
          borderColor: '#1861DD',
          lineHeight: 20,
          emphasis: false,
          backgroundColor: '#E5E7EB',
          padding: [16, 12, 16, 12],
          borderRadius: [8, 8, 8, 8],
        },
        itemStyle: {
          color: '#36833A',
          emphasis: false
        },
        children: [
          {
            name: (() => {
              return "County 1 \n $14K"
            })(),
            lineStyle: {
              width: 20,
              color: "#3696FB80"
            },
            symbolSize: 0,
            label: {
              show: true,
              position: "right",
              lineHeight: 18,
              color: '#2C363F',
              fontSize: 12
            },
          },
          {
            lineStyle: {
              width: 20,
              color: "#1861DD80",
            },
            label: {
              show: true,
              position: "inside",
              color: '#19212A',
              background: '#ECEFF3',
              fontSize: 14,
              fontWeight: '600',
              textAlign: 'left',
              borderWidth: 2,
              borderColor: '#1861DD',
              lineHeight: 20,
              emphasis: false,
              backgroundColor: '#E5E7EB',
              padding: [16, 12, 16, 12],
              borderRadius: [8, 8, 8, 8],
            },
            itemStyle: {
              color: '#36833A',
            },
            name: "County 2 \n $99K",
            children: [
              {
                name: (() => {
                  return "Consortium \n $20K"
                })(),
                symbolSize: 0,
                lineStyle: {
                  width: 20,
                  color: "#1861DD80",
                },
                label: {
                  show: true,
                  position: "right",
                  lineHeight: 18,
                  color: '#2C363F',
                  fontSize: 12
                },
              },
              {
                name: (() => {
                  return "School \n $18K"
                })(),
                symbolSize: 0,
                lineStyle: {
                  width: 20,
                  color: "#1861DD80",
                },
                label: {
                  show: true,
                  position: "right",
                  lineHeight: 18,
                  color: '#2C363F',
                  fontSize: 12
                },
              },
              {
                name: "School District \n $25K",
                label: {
                  show: true,
                  position: "inside",
                  color: '#19212A',
                  background: '#ECEFF3',
                  fontSize: 14,
                  fontWeight: '600',
                  textAlign: 'left',
                  borderWidth: 2,
                  borderColor: '#1861DD',
                  lineHeight: 20,
                  emphasis: false,
                  backgroundColor: '#E5E7EB',
                  padding: [16, 12, 16, 12],
                  borderRadius: [8, 8, 8, 8],
                },
                itemStyle: {
                  color: '#36833A',
                },
                collapsed: false,
                children: [
                  {
                    name: "School District 1 \n $2K",
                    symbolSize: 0,
                    lineStyle: {
                      width: 20,
                      color: "#1861DD80",
                    },
                  },
                  {
                    name: "School District 2 \n $23K",
                    label: {
                      show: true,
                      position: "inside",
                      color: '#19212A',
                      background: '#ECEFF3',
                      fontSize: 14,
                      fontWeight: '600',
                      textAlign: 'left',
                      borderWidth: 2,
                      borderColor: '#1861DD',
                      lineHeight: 20,
                      emphasis: false,
                      backgroundColor: '#E5E7EB',
                      padding: [16, 12, 16, 12],
                      borderRadius: [8, 8, 8, 8],
                    },
                    collapsed: false,
                    children: [{
                      name: "Category1 \n $5K ",
                      lineStyle: {
                        width: 20,
                        color: "#1861DD80",
                      },
                      symbolSize: 0,
                      label: {
                        show: true,
                        position: "right",
                        lineHeight: 18,
                        color: '#2C363F',
                        fontSize: 12
                      },
                    },
                    {
                      lineStyle: {
                        width: 20,
                        color: "#3696FB80"
                      },
                      label: {
                        show: true,
                        position: "right",
                        lineHeight: 18,
                        color: '#2C363F',
                        fontSize: 12
                      },
                      itemStyle: {
                        color: '#36833A',
                      },
                      name: "Category2 \n $18K",
                      symbolSize: 0,
                    },
                    ],
                    lineStyle: {
                      width: 20,
                      color: "#3696FB80"
                    },
                    label: {
                      show: true,
                      position: "inside",
                      color: '#19212A',
                      background: '#ECEFF3',
                      fontSize: 14,
                      fontWeight: '600',
                      textAlign: 'left',
                      borderWidth: 2,
                      borderColor: '#1861DD',
                      lineHeight: 20,
                      emphasis: false,
                      backgroundColor: '#E5E7EB',
                      padding: [16, 12, 16, 12],
                      borderRadius: [8, 8, 8, 8],
                    },
                    itemStyle: {
                      color: '#36833A',
                    },
                  },

                ],
                lineStyle: {
                  width: 20,
                  color: "#1861DD80",
                },
              },
              {
                name: (() => {
                  return "Library \n $18K"
                })(),
                lineStyle: {
                  width: 20,
                  color: "#3696FB80"
                },
                symbolSize: 0,
                label: {
                  show: true,
                  position: "right",
                  lineHeight: 18,
                  color: '#2C363F',
                  fontSize: 12
                },
              },
              {
                name: (() => {
                  return "Library System \n $18K"
                })(),
                lineStyle: {
                  width: 20,
                  color: "#3696FB80"
                },
                symbolSize: 0,
                label: {
                  show: true,
                  position: "right",
                  lineHeight: 18,
                  color: '#2C363F',
                  fontSize: 12
                },
              },
            ],
          },
          {
            name: "County 3 \n $12K",
            lineStyle: {
              width: 20,
              color: "#3696FB80"
            },
            symbolSize: 0,
            label: {
              show: true,
              position: "right",
              lineHeight: 18,
              color: '#2C363F',
              fontSize: 12
            },

          },

        ]
      }],
      itemStyle: {
        emphasis: {
          emphasis: false,
        },
      },
      label: {
        show: true,
        position: "right",
        lineHeight: 18,
        color: '#2C363F',
        fontSize: 12
      },
      lineStyle: {
        width: 30,
        color: "#fff"
      },
      symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIKSURBVHgB7da9TUMxFEDhe11AywjZgIyQSBR0MAqZAJggsAl0FEhkhGxARqAFpGfsF0ARLJAcna/y++mOru2Mv5Zns5LlokZcZsQktPdaq3VGrof6fhuL1Wb3W/6ulrOTkkfXbXUVOmB59x36bXwa323jvrTVNHTw+kTX+jHvkUt/8T25xoVoUzsteXy9XS9nkxb4NYQz1GFefkqLp0Reti26ujVTZV70M9jAXJMSQjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBobrgTchpBqxLlHrYwgpI9dliPoQQhpq3pZYPK/aFN+HWHrTxdNmvGQN8XnT9+sQQm/Zm/b19ha9WL3V+jF3kgFaw7Fla9of898Py/NJieGmZpy2j9PQ3msTu8l2WR7vU/3I3fEFO3Nf7zpxuL0AAAAASUVORK5CYII=",
      height: "90%",
      top: '5%',
      left: '60',
      bottom: '-20%',
      on: {
        click: function (params) {
          var node = params.data;
          if (node.symbolSize === 0) {
            node.symbolSize = 70;
            if (node.children) {
              node.children.forEach(function (child) {
                child.symbolSize = 70;
              });
            }
          } else {
            node.symbolSize = 0;
            if (node.children) {
              node.children.forEach(function (child) {
                child.symbolSize = 0;
              });
            }
          }
          // myChart.setOption(drillDownCharts);
        }
      }
    }]
  }

  return (
    <div>
      <ReactEcharts option={drillDownCharts} style={{ width: '100%', height: '800px' }} />
    </div>
  )
} 