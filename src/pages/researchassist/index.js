import React, { useState } from "react";
import AIAssistant from '../../assets/images/ai-assistant.png';
import UserChat from '../../assets/images/user-ai.png';
import Layout from "../../components/common/layout/layout";
import { Link } from 'react-router-dom';
import { Tooltip } from 'primereact/tooltip';
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { ScrollPanel } from 'primereact/scrollpanel';
import { Dialog } from 'primereact/dialog';

export default function ResearchAssist() {
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);
  return (
    <Layout pageTitle="Research Assist" pageSubTitle="Current Page">
    <div className='bg-white border border-[#E5E7EB] rounded-lg 2xl:rounded-[0.417vw]'>
    <div className='flex items-center justify-between 2xl:pt-[0.885vw] pt-4 2xl:pl-[1.875vw] pl-8 2xl:pr-[2.24vw] pr-5 lg:pr-[33px]'>
        <div className='bg-[#F5F6F7] text-[#2C363F] 2xl:p-[0.417vw] p-1.5 2xl:text-[0.833vw] text-sm font-normal 2xl:leading-[1.198vw] leading-[23px]'>Friday  Aug 02, 2024</div>

        <div className='flex items-center 2xl:gap-[0.781vw] gap-3.5'>
            <div className='2xl:w-[2.083vw] w-8 2xl:h-[2.083vw] h-8 flex items-center justify-center rounded-full bg-[#DAEEFF] text-[#162B55] 2xl:text-[1.042vw] text-base cursor-pointer'><i className='esspd-doc-upload'></i></div>
            <div className='2xl:w-[2.083vw] w-8 2xl:h-[2.083vw] h-8 flex items-center justify-center rounded-full bg-[#DAEEFF] text-[#162B55] 2xl:text-[1.042vw] text-base cursor-pointer'  onClick={() => setVisible(true)}><i className='esspd-info'></i></div>
        </div>
    </div>

    <div className='2xl:mt-[2.344vw] mt-8 2xl:pl-[2.292vw] pl-5 lg:pl-8 2xl:pr-[2.24vw] pr-5 lg:pr-[33px]'>
    <ScrollPanel style={{ width: '100%' }} className="2xl:h-[27.083vw] h-[200px] xl:h-[350px]">
        <div className='2xl:space-y-[0.938vw] space-y-[16px]'>
            {/*left*/}
            <div className='flex 2xl:gap-[1.042vw] gap-5'>
                <div className='flex flex-col items-center'>
                    <img src={AIAssistant} width={56} height={56} alt='' className='rounded-full' />
                    <div className='text-[#2C363F] 2xl:text-[0.729vw] text-xs font-semibold leading-normal'>AI Assistant</div>
                </div>
                <div className='2xl:px-[1.25vw] px-5 2xl:py-[1.771vw] py-8 bg-[#F5F6F7] border border-[#E5E7EB] 2xl:rounded-[0.417vw] rounded-lg relative'>
                    <div className='text-[#2C363F] 2xl:text-[0.833vw] text-sm font-normal leading-6 2xl:leading-[0.833vw]'><p>Welcome to Research Assist, Please type your Query beow or use info hub </p></div>
                    <div className='text-[#2C363F] 2xl:text-[0.729vw] text-xs font-normal leading-4 2xl:leading-[0.833vw] absolute 2xl:right-[0.833vw] 2xl:bottom-[0.365vw]'><span>01:23 AM</span></div>
                </div>
            </div>
            {/*right*/}
            <div className='flex justify-end 2xl:gap-[1.042vw] gap-5'>
                <div className='2xl:px-[1.25vw] px-5 2xl:py-[1.771vw] py-8 bg-white border border-[#E5E7EB] 2xl:rounded-[0.417vw] rounded-lg relative'>
                    <div className='text-[#2C363F] 2xl:text-[0.833vw] text-sm font-normal leading-6 2xl:leading-[0.833vw]'><p>Can you show me the <b>discount trend</b> for <b>BEN #135792468</b> over the last 5 <b>funding periods?</b></p></div>
                    <div className='text-[#2C363F] 2xl:text-[0.729vw] text-xs font-normal leading-4 2xl:leading-[0.833vw] absolute 2xl:right-[0.833vw] 2xl:bottom-[0.365vw]'><span>01:23 AM</span></div>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={UserChat} width={56} height={56} alt='' className='rounded-full' />
                    <div className='text-[#2C363F] 2xl:text-[0.729vw] text-xs font-semibold leading-normal'>You</div>
                </div>
            </div>
            {/*left*/}
            <div className='flex 2xl:gap-[1.042vw] gap-5'>
                <div className='flex flex-col items-center'>
                    <img src={AIAssistant} width={56} height={56} alt='' className='rounded-full' />
                    <div className='text-[#2C363F] 2xl:text-[0.729vw] text-xs font-semibold leading-normal whitespace-nowrap'>AI Assistant</div>
                </div>
                <div className='2xl:px-[1.25vw] px-5 2xl:py-[1.771vw] py-8 bg-[#F5F6F7] border border-[#E5E7EB] 2xl:rounded-[0.417vw] rounded-lg relative'>
                    <div className='flex justify-between 2xl:gap-[2.083vw] gap-5'>
                        <div>
                        <div className='text-[#2C363F] 2xl:text-[0.833vw] text-sm font-normal leading-6 2xl:leading-[0.833vw] 2xl:space-y-[0.833vw] space-y-[14px]'>
                        <p>Here is the discount percentage trend for <b>BEN #135792468</b> over the last  five years: </p>
                        <p><b>FP 2008-2012:</b>  85%</p>
                        <p><b>FP 2012-16:</b>  90%</p>
                        <p><b>FP 2016-20:</b> 80%</p>
                        <p><b>FP 2020-24:</b>  85%</p>
                        <p><b>FP 2024-28:</b>  88%</p>
                        <p>Were <b>FP</b> is <b>Funding Period</b> </p>
                        </div>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div><Checkbox onChange={e => setChecked(e.checked)} checked className='custm_checkbox'></Checkbox></div>
                            <div><Link to={'/workbookmanu'} id="homeLink" className='2xl:w-[2.083vw] w-8 2xl:h-[2.083vw] h-8 flex items-center justify-center rounded-full bg-[#DAEEFF] text-[#162B55] 2xl:text-[1.042vw] text-base cursor-pointer' data-pr-tooltip="Push to work book"><i className='esspd-send'></i></Link>
                            <Tooltip target="#homeLink" className="custom-tooltip" position="bottom" showDelay={200} hideDelay={200} /></div>
                        </div>
                    </div>
                    
                    <div className='text-[#2C363F] 2xl:text-[0.729vw] text-xs font-normal leading-4 2xl:leading-[0.833vw] absolute 2xl:right-[0.833vw] 2xl:bottom-[0.365vw]'><span>01:23 AM</span></div>
                </div>
            </div>
        </div>
    </ScrollPanel>

    <div className="flex items-center 2xl:gap-[0.833vw] gap-3.5 2xl:py-[1.25vw] py-5">
    <div className="w-full relative">
        <div className="text-[#2C363F] 2xl:text-[1.563vw] text-[28px] absolute 2xl:left-[1.458vw] left-6 top-[50%] translate-y-[-50%]"><i className="esspd-search2"></i></div>
        <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder="Describe the Issue here..." className="w-full 2xl:h-[4.167vw] h-16 custm_inputtext text-[#828A91] placeholder:text-[#828A91] 2xl:text-[0.833vw] text-sm font-normal leading-5 2xl:leading-[1.042vw]" />
        <div className="text-[#2C363F] 2xl:text-[1.563vw] text-[28px] absolute 2xl:right-[1.458vw] right-6 top-[50%] translate-y-[-50%]"><i className="esspd-mic"></i></div>
    </div>
    <Link to={''} className="2xl:text-[1.563vw] text-3xl 2xl:w-[4.167vw] w-16 2xl:h-[4.167vw] h-16 flex items-center justify-center 2xl:rounded-[0.417vw] rounded-lg bg-[#768FB5] text-[#EEEEF0]"><i className="esspd-send"></i></Link>
    </div>
    </div>

    
    </div>

    <Dialog header="Header" visible={visible} showHeader={false} className="quickquestions" style={{ width: '70vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
        <div className="2xl:p-[1.25vw] p-5 2xl:space-y-[1.25vw] space-y-[22px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center 2xl:gap-[0.833vw] gap-3.5">
                        <div className="text-[#19212A] 2xl:text-[1.042vw] font-semibold text-lg 2xl:leading-[1.458vw] leading-7">Quick Questions for </div>
                        <div className="bg-[#F6F7F8] border border-[#E5E7EB] 2xl:rounded-[0.417vw] rounded-lg 2xl:py-[0.417vw] py-2 2xl:px-[0.729vw] px-3.5 text-[#2C363F] 2xl:text-[0.833vw] text-sm font-normal leading-5 2xl:leading-[1.042vw] flex items-center 2xl:gap-[0.417vw] gap-1.5"><span>BEN #135792468</span> <i className="esspd-edit-pen text-[#828A91]"></i></div>
                    </div>
                    <div onClick={() => setVisible(false)} className="text-[#2C363F] 2xl:text-[1.25vw] text-xl cursor-pointer"><i className="esspd-circle-pluse"></i></div>
                </div>

                <div className="2xl:w-[20.781vw] relative">
                <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search for an Question" className="w-full 2xl:h-[2.083vw] h-[38px] custm_input_menual text-[#828A91] placeholder:text-[#828A91] 2xl:text-[0.729vw] text-xs font-normal leading-5 2xl:leading-[1.042vw]" />
                <div className="text-[#2C363F] 2xl:text-[0.833vw] text-[14px] absolute 2xl:right-[0.833vw] right-[10px] top-[50%] translate-y-[-50%]"><i className="esspd-search2"></i></div>
                </div>

                <div className="bg-white border border-[#E5E7EB] 2xl:rounded-[0.417vw] rounded-lg 2xl:py-[0.417vw] py-1.5 2xl:px-[1.25vw] px-5">
                <ScrollPanel style={{ width: '100%' }} className="2xl:h-[20.833vw] h-[150px] md:h-[200px] xl:h-[350px]">
                    <ul className="text-[#2C363F] 2xl:text-[0.938vw] text-base font-normal leading-8 2xl:leading-[1.875vw] 2xl:space-y-[0.417vw] space-y-[6px] quick_questions_list">
                        <li>1. How much of their budget is unutilized for this funding year?</li>
                        <li>2. What was the trend of this entity’s (#123YZ)  budget utilization over the last 3 years? </li>
                        <li><Link to={''}>3. How many funding requests did this entity make in Form 471 over the last 5 years? </Link></li>
                        <li>4. How many services does this entity currently have under contract?</li>
                        <li>5. Which service types does this entity prioritize based on previous funding requests? </li>
                        <li>6. What is the entity’s remaining budget for Internal Connections for this funding year? </li>
                        <li>7. What is the total amount disbursed to this entity -Springfield Public Schools over the last 5 funding years? </li>
                        <li>8. What percentage of this entity's E-rate budget is allocated to Internet services vs. Internal Connections? </li>
                        <li>9. How often does this entity change its service providers? </li>
                        <li>10. What service upgrades is this entity planning for the upcoming funding year? </li>
                        <li>11. What is the average duration of contracts awarded by this entity?  </li>
                        <li>12. Does this entity have any compliance issues or audit flags that I should be aware of?  </li>
                        <li>13. What types of additional services (e.g., managed services, consulting) is this entity likely to need based on its historical trends?  </li>
                        <li>14. What are the services listed in my FY 2023 Form 470 for BEN #123456? </li>
                        <li>15. What is the total funding request in my FY 2023 Form 471 for BEN #654321? </li>
                    </ul>
                </ScrollPanel>
                </div>
        </div>
            </Dialog>
    </Layout>
  )
}
