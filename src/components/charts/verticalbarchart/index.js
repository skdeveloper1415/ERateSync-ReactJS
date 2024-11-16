import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'


export default function VerticalBarChart({ data, yAxisName, xAxisName, grid, legends, barcolor, colors }) {

  const options = {
    legend: legends,
    grid: grid,
    xAxis: {
      axisLabel: {
        textStyle: {
          fontSize: 12,
          color: "#8F91AD"
        }
      },   
     
      axisTick:{
        show:false,
      },
      name: xAxisName,
      type: 'category',
      data: data.labels,
      nameTextStyle: {
        color:'#344054',
      },
      axisLine: {
        show:false,
    },
    },

    yAxis: {
      type: 'value',
      axisLabel: {
        show: false
      },
      name: yAxisName,
      nameTextStyle: {
        color: '#344054',
      },
      splitLine: {
        show: false,
    },
    
    },
    color: colors,
    series: [
      {
        interval: 10,
        label: {
          show: false,
        },
        itemStyle: {
          borderRadius: [4,4,0,0],
           color: barcolor
        },
        data: data.values,
        type: 'bar'
      }
    ]
  };


  return (
    <>
       <div data-aos="fade-up" data-aos-duration="500">
      <ReactEcharts
        echarts={echarts}
        option={options}
        style={{height: '100%'}}
        opts={{ renderer: 'svg' }}
      />
      </div>
    </>
  );
}