import React from 'react'
import ReactEcharts from "echarts-for-react";


export default function TreeMapChart({ legend, data, width, height, itemStyle, breadcrumb, label, tooltip }) {

    const option = {
        tooltip: tooltip,
        legend: legend,
        series: [
            {
                type: "treemap",
                width: width,
                height: height,
                itemStyle:itemStyle,
                breadcrumb:breadcrumb,
                label: label,
                // data: data,
                data: data,
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