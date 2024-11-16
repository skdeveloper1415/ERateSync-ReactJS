import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Link } from "react-router-dom";
import { Slider } from "primereact/slider";
import Linechartwithgradient from "../../components/charts/multilinechart";


export default function TrendTab() {

    const [value, setValue] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const lineChartData = {
        label: ["06/23", "07/23", "08/23", "09/23", "10/23", "11/23", "12/23"],
        value: [1, 8, 3, 7, 2, 5, 1],
    };

    return (
        <div className="bg-[#F0F2F6]">

            <div className="grid grid-cols-12 gap-[40px] 2xl:gap-[2.344vw]">
                {/* col-3 filter section start */}
                <div className="col-span-12 lg:col-span-3 rounded-[14px] 2xl:rounded-[0.833vw] bg-[rgba(255,255,255,0.65)] shadow-[0px_9px_33px_0px_rgba(0,0,0,0.25)]">
                    <div className="flex justify-between items-center p-[14px] 2xl:p-[0.833vw] border-b border-[#BECDE3]">
                        <div className="text-[#19212A] text-[14px] 2xl:text-[0.833vw] font-semibold leading-[22px] 2xl:leading-[1.25vw]">Filters</div>
                        <i className="esspd-filter text-[14px] 2xl:text-[0.833vw] text-[#2C363F]"></i>
                    </div>
                    <div className="space-y-[14px] 2xl:space-y-[0.833vw] mt-[22px] 2xl:mt-[1.25vw] px-[18px] 2xl:px-[1.042vw] pb-[18px] 2xl:pb-[1.042vw]">
                        <div className="analysisdropdowns">
                            <div className="text-[#374151] text-[12px] 2xl:text-[0.729vw] font-medium leading-[18px] 2xl:leading-[1.042vw] mb-1">Select Financial Year</div>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="2023-24" className="w-full md:w-14rem" />
                        </div>
                        <div className="">
                            <div className="text-[#374151] text-[12px] 2xl:text-[0.729vw] font-medium leading-[18px] 2xl:leading-[1.042vw] mb-1">Adjust Distance (Miles)</div>
                            <div className="analysisslider border border-[#BECDE3] rounded-[8px] 2xl:rounded-[0.420vw]">
                                <div>
                                    <div className="grid grid-cols-3 text-[#2C363F] text-[10px] 2xl:text-[0.625vw] font-medium mb-2">
                                        <div className="col-span-1 text-left">0M</div>
                                        <div className="col-span-1 text-center">25M</div>
                                        <div className="col-span-1 text-right">250M</div>
                                    </div>
                                    <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="text-[#374151] text-[12px] 2xl:text-[0.729vw] font-medium leading-[18px] 2xl:leading-[1.042vw] mb-1">Value ($K)</div>
                            <div className="analysisslider border border-[#BECDE3] rounded-[8px] 2xl:rounded-[0.420vw]">
                                <div>
                                    <div className="grid grid-cols-3 text-[#2C363F] text-[10px] 2xl:text-[0.625vw] font-medium mb-2">
                                        <div className="col-span-1 text-left">$0K</div>
                                        <div className="col-span-1 text-center">$25K</div>
                                        <div className="col-span-1 text-right">$250K</div>
                                    </div>
                                    <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" />
                                </div>
                            </div>
                        </div>
                        <div className="analysisdropdowns">
                            <div className="text-[#374151] text-[12px] 2xl:text-[0.729vw] font-medium leading-[18px] 2xl:leading-[1.042vw] mb-1">Select Metric</div>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="Spending" className="w-full md:w-14rem" />
                        </div>
                        <div className="text-[#19212A] text-[12px] 2xl:text-[0.729vw] font-medium">Select Frequency</div>
                        <div className="bg-[#F5F6F7] p-[10px] 2xl:p-[0.625vw] rounded-[6px] 2xl:rounded-[0.420vw] space-y-[14px] 2xl:space-y-[0.833vw]">
                            <div className="analysisdropdowns">
                                <div className="text-[#374151] text-[12px] 2xl:text-[0.729vw] font-medium leading-[18px] 2xl:leading-[1.042vw] mb-1">View by</div>
                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                    placeholder="Quarter" className="w-full md:w-14rem" />
                            </div>
                            <div className="analysisdropdowns">
                                <div className="text-[#374151] text-[12px] 2xl:text-[0.729vw] font-medium leading-[18px] 2xl:leading-[1.042vw] mb-1">Select Quarter</div>
                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                    placeholder="Quarter" className="w-full md:w-14rem" />
                            </div>
                        </div>
                        <div className="text-[#19212A] text-[12px] 2xl:text-[0.729vw] font-medium">Select Dimension</div>
                        <div className="bg-[#F5F6F7] p-[10px] 2xl:p-[0.625vw] rounded-[6px] 2xl:rounded-[0.420vw] space-y-[14px] 2xl:space-y-[0.833vw]">
                            <div className="analysisdropdowns">
                                <div className="text-[#374151] text-[12px] 2xl:text-[0.729vw] font-medium leading-[18px] 2xl:leading-[1.042vw] mb-1">View by</div>
                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                    placeholder="School District" className="w-full md:w-14rem" />
                            </div>
                            <div className="analysisdropdowns">
                                <div className="text-[#374151] text-[12px] 2xl:text-[0.729vw] font-medium leading-[18px] 2xl:leading-[1.042vw] mb-1">Select School District</div>
                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                    placeholder="All" className="w-full md:w-14rem" />
                            </div>
                        </div>
                        <Link to="" className="bg-[#EFF8FF] flex justify-center items-center py-[8px] 2xl:py-[0.420vw] px-[12px] 2xl:px-[0.625vw] rounded-md 2xl:rounded-[0.420vw]">
                            <span className="text-[#1B458D] text-[12px] 2xl:text-[0.729vw] leading-[15px] 2xl:leading-[0.885vw]">Add Level</span>
                        </Link>
                    </div>
                </div>
                {/* filter section end */}
                {/* col-9 analysis section start*/}
                <div className="col-span-12 lg:col-span-9 rounded-[6px] 2xl:rounded-[0.420vw] bg-white shadow-[0px_10px_22px_-1px_rgba(0,0,0,0.10)]">
                    <div className="p-[14px] 2xl:p-[0.833vw] text-[#24262D] text-[18px] 2xl:text-[1.042vw] font-medium leading-[22px] 2xl:leading-[1.25vw]">
                        Trend Analysis
                    </div>
                    <div className="h-full">
                        <Linechartwithgradient />
                    </div>
                </div>
                {/* analysis section end*/}
            </div>
        </div>
    )
}