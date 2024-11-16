import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic } from 'echarts';

export default function StackBar({ grid,legend,xAxis,yAxis,category2color,Category2name,Category2data,Category2label,Category1name,Category1color,Category1label,Category1data,Category2borderRadius,Category1borderRadius,Category3name,Category3color,Category3label,Category3borderRadius,Category3data }) {

        const options = {
            grid: grid,
            legend: legend,
            xAxis: xAxis,
            yAxis:yAxis,
            series: [
                {
                  name:Category2name,
                  type: 'bar',
                  color:category2color,
                  stack: 'Total',
                  label:Category2label,
                  itemStyle: {
                    borderRadius:Category2borderRadius,
                  },
                  data:Category2data,
                },
                {
                  name: Category1name,
                  type: 'bar',
                  color:Category1color,
                  stack: 'Total',
                  label:Category1label,
                  itemStyle: {
                    borderRadius:Category1borderRadius,
                  },
                  data:Category1data,
                },
                {
                    name: Category3name,
                    type: 'bar',
                    color:Category3color,
                    stack: 'Total',
                    label:Category3label,
                    itemStyle: {
                      borderRadius:Category3borderRadius,
                    },
                    data:Category3data,
                  }
              ]
        };
  return (
    <ReactEcharts
    echarts={echarts}
    option={options}
    style={{height: '100%'}} 
/>
  )
}
