import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import info from '../../../../src/assets/images/info.svg'
import Notification from '../../../../src/assets/images/notification.svg'
import Profile from '../../../../src/assets/images/left-menu-icons/user.png'

export default function TopNav({ pageTitle, pageSubTitle, tabShow, tabName, activeTab, setActiveTab }) {

  const mobover = useRef(null);

  return (
    <div>
      <div className="w-full text-gray-700 bg-white fixed top-0 z-[9999] py-[20px] xl:py-[1.042vw] pl-[130px] pr-[32px] xl:pr-[1.667vw] shadow1">
        <div className="flex items-center justify-between" data-aos="fade-down" data-aos-duration="800">
          <div className="col space-y-[4px]">
            <div className="flex space-x-[8px] items-center">
              <div className="text-[#9CA1AB] text-[12px] 3xl:text-[0.729vw] leading-none">
                Home
              </div>
              <i className="esspd-arrow-open-right text-[8px] text-[#9CA1AB]"></i>
              <div className="text-[#374151] text-[12px] 3xl:text-[0.729vw] leading-none">
                {pageSubTitle}
              </div>
            </div>
            <div className="text-[#374151] text-[24px] 3xl:text-[1.25vw] font-semibold leading-[1.2]">
              {pageTitle}
            </div>
          </div>

          {tabShow &&
            <div className="bg-[#F5F6F7] px-[8px] 3xl:px-[0.417vw] py-[12px] 3xl:py-[0.625vw] rounded-[12px] 3xl:rounded-[0.625vw]">
              <div className="flex flex-wrap items-center gap-2">
                {tabName.map((items, index) => {
                  return <button key={index} onClick={() => setActiveTab(index)} className={`${activeTab === index ? 'text-[#FFFFFF] bg-[#1F2A37]' : 'text-[#19212A]'} text-[14px] xl:text-[14px] 3xl:text-[0.833vw] rounded-[8px] 3xl:rounded-[0.417vw] py-[8px] 3xl:py-[0.417vw] px-[20px] 3xl:px-[1.042vw] leading-none`}>
                    {items}
                  </button>
                })}
              </div>
            </div>

          }

          <div className="col flex gap-[24px] 3xl:gap-[1.25vw] items-center">
            <div className="space-x-[44px] xl:space-x-[2.292vw] flex items-center mx-[20px] 3xl:mx-[1.25vw]">
              <Link to="" className="inline-block">
                <img src={info} alt="" />
              </Link>
              <Link to="" className="inline-block relative" onClick={(e) => mobover.current.toggle(e)}>
                <img src={Notification} alt="" />
                <div className="absolute top-[-20px] right-[-5px]">
                  <i className="pi pi-circle-fill" style={{ fontSize: 4, color: '#D92D20' }}></i></div>
              </Link>
            </div>
            <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
              <div>
                <div className="text-[#2C363F] text-[16px] 3xl:text-[0.833vw] font-semibold">
                Jese Leos
                </div>
                <div className="text-[#828A91] text-[14px] 3xl:text-[0.729vw] font-semibold">
                Admin
                </div>

              </div>
              <div className="userPic relative">
                <img
                  src={Profile}
                  width={"48"}
                  height={"48"}
                  alt=""
                />
              </div>
              <div className="">
                <i className="esspd-arrow-circle-down text-[#828A91] text-[24px] 3xl:text-[1.25vw]"></i>
              </div>
            </div>
          </div>

        </div>
      </div>



    </div>
  );
}