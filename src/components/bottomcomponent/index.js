import React, { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

import Linechartwithgradient from "../../components/charts/linechartwithgradient";
// import { Work_Sans } from "next/font/google";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as echarts from "echarts";
// import Layout from "../components/layout/pagelayout";
// import Gaugechart from "../components/charts/gaugechart";


export default function BottomComponent() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    const lineChartData = {
        label: ["06/23", "07/23", "08/23", "09/23", "10/23", "11/23", "12/23"],
        value: [1, 8, 3, 7, 2, 5, 1],
    };

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    };

    return (
        <div className="pl-24 bg-[#F0F2F6]">
            <div className={isActive ? 'sliderHide active' : 'sliderHide'}>
                <div className="divOne">
                    <div className="bg-[#fff]  shadow-[0px_1px_24px_0px_rgba(0,0,0,0.25)] p-[14px] 3xl:p-[0.833vw] xl:pl-[24px] 3xl:pl-[1.667vw] ">
                        <div className="flex gap-[10px] 3xl:gap-[0.521vw]">
                            <div className="flex justify-center items-center py-[8px] pl-[16px] 3xl:pl-[0.833vw]">
                                <div className="space-y-[8px] 3xl:space-y-[0.417vw]" onClick={handleClick}>
                                    <div className="text-[#363A44] text-[12px] 3xl:text-[0.729vw] font-semibold text-end leading-[1.2] work-sans-style">
                                        Your <br /> Tracks
                                    </div>

                                    <div className="text-[#767A87] text-[12px] 3xl:text-[0.625vw] text-end flex items-center work-sans-style">
                                        Hide
                                        <i className="maid-arrow-circle-left ml-[4px] 3xl:ml-[0.208vw]"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-1 custslider work-sans-style">
                                <Slider {...settings}>
                                    <div className="bg-[#F7F6F6] rounded-[8px] 3xl:rounded-[0.408vw] p-[14px] 3xl:p-[0.833vw]">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-[5px]">
                                                <div className="text-[#202432] text-[12px] 3xl:text-[0.729vw] font-semibold leading-[12px] 2xl:leading-[0.729vw]">
                                                    Masafi 12x330ml...
                                                </div>
                                                <div className="text-[#73706D] text-[12px] 3xl:text-[0.729vw] font-normal leading-[12px] 2xl:leading-[0.729vw]">
                                                    Regular Water
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-[14px] 3xl:gap-[0.729vw]">
                                                <div className="h-[45px] 3xl:h-[2.344vw]">
                                                    <Linechartwithgradient
                                                        grid={{
                                                            top: 0,
                                                            left: 2,
                                                            right: 2,
                                                            bottom: 2,
                                                            containLabel: true,
                                                        }}
                                                        lineStyle={{ color: "#73706D", width: 1.5 }}
                                                        areaStyle={{
                                                            color: new echarts.graphic.LinearGradient(
                                                                0,
                                                                0,
                                                                0,
                                                                1,
                                                                [
                                                                    {
                                                                        offset: 0.1,
                                                                        color: "rgba(99, 111, 122, 0.4)",
                                                                    },
                                                                    {
                                                                        offset: 0.8,
                                                                        color: "rgba(99, 111, 122, 0)",
                                                                    },
                                                                ]
                                                            ),
                                                        }}
                                                        data={lineChartData}
                                                    />
                                                </div>
                                                <div className="col space-y-[8px]">
                                                    <div >
                                                        <div className="text-[#202432] text-[12px] 3xl:text-[0.729vw] font-semibold leading-[12px] 2xl:leading-[0.729vw]">
                                                            11.0 AED
                                                        </div>
                                                    </div>
                                                    <div className="bg-[#02A666] text-center rounded-[3px] 3xl:rounded-[0.156vw] px-[4px] 3xl:px-[0.208vw] py-[2px] 3xl:py-[0.104vw] text-[#fff] text-[10px] 3xl:text-[0.521vw]">
                                                        +0,96
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#F7F6F6] rounded-[8px] 3xl:rounded-[0.408vw] p-[14px] 3xl:p-[0.833vw]">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-[5px]">
                                                <div className="text-[#202432] text-[12px] 3xl:text-[0.729vw] font-semibold leading-[12px] 2xl:leading-[0.729vw]">
                                                Al Ain 6x1.5L
                                                </div>
                                                <div className="text-[#73706D] text-[12px] 3xl:text-[0.729vw] font-normal leading-[12px] 2xl:leading-[0.729vw]">
                                                    Regular Water
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-[14px] 3xl:gap-[0.729vw]">
                                                <div className="h-[45px] 3xl:h-[2.344vw]">
                                                    <Linechartwithgradient
                                                        grid={{
                                                            top: 0,
                                                            left: 2,
                                                            right: 2,
                                                            bottom: 2,
                                                            containLabel: true,
                                                        }}
                                                        lineStyle={{ color: "#73706D", width: 1.5 }}
                                                        areaStyle={{
                                                            color: new echarts.graphic.LinearGradient(
                                                                0,
                                                                0,
                                                                0,
                                                                1,
                                                                [
                                                                    {
                                                                        offset: 0.1,
                                                                        color: "rgba(99, 111, 122, 0.4)",
                                                                    },
                                                                    {
                                                                        offset: 0.8,
                                                                        color: "rgba(99, 111, 122, 0)",
                                                                    },
                                                                ]
                                                            ),
                                                        }}
                                                        data={lineChartData}
                                                    />
                                                </div>
                                                <div className="col space-y-[8px]">
                                                    <div >
                                                        <div className="text-[#202432] text-[12px] 3xl:text-[0.729vw] font-semibold leading-[12px] 2xl:leading-[0.729vw]">
                                                        5.25 AED
                                                        </div>
                                                    </div>
                                                    <div className="bg-[#A60247] text-center rounded-[3px] 3xl:rounded-[0.156vw] px-[4px] 3xl:px-[0.208vw] py-[2px] 3xl:py-[0.104vw] text-[#fff] text-[10px] 3xl:text-[0.521vw]">
                                                        +0,96
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#F7F6F6] rounded-[8px] 3xl:rounded-[0.408vw] p-[14px] 3xl:p-[0.833vw]">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-[5px]">
                                                <div className="text-[#202432] text-[12px] 3xl:text-[0.729vw] font-semibold leading-[12px] 2xl:leading-[0.729vw]">
                                                Masafi 12x500ml
                                                </div>
                                                <div className="text-[#73706D] text-[12px] 3xl:text-[0.729vw] font-normal leading-[12px] 2xl:leading-[0.729vw]">
                                                    Regular Water
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-[14px] 3xl:gap-[0.729vw]">
                                                <div className="h-[45px] 3xl:h-[2.344vw]">
                                                    <Linechartwithgradient
                                                        grid={{
                                                            top: 0,
                                                            left: 2,
                                                            right: 2,
                                                            bottom: 2,
                                                            containLabel: true,
                                                        }}
                                                        lineStyle={{ color: "#73706D", width: 1.5 }}
                                                        areaStyle={{
                                                            color: new echarts.graphic.LinearGradient(
                                                                0,
                                                                0,
                                                                0,
                                                                1,
                                                                [
                                                                    {
                                                                        offset: 0.1,
                                                                        color: "rgba(99, 111, 122, 0.4)",
                                                                    },
                                                                    {
                                                                        offset: 0.8,
                                                                        color: "rgba(99, 111, 122, 0)",
                                                                    },
                                                                ]
                                                            ),
                                                        }}
                                                        data={lineChartData}
                                                    />
                                                </div>
                                                <div className="col space-y-[8px]">
                                                    <div >
                                                        <div className="text-[#202432] text-[12px] 3xl:text-[0.729vw] font-semibold leading-[12px] 2xl:leading-[0.729vw]">
                                                        6.95 AED
                                                        </div>
                                                    </div>
                                                    <div className="bg-[#02A666] text-center rounded-[3px] 3xl:rounded-[0.156vw] px-[4px] 3xl:px-[0.208vw] py-[2px] 3xl:py-[0.104vw] text-[#fff] text-[10px] 3xl:text-[0.521vw]">
                                                        +0,96
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#F7F6F6] rounded-[8px] 3xl:rounded-[0.408vw] p-[14px] 3xl:p-[0.833vw]">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-[5px]">
                                                <div className="text-[#202432] text-[12px] 3xl:text-[0.729vw] font-semibold leading-[12px] 2xl:leading-[0.729vw]">
                                                Evian 6x1.5L
                                                </div>
                                                <div className="text-[#73706D] text-[12px] 3xl:text-[0.729vw] font-normal leading-[12px] 2xl:leading-[0.729vw]">
                                                    Regular Water
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-[14px] 3xl:gap-[0.729vw]">
                                                <div className="h-[45px] 3xl:h-[2.344vw]">
                                                    <Linechartwithgradient
                                                        grid={{
                                                            top: 0,
                                                            left: 2,
                                                            right: 2,
                                                            bottom: 2,
                                                            containLabel: true,
                                                        }}
                                                        lineStyle={{ color: "#73706D", width: 1.5 }}
                                                        areaStyle={{
                                                            color: new echarts.graphic.LinearGradient(
                                                                0,
                                                                0,
                                                                0,
                                                                1,
                                                                [
                                                                    {
                                                                        offset: 0.1,
                                                                        color: "rgba(99, 111, 122, 0.4)",
                                                                    },
                                                                    {
                                                                        offset: 0.8,
                                                                        color: "rgba(99, 111, 122, 0)",
                                                                    },
                                                                ]
                                                            ),
                                                        }}
                                                        data={lineChartData}
                                                    />
                                                </div>
                                                <div className="col space-y-[8px]">
                                                    <div >
                                                        <div className="text-[#202432] text-[12px] 3xl:text-[0.729vw] font-semibold leading-[12px] 2xl:leading-[0.729vw]">
                                                        50.95 AED
                                                        </div>
                                                    </div>
                                                    <div className="bg-[#02A666] text-center rounded-[3px] 3xl:rounded-[0.156vw] px-[4px] 3xl:px-[0.208vw] py-[2px] 3xl:py-[0.104vw] text-[#fff] text-[10px] 3xl:text-[0.521vw]">
                                                        +0,96
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#F7F6F6] rounded-[8px] 3xl:rounded-[0.408vw] p-[14px] 3xl:p-[0.833vw]">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-[5px]">
                                                <div className="text-[#202432] text-[12px] 3xl:text-[0.729vw] font-semibold leading-[12px] 2xl:leading-[0.729vw]">
                                                Al Ain 6x330ml
                                                </div>
                                                <div className="text-[#73706D] text-[12px] 3xl:text-[0.729vw] font-normal leading-[12px] 2xl:leading-[0.729vw]">
                                                Still Water, Glass
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-[14px] 3xl:gap-[0.729vw]">
                                                <div className="h-[45px] 3xl:h-[2.344vw]">
                                                    <Linechartwithgradient
                                                        grid={{
                                                            top: 0,
                                                            left: 2,
                                                            right: 2,
                                                            bottom: 2,
                                                            containLabel: true,
                                                        }}
                                                        lineStyle={{ color: "#73706D", width: 1.5 }}
                                                        areaStyle={{
                                                            color: new echarts.graphic.LinearGradient(
                                                                0,
                                                                0,
                                                                0,
                                                                1,
                                                                [
                                                                    {
                                                                        offset: 0.1,
                                                                        color: "rgba(99, 111, 122, 0.4)",
                                                                    },
                                                                    {
                                                                        offset: 0.8,
                                                                        color: "rgba(99, 111, 122, 0)",
                                                                    },
                                                                ]
                                                            ),
                                                        }}
                                                        data={lineChartData}
                                                    />
                                                </div>
                                                <div className="col space-y-[8px]">
                                                    <div >
                                                        <div className="text-[#202432] text-[12px] 3xl:text-[0.729vw] font-semibold leading-[12px] 2xl:leading-[0.729vw]">
                                                        16.0 AED
                                                        </div>
                                                    </div>
                                                    <div className="bg-[#02A666] text-center rounded-[3px] 3xl:rounded-[0.156vw] px-[4px] 3xl:px-[0.208vw] py-[2px] 3xl:py-[0.104vw] text-[#fff] text-[10px] 3xl:text-[0.521vw]">
                                                        +0,96
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divTwo">
                    <div className="bg-[#fff] inline-block shadow-[0px_1px_24px_0px_rgba(0,0,0,0.25)] p-[14px] 3xl:p-[0.833vw] xl:pl-[24px] 3xl:pl-[1.667vw] ">
                        <div className="flex gap-[10px] 3xl:gap-[0.521vw]">
                            <div className="flex justify-center items-center">
                                <div className="space-y-[8px] 3xl:space-y-[0.417vw]" onClick={handleClick}>
                                    <div className="text-[#363A44] text-[12px] 3xl:text-[0.729vw] font-semibold text-end leading-[1.2] work-sans-style">
                                        Your <br /> Tracks
                                    </div>

                                    <div className="text-[#767A87] text-[12px] 3xl:text-[0.625vw] text-end flex items-center work-sans-style">
                                        Hide
                                        <i className="maid-arrow-circle-left ml-[4px] 3xl:ml-[0.208vw]"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}