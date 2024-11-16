import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Slider } from "primereact/slider";
import { ScrollPanel } from 'primereact/scrollpanel';

export default function Snapshotfilter() {
    const [value, setValue] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
  return (
    <>
    <ScrollPanel className="w-[287px] h-[300px]">
    <div className='bg-[#fff] w-[287px] h-[900px] rounded-[8px]'>
      <div className='py-[8px] 3xl:py-[0.417vw] px-[16px] 3xl:px-[0.833vw] text-[#19212A] text-[16px] 3xl:text-[0.833vw] flex gap-[16px] items-center justify-between border-b border-[#BECDE3] rounded-t-[8px]'>
        <div>Filters</div>
        <i className='esspd-filter'></i>
      </div>
      <div className='mt-[8px] 3xl:mt-[0.417vw] px-[28px] 3xl:px-[1.458vw] py-[12px] 3xl:py-[0.625vw] space-y-[16px]'>
        <div>
            <div className='text-[#374151] text-[14px] 3xl:text-[0.729vw] font-medium'>Select Funding Period</div>
           <div className='mt-[8px] 3xl:mt-[0.417vw] custdrop'>
           <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="01"
                className="w-full placeholder:text-[#000]"
              />
           </div>
        </div>

        <div>
            <div className='text-[#374151] text-[14px] 3xl:text-[0.729vw] font-medium'>Select Financial Year</div>
           <div className='mt-[8px] 3xl:mt-[0.417vw] custdrop'>
           <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="01"
                className="w-full placeholder:text-[#000]"
              />
           </div>
        </div>

        <div>
            <div className='text-[#374151] text-[14px] 3xl:text-[0.729vw] font-medium'>Select County</div>
           <div className='mt-[8px] 3xl:mt-[0.417vw] custdrop'>
           <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="01"
                className="w-full placeholder:text-[#000]"
              />
           </div>
        </div>

        <div>
            <div className='text-[#374151] text-[14px] 3xl:text-[0.729vw] font-medium'>Equipment Type</div>
           <div className='mt-[8px] 3xl:mt-[0.417vw] custdrop'>
           <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="01"
                className="w-full placeholder:text-[#000]"
              />
           </div>
        </div>

        <div>
            <div className='text-[#374151] text-[14px] 3xl:text-[0.729vw] font-medium'>Last Upgrade</div>
           <div className='mt-[8px] 3xl:mt-[0.417vw] custdrop'>
           <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="01"
                className="w-full placeholder:text-[#000]"
              />
           </div>
        </div>

        <div>
            <div className='text-[#374151] text-[14px] 3xl:text-[0.729vw] font-medium'>Adjust Distance (Miles)</div>
          <div className="mt-[8px] 3xl:mt-[0.417vw]">
          <div className=' custdrop p-[8px] border border-[#BECDE3] rounded-[8px]'>
            <div className="flex justify-evenly items-center text-[#2C363F] text-[18px] xl:text-[0.833vw] ">
                <div>0M</div>
                <div>25M</div>
                <div>250M</div>
            </div>
           <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem mt-[8px]" />
           </div>
          </div>
        </div>
      </div>
    </div>
    </ScrollPanel>
    </>
  )
}
