import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic } from 'echarts';

export default function TreeMapChart() {

        const options = {
            series: [
                {
                  type: 'treemap',
                  label: {
                  show: true,
                  position: "insideBottomLeft",
                  formatter: '{c}%:\n{b}',
                  color:'#FFFFFF',
                  fontSize:12,
                  lineHeight: 20,
                  },
                  itemStyle: {
                  color: "rgba(158, 45, 45, 1)",
                  gapWidth: 4
                  },
                width: "100%",
                height: "100%",
                squareRatio: 1,
                breadcrumb: {
                    show: false
                  },
                  data: [
                    {
                      name: 'Others',
                      value: 40,
                      children: [
                        {
                          name: 'Others',
                          value: 20,
                          itemStyle: {
                          color: "#BECDE3",
                          borderRadius: [0, 0, 8, 0]
                          },
                          label: {
                          show: true,
                          color:'#000',
                          },
                        },
                        {
                          name: 'Schools',
                          value: 25,
                          itemStyle: {
                          color: "#6480AB",
                          borderRadius: [0, 8, 0, 0]
                          },
                        }
                      ]
                    },
                    {
                      name: 'School Districts',
                      value: 55,
                      itemStyle: {
                      color: "#4F6484",
                      borderRadius: [8, 0, 0, 8]
                      },
                    }
                  ]
                }
              ]
        };
  return (
    <ReactEcharts
    echarts={echarts}
    option={options}
    style={{height: '100%', width:'100%',}} 
/>
  )
}
