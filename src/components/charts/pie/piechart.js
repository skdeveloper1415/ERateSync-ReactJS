import React from 'react'
import ReactEcharts from 'echarts-for-react';
export default function Piechart() {
    const option = {
        tooltip: {
            show : false,
            trigger: 'item',
            formatter: '{b}', // Only show name in tooltip
            textStyle: {
              color: 'black' // Set tooltip name color to black
            }
          },
          legend: {
            show: false
          },
          series: [
            {
              type: 'pie',
              radius: ['40%', '80%'],
              left: "-10%",
              itemStyle: {
                borderWidth: 2,
                borderRadius: 5,
    
              },
              avoidLabelOverlap: false,
              label: {show: false,},
              labelLine: {show: false},
              data: [
                { value: 1048, name: '14,500', itemStyle:{borderColor:'#A1C6F9'} },
                { value: 735, name: '509', itemStyle:{borderColor:'#C8D2E1'} },
                { value: 580, name: '15,000', itemStyle:{borderColor:'#EFABC7'} }
              ],
              color: ['#1570EF', '#768FB5', '#D62C72'],
            }
          ]
    };
    
    
      
  return (
    <>
    <ReactEcharts
      option={option}
      style={{ height: '100%', width: '100%' }}
      opts={{ renderer: 'svg' }}
    />
  </>
  )
}
