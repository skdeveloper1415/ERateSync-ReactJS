import React, { useState } from 'react';
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '../../components/common/layout/layout';
import { Dropdown } from 'primereact/dropdown';


export default function Charts() {

    const settings = {
        tooltip: {},
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        draggable: true,
        touchMove: true,
        accessibility: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    var barcolor = new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
            { offset: 0, color: '#696E9F' },
            { offset: 1, color: 'rgba(105, 110, 159, 0.10)' }
        ]
    );

    const noc = {
        legend: { show: false },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '0%',
            containLabel: true
        },
        xAxis: {
            axisLabel: {
                textStyle: {
                    fontSize: 10,
                    color: "#999"
                }
            },
            name: '',
            type: 'category',
            axisTick: { show: false },
            axisLine: {
                show: true,
                lineStyle: { color: '#212143' },
            },
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        yAxis: {
            name: '',
            type: 'value',
            axisLabel: { show: false },
            splitLine: { show: false },
        },
        series: [
            {
                type: 'bar',
                interval: 10,
                label: { show: false },
                itemStyle: {
                    borderRadius: [4, 4, 0, 0],
                    color: barcolor,
                },
                data: [50, 40, 60, 70, 30, 80],
            }
        ]
    };

    const projectEndorced = {
        legend: { show: false },
        grid: {
            left: '-5%',
            right: '-5%',
            bottom: '0%',
            top: '0%',
            containLabel: true
        },
        xAxis: {
            name: '',
            type: 'category',
            label: { show: false },
            axisTick: { show: false },
            axisLabel: { show: false },
            axisLine: { show: false },
            splitLine: {
                show: true,
                lineStyle: { color: '#0A0A1A' },
            }

        },
        yAxis: {
            type: 'value',
            splitLine: { show: false },
            axisLabel: { show: false }
        },
        series: [
            {
                name: 'Last Year',
                type: 'line',
                symbolSize: 0,
                smooth: true,
                lineStyle: {
                    width: 1,
                    shadowColor: '#696E9F',
                    shadowBlur: 20,
                    shadowOffsetY: 1
                },
                stack: 'a',
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(105, 110, 159, 0.30)' },
                        { offset: 1, color: 'rgba(105, 110, 159, 0.10)' }
                    ])
                },
                zlevel: 1,
                data: [100, 50, 60, 100, 40, 100, 80],
            }
        ]
    };

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'All', code: 'All' },
        { name: '2022', code: '2022' },
        { name: '2023', code: '2023' },
    ];

    return (
        <>
            <Layout />
            <div className='pl-[128px] xl:pl-[6.667vw] pt-[118px] xl:pt-[6.146vw] pr-[32px] xl:pr-[1.667vw]'>
                <div className='charts-slider'>
                    <Slider {...settings} className="" data-aos="zoom-in-up" data-aos-duration="900">
                        <div className="slide-box">
                            <div className="flex justify-between items-center">
                                <div className="text-white text-[16px] font-medium xl:text-[0.833vw]">Projects Endorsed</div>
                                <div className='last-year-select'>
                                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Last Year" className="w-full" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-[16px] xl:pt-[0.833vw]">
                                <div className="text-white text-[30px] font-medium xl:text-[1.563vw]">3,478</div>
                                <div className='bg-[#00381F] rounded-[4px] p-[4px] leading-none'>
                                    <i className="text-[#027A48] dub-upstock text-[9px] font-normal xl:text-[0.625vw] cursor-pointer px-[4px]"></i>
                                    <span className='text-[#D1CECE] text-[10px] font-medium leading-none'>+2%</span>
                                </div>
                            </div>
                            <div style={{ height: 50 }} className='pt-[16px] xl:pt-[0.833vw]'>
                                <ReactEcharts
                                    echarts={echarts}
                                    option={projectEndorced}
                                    style={{ height: '100%' }}
                                    opts={{ renderer: 'svg' }}
                                />
                            </div>
                        </div>
                        <div className="slide-box">
                            <div className="flex justify-between items-center">
                                <div className="text-white text-[16px] font-medium xl:text-[0.833vw]">NOC - Submited</div>
                                <div className='last-year-select'>
                                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Last Year" className="w-full" />
                                </div>                            </div>
                            <div className="flex justify-between items-center pt-[16px] xl:pt-[0.833vw]">
                                <div className="text-white text-[30px] font-medium xl:text-[1.563vw]">248</div>
                                <div className='bg-[#00381F] rounded-[4px] p-[4px] leading-none'>
                                    <i className="text-[#027A48] dub-upstock text-[9px] font-normal xl:text-[0.625vw] cursor-pointer px-[4px]"></i>
                                    <span className='text-[#D1CECE] text-[10px] font-medium leading-none'>+2%</span>
                                </div>
                            </div>
                            <div style={{ height: 50 }} className='pt-[16px] xl:pt-[0.833vw]'>
                                <ReactEcharts
                                    echarts={echarts}
                                    option={projectEndorced}
                                    style={{ height: '100%' }}
                                    opts={{ renderer: 'svg' }}
                                />
                            </div>
                        </div>
                        <div className="slide-box">
                            <div className="flex justify-between items-center">
                                <div className="text-white text-[16px] font-medium xl:text-[0.833vw]">NOC - Awaiting STKH Approval</div>
                                <div className='last-year-select'>
                                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Last Year" className="w-full" />
                                </div>                            </div>
                            <div className="grid grid-cols-5 pt-[20px] xl:pt-[1.042vw]">
                                <div className="col-span-2">
                                    <div className='text-[#999] text-[12px] xl:text-[0.625vw]'>As on Date</div>
                                    <div className='text-[#D1CECE] text-[30px] xl:text-[1.563vw] font-medium'>112</div>
                                    <div className='text-[#D1CECE] text-[16px] xl:text-[0.833vw]'>Avg. Approval Time - 5 days</div>
                                </div>
                                <div className='col-span-3'>
                                    <div className='text-[#999] text-[12px] xl:text-[0.625vw]'>Month by Month</div>
                                    <div style={{ height: 75 }}>
                                        <ReactEcharts
                                            echarts={echarts}
                                            option={noc}
                                            style={{ height: '100%' }}
                                            opts={{ renderer: 'svg' }}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="slide-box">
                            <div className="flex justify-between items-center">
                                <div className="text-white text-[16px] font-medium xl:text-[0.833vw]">Projects Endorsed</div>
                                <div className='last-year-select'>
                                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Last Year" className="w-full" />
                                </div>                            </div>
                            <div className="flex justify-between items-center pt-[16px] xl:pt-[0.833vw]">
                                <div className="text-white text-[30px] font-medium xl:text-[1.563vw]">3,478</div>
                                <div className='bg-[#00381F] rounded-[4px] p-[4px] leading-none'>
                                    <i className="text-[#027A48] dub-upstock text-[9px] font-normal xl:text-[0.625vw] cursor-pointer px-[4px]"></i>
                                    <span className='text-[#D1CECE] text-[10px] font-medium leading-none'>+2%</span>
                                </div>
                            </div>
                            <div style={{ height: 50 }} className='pt-[16px] xl:pt-[0.833vw]'>
                                <ReactEcharts
                                    echarts={echarts}
                                    option={projectEndorced}
                                    style={{ height: '100%' }}
                                    opts={{ renderer: 'svg' }}
                                />
                            </div>
                        </div>
                        <div className="slide-box">
                            <div className="flex justify-between items-center">
                                <div className="text-white text-[16px] font-medium xl:text-[0.833vw]">NOC - Submited</div>
                                <div className='last-year-select'>
                                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Last Year" className="w-full" />
                                </div>                            </div>
                            <div className="flex justify-between items-center pt-[16px] xl:pt-[0.833vw]">
                                <div className="text-white text-[30px] font-medium xl:text-[1.563vw]">248</div>
                                <div className='bg-[#00381F] rounded-[4px] p-[4px] leading-none'>
                                    <i className="text-[#027A48] dub-upstock text-[9px] font-normal xl:text-[0.625vw] cursor-pointer px-[4px]"></i>
                                    <span className='text-[#D1CECE] text-[10px] font-medium leading-none'>+2%</span>
                                </div>
                            </div>
                            <div style={{ height: 50 }} className='pt-[16px] xl:pt-[0.833vw]'>
                                <ReactEcharts
                                    echarts={echarts}
                                    option={projectEndorced}
                                    style={{ height: '100%' }}
                                    opts={{ renderer: 'svg' }}
                                />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}