import React from 'react'
import ReactEcharts from "echarts-for-react";

export default function DistrictsPiechart({ name, radius, center, labelLine, data, chartData = [] }) {

  // data={[
  //   { value: 80, itemStyle: { color: "#012D27" } },
  //   { value: 25, itemStyle: { color: "#D0FBE9" } },
  //   { value: 15, itemStyle: { color: "#A4F6D8" } },
  //   { value: 35, itemStyle: { color: "#6AEBC5" } },
  //   { value: 35, itemStyle: { color: "#0ABF95" } },
  //   { value: 35, itemStyle: { color: "#007C65" } },
  //   { value: 35, itemStyle: { color: "#036251" } },
  //   { value: 30, itemStyle: { color: "#045044" } },
  // ]}

  let colors = ["#012D27", "#D0FBE9", "#A4F6D8", "#6AEBC5", "#0ABF95", "#007C65", "#036251", "#045044"]

  const updatedData = chartData.map((item) => {
    return {
      ...item,
      "Average Sales": parseFloat(item["Average Sales"])
    };
  })?.map((X, i) => {
    return { value: X?.["Average Sales"], itemStyle: { color: colors[i] } }
  })


  const option = {
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: '#000',
      textStyle: {
        color: '#FFF'
      },
      borderColor: '#000',
    },
    series: [
      {
        name: name,
        type: 'pie',
        radius: radius,
        center: center,
        labelLine: labelLine,
        data: updatedData
      }
    ],
  };

  return (
    <ReactEcharts
      option={option}
      style={{ width: "100%", height: "100%" }}
    />
  )
}