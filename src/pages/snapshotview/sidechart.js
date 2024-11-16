import React, { useState } from "react";
import { Link } from "react-router-dom";
import HorizontalBarChart from "../../components/charts/horizontalbarchart";
import HorizontalStackBarChart from "../../components/charts/horizontalstackbarchart";
import DoubleBarChart from "../../components/charts/doubleBarchart";
import { Dropdown } from 'primereact/dropdown';


export default function Sidechart({ activeTab }) {
  const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: '10', code: 'NY' },
        { name: '14', code: 'RM' },
        { name: '15', code: 'LDN' },
        { name: '12', code: 'IST' },
        { name: '09', code: 'PRS' }
    ];
  return (
    <>
      <div className="sidechartwrap">
        <div className="bg-white rounded-[4px] 3xl:rounded-[0.208vw] backdrop-filter5 mb-[18px] 3xl:mb-[1.25vw]">
          <div className="flex items-center">
            <div className="w-full">
              <Link
                to={""}
                className="block text-center px-[14px] 3xl:px-[0.833vw] py-[8px] 3xl:py-[0.417vw] text-[#19212A] text-[14px] 3xl:text-[0.729vw]"
              >
                Top Competitors
              </Link>
            </div>
            <div className="w-full">
              <Link
                to={""}
                className="block text-center bg-[#1570EF] rounded-[4px] 3xl:rounded-[0.208vw] px-[14px] 3xl:px-[0.833vw] py-[8px] 3xl:py-[0.417vw] text-white text-[14px] 3xl:text-[0.729vw]"
              >
                Top Entities
              </Link>
            </div>
            <div className="w-full">
              <Link
                to={""}
                className="block text-center px-[14px] 3xl:px-[0.833vw] py-[8px] 3xl:py-[0.417vw] text-[#19212A] text-[14px] 3xl:text-[0.729vw]"
              >
                Top Manufactures
              </Link>
            </div>
          </div>
        </div>
        <div>
          {activeTab === 0 ? (
            <>
              <div className="flex items-center justify-between">
                <div className="text-[#19212A] text-[14px] 3xl:text-[0.833vw] font-semibold">
                  Proximity to Prospect (Miles)
                </div>
                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                  <div className="text-[#374151] text-[14px] 3xl:text-[0.729vw] font-medium">Qtd View</div>
                  <div>
                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="10" className="w-full min-w-[68px] max-w-[68px] customtext" />
                  </div>
                </div>
              </div>
              <div className="h-[450px] xl:h-[500px] 3xl:h-[28.646vw]">
                <HorizontalBarChart
                  legend={{ left: 0, bottom: 0, itemHeight: 10, itemWidth: 10 }}
                  name1="Score 31-40"
                  grid={{
                    top: "3%",
                    left: "3%",
                    right: "5%",
                    bottom: "5%",
                    containLabel: true,
                  }}
                  xAxixdata={{
                    type: "value",
                    min: 0,
                    max: 30,
                    interval: 5,
                    axisLine: {
                      show: false,
                      lineStyle: { color: "#E4E7EC" },
                    },
                    axisLabel: {
                      show: true,
                      color: "#2C363F80",
                      fontSize: 12,
                      fontWeight: 500,
                    },
                    splitLine: {
                      show: true,
                      lineStyle: {
                        type: "dashed",
                        color: "#C8CBD0",
                      },
                    },
                  }}
                  yAxixdata={[
                    {
                      type: "category",
                      axisLabel: {
                        color: "#2C363F",
                        fontSize: 12,
                        fontWeight: 500,
                      },
                      axisTick: { show: false },
                      axisLine: {
                        show: true,
                        lineStyle: { color: "#E4E7EC" },
                      },
                      data: [
                        "Entity 01",
                        "Entity 02",
                        "Entity 03",
                        "Entity 04",
                        "Entity 05",
                        "Entity 06",
                        "Entity 07",
                        "Entity 08",
                        "Entity 09",
                        "Entity 10",
                      ],
                    },
                  ]}
                  showBackground={{
                    show: false,
                    color: "#EDEEF1",
                    borderRadius: [0, 4, 4, 0],
                  }}
                  lable={{
                    show: true,
                    position: "outside",
                    color: "#344054",
                    formatter: "{c}",
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                  itemStyle={{
                    color: "#1570EF",
                    borderRadius: [0, 4, 4, 0],
                  }}
                  data={[
                    { value: 5, itemStyle: { color: "#069564" } },
                    7,
                    10,
                    { value: 12, itemStyle: { color: "#069564" } },
                    { value: 15, itemStyle: { color: "#1570EF" } },
                    { value: 18, itemStyle: { color: "#F8B720" } },
                    { value: 20, itemStyle: { color: "#069564" } },
                    { value: 22, itemStyle: { color: "#069564" } },
                    { value: 24, itemStyle: { color: "#F8B720" } },
                    { value: 25, itemStyle: { color: "#069564" } },
                  ]}
                />
              </div>
            </>
          ) : null}
          {activeTab === 1 ? (
            <>
              <div className="flex items-center justify-between">
                <div className="text-[#19212A] text-[14px] 3xl:text-[0.833vw] font-semibold">
                  Transactions
                </div>
                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                  <div className="text-[#374151] text-[14px] 3xl:text-[0.729vw] font-medium">Qtd View</div>
                  <div>
                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="10" className="w-full min-w-[68px] max-w-[68px] customtext" />
                  </div>
                </div>
              </div>
              <div className="h-[450px] xl:h-[500px] 3xl:h-[28.646vw]">
                <HorizontalStackBarChart
                  legend={{ left: 0, bottom: 0, itemHeight: 10, itemWidth: 10 }}
                  name1="Spend"
                  name2="Remaining"
                  grid={{
                    top: "3%",
                    left: "3%",
                    right: "5%",
                    bottom: "5%",
                    containLabel: true,
                  }}
                  xAxixdata={{
                    type: "value",
                    min: 0,
                    max: 30,
                    interval: 5,
                    axisLine: {
                      show: false,
                      lineStyle: { color: "#E4E7EC" },
                    },
                    axisLabel: {
                      show: true,
                      color: "#2C363F80",
                      fontSize: 12,
                      fontWeight: 500,
                      formatter: "${value}",
                    },
                    splitLine: {
                      show: true,
                      lineStyle: {
                        type: "dashed",
                        color: "#C8CBD0",
                      },
                    },
                  }}
                  yAxixdata={[
                    {
                      type: "category",
                      axisLabel: {
                        color: "#2C363F",
                        fontSize: 12,
                        fontWeight: 500,
                      },
                      axisTick: { show: false },
                      axisLine: {
                        show: true,
                        lineStyle: { color: "#C8CBD0" },
                      },
                      data: [
                        "Entity 01",
                        "Entity 02",
                        "Entity 03",
                        "Entity 04",
                        "Entity 05",
                        "Entity 06",
                        "Entity 07",
                        "Entity 08",
                        "Entity 09",
                        "Entity 10",
                      ],
                    },
                  ]}
                  showBackground={{
                    show: false,
                  }}
                  lable={{
                    show: true,
                    position: "insideRight",
                    color: "#fff",
                    formatter: "${c}.00",
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                  itemStyle={{
                    color: "#1570EF",
                  }}
                  data={[24, 10, 18, 20, 24, 22, 25, 23, 24, 25]}
                  lable2={{
                    show: true,
                    position: "insideRight",
                    color: "#fff",
                    formatter: "${c}.00",
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                  itemStyle2={{
                    color: "#069564",
                    borderRadius: [0, 4, 4, 0],
                  }}
                  data2={[6, 22, 22, 12, 6, 8, 5, 7, 6, 5]}
                />
              </div>
            </>
          ) : null}

          {activeTab === 2 ? (
            <>
              <div className="flex items-center justify-between">
                <div className="text-[#19212A] text-[14px] 3xl:text-[0.833vw] font-semibold">
                  Broadband Speed (MPBS)
                </div>
                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                  <div className="text-[#374151] text-[14px] 3xl:text-[0.729vw] font-medium">Qtd View</div>
                  <div>
                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="10" className="w-full min-w-[68px] max-w-[68px] customtext" />
                  </div>
                </div>
              </div>
              <div className="h-[450px] xl:h-[500px] 3xl:h-[28.646vw]">
                <DoubleBarChart
                  grid={{
                    top: "3%",
                    left: "3%",
                    right: "3%",
                    bottom: "5%",
                    containLabel: true,
                  }}
                  legend={{ left: 0, bottom: 0, itemHeight: 10, itemWidth: 10 }}
                  name1="Spend"
                  name2="Remaining"
                  xAxixdata={{
                    type: "value",
                    min: 0,
                    max: 35,
                    interval: 5,
                    axisLine: { show: false, lineStyle: { color: "#E4E7EC" } },
                    axisLabel: {
                      show: true,
                      color: "#2C363F80",
                      fontSize: 12,
                      fontWeight: 500,
                      formatter: "${value}.00",
                    },
                    splitLine: {
                      show: true,
                      lineStyle: { type: "dashed", color: "#C8CBD0" },
                    },
                  }}
                  yAxixdata={[
                    {
                      type: "category",
                      axisLabel: {
                        color: "#2C363F",
                        fontSize: 12,
                        fontWeight: 500,
                      },
                      axisTick: { show: false },
                      axisLine: { show: true, lineStyle: { color: "#C8CBD0" } },
                      data: [
                        "Entity 01",
                        "Entity 02",
                        "Entity 03",
                        "Entity 04",
                        "Entity 05",
                        "Entity 06",
                        "Entity 07",
                        "Entity 08",
                        "Entity 09",
                        "Entity 10",
                      ],
                    },
                  ]}
                  lable={{ show: false }}
                  itemStyle={{
                    color: "#069564",
                    borderRadius: [0, 4, 4, 0],
                    barWidth1: 4,
                  }}
                  data={[16, 19, 19, 15, 19, 16, 13, 13, 19, 15]}
                  lable2={{ show: false }}
                  itemStyle2={{ color: "#1570EF", borderRadius: [0, 4, 4, 0] }}
                  data2={[17, 20, 20, 20, 20, 18, 15, 15, 20, 20]}
                />
              </div>
            </>
          ) : null}

          {activeTab === 3 ? (
            <>
              <div className="flex items-center justify-between">
                <div className="text-[#19212A] text-[14px] 3xl:text-[0.833vw] font-semibold">
                  Alignment Score
                </div>
                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                  <div className="text-[#374151] text-[14px] 3xl:text-[0.729vw] font-medium">Qtd View</div>
                  <div>
                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="10" className="w-full min-w-[68px] max-w-[68px] customtext" />
                  </div>
                </div>
              </div>
              <div className="h-[450px] xl:h-[500px] 3xl:h-[28.646vw]">
                <HorizontalBarChart
                  legend={{ left: 0, bottom: 0, itemHeight: 10, itemWidth: 10 }}
                  name1="Score 31-40"
                  grid={{
                    top: "3%",
                    left: "3%",
                    right: "5%",
                    bottom: "5%",
                    containLabel: true,
                  }}
                  xAxixdata={{
                    type: "value",
                    min: 0,
                    max: 30,
                    interval: 5,
                    axisLine: {
                      show: false,
                      lineStyle: { color: "#E4E7EC" },
                    },
                    axisLabel: {
                      show: true,
                      color: "#2C363F80",
                      fontSize: 12,
                      fontWeight: 500,
                    },
                    splitLine: {
                      show: true,
                      lineStyle: {
                        type: "dashed",
                        color: "#C8CBD0",
                      },
                    },
                  }}
                  yAxixdata={[
                    {
                      type: "category",
                      axisLabel: {
                        color: "#2C363F",
                        fontSize: 12,
                        fontWeight: 500,
                      },
                      axisTick: { show: false },
                      axisLine: {
                        show: true,
                        lineStyle: { color: "#E4E7EC" },
                      },
                      data: [
                        "Entity 01",
                        "Entity 02",
                        "Entity 03",
                        "Entity 04",
                        "Entity 05",
                        "Entity 06",
                        "Entity 07",
                        "Entity 08",
                        "Entity 09",
                        "Entity 10",
                      ],
                    },
                  ]}
                  showBackground={{
                    show: false,
                    color: "#EDEEF1",
                    borderRadius: [0, 4, 4, 0],
                  }}
                  lable={{
                    show: true,
                    position: "outside",
                    color: "#344054",
                    formatter: "{c}",
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                  itemStyle={{
                    color: "#1570EF",
                    borderRadius: [0, 4, 4, 0],
                  }}
                  data={[
                    5,
                    7,
                    { value: 10, itemStyle: { color: "#F8B720" } },
                    { value: 12, itemStyle: { color: "#F8B720" } },
                    { value: 15, itemStyle: { color: "#F8B720" } },
                    { value: 18, itemStyle: { color: "#F8B720" } },
                    { value: 20, itemStyle: { color: "#069564" } },
                    { value: 22, itemStyle: { color: "#069564" } },
                    { value: 24, itemStyle: { color: "#069564" } },
                    { value: 25, itemStyle: { color: "#069564" } },
                  ]}
                />
              </div>
            </>
          ) : null}

          {activeTab === 4 ? (
            <>
              <div className="flex items-center justify-between">
                <div className="text-[#19212A] text-[14px] 3xl:text-[0.833vw] font-semibold">
                  Tenure Analysis
                </div>
                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                  <div className="text-[#374151] text-[14px] 3xl:text-[0.729vw] font-medium">Qtd View</div>
                  <div>
                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="10" className="w-full min-w-[68px] max-w-[68px] customtext" />
                  </div>
                </div>
              </div>
              <div className="h-[450px] xl:h-[500px] 3xl:h-[28.646vw]">
                <HorizontalBarChart
                  legend={{ left: 0, bottom: 0, itemHeight: 10, itemWidth: 10 }}
                  name1="Score 31-40"
                  grid={{
                    top: "3%",
                    left: "3%",
                    right: "5%",
                    bottom: "5%",
                    containLabel: true,
                  }}
                  xAxixdata={{
                    type: "value",
                    min: 0,
                    max: 30,
                    interval: 5,
                    axisLine: {
                      show: false,
                      lineStyle: { color: "#E4E7EC" },
                    },
                    axisLabel: {
                      show: true,
                      color: "#2C363F80",
                      fontSize: 12,
                      fontWeight: 500,
                    },
                    splitLine: {
                      show: true,
                      lineStyle: {
                        type: "dashed",
                        color: "#C8CBD0",
                      },
                    },
                  }}
                  yAxixdata={[
                    {
                      type: "category",
                      axisLabel: {
                        color: "#2C363F",
                        fontSize: 12,
                        fontWeight: 500,
                      },
                      axisTick: { show: false },
                      axisLine: {
                        show: true,
                        lineStyle: { color: "#E4E7EC" },
                      },
                      data: [
                        "Entity 01",
                        "Entity 02",
                        "Entity 03",
                        "Entity 04",
                        "Entity 05",
                        "Entity 06",
                        "Entity 07",
                        "Entity 08",
                        "Entity 09",
                        "Entity 10",
                      ],
                    },
                  ]}
                  showBackground={{
                    show: false,
                    color: "#EDEEF1",
                    borderRadius: [0, 4, 4, 0],
                  }}
                  lable={{
                    show: true,
                    position: "outside",
                    color: "#344054",
                    formatter: "{c}",
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                  itemStyle={{
                    color: "#1570EF",
                    borderRadius: [0, 4, 4, 0],
                  }}
                  data={[
                    5,
                    7,
                    { value: 10, itemStyle: { color: "#F8B720" } },
                    { value: 12, itemStyle: { color: "#F8B720" } },
                    { value: 15, itemStyle: { color: "#F8B720" } },
                    { value: 18, itemStyle: { color: "#F8B720" } },
                    { value: 20, itemStyle: { color: "#069564" } },
                    { value: 22, itemStyle: { color: "#069564" } },
                    { value: 24, itemStyle: { color: "#069564" } },
                    { value: 25, itemStyle: { color: "#069564" } },
                  ]}
                />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
