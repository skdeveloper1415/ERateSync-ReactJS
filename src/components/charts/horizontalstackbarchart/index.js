import React from 'react';
import ReactEcharts from 'echarts-for-react';


export default function HorizontalStackBarChart({ legend, grid,name1,name2, xAxixdata, yAxixdata,color1,color2, backgroundStyle, lable, itemStyle, data, lable2, itemStyle2, data2 }) {

  const option = {
    legend: legend,
    grid: grid,
    xAxis: xAxixdata,
    yAxis: yAxixdata,
   
    series: [
      {
        name:name1,
        showBackground: false,
        backgroundStyle: backgroundStyle,
        type: 'bar',
        label: lable,
        stack:'total',
        color:color1,
        itemStyle: itemStyle,
        data: data
      },
      {
        name:name2,
        showBackground: false,
        backgroundStyle: backgroundStyle,
        type: 'bar',
        label: lable2,
        stack:'total',
        color:color2,
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