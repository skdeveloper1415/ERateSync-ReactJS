import React, { useState } from "react";
import Logo from '../../../src/assets/images/mainlogo.svg'
import LoginImg from '../../../src/assets/images/login_bg.png'
import google from '../../../src/assets/images/google.svg'
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Checkbox } from "primereact/checkbox";

export default function Login({ }) {

  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  return <>
    <div className="relative h-full">
      {/* header start */}
      <div className="">
      <div className="bg-[#F0F2F6] border-b border-b-[#BECDE3] px-[117px] 3xl:px-[6.094vw] py-[14px] 3xl:py-[0.833vw]">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <img src={Logo} alt="logo icon" className="w-[199px] 3xl:w-[10.365vw] h-[40px] 3xl:h-[2.552vw]" />
          <div className="flex items-center gap-[40px] 3xl:gap-[2.083vw] text-[#1570EF] text-[16px] xl:text-[16px] 3xl:text-[0.938vw] font-normal leading-[28px] 3xl:leading-[1.458vw]">
            <Link to=''>
              Why ErateSync?
            </Link>
            <Link to=''>
              Plans
            </Link>
            <Link to=''>
              FAQs
            </Link>
            <Link to=''>
              About
            </Link>
            <Link to=''>
              Blog
            </Link>
          </div>
          <div>
            <button className="text-[#FFFFFF] bg-[#1F2A37] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-semibold rounded-[8px] 3xl:rounded-[0.417vw] py-[8px] 3xl:py-[0.450vw] px-[16px] 3xl:px-[0.833vw]">
              Request a Demo
            </button>
          </div>
        </div>
      </div>
      </div>
      {/* header end */}

      <div className="grid grid-cols-2 place-content-center gap-2 py-[40px] 2xl:py-[2.15vw] 3xl:py-[3.15vw] h-full">
        <div className="flex items-center justify-center 3xl:pl-[12vw]">
          <div className="space-y-[26px] 3xl:space-y-[1.354vw] w-full lg:w-[450px] 2xl:w-[28.781vw] 3xl:w-[25.781vw]">
            <div className="text-[#19212A] text-[22px] xl:text-[22px] 3xl:text-[1.25vw] font-semibold leading-[26px] 3xl:leading-[1.458vw">
              Please sign into your account
            </div>
            <div className="space-y-[16px] 3xl:space-y-[0.833vw]">
              <div>
                <div className="text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-medium leading-[20px] 3xl:leading-[1.042vw] mb-[8px] 3xl:mb-[0.417vw]">
                  Email
                </div>
                <InputText
                  value={value}
                  placeholder="Enter Email"
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full loginInput"
                />
              </div>
              <div>
                <div className="text-[14px] 3xl:text-[0.729vw] text-[#19212A] font-medium leading-[20px] 3xl:leading-[1.042vw] mb-[8px] 3xl:mb-[0.417vw]">
                  Password
                </div>
                <Password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  toggleMask
                  feedback={false}
                  className="w-full loginPassword"
                  placeholder="Enter Password"
                />
                <div className="flex items-center justify-between mt-[8px] 3xl:mt-[0.417vw]">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      onChange={e => setChecked(e.checked)}
                      checked={checked}
                      className="loginCheckBox"
                    />
                    <div className="text-[12px] 3xl:text-[0.625vw] text-[#2C363F] font-medium leading-[14px] 3xl:leading-[0.729vw]">Remember Me</div>
                  </div>
                  <button className="text-[12px] 3xl:text-[0.625vw] text-[#801B40] font-medium leading-[14px] 3xl:leading-[0.729vw]">Forgot Password?</button>
                </div>
              </div>
            </div>
            <div className="space-y-[16px] 3xl:space-y-[0.833vw]">
              <Link
                to={'/snapshotview'}
                className={`bg-[#1F2A37] text-[#FFF] w-full text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal flex justify-center py-[8px] rounded-lg my-[22px] xl:my-[22px] 3xl:my-[1.146vw]`}
              >
                Login
              </Link>

              <div className="flex items-center justify-center gap-[18px]">
                <div className="flex items-center bg-[#BECDE3] h-[1px] w-[20%]"></div>
                <div className="text-[#828A91] text-[14px] 3xl:text-[0.729vw] flex justify-center items-center "> Or Sign in with Google </div>
                <div className="flex items-center bg-[#BECDE3] h-[1px] w-[20%]"></div>
              </div>

              <div className="flex flex-cols items-center gap-[12px] bg-[#FFF] xl:gap-[12px] 3xl:gap-[0.625vw] border border-[#BECDE3] justify-center py-[8px] xl:py-[8px] 3xl:py-[0.417vw] rounded-lg mt-[25px] xl:mt-[25px] 3xl:mt-[1.302vw] cursor-pointer">
                <img src={google} alt="Google" className="w-[24px] h-[24px]" />
                <div className="text-[16px] xl:text-[16px] 3xl:text-[0.833vw] text-[#2C363F] font-semibold cursor-pointer">
                  Sign in with Google
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="xl:pl-[80px] 2xl:pl-[4.167vw] 3xl:pl-[7.167vw]">
            <div className="relative">
              <img src={LoginImg} alt="login" className="w-full xl:h-[510px] 3xl:h-[33.24vw] rounded-l-[24px] 3xl:rounded-l-[1.25vw] object-cover" />
              <div className="absolute bottom-[43px] 3xl:bottom-[2.24vw] right-[30px] 3xl:right-[1.979vw] left-[30px] 3xl:left-[1.979vw]">
                <div className="text-[#FFF] text-[16px] xl:text-[18px] 3xl:text-[1.042vw] leading-[170%] text-center">
              Unlock the full potential of your E-Rate sales team with this intuitive portal, designed to streamline planning and execution. With real-time dashboards, you'll have the insights needed to target opportunities, track performance, and accelerate growth efficiently. Drive your E-Rate success with data-driven precision.

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer start */}
      <div className="2xl:fixed bottom-0 left-0 right-0">
        <div className="bg-[#1F2A37] border-b border-b-[#BECDE3] px-[117px] 3xl:px-[6.094vw] py-[14px] 3xl:py-[0.729vw]">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center text-[#FFF] text-[16px] xl:text-[16px] 3xl:text-[0.938vw] font-normal leading-[28px] 3xl:leading-[1.458vw]">
              <Link to='' className="pr-[24px] 3xl:pr-[1.25vw]">
                Privacy policy
              </Link>
              <Link to='' className="border-l border-l-[#BECDE3] px-[24px] 3xl:px-[1.25vw]">
                Terms of use
              </Link>
            </div>
            <div>
              <button className="text-[#FFFFFF] bg-[rgba(255,255,255,0.10)] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-semibold rounded-[8px] 3xl:rounded-[0.417vw] py-[8px] 3xl:py-[0.450vw] px-[34px] 3xl:px-[1.771vw]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer end */}
    </div>
  </>;
}
