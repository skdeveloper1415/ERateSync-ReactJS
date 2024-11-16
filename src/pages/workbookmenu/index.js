import { React, useState } from 'react'
import Layout from '../../components/common/layout/layout';
import { InputText } from "primereact/inputtext";

export default function Workbookmenu() {
    const [value, setValue] = useState('');
    return (
        <div>
            <Layout pageTitle="470 Details" pageSubTitle="Current Page">
                <div className='flex justify-between flex-wrap gap-[20px] items-center py-[24px] xl:py-[24px] 3xl:py-[1.25vw] px-[32px] xl:px-[32px] 3xl:px-[1.667vw]'>
                    <div className='flex items-center gap-[8px] py-[10px] xl:py-[8px] 3xl:py-[0.521vw] px-[16px] xl:px-[14px] 3xl:px-[0.833vw] border border-[#C9D3DB] bg-[#FEFEFE] text-[#19212A] text-[14px] 3xl:text-[0.729vw] rounded-[6px] w-fit'><i className='esspd-back'></i>Go Back</div>
                    <div className='flex items-center gap-[16px] xl:gap-[16px] 3xl:gap-[0.833vw]'>
                        <div className='text-[#2C363F] text-[14px]  3xl:text-[0.729vw] bg-[#fff] rounded-[8px] btnboxshadow py-[10px] xl:py-[8px] 3xl:py-[0.521vw] px-[16px] xl:px-[14px] 3xl:px-[0.833vw]'>Export</div>

                        <div className='text-[#2C363F] text-[14px]  3xl:text-[0.729vw] bg-[#fff] rounded-[8px] btnboxshadow py-[10px] xl:py-[8px] 3xl:py-[0.521vw] px-[16px] xl:px-[14px] 3xl:px-[0.833vw]'>Save</div>

                        <div className='text-[#2C363F] text-[14px]  3xl:text-[0.729vw] bg-[#fff] rounded-[8px] btnboxshadow py-[10px] xl:py-[8px] 3xl:py-[0.521vw] px-[16px] xl:px-[14px] 3xl:px-[0.833vw]'>Shortlist</div>

                        <div className='text-[#2C363F] text-[14px]  3xl:text-[0.729vw] bg-[#fff] rounded-[8px] btnboxshadow py-[10px] xl:py-[8px] 3xl:py-[0.521vw] px-[16px] xl:px-[14px] 3xl:px-[0.833vw]'>Hold</div>

                        <div className='text-[#2C363F] text-[14px]  3xl:text-[0.729vw] bg-[#fff] rounded-[8px] btnboxshadow py-[10px] xl:py-[8px] 3xl:py-[0.521vw] px-[16px] xl:px-[14px] 3xl:px-[0.833vw]'>Reject</div>
                    </div>
                </div>
                <div className='space-y-[32px] 3xl:space-y-[1.667vw] '>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[32px] xl:gap-[32px] 3xl:gap-[1.667vw]'>
                    <div className=' p-[16px] xl:p-[16px] 3xl:p-[0.833vw] bg-[#fff] rounded-[16px]'>
                        <div className='py-[8px] xl:py-[8px] 3xl:py-[8px] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] text-[#19212A] text-[14px] xl:text-[14px] 3xl:text-[0.729vw] border-b border-[#C9D3DB] font-semibold'>Pushed from Dashboard</div>
                        <div className='mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] p-[8px] xl:p-[8px] 3xl:p-[0.417vw]'>
                            <div className='flex justify-between'>
                                <div className='text-[#2C363F] text-[14px] xl:text-[14px] 3xl:text-[0.729vw] font-normal'>Details</div>
                                <div className='text-[#2C363F] text-[14px] xl:text-[14px] 3xl:text-[0.729vw] font-normal'>Actions</div>
                            </div>
                            <div className='mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw]'>
                                <div className='space-y-[4px]'>
                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>1. Info 1</div>
                                        <div className='px-[15px]  3xl:px-[0.781vw]'><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>2. Info 2</div>
                                        <div className='px-[15px]  3xl:px-[0.781vw]'><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>3. Info 3</div>
                                        <div className='px-[15px]  3xl:px-[0.781vw]'><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>4. Info 4</div>
                                        <div className='px-[15px]  3xl:px-[0.781vw]'><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>5. Info 5</div>
                                        <div className='px-[15px]  3xl:px-[0.781vw]'><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>6. Info 6</div>
                                        <div className='px-[15px]  3xl:px-[0.781vw]'><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>
                                   
                                </div>
                                <div className='cust_search mt-[12px] xl:mt-[12px] 3xl:mt-[0.625vw] bg-[#F5F6F7]' ><InputText className="3xl:h-[2.5vw] h-[40px] placeholder:text-[#6C768B] placeholder:text-sm placeholder:font-normal placeholder:leading-5 3xl:placeholder:text-[0.833vw] 3xl:placeholder:leading-[1.042vw]  w-full pb-4 3xl:py-[1.042vw] pl-4 3xl:pl-[0.833vw] pr-10 3xl:pr-[2.083vw] " value={value} onChange={(e) => setValue(e.target.value)} placeholder='Add Notes' /></div>
                            </div>

                        </div>
                    </div>
                    <div className=' p-[16px] xl:p-[16px] 3xl:p-[0.833vw] bg-[#fff] rounded-[16px]'>
                        <div className='py-[8px] xl:py-[8px] 3xl:py-[8px] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] text-[#19212A] text-[14px] xl:text-[14px] 3xl:text-[0.729vw] border-b border-[#C9D3DB] font-semibold'>Pushed from Research Assist</div>
                        <div className='mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] p-[8px] xl:p-[8px] 3xl:p-[0.417vw]'>
                            <div className='flex justify-between'>
                                <div className='text-[#2C363F] text-[14px] xl:text-[14px] 3xl:text-[0.729vw] font-normal'>Details</div>
                                <div className='text-[#2C363F] text-[14px] xl:text-[14px] 3xl:text-[0.729vw] font-normal'>Actions</div>
                            </div>
                            <div className='mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw]'>
                                <div className='space-y-[4px]'>
                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>1. Info 1</div>
                                        <div className='px-[15px]  3xl:px-[0.781vw]'><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>2. Info 2</div>
                                        <div className='px-[15px]  3xl:px-[0.781vw]'><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>3. Info 3</div>
                                        <div className='px-[15px]  3xl:px-[0.781vw]'><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>4. Info 4</div>
                                        <div className='px-[15px]  3xl:px-[0.781vw]'><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>5. Info 5</div>
                                        <div className='px-[15px]  3xl:px-[0.781vw]'><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>6. Info 6</div>
                                        <div className='px-[15px]  3xl:px-[0.781vw]'><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>
                                   
                                </div>
                                <div className='cust_search mt-[12px] xl:mt-[12px] 3xl:mt-[0.625vw] bg-[#F5F6F7]' ><InputText className="3xl:h-[2.5vw] h-[40px] placeholder:text-[#6C768B] placeholder:text-sm placeholder:font-normal placeholder:leading-5 3xl:placeholder:text-[0.833vw] 3xl:placeholder:leading-[1.042vw]  w-full pb-4 3xl:py-[1.042vw] pl-4 3xl:pl-[0.833vw] pr-10 3xl:pr-[2.083vw] " value={value} onChange={(e) => setValue(e.target.value)} placeholder='Add Notes' /></div>
                            </div>

                        </div>
                    </div>
                    <div className=' p-[16px] xl:p-[16px] 3xl:p-[0.833vw] bg-[#fff] rounded-[16px]'>
                        <div className='py-[8px] xl:py-[8px] 3xl:py-[8px] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] text-[#19212A] text-[14px] xl:text-[14px] 3xl:text-[0.729vw] border-b border-[#C9D3DB] font-semibold'>Pushed from RFP Repository</div>
                        <div className='mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] p-[8px] xl:p-[8px] 3xl:p-[0.417vw]'>
                            <div className='flex justify-between'>
                                <div className='text-[#2C363F] text-[14px] xl:text-[14px] 3xl:text-[0.729vw] font-normal'>Details</div>
                                <div className='text-[#2C363F] text-[14px] xl:text-[14px] 3xl:text-[0.729vw] font-normal'>Actions</div>
                            </div>
                            <div className='mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw]'>
                                <div className='space-y-[4px]'>
                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>1. Info 1</div>
                                        <div><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>2. Info 2</div>
                                        <div><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>3. Info 3</div>
                                        <div><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>4. Info 4</div>
                                        <div><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>5. Info 5</div>
                                        <div><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>6. Info 6</div>
                                        <div><i className='esspd-trash text-[#C81E1E] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>
                                   
                                </div>
                                <div className='cust_search mt-[12px] xl:mt-[12px] 3xl:mt-[0.625vw] bg-[#F5F6F7]' ><InputText className="3xl:h-[2.5vw] h-[40px] placeholder:text-[#6C768B] placeholder:text-sm placeholder:font-normal placeholder:leading-5 3xl:placeholder:text-[0.833vw] 3xl:placeholder:leading-[1.042vw]  w-full pb-4 3xl:py-[1.042vw] pl-4 3xl:pl-[0.833vw] pr-10 3xl:pr-[2.083vw] " value={value} onChange={(e) => setValue(e.target.value)} placeholder='Add Notes' /></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='p-[16px] xl:p-[16px] 3xl:p-[0.833vw] rounded-[16px] bg-[#fff]'>
                    <div className='py-[8px] xl:py-[8px] 3xl:py-[0.417vw] text-[#19212A] text-[14px] font-semibold'>Notes from other Pages</div>
                    <div className='mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] p-[8px] xl:p-[8px] 3xl:p-[0.417vw]'>
                            <div className='flex justify-between'>
                                <div className='text-[#2C363F] text-[14px] xl:text-[14px] 3xl:text-[0.729vw] font-normal'>Details</div>
                                <div className='text-[#2C363F] text-[14px] xl:text-[14px] 3xl:text-[0.729vw] font-normal'>Actions</div>
                            </div>
                            <div className='mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw]'>
                                <div className='space-y-[4px]'>
                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>1. Figma ipsum component variant main layer. Star hand plugin font arrange. Overflow distribute link underline prototype library. Thumbnail inspect library italic editor mask image clip invite connection. Project horizontal rectangle.</div>
                                        <div className='px-[15px]  3xl:px-[0.781vw]'><i className='esspd-eye-outline text-[#1570EF]  text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>2. Figma ipsum component variant main layer. Team ipsum project asset underline italic arrow frame draft. Thumbnail strikethrough select library clip horizontal select thumbnail. Subtract create stroke text strikethrough mask.</div>
                                        <div className='px-[15px]  3xl:px-[0.781vw]'><i className='esspd-eye-outline text-[#1570EF] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                   
                                   
                                </div>
                                <div className='cust_search mt-[12px] xl:mt-[12px] 3xl:mt-[0.625vw] bg-[#F5F6F7]' ><InputText className="3xl:h-[2.5vw] h-[40px] placeholder:text-[#6C768B] placeholder:text-sm placeholder:font-normal placeholder:leading-5 3xl:placeholder:text-[0.833vw] 3xl:placeholder:leading-[1.042vw]  w-full pb-4 3xl:py-[1.042vw] pl-4 3xl:pl-[0.833vw] pr-10 3xl:pr-[2.083vw] " value={value} onChange={(e) => setValue(e.target.value)} placeholder='Add Notes' /></div>
                            </div>

                        </div>
                </div>
                <div className='p-[16px] xl:p-[16px] 3xl:p-[0.833vw] rounded-[16px] bg-[#fff]'>
                    <div className='py-[8px] xl:py-[8px] 3xl:py-[0.417vw] text-[#19212A] text-[14px] font-semibold'>My Notes</div>
                    <div className='mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] p-[8px] xl:p-[8px] 3xl:p-[0.417vw]'>
                            <div className='flex justify-between'>
                                <div className='text-[#2C363F] text-[14px] xl:text-[14px] 3xl:text-[0.729vw] font-normal'>Details</div>
                                <div className='text-[#2C363F] text-[14px] xl:text-[14px] 3xl:text-[0.729vw] font-normal'>Actions</div>
                            </div>
                            <div className='mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw]'>
                                <div className='space-y-[4px]'>
                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>1. Figma ipsum component variant main layer. Star hand plugin font arrange. Overflow distribute link underline prototype library. Thumbnail inspect library italic editor mask image clip invite connection. Project horizontal rectangle.</div>
                                        <div className='px-[15px]  3xl:px-[0.781vw]'><i className='esspd-eye-outline text-[#1570EF]  text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                    <div className='py-[4px] xl:py-[4px] 3xl:py-[0.208vw] flex justify-between border-b border-[#E5E7EB]'>
                                        <div className='text-[#2C363F] text-[16px] xl:text-[16px] 3xl:text-[0.833vw] font-normal'>2. Figma ipsum component variant main layer. Team ipsum project asset underline italic arrow frame draft. Thumbnail strikethrough select library clip horizontal select thumbnail. Subtract create stroke text strikethrough mask.</div>
                                        <div className='px-[15px]  3xl:px-[0.781vw]'><i className='esspd-eye-outline text-[#1570EF] text-[16px] xl:text-[16px] 3xl:text-[0.833vw]'></i></div>
                                    </div>

                                   
                                   
                                </div>
                                <div className='cust_search mt-[12px] xl:mt-[12px] 3xl:mt-[0.625vw] bg-[#F5F6F7]' ><InputText className="3xl:h-[2.5vw] h-[40px] placeholder:text-[#6C768B] placeholder:text-sm placeholder:font-normal placeholder:leading-5 3xl:placeholder:text-[0.833vw] 3xl:placeholder:leading-[1.042vw]  w-full pb-4 3xl:py-[1.042vw] pl-4 3xl:pl-[0.833vw] pr-10 3xl:pr-[2.083vw] " value={value} onChange={(e) => setValue(e.target.value)} placeholder='Add Notes' /></div>
                            </div>

                        </div>
                </div>
                </div>
            </Layout>

        </div>
    )
}
