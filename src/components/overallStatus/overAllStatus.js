import React from 'react';
import * as echarts from 'echarts'
import VerticalBarChart from '../charts/verticalbarchart';
import Dashedline from '../charts/dashedline';
import Fillpie from '../charts/Fillpiechart';


export default function OverAllStatus(props) {

    var barcolor = new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
          { offset: 0, color: '#7E96DF' },
          { offset: 1, color: '#CED7F3' }
        ]
      );

    const EndorsedData =  {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        values: ["20", "65", "72", "59", "66"]
      }

    const contractAwarded = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        values: ["10", "30", "10", "30", "10"],
      }

    const detailedDesignApproved = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        values: ["10", "30", "10", "30", "10"],
    }

    const piechart = {
        label1: "Awaiting STKH Approval", value1: "100",
        label2: "STHK Approved", value2: "500",
        label3: "Submitted", value3: "600",
      }

    return (

        <div>
            <div className={props.className}>

                {
                    props.data.map((elm) => {
                        return (
                            <>
                                <div className="col-span-1 border-[1px] rounded-md">
                                    <div className="bg-[#FFFFFF] shadow-md shadow-[#0000001A] rounded-md h-full">
                                        <div className='text-[16px] xl:text-[0.833vw] text-[#222349] font-semibold  py-[16px] px-[8px] xl:py-[0.833vw] xl:px-[1.042vw]'>
                                            {elm.title}
                                        </div>
                                        {elm.title !== "NOC’s" ? 
                                        <div className='flex items-center justify-between py-[16px] px-[8px] xl:py-[0.833vw] xl:px-[1.042vw]'>
                                            <div className='text-[#2A2D64] text-[24px] xl:text-[1.250vw] font-bold'>{elm.chartTitle}</div>
                                            
                                             <div className="flex items-center gap-1 text-[#027A48] text-[12px] xl:text-[0.625vw] bg-[#D4FFED] rounded-[0.408vw] font-medium px-[8px] xl:px-[0.417vw] py-[2px] xl:py-[0.104vw]">
                                                <i className='dub-upstock text-[10px] xl:text-[0.521vw]'></i> -2%
                                            </div> 
                                        </div>
                                        : null
                                        }

                                        <div className={`${ elm.title !== "NOC’s" ? 'pb-3' : 'md:h-[9.531vw] xl:h-[9.531vw] pt-4' }`}>
                                            { elm.title ===  'Projects - Endorsed' ?
                                                <VerticalBarChart
                                                    grid={{ top: 10, bottom: 20, left:10, right:10}} 
                                                    barcolor={barcolor} 
                                                    data={EndorsedData}
                                                    data-aos="fade-up" data-aos-duration="800"
                                                    xAxisName={"Months"} 
                                                    yAxisName={"Value"} 
                                                /> : null
                                            }
                                            { elm.title ===  'Projects - Contract Awarded' ?
                                                <Dashedline  
                                                    grid={{ top: 10, bottom: 20, left:'-5%', right:'-5%' }} 
                                                    gradiantcolor1={"#EAEAF0"} 
                                                    gradiantcolor2={'#EAEAF0'} 
                                                    data={contractAwarded} 
                                                    data-aos="fade-up" data-aos-duration="900"
                                                    color1={"#000000"} 
                                                    color2={"#000000"} 
                                                    xAxisName={"Months"}  lineName={"value"}
                                                    yAxisName={"Value"} 
                                                    legend={{
                                                        show:false,
                                                        bottom:0,
                                                        left:0,
                                                        textStyle: {
                                                            color: '#344054',
                                                    
                                                        },
                                                        }} 
                                                /> : null
                                            }
                                            { elm.title ===  'Detailed Design Approved' ?
                                                <Dashedline  
                                                    grid={{ top: 10, bottom: 20, left:'-5%', right:'-5%' }} 
                                                    gradiantcolor1={"#EAEAF0"} 
                                                    gradiantcolor2={'#EAEAF0'} 
                                                    data={detailedDesignApproved} 
                                                    data-aos="fade-up" data-aos-duration="1000"
                                                    color1={"#000000"} 
                                                    color2={"#000000"} 
                                                    xAxisName={"Months"} lineName={"value"}
                                                    yAxisName={"Value"} 
                                                    legend={{
                                                        show:false,
                                                        bottom:0,
                                                        left:0,
                                                        textStyle: {
                                                            color: '#344054',
                                                    
                                                        },
                                                        }} 
                                                /> : null
                                            }
                                             { elm.title ===  'NOC’s' ?
                                               <div className='grid grid-cols-2'  data-aos="fade-up" data-aos-duration="1200">
                                                    <div className='space-y-1 xl:space-y-2'>
                                                        <div className='mx-3 border-t-[4px] border-[#FFD100]'>
                                                            <div className='text-[#8F91AD] text-[14px] xl:text-[0.729vw] font-normal'> Awaiting STKH Approval </div>
                                                            <div className='text-[#4C525F] text-[14px] xl:text-[0.729vw] font-normal'> 100 </div>
                                                        </div>
                                                        <div className='mx-3 border-t-[4px] border-[#7C94DE]'>
                                                            <div className='text-[#8F91AD] text-[14px] xl:text-[0.729vw] font-normal'> STHK Approved </div>
                                                            <div className='text-[#4C525F] text-[14px] xl:text-[0.729vw] font-normal'> 500 </div>
                                                        </div>
                                                        <div className='mx-3 border-t-[4px] border-[#2A2D64]'>
                                                            <div className='text-[#8F91AD] text-[14px] xl:text-[0.729vw] font-normal'> Submitted </div>
                                                            <div className='text-[#4C525F] text-[14px] xl:text-[0.729vw] font-normal'> 600 </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Fillpie
                                                            data={piechart}
                                                            color1={"#FFD100"}
                                                            color2={"#7C94DE"}
                                                            color3={"#2A2D64"}
                                                            legend={{
                                                                show: false
                                                            }}
                                                        />
                                                    </div>
                                               </div>
                                              
                                              : null
                                            }
                                        </div> 
                                        
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>





    )
}