import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Link } from "react-router-dom";
import { Slider } from "primereact/slider";
import { DrillDownChart } from "../../components/charts/DrillDownChart";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from "primereact/paginator";

export default function CrossDimentionTab() {
    const [customers, setCustomers] = useState([]);
    const [value, setValue] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const [products] = useState([
        { SchoolDistrict: 'SD1', Category1: "$ 987,654", Category2: "$ 987,654" },
        { SchoolDistrict: 'SD2', Category1: "$ 987,654", Category2: "$ 987,654" },
        { SchoolDistrict: 'SD3', Category1: "$ 987,654", Category2: "$ 987,654" },
        { SchoolDistrict: 'SD4', Category1: "$ 987,654", Category2: "$ 987,654" },
        { SchoolDistrict: 'SD5', Category1: "$ 987,654", Category2: "$ 987,654" },
        { SchoolDistrict: 'SD6', Category1: "$ 987,654", Category2: "$ 987,654" },
        { SchoolDistrict: 'SD7', Category1: "$ 987,654", Category2: "$ 987,654" },
        { SchoolDistrict: 'SD8', Category1: "$ 987,654", Category2: "$ 987,654" },
        { SchoolDistrict: 'SD9', Category1: "$ 987,654", Category2: "$ 987,654" },
        { SchoolDistrict: 'SD10', Category1: "$ 987,654", Category2: "$ 987,654" },
        { SchoolDistrict: 'SD11', Category1: "$ 987,654", Category2: "$ 987,654" },
        { SchoolDistrict: 'SD12', Category1: "$ 987,654", Category2: "$ 987,654" },
        { SchoolDistrict: 'SD13', Category1: "$ 987,654", Category2: "$ 987,654" },
    ]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
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
                        <div className="text-[#19212A] text-[12px] 2xl:text-[0.729vw] font-medium">Select Dimension 1</div>
                        <div className="bg-[#F5F6F7] p-[10px] 2xl:p-[0.625vw] rounded-[6px] 2xl:rounded-[0.420vw] space-y-[14px] 2xl:space-y-[0.833vw]">
                            <div className="analysisdropdowns">
                                <div className="text-[#374151] text-[12px] 2xl:text-[0.729vw] font-medium leading-[18px] 2xl:leading-[1.042vw] mb-1">View by</div>
                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                    placeholder="Category" className="w-full md:w-14rem" />
                            </div>
                            <div className="analysisdropdowns">
                                <div className="text-[#374151] text-[12px] 2xl:text-[0.729vw] font-medium leading-[18px] 2xl:leading-[1.042vw] mb-1">Select SBU</div>
                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                    placeholder="All" className="w-full md:w-14rem" />
                            </div>
                        </div>
                        <div className="text-[#19212A] text-[12px] 2xl:text-[0.729vw] font-medium">Select Dimension 2</div>
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
                    <div className="p-[20px] 2xl:p-[1.25vw] flex justify-end gap-2 text-[#24262D] text-[18px] 2xl:text-[1.042vw] font-medium leading-[22px] 2xl:leading-[1.25vw]">
                        <Link to="" className="bg-[#1570EF] text-white text-[12px] rounded-lg 2xl:text-[0.729vw] py-[8px] 2xl:py-[0.525vw] px-[10px] 2xl:px-[0.625vw] flex items-center gap-1"  ><i className="esspd-print text-[18px] 2xl:text-[1.048vw]"></i>Print</Link>
                        <Link to="" className="bg-[#FFF] border border-[#1570EF] text-[#1570EF] text-[12px] rounded-lg 2xl:text-[0.729vw] py-[8px] 2xl:py-[0.525vw] px-[10px] 2xl:px-[0.625vw] flex items-center gap-1" ><i className="esspd-export text-[18px] 2xl:text-[1.048vw]"></i>Export</Link>
                    </div>
                    <div>
                        <DataTable value={products}
                            className="customizedtbl" rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                            <Column field="SchoolDistrict" header="School District" style={{ width: '25%' }}></Column>
                            <Column field="Category1" header="Category 1" style={{ width: '25%', fontWeight: 500 }}></Column>
                            <Column field="Category2" header="Category 2" style={{ width: '25%', fontWeight: 500 }}></Column>
                        </DataTable>
                    </div>
                    <div className="relative custTablePaginator custTablePaginator2">
                        <Paginator first={first} rows={rows} totalRecords={120} onPageChange={onPageChange}
                            currentPageReportTemplate={"Showing {first} - {last} of {totalRecords}"}
                            template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} />
                    </div>
                </div>
                {/* analysis section end*/}
            </div>
        </div>
    )
}