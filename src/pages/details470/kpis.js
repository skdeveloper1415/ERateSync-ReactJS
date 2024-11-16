import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ApplicationStatus from './applicationstatus';
import CertificationStatus from './certificationstatus';
import AVGalignmentScore from './avgalignmentscore'
import { Dropdown } from 'primereact/dropdown';
import ChangeKIPs from '../../components/changeKIPs/page';

export default function KPIS() {
  const [show, setShow] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: 'FY 2024-25', code: 'NY' },
    { name: 'FY 2025-26', code: 'RM' },
    { name: 'FY 2025-26', code: 'LDN' },
    { name: 'FY 2025-26', code: 'IST' },
    { name: 'FY 2025-26', code: 'PRS' }
  ];
  const [selectedCity1, setSelectedCity1] = useState(null);
  const cities1 = [
    { name: 'All', code: 'NY' },
    { name: 'County 1', code: 'RM' },
    { name: 'County 2', code: 'LDN' },
    { name: 'County 3', code: 'IST' },
    { name: 'County 4', code: 'PRS' }
  ];
  const [selectedCity2, setSelectedCity2] = useState(null);
  const cities2 = [
    { name: 'All', code: 'NY' },
    { name: 'Consortium', code: 'RM' },
    { name: 'School Districts', code: 'LDN' },
    { name: 'Schools', code: 'IST' },
  ];
  const [selectedCity3, setSelectedCity3] = useState(null);
  const cities3 = [
    { name: 'All', code: 'NY' },
    { name: 'Active', code: 'RM' },
    { name: 'Closed', code: 'LDN' },
  ];

  return (
    <>
      <div className='flex flex-wrap items-center justify-between gap-[16px] 3xl:gap-[0.833vw] border-b border-b-[#BECDE3] pb-[16px] 3xl:pb-[0.833vw]'>
        <div className='flex flex-wrap items-center gap-[16px] 3xl:gap-[0.833vw]'>
          <button className='bg-[#1570EF] text-[#fff] text-[14px] 3xl:text-[0.729vw] leading-none font-medium p-[12px] 3xl:p-[0.625vw] flex items-center gap-[8px] 3xl:gap-[0.417vw] rounded-[8px] 3xl:rounded-[0.417vw]'>
            <i className='esspd-filter2'></i>
            <div className=' '>
              <div className='mb-1'>
                Select
              </div>
              <div>
                Filters
              </div>
            </div>
          </button>
          <div className='bg-[#fff] rounded-[8px] 3xl:rounded-[0.417vw] py-[8px] 3xl:py-[0.417vw] '>
            <div className='text-[#828A91] text-[12px] 3xl:text-[0.625vw] leading-none px-[12px] 3xl:px-[0.625vw]'>
              Select FY
            </div>
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="Select Year"
              className="w-full filterDropdown mt-1"
            />
          </div>
          <div className='bg-[#fff] rounded-[8px] 3xl:rounded-[0.417vw] py-[8px] 3xl:py-[0.417vw] '>
            <div className='text-[#828A91] text-[12px] 3xl:text-[0.625vw] leading-none px-[12px] 3xl:px-[0.625vw]'>
              County
            </div>
            <Dropdown
              value={selectedCity1}
              onChange={(e) => setSelectedCity1(e.value)}
              options={cities1}
              optionLabel="name"
              placeholder="All"
              className="w-full filterDropdown mt-1"
            />
          </div>
          <div className='bg-[#fff] rounded-[8px] 3xl:rounded-[0.417vw] py-[8px] 3xl:py-[0.417vw] '>
            <div className='text-[#828A91] text-[12px] 3xl:text-[0.625vw] leading-none px-[12px] 3xl:px-[0.625vw]'>
              Device/Service
            </div>
            <Dropdown
              value={selectedCity2}
              onChange={(e) => setSelectedCity2(e.value)}
              options={cities2}
              optionLabel="name"
              placeholder="All"
              className="w-full filterDropdown mt-1"
            />
          </div>
          <div className='bg-[#fff] rounded-[8px] 3xl:rounded-[0.417vw] py-[8px] 3xl:py-[0.417vw] '>
            <div className='text-[#828A91] text-[12px] 3xl:text-[0.625vw] leading-none px-[12px] 3xl:px-[0.625vw]'>
              Last Upgrade
            </div>
            <Dropdown
              value={selectedCity3}
              onChange={(e) => setSelectedCity3(e.value)}
              options={cities3}
              optionLabel="name"
              placeholder="All"
              className="w-full filterDropdown mt-1"
            />
          </div>
          <div className='bg-[#fff] rounded-[8px] 3xl:rounded-[0.417vw] py-[8px] 3xl:py-[0.417vw] '>
            <div className='text-[#828A91] text-[12px] 3xl:text-[0.625vw] leading-none px-[12px] 3xl:px-[0.625vw]'>
              Distance
            </div>
            <Dropdown
              value={selectedCity3}
              onChange={(e) => setSelectedCity3(e.value)}
              options={cities3}
              optionLabel="name"
              placeholder="All"
              className="w-full filterDropdown mt-1"
            />
          </div>
          <div className='bg-[#fff] rounded-[8px] 3xl:rounded-[0.417vw] py-[8px] 3xl:py-[0.417vw] '>
            <div className='text-[#828A91] text-[12px] 3xl:text-[0.625vw] leading-none px-[12px] 3xl:px-[0.625vw]'>
              Amoung Requested
            </div>
            <Dropdown
              value={selectedCity3}
              onChange={(e) => setSelectedCity3(e.value)}
              options={cities3}
              optionLabel="name"
              placeholder="All"
              className="w-full filterDropdown mt-1"
            />
          </div>
          <div className='bg-[#fff] rounded-[8px] 3xl:rounded-[0.417vw] py-[8px] 3xl:py-[0.417vw] '>
            <div className='text-[#828A91] text-[12px] 3xl:text-[0.625vw] leading-none px-[12px] 3xl:px-[0.625vw]'>
              Spend %
            </div>
            <Dropdown
              value={selectedCity3}
              onChange={(e) => setSelectedCity3(e.value)}
              options={cities3}
              optionLabel="name"
              placeholder="All"
              className="w-full filterDropdown mt-1"
            />
          </div>
          <div className='bg-[#fff] rounded-[8px] 3xl:rounded-[0.417vw] py-[8px] 3xl:py-[0.417vw] '>
            <div className='text-[#828A91] text-[12px] 3xl:text-[0.625vw] leading-none px-[12px] 3xl:px-[0.625vw]'>
              Action Status
            </div>
            <Dropdown
              value={selectedCity3}
              onChange={(e) => setSelectedCity3(e.value)}
              options={cities3}
              optionLabel="name"
              placeholder="All"
              className="w-full filterDropdown mt-1"
            />
          </div>
        </div>

      </div>
      <div className='2xl:space-y-[0.833vw] space-y-[14px] mt-[22px] 3xl:mt-[1.25vw] bg-[#FFF] rounded-[16px] 3xl:rounded-[0.833vw]'>
        <div className='flex items-center justify-between px-[16px] 3xl:px-[0.833vw] pt-[16px] 3xl:pt-[0.833vw]'>
          <div className='text-[#19212A] 2xl:text-[1.25vw] text-xl font-semibold 2xl:leading-[1.25vw] leading-6'><p>KPIs</p></div>
          <div onClick={() => {setShow(true)}} className=''><Link to={''} className='bg-[#DBE1EA] 2xl:py-[0.417vw] py-2 2xl:px-[0.833vw] px-3.5 2xl:rounded-[0.417vw] rounded-lg text-[#2C363F] 2xl:text-[0.729vw] text-xs font-semibold 2xl:leading-[1.094vw] leading-5'><span className='opacity-80'>Change KPIs</span></Link></div>
        </div>
        <div className='grid xl:grid-cols-3 2xl:gap-[1.25vw] gap-5'>
          {/*col*/}
          <ApplicationStatus />
          {/*col*/}
          <CertificationStatus />
          {/*col*/}
          <AVGalignmentScore />
        </div>
      </div>
      <ChangeKIPs
       visible={show}
       onHide={() => setShow(false)}
      />
    </>
  )
}
