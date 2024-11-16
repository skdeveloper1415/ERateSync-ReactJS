import React, { useState } from "react";
import { Divider } from 'primereact/divider';

export default function SnapshotFooter() {
  const [checked, setChecked] = useState(false);

  return (
      <div className=" w-full flex justify-between bg-white p-[16px] 3xl:p-[0.833vw] gap-[10px] 3xl:gap-[0.833vw]">
        <div className="flex justify-between items-center py-[8px] 3xl:py-[8px] pl-[16px] 3xl:pl-[0.833vw] text-[#363A44] text-[14px] 3xl:text-[0.729vw] font-semibold">
         <div>
         <i className="esspd-filter flex justify-end text-[##828A91]"></i>
         <div className="flex justify-end ">Your <br/>KPIs</div>
         </div>
        </div>

        <div className="border border-[#E5E7EB] rounded-[8px]">
          <div className="py-[8px] 3xl:py-[0.417vw] px-[16px] 3xl:px-[0.833vw] text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-semibold">Forms 470 Status</div>
          <div className="flex px-[8px] 3xl:px-[8px] border-t border-[#E5E7EB] mb-[12px] 3xl:mb-[0.625vw]">
            <div className="">
              <div className="text-[#2C363F] text-[13px] 3xl:text-[0.729vw] font-semibold ">Certified</div>
              <div className="mt-[8px] 3xl:mt-[0.417vw] ">
                <div className="gap-[8px] flex items-center">
                  <div className="text-[#2C363F] text-[18px] 3xl:text-[1.042vw] font-semibold">100</div>
                  <div className="flex gap-[4px] items-center 3xl:gap-[0.208vw] text-[#046C4E] text-[14px] 3xl:text-[0.729vw] font-normal">
                    <i className="esspd-arrow-line-up "></i>
                    <div>5%</div>
                  </div>
                </div>
                
              </div>
            </div>
            <Divider layout="vertical" />
            <div>
              <div className="text-[#2C363F] text-[13px] 3xl:text-[0.729vw] font-semibold">In Progress</div>
              <div className="mt-[8px] 3xl:mt-[0.417vw]">
                <div className="gap-[8px] flex items-center">
                  <div className="text-[#2C363F] text-[18px] 3xl:text-[1.042vw] font-semibold">40</div>
                  <div className="flex gap-[4px] items-center 3xl:gap-[0.208vw] text-[#046C4E] text-[14px] 3xl:text-[0.729vw] font-normal">
                    <i className="esspd-arrow-line-up "></i>
                    <div>5%</div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[#E5E7EB] rounded-[8px]">
          <div className="py-[8px] 3xl:py-[0.417vw] px-[16px] 3xl:px-[0.833vw] text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-semibold">Certified Forms 470 </div>
          <div className="flex px-[8px] 3xl:px-[8px] border-t border-[#E5E7EB] mb-[12px] 3xl:mb-[0.625vw]">
            <div className="">
              <div className="text-[#2C363F] text-[13px] 3xl:text-[0.729vw] font-semibold ">Consortium</div>
              <div className="mt-[8px] 3xl:mt-[0.417vw] ">
                <div className="gap-[8px] flex items-center">
                  <div className="text-[#2C363F] text-[18px] 3xl:text-[1.042vw] font-semibold">50</div>
                  <div className="flex gap-[4px] items-center 3xl:gap-[0.208vw] text-[#046C4E] text-[14px] 3xl:text-[0.729vw] font-normal">
                    <i className="esspd-arrow-line-up "></i>
                    <div>5%</div>
                  </div>
                </div>
                
              </div>
            </div>
            <Divider layout="vertical" />
            <div>
              <div className="text-[#2C363F] text-[13px] xl:text-[10px] 2xl:text-[13px] 3xl:text-[0.729vw] font-semibold">School Districts</div>
              <div className="mt-[8px] 3xl:mt-[0.417vw]">
                <div className="gap-[8px] flex items-center">
                  <div className="text-[#2C363F] text-[18px] 3xl:text-[1.042vw] font-semibold">40</div>
                  <div className="flex gap-[4px] items-center 3xl:gap-[0.208vw] text-[#046C4E] text-[14px] 3xl:text-[0.729vw] font-normal">
                    <i className="esspd-arrow-line-up "></i>
                    <div>5%</div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[#E5E7EB] rounded-[8px]">
          <div className="py-[8px] 3xl:py-[0.417vw] px-[16px] 3xl:px-[0.833vw] text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-semibold">486 Status</div>
          <div className="flex px-[8px] 3xl:px-[8px] border-t border-[#E5E7EB] mb-[12px] 3xl:mb-[0.625vw]">
            <div className="">
              <div className="text-[#2C363F] text-[13px] 3xl:text-[0.729vw] font-semibold ">Released</div>
              <div className="mt-[8px] 3xl:mt-[0.417vw] ">
                <div className="gap-[8px] flex items-center">
                  <div className="text-[#2C363F] text-[18px] 3xl:text-[1.042vw] font-semibold">60</div>
                  <div className="flex gap-[4px] items-center 3xl:gap-[0.208vw] text-[#046C4E] text-[14px] 3xl:text-[0.729vw] font-normal">
                    <i className="esspd-arrow-line-up "></i>
                    <div>5%</div>
                  </div>
                </div>
                
              </div>
            </div>
            <Divider layout="vertical" />
            <div>
              <div className="text-[#2C363F] text-[13px] 3xl:text-[0.729vw] font-semibold">In Progress</div>
              <div className="mt-[8px] 3xl:mt-[0.417vw]">
                <div className="gap-[8px] flex items-center">
                  <div className="text-[#2C363F] text-[18px] 3xl:text-[1.042vw] font-semibold">40</div>
                  <div className="flex gap-[4px] items-center 3xl:gap-[0.208vw] text-[#046C4E] text-[14px] 3xl:text-[0.729vw] font-normal">
                    <i className="esspd-arrow-line-up "></i>
                    <div>5%</div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[#E5E7EB] rounded-[8px]">
          <div className="py-[8px] 3xl:py-[0.417vw] px-[16px] 3xl:px-[0.833vw] text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-semibold">Value/Entity</div>
          <div className="flex px-[8px] 3xl:px-[8px] border-t border-[#E5E7EB] mb-[12px] 3xl:mb-[0.625vw]">
            <div className="">
              <div className="text-[#2C363F] text-[13px] 3xl:text-[0.729vw] font-semibold ">Highest</div>
              <div className="mt-[8px] 3xl:mt-[0.417vw] ">
                <div className="gap-[8px] flex items-center">
                  <div className="text-[#2C363F] text-[18px] 3xl:text-[1.042vw] font-semibold">$100K</div>
                  <div className="flex gap-[4px] items-center 3xl:gap-[0.208vw] text-[#046C4E] text-[14px] 3xl:text-[0.729vw] font-normal">
                    <i className="esspd-arrow-line-up "></i>
                    <div>5%</div>
                  </div>
                </div>
                
              </div>
            </div>
            <Divider layout="vertical" />
            <div>
              <div className="text-[#2C363F] text-[13px] 3xl:text-[0.729vw] font-semibold">Average</div>
              <div className="mt-[8px] 3xl:mt-[0.417vw]">
                <div className="gap-[8px] flex items-center">
                  <div className="text-[#2C363F] text-[18px] 3xl:text-[1.042vw] font-semibold">$15K</div>
                  <div className="flex gap-[4px] items-center 3xl:gap-[0.208vw] text-[#046C4E] text-[14px] 3xl:text-[0.729vw] font-normal">
                    <i className="esspd-arrow-line-up "></i>
                    <div>5%</div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[#E5E7EB] rounded-[8px]">
          <div className="py-[8px] 3xl:py-[0.417vw] px-[16px] 3xl:px-[0.833vw] text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-semibold">Alignment Score</div>
          <div className="flex px-[8px] 3xl:px-[8px] border-t border-[#E5E7EB] mb-[12px] 3xl:mb-[0.625vw]">
            <div className="">
              <div className="text-[#2C363F] text-[13px] 3xl:text-[0.729vw] font-semibold ">Consortium</div>
              <div className="mt-[8px] 3xl:mt-[0.417vw] ">
                <div className="gap-[8px] flex items-center">
                  <div className="text-[#2C363F] text-[18px] 3xl:text-[1.042vw] font-semibold">30</div>
                  <div className="flex gap-[4px] items-center 3xl:gap-[0.208vw] text-[#046C4E] text-[14px] 3xl:text-[0.729vw] font-normal">
                    <i className="esspd-arrow-line-up "></i>
                    <div>5%</div>
                  </div>
                </div>
                
              </div>
            </div>
            <Divider layout="vertical" />
            <div>
              <div className="text-[#2C363F] text-[13px] 3xl:text-[0.729vw] font-semibold">School Districts</div>
              <div className="mt-[8px] 3xl:mt-[0.417vw]">
                <div className="gap-[8px] flex items-center">
                  <div className="text-[#2C363F] text-[18px] 3xl:text-[1.042vw] font-semibold">20</div>
                  <div className="flex gap-[4px] items-center 3xl:gap-[0.208vw] text-[#046C4E] text-[14px] 3xl:text-[0.729vw] font-normal">
                    <i className="esspd-arrow-line-up "></i>
                    <div>5%</div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center p-[14px] 3xl:p-[0.833vw] bg-[#DBE1EA] rounded-[8px] text-[#2C363F] text-[16px] xl:text-[0.729vw] font-semibold">
        Change<br/>KPIs
        </div>
      </div>

  )
}
