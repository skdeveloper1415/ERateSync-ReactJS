import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

export default function DistributionChannelChart({ data = [] }) {

  let colors = ["#a4c2b5","#86bfaa","#3b987b","#2f7c65","#246251","#1c5044","#0d2d27"];

  const updatedData = data.map((item) => {
    return {
      ...item,
      "Average Sales": parseFloat(item["Average Sales"])
    };
  })?.map((X, i) => {
    return { value: X?.["Average Sales"], itemStyle: { color: colors[i] } }
  })

 
  console.log("updatedData",updatedData)


  const option = {
    angleAxis: {
      startAngle: 90,
      endAngle: -290,
      splitLine: {
        show: false,
      },
      max : 14.3,
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { show: false },
    },
    radiusAxis: {
      type: "category",
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
    },
    polar: {
      radius: ["12%", "100%"],
      center: ["55%", "50%"],
    },
    series: [
      
      {
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "#414040",
        },
        barWidth: "7",
        data : updatedData,
       
        coordinateSystem: "polar",
        name: "With Round Cap",
        roundCap: true,
      },
    ],
  };

  return (
    <ReactEcharts option={option} style={{ width: "100%", height: "100%" }} />
  );
}
