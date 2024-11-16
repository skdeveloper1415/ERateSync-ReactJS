import React from 'react';
import ReactEcharts from 'echarts-for-react';

export default function HorizontalBarChart({ legend, grid,name1, xAxixdata, yAxixdata, backgroundStyle, lable, itemStyle, data }) {

    const option = {
        legend: legend,
        grid: grid,
        xAxis: xAxixdata,
        yAxis: yAxixdata,
        series: [{
            name: name1,
            showBackground: false,
            backgroundStyle: backgroundStyle,
            type: 'bar',
            label: lable,
            itemStyle: itemStyle,
            data: data
        }]
    };

    return (
        <ReactEcharts
            option={option}
            style={{ width: '100%', height: '100%' }}
        />
    )
};