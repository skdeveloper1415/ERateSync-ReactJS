import React from 'react';
import StackBar from '../../components/charts/stackbarchart/stackbar';
import KPIScoreDoubleBar from '../../components/charts/kpisavgscore/kpiscorebar'

export default function AVGalignmentScore() {
  return (
    <div className='bg-white h-full 2xl:rounded-[0.833vw] rounded-2xl 2xl:p-[0.417vw] p-2'>
            <div className='2xl:py-[0.417vw] py-1.5 2xl:px-[0.833vw] px-3.5 flex items-center justify-between border-b border-[#C9D3DB]'>
              <div className='text-[#19212A] 2xl:text-[0.729vw] text-xs font-semibold leading-5 2xl:leading-[1.094vw]'>Avg. Alignment Score</div>
              <div className='flex items-center 2xl:gap-[0.417vw] gap-1.5'>
                <div className='text-[#19212A] 2xl:text-[0.729vw] text-xs font-semibold leading-5 2xl:leading-[1.094vw]'>250</div>
                <div className='text-[#057A55] 2xl:text-[0.625vw] text-xs font-medium leading-3 2xl:leading-[0.729vw]'>Var:15%</div>
              </div>
            </div>
            <div className='grid grid-cols-2 2xl:mt-[0.833vw] mt-3.5 divide-x divide-[#E5E7EB]'>
              {/*col*/}
              <div className='2xl:px-[0.833vw] px-3.5 flex'>
                <div className='2xl:w-[13.394vw] w-[262.33px] 2xl:h-[10.885vw] h-[200px]'>
                  <KPIScoreDoubleBar />
                </div>
              </div>
              {/*col*/}
              <div className='2xl:px-[0.833vw] px-3.5 2xl:space-y-[0.521vw] space-y-[10px]'>
                {/*col*/}
                <div className='2xl:space-y-[0.417vw] space-y-[8px]'>
                <div className='text-[#2C363F] 2xl:text-[0.625vw] text-xs font-normal leading-3 2xl:leading-[0.625vw]'>RFP Published</div>
                <div className='2xl:space-y-[0.208vw] space-y-[4px]'>
                <div className='flex items-center justify-between'>
                  <div className='text-[#2C363F] 2xl:text-[0.625vw] font-normal leading-3 2xl:leading-[0.625vw] flex items-center gap-1'><span className='bg-[#1570EF] w-2 h-2 rounded-sm block'></span><p>Yes</p></div>
                  <div className='text-[#2C363F] 2xl:text-[0.625vw] font-normal leading-3 2xl:leading-[0.625vw] flex items-center gap-1'><span className='bg-[#D62C72] w-2 h-2 rounded-sm block'></span><p>No</p></div>
                </div>
                <div className='w-full 2xl:h-[1.823vw] h-[28px]'>
                <StackBar
                  grid={{
                  left: "0%",
                  right:'0%',
                  top:'0%',
                  bottom:'0%',
                  width: "100%",
                  containLabel: true
                  }}
                  legend={{
                  show: false,
                  itemGap: 30,
                  data: [{name: 'Category 1',}, {name: 'Category 2',}],
                  itemWidth: 10,
                  itemHeight:10,
                  textStyle: {
                  color: "rgba(44, 54, 63, 1)",
                  fontSize: 10
                  }
                  }}
                  xAxis={{
                  type: 'value',
                  axisTick: {show: false},
                  axisLabel:{show:false,},
                  axisLine: {show: false},
                  splitLine: {show: false}
                  }}
                  yAxis={{
                  type: 'category',
                  axisTick: {show: false},
                  axisLabel:{show:false,},
                  axisLine: {show: false},
                  splitLine: {show: false}
                  }}
                  category2color={'#1570EF'}
                  Category2name={'Category 2'}
                  Category2data={[66]}
                  Category2borderRadius={[8, 0, 0, 8]}
                  Category2label={{
                    show: true,
                    position:'insideLeft',
                    formatter: '{c} %'
                  }}
                  Category1name={'Category 1'}
                  Category1color={"#D62C72"}
                  Category1label={{
                    show: true,
                    position: 'insideRight',
                    formatter: '{c} %'
                  }}
                  Category1data={[34]}
                  Category1borderRadius={[0, 8, 8, 0]}
                 /></div>
                 </div>
                 </div>
                 {/*col*/}
                 {/*col*/}
                <div className='2xl:space-y-[0.417vw] space-y-[8px]'>
                <div className='text-[#2C363F] 2xl:text-[0.625vw] text-xs font-normal leading-3 2xl:leading-[0.625vw]'>Shortlisted</div>
                <div className='2xl:space-y-[0.208vw] space-y-[4px]'>
                <div className='flex items-center justify-between'>
                  <div className='text-[#2C363F] 2xl:text-[0.625vw] font-normal leading-3 2xl:leading-[0.625vw] flex items-center gap-1'><span className='bg-[#1570EF] w-2 h-2 rounded-sm block'></span><p>Yes</p></div>
                  <div className='text-[#2C363F] 2xl:text-[0.625vw] font-normal leading-3 2xl:leading-[0.625vw] flex items-center gap-1'><span className='bg-[#D62C72] w-2 h-2 rounded-sm block'></span><p>No</p></div>
                </div>
                <div className='w-full 2xl:h-[1.823vw] h-[28px]'>
                <StackBar
                  grid={{
                  left: "0%",
                  right:'0%',
                  top:'0%',
                  bottom:'0%',
                  width: "100%",
                  containLabel: true
                  }}
                  legend={{
                  show: false,
                  itemGap: 30,
                  data: [{name: 'Category 1',}, {name: 'Category 2',}],
                  itemWidth: 10,
                  itemHeight:10,
                  textStyle: {
                  color: "rgba(44, 54, 63, 1)",
                  fontSize: 10
                  }
                  }}
                  xAxis={{
                  type: 'value',
                  axisTick: {show: false},
                  axisLabel:{show:false,},
                  axisLine: {show: false},
                  splitLine: {show: false}
                  }}
                  yAxis={{
                  type: 'category',
                  axisTick: {show: false},
                  axisLabel:{show:false,},
                  axisLine: {show: false},
                  splitLine: {show: false}
                  }}
                  category2color={'#1570EF'}
                  Category2name={'Category 2'}
                  Category2data={[66]}
                  Category2borderRadius={[8, 0, 0, 8]}
                  Category2label={{
                    show: true,
                    position:'insideLeft',
                    formatter: '{c} %'
                  }}
                  Category1name={'Category 1'}
                  Category1color={"#D62C72"}
                  Category1label={{
                    show: true,
                    position: 'insideRight',
                    formatter: '{c} %'
                  }}
                  Category1data={[34]}
                  Category1borderRadius={[0, 8, 8, 0]}
                 /></div>
                 </div>
                 </div>
                 {/*col*/}
                 {/*col*/}
                <div className='2xl:space-y-[0.417vw] space-y-[8px]'>
                <div className='text-[#2C363F] 2xl:text-[0.625vw] text-xs font-normal leading-3 2xl:leading-[0.625vw]'>Response to RFP</div>
                <div className='2xl:space-y-[0.208vw] space-y-[4px]'>
                <div className='flex items-center justify-between'>
                  <div className='text-[#2C363F] 2xl:text-[0.625vw] font-normal leading-3 2xl:leading-[0.625vw] flex items-center gap-1'><span className='bg-[#1570EF] w-2 h-2 rounded-sm block'></span><p>Yes</p></div>
                  <div className='text-[#2C363F] 2xl:text-[0.625vw] font-normal leading-3 2xl:leading-[0.625vw] flex items-center gap-1'><span className='bg-[#D62C72] w-2 h-2 rounded-sm block'></span><p>No</p></div>
                </div>
                <div className='w-full 2xl:h-[1.823vw] h-[28px]'>
                <StackBar
                  grid={{
                  left: "0%",
                  right:'0%',
                  top:'0%',
                  bottom:'0%',
                  width: "100%",
                  containLabel: true
                  }}
                  legend={{
                  show: false,
                  itemGap: 30,
                  data: [{name: 'Category 1',}, {name: 'Category 2',}],
                  itemWidth: 10,
                  itemHeight:10,
                  textStyle: {
                  color: "rgba(44, 54, 63, 1)",
                  fontSize: 10
                  }
                  }}
                  xAxis={{
                  type: 'value',
                  axisTick: {show: false},
                  axisLabel:{show:false,},
                  axisLine: {show: false},
                  splitLine: {show: false}
                  }}
                  yAxis={{
                  type: 'category',
                  axisTick: {show: false},
                  axisLabel:{show:false,},
                  axisLine: {show: false},
                  splitLine: {show: false}
                  }}
                  category2color={'#1570EF'}
                  Category2name={'Category 2'}
                  Category2data={[66]}
                  Category2borderRadius={[8, 0, 0, 8]}
                  Category2label={{
                    show: true,
                    position:'insideLeft',
                    formatter: '{c} %'
                  }}
                  Category1name={'Category 1'}
                  Category1color={"#D62C72"}
                  Category1label={{
                    show: true,
                    position: 'insideRight',
                    formatter: '{c} %'
                  }}
                  Category1data={[34]}
                  Category1borderRadius={[0, 8, 8, 0]}
                 /></div>
                 </div>
                 </div>
                 {/*col*/}
              </div>
            </div>
            {/*--grid--*/}
          </div>
  )
}
