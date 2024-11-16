import React from 'react'
import ReactEcharts from "echarts-for-react";

export default function SingleGradientChart({ legend, grid, xaxisLabel,xsplitLine,yaxisLine,yaxisLabel,ysplitLine,yaxisTick,yinverse,data, barwidth,itemStyle, color, label }) {

    const option = {
        legend: legend,
        grid: grid,
        xAxis: {
            type: "value",
            axisLabel:xaxisLabel,
            splitLine: xsplitLine,
        },
        yAxis: {
            type: "category",
            axisLine:yaxisLine,
            axisLabel:yaxisLabel,
            axisTick:yaxisTick,
            inverse: yinverse,
            splitLine: ysplitLine,
        },
        series: [
            {
                name: "",
                type: "bar",
                data: data,
                barWidth: barwidth,
                itemStyle: itemStyle,
                color: color,
                label:label,
            },

        ],
    };

    return (
        <ReactEcharts
            option={option}
            style={{ width: "100%", height: "100%" }}
        />
    )
}