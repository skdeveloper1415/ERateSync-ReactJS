import React from 'react';
import ReactEcharts from "echarts-for-react";

export default function PiechartRevenue() {
    const option = {
        legend: {
            show:false,
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              itemStyle: {
                borderRadius: 10,
                borderColor: '#F5F6F7',
                borderWidth: 4
              },
              label: {
                show: true,
                position: 'outside',
                color:'#9CA1AB',
                fontSize: 16,
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 20,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 15, name: '15%', itemStyle:{color:'#FFCCC8'} },
                { value: 15, name: '15%', itemStyle:{color:'#FD766C'} },
                { value: 8, name: '8%', itemStyle:{color:'#BE2217'} },
                { value: 10, name: '10%', itemStyle:{color:'#9D2017'} },
                { value: 24, name: '24%', itemStyle:{color:'#470C08'} }
              ]
            }
          ]
      };
  return (
    <ReactEcharts
      option={option}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
