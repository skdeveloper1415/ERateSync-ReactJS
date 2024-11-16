import React from 'react';
import ReactEcharts from "echarts-for-react";

const index = ({ legend, grid, dataset = [],chartData = [], xAxisname, xAxisnameStyle, xAxisLabel, data, yAxisname, yAxisnameStyle, yAxisLabel, name1, name2, color1, color2, label, label2, barWidth1, barWidth2, barGap, min, max, interval, xAxisdatatop }) => {

    console.log(chartData,"chartData")

    const option = {
        legend: legend,
        grid: grid,
        tooltip: {
            backgroundColor: '#24262D',
            borderColor: '#24262D',
            textStyle: {
                color: "#FFFFFF"
            },
        },
        xAxis: {
            name: xAxisname,
            nameLocation: 'middle',
            nameGap: 30,
            nameTextStyle: xAxisnameStyle,
            type: "category",
            splitLine: { show: false },
            axisTick: { show: false },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#EAEDF3",
                },
            },
            axisLabel: xAxisLabel,
          data: chartData?.map(item => item?.["month"])
        },
        yAxis:[ {
            name: yAxisname,
            nameRotate: 90,
            nameLocation: 'middle',
            nameGap: 40,
            nameTextStyle: yAxisnameStyle,
            type: "value",
           
            axisLabel: yAxisLabel,
            axisLine: {
                show: true,
                lineStyle: { color: "#EAEDF3" },
                formatter: '{value} %',
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                    color: "#EAEDF3"
                },
            },
        },
        {
            axisLabel : {
                show : true,
                formatter: '{value} %',
            }
        }
        
        ],
        series: [
            {
              name: name1,
              type: 'bar',
              color: color2,
              barWidth: barWidth1,
              itemStyle: {
                barBorderRadius: [4, 4, 0, 0]
              },
              label: label2,
              data : chartData?.map(item => item?.["Actual Sales"])
            },
            {
              name: name2,
              type: 'line',
              color: color1,
              yAxisIndex : 1,
              
              label: label,
              data : chartData?.map(item => item?.["Sales"])
            },
      
          ]
      };

    const option2 = {
        legend: legend,
        grid: grid,
        tooltip: {
            backgroundColor: '#24262D',
            borderColor: '#24262D',
            textStyle: {
                color: "#FFFFFF"
            },
        },
        // dataset: dataset,
        xAxis: [
            {
                name: xAxisname,
                nameLocation: 'middle',
                nameGap: 30,
                nameTextStyle: xAxisnameStyle,
                type: "category",
                splitLine: { show: false },
                axisTick: { show: false },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#EAEDF3",
                    },
                },
                axisLabel: xAxisLabel,
                data: dataset?.map(item => item?.["month"])

            },
            {
                type: "category",
                splitLine: { show: false },
                axisTick: { show: false },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#EAEDF3",
                    },
                },
                axisLabel: xAxisLabel,
                data: xAxisdatatop,
            },
        ],
        yAxis: [
            {
                name: yAxisname,
                nameRotate: 90,
                nameLocation: 'middle',
                nameGap: 40,
                nameTextStyle: yAxisnameStyle,
                type: "value",
               
                axisLabel: yAxisLabel,
                axisLine: {
                    show: true,
                    lineStyle: { color: "#EAEDF3" },
                    formatter: '{value} %',
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed",
                        color: "#EAEDF3"
                    },
                },
            },
        ],

        series: [
            {
                name: name1,
                type: 'bar',
                color: color2,
                barWidth: barWidth1,
                itemStyle: {
                    barBorderRadius: [4, 4, 0, 0]
                },
                data: dataset?.map(item => item?.["Actual Sales"]),
                label: label2
            },
            {
                name: name2,
                type: 'line',
                color: color1,
                // itemStyle: {
                //     barBorderRadius: [4, 4, 0, 0]
                // },
                data: [120, 200, 150, 80, 70, 110, 130],
                // barWidth: barWidth2,
                // barGap: barGap,
                // label: label
            },

        ]
    };

    return (
        <ReactEcharts
            option={option}
            style={{ width: "100%", height: "100%" }}
        />
    )
}

export default index