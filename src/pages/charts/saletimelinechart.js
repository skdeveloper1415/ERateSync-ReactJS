import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

 
export default function SalesTimelineChart({name, radius, center, labelLine, data =[]  }) {


    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        backgroundColor: '#000', 
        textStyle: {
          color: '#FFF'
        },
        borderColor: '#000',
        formatter: function (params) {
          let tooltipContent = '';
          params.forEach(function (item) {
            if (item.seriesName === 'app') {
              tooltipContent += ` ${item.name} : ${item.value}M<br/>`;
            } else if (item.seriesName === 'Student') {
              tooltipContent += `Average: ${item.value}M<br/>`;
            }
          });
          return tooltipContent;
        }
      },
     
      grid: {
        top: 15,
        left: 22,
        right: 15,
        bottom: 40,
        containLabel: true
      },
     
      xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: {
          show: true,
          lineStyle: {
            color: '#333334',
            type: 'dashed'
          }
        },
     
        axisLine: {
          show: true,
          lineStyle: {
            color: '#333334'
          }
        },
        axisTick: { show: false },
        axisLabel: {
          show: true,
          color: '#fff',
          fontSize: 14,
          width: 40,
          overflow: 'break',
          interval: 0
        },
     
        data: data?.map(item => item?.["Month"])
        // data: [
        //   '','JAN','FEB', 'MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'
        // ]
      },
     
      yAxis: {
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            color: '#333334'
          }
        },
     
        axisLabel: {
          show: true,
          color: '#fff',
          fontSize: 14,
          formatter: '${value}M'
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#1F2A37'
          }
        },
        // min: 0,
        // max: 20,
        // interval: 5
      },
      color: '#000',
     
      series: [
        {
          name: 'Average Sales',
          type: 'line',
          smooth: true,
          symbol: 'none',
          itemStyle: { color: '#007C65' },
          lineStyle: { color: '#007C65' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0.1,
                color: '#007C65' // Start color for the 'app' area
              },
              {
                offset: 1,
                color: 'rgba(0, 124, 101, 0)' // Fully transparent color for the 'app' area
              }
            ])
          },
          data: data?.map(item => item?.["Average Sales"])
        },
        {
          name: 'Actual Sales',
          type: 'line',
          symbol: 'none',
          symbolSize: 5,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0.1,
                color: '#515441' // Start color for the 'Student' area
              },
              {
                offset: 1,
                color: 'rgba(81, 84, 65, 0.5)' // End color with transparency for the 'Student' area
              }
            ])
          },
          itemStyle: { color: '#DA291C' },
          lineStyle: { color: '#DA291C', type: 'dashed' },
          data: data?.map(item => item?.["Actual Sales"])
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