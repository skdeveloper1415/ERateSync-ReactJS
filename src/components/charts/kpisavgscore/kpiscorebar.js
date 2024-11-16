import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

export default function KPIScoreDoubleBar() {
    const options = {
        grid: {
            left: '5%',
            right: '0%',
            bottom: '0%',
            top:'0%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'value',
              axisTick: {show: false},
              axisLabel:{show:false,},
              axisLine: {show: false},
              splitLine: {show: false}
            }
          ],
          yAxis: [
            {
              type: 'category',
              axisTick: {show: false},
              axisLabel:{
                show:true,
                color: "rgba(44, 54, 63, 1)",
                fontWeight: "bold",
                fontSize: 12
              },
              axisLine: {show: false},
              splitLine: {show: false},
              data: ['31-40', '21-30', '11-20', '0-10']
            }
          ],
          series: [
            {
              name: 'Income',
              type: 'bar',
              stack: 'Total',
              color:'#768FB5',
              label: {
                show: true,
                color:'#fff',
                fontSize: 13,
                position: ['-15%', '40%'],
              },
              emphasis: {
                focus: 'series'
              },
              data: [20, 70, 60, 50],
              itemStyle:{
                borderRadius:[0, 10, 10, 0]
              },
            },
            {
              name: 'Expenses',
              type: 'bar',
              stack: 'Total',
              color:'#768FB5',
              label: {
                show: false,
                position: 'left'
              },
              itemStyle:{
                borderRadius:[10, 0, 0, 10]
              },
              emphasis: {
                focus: 'series'
              },
              data: [-20, -70, -60, -50]
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
