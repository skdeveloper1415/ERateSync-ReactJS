import { React, useState } from 'react'
import Layout from '../../components/common/layout/layout';
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';

export default function Latestnews() {
    const [value, setValue] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    return (
        <div>
            <Layout pageTitle="470 Details" pageSubTitle="Current Page">
                <div className='py-6 3xl:py-[1.25vw] px-8 xl:px-2 3xl:px-[1.667vw] '>
                    <div className='grid grid-cols-12 gap-6 3xl:gap-[1.25vw]'>
                        <div className='col-span-12 xl:col-span-4'>
                            <div className='bg-[#fff] p-6 3xl:p-[1.25vw] rounded-lg border border-[#E5E7EB] h-full'>
                                <div className='flex flex-col gap-6 3xl:gap-[1.25vw]'>
                                    <div className='text-[#19212A] text-[20px] 3xl:text-[1.042vw] font-medium'>Search Keyword</div>
                                    <div className='flex flex-col gap-[10px] 3xl:gap-[0.521vw]'>
                                        <div className='relative'><i className='esspd-search2 text-[#828A91] text-[16px] 3xl:text-[0.833vw] absolute top-[16px] left-[14px]'></i><InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search Keyword' className='w-full custinput' /></div>
                                        <div className='flex flex-col gap-2 3xl:gap-[0.417vw]'>
                                            <label className='text-[#374151] text-[14px] 3xl:text-[0.729vw] font-medium'>Username</label>
                                            <Dropdown
                                                value={selectedCity}
                                                onChange={(e) => setSelectedCity(e.value)}
                                                options={cities}
                                                optionLabel="name"
                                                placeholder="Relevance"
                                                className="w-full md:w-14rem custdropdown" />
                                        </div>
                                        <div className='flex flex-col gap-2 3xl:gap-[0.417vw]'>
                                            <label className='text-[#374151] text-[14px] 3xl:text-[0.729vw] font-medium'>Username</label>
                                            <Dropdown
                                                value={selectedCity}
                                                onChange={(e) => setSelectedCity(e.value)}
                                                options={cities}
                                                optionLabel="name"
                                                placeholder="RPP"
                                                className="w-full md:w-14rem custdropdown" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 xl:col-span-8'>
                            <div className='bg-[#fff] border border-[#E5E7EB] rounded-lg py-[34px] 3xl:py-[1.771vw] px-[22px] 3xl:px-[1.146vw]'>
                                <div className='flex flex-col gap-6 3xl:gap-[1.25vw]'>
                                    <div className='bg-[#F5F6F7] border border-[#E5E7EB] rounded-2xl pl-[16px] 3xl:pl-[0.833vw]'>
                                        <div className='flex justify-between gap-6 3xl:gap-[1.25vw]'>
                                            <div className='flex flex-col gap-[26px] xl:gap-[10px] 3xl:gap-[1.354vw] py-[16px] xl:py-[12px] 3xl:py-[0.833vw]'>
                                                <div className='text-[#1570EF] text-[16px] xl:text-[12px] 3xl:text-[0.833vw] font-semibold'>EdTech</div>
                                                <div className='text-[#2C363F] text-[24px] xl:text-[14px] 3xl:text-[1.25vw] font-medium'>Everything You Need to Know About E-rate forms and Deadlines</div>
                                                <div className='text-[#2C363F] text-[18px] xl:text-[12px] 3xl:text-[0.938vw] font-light'>3 Nov 2024 • By Meghan Bogardus Cortez</div>
                                            </div>
                                                <img src='/tech_img.svg' alt='Technology' width={250} height={200} className='w-[250px] xl:w-[150px] 3xl:w-[13.021vw] h-[180px] xl:h-[100px] 3xl:h-[9.375vw]'/>
                                        </div>
                                    </div>
                                    <div className='bg-[#F5F6F7] border border-[#E5E7EB] rounded-2xl pl-[16px] 3xl:pl-[0.833vw]'>
                                        <div className='flex justify-between  gap-6 3xl:gap-[1.25vw]'>
                                            <div className='flex flex-col gap-[26px] xl:gap-[10px] 3xl:gap-[1.354vw] py-[16px] xl:py-[12px] 3xl:py-[0.833vw]'>
                                                <div className='text-[#1570EF] text-[16px] xl:text-[12px] 3xl:text-[0.833vw] font-semibold'>EdTech</div>
                                                <div className='text-[#2C363F] text-[24px] xl:text-[14px] 3xl:text-[1.25vw] font-medium'>E-Rate Bidding Process Open: What Should Schools Prepare For?</div>
                                                <div className='text-[#2C363F] text-[18px] xl:text-[12px] 3xl:text-[0.938vw] font-light'>3 Nov 2024 • By Meghan Bogardus Cortez</div>
                                            </div>
                                                <img src='/tech_img.svg' alt='Technology' width={250} height={150} className='w-[250px] xl:w-[150px] 3xl:w-[13.021vw] h-[180px] xl:h-[100px] 3xl:h-[9.375vw]'/>
                                        </div>
                                    </div>
                                    <div className='bg-[#F5F6F7] border border-[#E5E7EB] rounded-2xl pl-[16px] 3xl:pl-[0.833vw]'>
                                        <div className='flex justify-between  gap-6 3xl:gap-[1.25vw]'>
                                            <div className='flex flex-col gap-[26px] xl:gap-[10px] 3xl:gap-[1.354vw] py-[16px] xl:py-[12px] 3xl:py-[0.833vw]'>
                                                <div className='text-[#1570EF] text-[16px] xl:text-[12px] 3xl:text-[0.833vw] font-semibold'>School Trasnportation News</div>
                                                <div className='text-[#2C363F] text-[24px] xl:text-[14px] 3xl:text-[1.25vw] font-medium'>Modernizing School Transportation with E-Rate and Bus Wi-Fi</div>
                                                <div className='text-[#2C363F] text-[18px] xl:text-[12px] 3xl:text-[0.938vw] font-light'>3 Nov 2024 • By Meghan Bogardus Cortez</div>
                                            </div>
                                                <img src='/tech_img.svg' alt='Technology' width={250} height={150} className='w-[250px] xl:w-[150px] 3xl:w-[13.021vw] h-[180px] xl:h-[100px] 3xl:h-[9.375vw]'/>
                                        </div>
                                    </div>
                                    <div className='bg-[#F5F6F7] border border-[#E5E7EB] rounded-2xl pl-[16px] 3xl:pl-[0.833vw]'>
                                        <div className='flex justify-between  gap-6 3xl:gap-[1.25vw]'>
                                            <div className='flex flex-col gap-[26px] xl:gap-[10px] 3xl:gap-[1.354vw] py-[16px] xl:py-[12px] 3xl:py-[0.833vw]'>
                                                <div className='text-[#1570EF] text-[16px] xl:text-[12px] 3xl:text-[0.833vw] font-semibold'>School Trasnportation News</div>
                                                <div className='text-[#2C363F] text-[24px] xl:text-[14px] 3xl:text-[1.25vw] font-medium'>6 Steps for a Successfull E-Rate and Bus Wi-FI</div>
                                                <div className='text-[#2C363F] text-[18px] xl:text-[12px] 3xl:text-[0.938vw] font-light'>3 Nov 2024 • By Meghan Bogardus Cortez</div>
                                            </div>
                                                <img src='/tech_img.svg' alt='Technology' width={250} height={150} className='w-[250px] xl:w-[150px] 3xl:w-[13.021vw] h-[180px] xl:h-[100px] 3xl:h-[9.375vw]'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </div>
    )
}
