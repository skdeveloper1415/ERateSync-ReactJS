import React from 'react';
import ReactEcharts from 'echarts-for-react';


export default function DoubleBarChart({ legend,name1,name2,grid, xAxixdata, yAxixdata, color1, color2, lable, itemStyle, data, lable2, itemStyle2, data2 }) {

  const option = {
    legend: legend,
    grid: grid,
    xAxis: xAxixdata,
    yAxis: yAxixdata,
    series: [
      {
        name: name1,
        type: 'bar',
        label: lable,
        barWidth: 15,
        color: color1,
        itemStyle: itemStyle,
        data: data
      },
      {
        name: name2,
        type: 'bar',
        label: lable2,
        barWidth: 15,
        color: color2,
        itemStyle: itemStyle2,
        data: data2
      },
    ]
  };

  return (
    <ReactEcharts
      option={option}
      style={{ width: '100%', height: '100%' }}
    />
  )
};