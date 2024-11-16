"use client";
import { useState, useRef } from "react";
// import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from 'primereact/dropdown';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Checkbox } from 'primereact/checkbox';
import { ScrollPanel } from 'primereact/scrollpanel';


export default function Filter(props) {
  const { visible, onHide } = props;
  const [date, setDate] = useState(null);
  const [checked, setChecked] = useState(false);
  const [selectedFY, setSelectedFY] = useState({
    name: "FY 2023",
    code: "2023",
  });
  const FY = [

    { name: "01", code: "2024" },
    { name: "02", code: "2023" },
    { name: "03", code: "2022" },
    { name: "04", code: "2021" },
  ];

  const [file, setFile] = useState([]);

  return (
    <>
      <div>
        <Sidebar
          visible={visible}
          onHide={onHide}
          position="right"
          className=" custmSidebar customwidth rounded-[10px] rounded-br-none bg-white"
          blockScroll={true}
        >
          <div className=" bg-[#fff] border border-b-[#E5E7EB] dark:bg-[#111928] p-[24px] xl:p-[14px] 3xl:p-[0.729vw] rounded-tl-[10px] sticky top-0 z-10">
            <div className="flex gap-3 xl:gap-2.5">
              <div>
                <div className="text-[#374151] dark:text-[#F2F2F5] text-[22px] xl:text-[22px] 3xl:text-[1.146vw] font-semibold leading-none">
                Select Filters (Min 5, Max 12)
                </div>
              </div>
            </div>
          </div>
          {/* <ScrollPanel className="h-[360px] xl:h-[500px] 2xl:h-[650px] 3xl:h-[35vw] my-[15px] xl:my-[15px] 3xl:my-[0.75vw]"> */}
          <div className="  gap-4 bg-white px-[20px] xl:px-[20px] 3xl:px-[1.042vw] pt-[20px] xl:pt-[20px] 3xl:pt-[1.042vw] mb-[100px] xl:mb-[100px] 3xl:mb-[4.2083] ">
            <div className="pb-[12px] xl:pb-[12px] 3xl:pb-[0.625vw]  flex justify-between border-b border-b-[#E5E7EB]">
             <div className="flex items-center gap-2">
             <div>   <Checkbox onChange={e => setChecked(e.checked)} className="custombox" checked={checked}></Checkbox></div>
              <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-semibold">
              Select funding Year
              </div>
             </div>
             <div className="flex items-center gap-3">
             <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] pb-[6px] xl:pb-[6px] 3xl:pb-[0.313vw] text-[#374151] font-medium">
                {" "}
                Filter Position
              </div>
              <div>

              <Dropdown
                value={selectedFY}
                onChange={(e) => setSelectedFY(e.value)}
                options={FY}
                optionLabel="name"
                placeholder="01"
                className="w-full placeholder:text-[#000] customtext"
              />
              </div>
             </div>
            </div>
            <div className="py-[12px] xl:py-[12px] 3xl:py-[0.625vw] flex justify-between border-b border-b-[#E5E7EB]">
             <div className="flex items-center gap-2">
             <div>   <Checkbox onChange={e => setChecked(e.checked)} className="custombox" checked={checked}></Checkbox></div>
              <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-semibold">
              Select Financial Year
              </div>
             </div>
             <div className="flex items-center gap-3">
             <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] pb-[6px] xl:pb-[6px] 3xl:pb-[0.313vw] text-[#374151] font-medium">
                {" "}
                Filter Position
              </div>
              <div>

              <Dropdown
                value={selectedFY}
                onChange={(e) => setSelectedFY(e.value)}
                options={FY}
                optionLabel="name"
                placeholder="01"
                className="w-full placeholder:text-[#000] customtext"
              />
              </div>
             </div>
            </div>
            <div className="py-[10px] xl:py-[10px] 3xl:py-[0.521vw]  flex justify-between border-b border-b-[#E5E7EB]">
             <div className="flex items-center gap-2">
             <div>   <Checkbox onChange={e => setChecked(e.checked)} className="custombox" checked={checked}></Checkbox></div>
              <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-semibold">
              Select County
              </div>
             </div>
             <div className="flex items-center gap-3">
             <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] pb-[6px] xl:pb-[6px] 3xl:pb-[0.313vw] text-[#374151] font-medium">
                {" "}
                Filter Position
              </div>
              <div>

              <Dropdown
                value={selectedFY}
                onChange={(e) => setSelectedFY(e.value)}
                options={FY}
                optionLabel="name"
                placeholder="02"
                className="w-full placeholder:text-[#000] customtext"
              />
              </div>
             </div>
            </div>
            <div className="py-[10px] xl:py-[10px] 3xl:py-[0.521vw]  flex justify-between border-b border-b-[#E5E7EB]">
             <div className="flex items-center gap-2">
             <div>   <Checkbox onChange={e => setChecked(e.checked)} className="custombox" checked={checked}></Checkbox></div>
              <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-semibold">
              Select Device
              </div>
             </div>
             <div className="flex items-center gap-3">
             <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] pb-[6px] xl:pb-[6px] 3xl:pb-[0.313vw] text-[#374151] font-medium">
                {" "}
                Filter Position
              </div>
              <div>

              <Dropdown
                value={selectedFY}
                onChange={(e) => setSelectedFY(e.value)}
                options={FY}
                optionLabel="name"
                placeholder="03"
                className="w-full placeholder:text-[#000] customtext"
              />
              </div>
             </div>
            </div>
            <div className="py-[10px] xl:py-[10px] 3xl:py-[0.521vw]  flex justify-between border-b border-b-[#E5E7EB]">
             <div className="flex items-center gap-2">
             <div>   <Checkbox onChange={e => setChecked(e.checked)} className="custombox" checked={checked}></Checkbox></div>
              <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-semibold">
              Last Upgrade
              </div>
             </div>
             <div className="flex items-center gap-3">
             <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] pb-[6px] xl:pb-[6px] 3xl:pb-[0.313vw] text-[#374151] font-medium">
                {" "}
                Filter Position
              </div>
              <div>

              <Dropdown
                value={selectedFY}
                onChange={(e) => setSelectedFY(e.value)}
                options={FY}
                optionLabel="name"
                placeholder="04"
                className="w-full placeholder:text-[#000] customtext"
              />
              </div>
             </div>
            </div>
            <div className="py-[10px] xl:py-[10px] 3xl:py-[0.521vw]  flex justify-between border-b border-b-[#E5E7EB]">
             <div className="flex items-center gap-2">
             <div>   <Checkbox onChange={e => setChecked(e.checked)} className="custombox" checked={checked}></Checkbox></div>
              <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-semibold">
              Adjust Distance (Miles)
              </div>
             </div>
             <div className="flex items-center gap-3">
             <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] pb-[6px] xl:pb-[6px] 3xl:pb-[0.313vw] text-[#374151] font-medium">
                {" "}
                Filter Position
              </div>
              <div>

              <Dropdown
                value={selectedFY}
                onChange={(e) => setSelectedFY(e.value)}
                options={FY}
                optionLabel="name"
                placeholder="05"
                className="w-full placeholder:text-[#000] customtext"
              />
              </div>
             </div>
            </div>
            <div className="py-[10px] xl:py-[10px] 3xl:py-[0.521vw]  flex justify-between border-b border-b-[#E5E7EB]">
             <div className="flex items-center gap-2">
             <div>   <Checkbox onChange={e => setChecked(e.checked)} className="custombox" checked={checked}></Checkbox></div>
              <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-semibold">
              Budget Allocated ($K)
              </div>
             </div>
             <div className="flex items-center gap-3">
             <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] pb-[6px] xl:pb-[6px] 3xl:pb-[0.313vw] text-[#374151] font-medium">
                {" "}
                Filter Position
              </div>
              <div>

              <Dropdown
                value={selectedFY}
                onChange={(e) => setSelectedFY(e.value)}
                options={FY}
                optionLabel="name"
                placeholder="06"
                className="w-full placeholder:text-[#000] customtext"
              />
              </div>
             </div>
            </div>
            <div className="py-[10px] xl:py-[10px] 3xl:py-[0.521vw]  flex justify-between border-b border-b-[#E5E7EB]">
             <div className="flex items-center gap-2">
             <div>   <Checkbox onChange={e => setChecked(e.checked)} className="custombox" checked={checked}></Checkbox></div>
              <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-semibold">
              Filter 1
              </div>
             </div>
             <div className="flex items-center gap-3">
             <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] pb-[6px] xl:pb-[6px] 3xl:pb-[0.313vw] text-[#374151] font-medium">
                {" "}
                Filter Position
              </div>
              <div>

              <Dropdown
                value={selectedFY}
                onChange={(e) => setSelectedFY(e.value)}
                options={FY}
                optionLabel="name"
                placeholder="07"
                className="w-full placeholder:text-[#000] customtext"
              />
              </div>
             </div>
            </div>
            <div className="py-[10px] xl:py-[10px] 3xl:py-[0.521vw]  flex justify-between border-b border-b-[#E5E7EB]">
             <div className="flex items-center gap-2">
             <div>   <Checkbox onChange={e => setChecked(e.checked)} className="custombox" checked={checked}></Checkbox></div>
              <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-semibold">
              Filter 2
              </div>
             </div>
             <div className="flex items-center gap-3">
             <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] pb-[6px] xl:pb-[6px] 3xl:pb-[0.313vw] text-[#374151] font-medium">
                {" "}
                Filter Position
              </div>
              <div>

              <Dropdown
                value={selectedFY}
                onChange={(e) => setSelectedFY(e.value)}
                options={FY}
                optionLabel="name"
                placeholder="07"
                className="w-full placeholder:text-[#000] customtext"
              />
              </div>
             </div>
            </div>
            <div className="py-[10px] xl:py-[10px] 3xl:py-[0.521vw]  flex justify-between border-b border-b-[#E5E7EB]">
             <div className="flex items-center gap-2">
             <div>   <Checkbox onChange={e => setChecked(e.checked)} className="custombox" checked={checked}></Checkbox></div>
              <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-semibold">
              Filter 3
              </div>
             </div>
             <div className="flex items-center gap-3">
             <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] pb-[6px] xl:pb-[6px] 3xl:pb-[0.313vw] text-[#374151] font-medium">
                {" "}
                Filter Position
              </div>
              <div>

              <Dropdown
                value={selectedFY}
                onChange={(e) => setSelectedFY(e.value)}
                options={FY}
                optionLabel="name"
                placeholder="07"
                className="w-full placeholder:text-[#000] customtext"
              />
              </div>
             </div>
            </div>
            <div className="py-[10px] xl:py-[10px] 3xl:py-[0.521vw]  flex justify-between border-b border-b-[#E5E7EB]">
             <div className="flex items-center gap-2">
             <div>   <Checkbox onChange={e => setChecked(e.checked)} className="custombox" checked={checked}></Checkbox></div>
              <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-semibold">
              Filter 4
              </div>
             </div>
             <div className="flex items-center gap-3">
             <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] pb-[6px] xl:pb-[6px] 3xl:pb-[0.313vw] text-[#374151] font-medium">
                {" "}
                Filter Position
              </div>
              <div>

              <Dropdown
                value={selectedFY}
                onChange={(e) => setSelectedFY(e.value)}
                options={FY}
                optionLabel="name"
                placeholder="07"
                className="w-full placeholder:text-[#000] customtext"
              />
              </div>
             </div>
            </div>
            <div className="py-[10px] xl:py-[10px] 3xl:py-[0.521vw]  flex justify-between border-b border-b-[#E5E7EB]">
             <div className="flex items-center gap-2">
             <div>   <Checkbox onChange={e => setChecked(e.checked)} className="custombox" checked={checked}></Checkbox></div>
              <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-semibold">
              Filter 5
              </div>
             </div>
             <div className="flex items-center gap-3">
             <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] pb-[6px] xl:pb-[6px] 3xl:pb-[0.313vw] text-[#374151] font-medium">
                {" "}
                Filter Position
              </div>
              <div>

              <Dropdown
                value={selectedFY}
                onChange={(e) => setSelectedFY(e.value)}
                options={FY}
                optionLabel="name"
                placeholder="07"
                className="w-full placeholder:text-[#000] customtext"
              />
              </div>
             </div>
            </div>

          </div>
        {/* </ScrollPanel> */}
        <div className="absolute bottom-0 right-0 left-0">
            <div className=" bg-[#fff] p-[20px] xl:p-[20px] 3xl:p-[1.0417] flex items-center justify-end gap-4 rounded-bl-[10px]">
              <button
                href={""}

                className=" text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal border border-[#d1d1d1] rounded-[5px] 3xl:rounded-[0.26vw] py-[6px] xl:py-[6px] 3xl:py-[0.3vw] px-[20px] xl:px-[16px] 3xl:px-[1.042vw] flex items-center"
              >
                Cancel
              </button>
              <button
                href={""}
                className="bg-[#1570EF] text-[#fff] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal rounded-[5px] 3xl:rounded-[0417vw.] py-[6px] xl:py-[6px] 3xl:py-[0.3vw] px-[20px] xl:px-[16px] 3xl:px-[1.042vw] flex items-center"
              >
                Apply
              </button>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
}
