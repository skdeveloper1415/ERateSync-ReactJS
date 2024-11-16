import React from 'react'
import ReactEcharts from "echarts-for-react";


export default function Fillpie({ data, color1, color2, color3, legend }) {


    const option = {

        tooltip: {
            trigger: 'item'
        },
        legend: legend,
        series: [
            {
                type: 'pie',
                radius: '80%',
                itemStyle:{
                    borderColor: '#fff',
                    borderWidth: 1
                },
                label: {
                    show: false,
                    formatter: '{c}%',
                    color:"black"
                },
                labelLine: {
                    show: false,
                },
                data: [
                    {
                        name: data.label1,
                        value: data.value1,
                        itemStyle: {
                            color: color1,
                        }
                    },
                    {
                        name: data.label2,
                        value: data.value2,
                        itemStyle: {
                            color: color2
                        },
                    },
                    {
                        name: data.label3,
                        value: data.value3,
                        itemStyle: {
                            color: color3
                        },
                    }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    return (
        <>
            <ReactEcharts
                option={option}
                opts={{ renderer: 'svg' }}
                style={{height: '100%'}}
            />
        </>
    )
}