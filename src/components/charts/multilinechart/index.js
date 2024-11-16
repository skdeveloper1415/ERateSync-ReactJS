import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic } from 'echarts';

export default function Linechartwithgradient({ grid, data, lineStyle, areaStyle }) {

    const options = {
        title: {},
       
        legend: {
            show:'true',
            left:'2%',
            // top:'2%',
            bottom:'2%',
            itemHeight:12,
            itemWidth:12,
            textStyle: {
                fontSize: 12,
                color: "#6C768B"
            },
            data: ['SD1', 'SD2', 'SD3']
        },
        grid: {
            left: '4%',
            right: '4%',
            bottom: '12%',
            containLabel: true
        },
       
        xAxis: {
            type: 'category',
            // boundaryGap: false,
            data: ['Q1', 'Q2', 'Q3', 'Q4'],
            axisTick: { show: false },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#EDEEF1",
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    fontSize: 14,
                    color: "#6C768B"
                }
            },
            name: 'Quarter',
            nameGap : 30,
            nameLocation: "middle",
            nameTextStyle: {
              color:  '#6C768B',
              fontSize:14,
            },
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 5000,
            interval: 500,
            axisTick: { show: false },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#EAEDF3",
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                    color: "#EDEEF1"
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    fontSize: 14,
                    color: "#6C768B"
                }
            },
            name: 'Value',
            nameGap : 55,
            nameLocation: "middle",
            nameTextStyle: {
              color:  '#6C768B',
              fontSize:14,
            },
        },
        series: [
            {
                name: 'SD1',
                type: 'line',
                symbolSize:10,
                color: '#165DFF',
                data: [4000, 3650, 3900, 4200],
                label: {
                    show: true,
                    position:'bottom',
                    textStyle: {
                        fontSize: 12,
                        color: "#363A44"
                    }
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 0.5,
                        [
                            {
                                offset: 0,
                                color: "rgba(22, 93, 255, 1)",
                            },
                            {
                                offset: 1,
                                color: "rgba(255, 255, 255, 0)",
                            },
                        ]
                    ),
                },
            },
            {
                name: 'SD2',
                type: 'line',
                symbolSize:10,
                color: '#1DA8DF',
                data: [3100, 3300, 3600, 3800],
                label: {
                    show: true,
                    position:'bottom',
                    textStyle: {
                        fontSize: 12,
                        color: "#363A44"
                    }
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {
                                offset: 0,
                                color: "rgba(0, 156, 218, 1)",
                            },
                            {
                                offset: 0.5,
                                color: "rgba(255, 255, 255, 0)",
                            },
                        ]
                    ),
                },
            },
            {
                name: 'SD3',
                type: 'line',
                color: '#D62C72',
                symbolSize:10,
                data: [2550, 2800, 3000, 3100],
                label: {
                    show: true,
                    position:'bottom',
                    textStyle: {
                        fontSize: 12,
                        color: "#363A44"
                    }
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,0,0,1,
                        [
                            {
                                offset: 0,
                                color: "rgba(216, 57, 122, 1)",
                            },
                            {
                                offset: 0.5,
                                color: "rgba(255, 255, 255, 0)",
                            },
                        ]
                    ),
                },
            },

        ]
    };

    return (
        <ReactEcharts
            echarts={echarts}
            option={options}
            style={{ width: '100%', height: '100%' }}
        />
    )
};