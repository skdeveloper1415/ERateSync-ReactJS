import React from 'react';
import ReactEcharts from "echarts-for-react";

const index = ({value = null}) => {

    const options = {
        series: [
            {
                type: 'gauge',
                startAngle: 180,
                endAngle: 0,
                center: ['50%', '75%'],
                radius: '100%',
                min: 0,
                max: 100,
                splitNumber: 8,
                itemStyle: {
                    color: '#CE6C65'
                },
                axisLine: {
                    roundCap: true,
                    lineStyle: {
                        color: [[1, '#E4E7E9']],
                        width: 10,
                    }
                },
                progress: {
                    show: true,
                    overlap: false,
                    roundCap: true,
                },
                pointer: { show: false, },
                axisTick: { show: false, },
                splitLine: { show: false, },
                axisLabel: {
                    show: false,
                },
                title: {
                    show: false,
                },
                detail: {
                    valueAnimation: true,
                    fontSize: 14,
                    offsetCenter: [0, -4],
                    color: '#4B586E',
                    formatter: '{value} %',
                },
                data: [
                    {
                        value: value?.replace('%', ''),
                    }
                ]
            }
        ]
    };

    return (
        <ReactEcharts option={options} style={{ height: '100%', width: '100%', }} />
    )
}

export default index