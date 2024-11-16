export const mergeData = (data, targetObj) => {
  data.data.forEach(item => {
    for (const key in item) {
      const valueWithoutCarriageReturn = item[key].replace(/\r/g, '').trim();
      targetObj[key] = valueWithoutCarriageReturn;
    }
  });
};


export const dataSort = (data, sortBy = "Month") => {
  const sortedData = data?.sort((a, b) => {
    if (sortBy === "Month") {
      const monthA = new Date(`${a.Month} 1, 2020`);
      const monthB = new Date(`${b.Month} 1, 2020`);
      if (monthA - monthB !== 0) {
        return monthA - monthB;
      }

    } else {
      const weekA = parseInt(a.Week.split('-')[1]);
      const weekB = parseInt(b.Week.split('-')[1]);
      return weekA - weekB;
    }

  });

  return sortedData
}


export function toMillion(value) {
  if (value < 0) {

    return Math.abs(Number(value)) >= 1.0e9
      ? "$" + -(Math.abs(Number(value)) / 1.0e6).toFixed(2) + "M"
      : // Six Zeroes for Millions
      Math.abs(Number(value)) >= 1.0e6
        ? "$" + -(Math.abs(Number(value)) / 1.0e6).toFixed(2) + "M"
        : // Three Zeroes for Thousands
        Math.abs(Number(value)) >= 1.0e3
          ? "$" + -(Math.abs(Number(value)) / 1.0e6).toFixed(2) + "M"
          : "$" + -(Math.abs(Number(value)) / 1.0e6).toFixed(2) + "M";
  } else {
    return Math.abs(Number(value)) >= 1.0e9
      ? "$" + (Math.abs(Number(value)) / 1.0e6).toFixed(2) + "M"
      : // Six Zeroes for Millions
      Math.abs(Number(value)) >= 1.0e6
        ? "$" + (Math.abs(Number(value)) / 1.0e6).toFixed(2) + "M"
        : // Three Zeroes for Thousands
        Math.abs(Number(value)) >= 1.0e3
          ? "$" + (Math.abs(Number(value)) / 1.0e6).toFixed(2) + "M"
          : "$" + (Math.abs(Number(value)) / 1.0e6).toFixed(2) + "M";
  }
}


export const pivotFilterArray = (data, filterColumn) => {
  let filterArray = []

  Array.isArray(data) && data?.filter(res => res[filterColumn] != null).map(item => {
    let filterObj = {
      name: item[filterColumn],
      code: item[filterColumn]
    }
    filterArray.push(filterObj)

  });
  return filterArray || []
  // return filterArray.filter((set => f => !set.has(f.value) && set.add(f.value))(new Set))
}


export const mergeDataDrilldown = (level1Data, level2Data, level3Data, level4Data,level5Data) => {

  let data1 = JSON.parse(JSON.stringify(level1Data));
  let data2 = JSON.parse(JSON.stringify(level2Data));
  let data3 = JSON.parse(JSON.stringify(level3Data));
  let data4 = JSON.parse(JSON.stringify(level4Data));
  let data5 = JSON.parse(JSON.stringify(level5Data));


  let mergedData = [];
  data1 && data1.map(item => { item.depth = 1; item["metricType"] = "number"; mergedData.push(item) })
  data2 && data2.map(item => { item.depth = 2; item["metricType"] = "number"; mergedData.push(item) })
  data3 && data3.map(item => { item.depth = 3; item["metricType"] = "number"; mergedData.push(item) })
  data4 && data4.map(item => { item.depth = 4; item["metricType"] = "number"; mergedData.push(item) })
  data5 && data5.map(item => { item.depth = 5; item["metricType"] = "number"; mergedData.push(item) })

  return mergedData //? mergedData.filter(item =>  (this.state.selectedMetric.toUpperCase() === item.metric_name.toUpperCase()) && ((this.state.financialYear && this.state.financialYear.length === 0) ?  [2023].includes(item.Year):this.state.financialYear.includes(item.Year))) :[]
}


export const getSankeyData = (level1Data = [], level2Data = [], level3Data = [], level4Data = [],level5Data = [], nestedFields = [], valueFields = [], shareFields = []) => {
  // let { level1Data, level2Data, level3Data, level4Data, } = props;
  // debugger;

  let data1 = JSON.parse(JSON.stringify(level1Data));
  let data2 = JSON.parse(JSON.stringify(level2Data));
  let data3 = JSON.parse(JSON.stringify(level3Data));
  let data4 = JSON.parse(JSON.stringify(level4Data));
  let data5 = JSON.parse(JSON.stringify(level5Data));


  const mergedData = mergeDataDrilldown(data1, data2, data3, data4,data5)
  // var lastLevelData = data4 || data3 || data2 || data1 || [];

  var lastLevelData = data5 || data4 || data3 || data2 || data1 || [];
  // let lastLevelData = []
  // if (data7.length > 0) {
  //   var lastLevelData = data7 || data6 || data5 || data4 || data3 || data2 || data1 || [];
  // } else if (data6.length > 0) {
  //   var lastLevelData = data6 || data5 || data4 || data3 || data2 || data1 || [];
  // } else if (data5.length > 0) {
  //   var lastLevelData = data5 || data4 || data3 || data2 || data1 || [];
  // } else if (data4.length > 0) {
  //   var lastLevelData = data4 || data3 || data2 || data1 || [];
  // } else {
  //   var lastLevelData = data3 || data2 || data1 || data1 || [];
  // }

  const getColor = (item) => {
    let color = "#F0AF0787"
    if (item["value"] > item["py_value"]) {
      color = "#03832F99"
    } else if (item["value"] < item["py_value"]) {
      color = "#F0074D87"
    }
    return color;
  }

  var finalObj = {}
  mergedData.map(item => {
    var depth = item.depth; var key = "", value = "", color = "", share = "";
    if (depth === 1) {
      key = item[nestedFields[depth - 1]];
      value = item["Sales"]
      // share = item["Totalvalue"]
    }
    else if (depth === 2) {
      key = item[nestedFields[depth - 1]] + "_" + item[nestedFields[depth - 2]];
      value = item["Sales"]
      // share = item["Totalvalue"]
    } else if (depth === 3) {
      key = item[nestedFields[depth - 1]] + "_" + item[nestedFields[depth - 2]] + "_" + item[nestedFields[depth - 3]];
      value = item["Sales"]
      // share = item["Totalvalue"]
    }
    else if (depth === 4) {
      key = item[nestedFields[depth - 1]] + "_" + item[nestedFields[depth - 2]] + "_" + item[nestedFields[depth - 3]] + "_" + item[nestedFields[depth - 4]];
      value = item["Sales"]
      // share = item["Totalvalue"]
    }
    else if (depth === 5) {
      key = item[nestedFields[depth - 1]] + "_" + item[nestedFields[depth - 2]] + "_" + item[nestedFields[depth - 3]] + "_" + item[nestedFields[depth - 4]] + "_" + item[nestedFields[depth - 5]];
      value = item["Sales"]
      // share = item["Totalvalue"]
    }
    else if (depth === 6) {
      key = item[nestedFields[depth - 1]] + "_" + item[nestedFields[depth - 2]] + "_" + item[nestedFields[depth - 3]] + "_" + item[nestedFields[depth - 4]] + "_" + item[nestedFields[depth - 5]] + "_" + item[nestedFields[depth - 6]];
      value = item["Sales"]
      // share = item["Totalvalue"]
    }
    else if (depth === 7) {
      key = item[nestedFields[depth - 1]] + "_" + item[nestedFields[depth - 2]] + "_" + item[nestedFields[depth - 3]] + "_" + item[nestedFields[depth - 4]] + "_" + item[nestedFields[depth - 5]] + "_" + item[nestedFields[depth - 6]] + "_" + item[nestedFields[depth - 7]];
      value = item["Sales"]
      // share = item["Totalvalue"]
    }
    color = getColor(item)
    finalObj[key] = value
    finalObj[key + "_actual"] = value
    finalObj[key + "_color"] = color
  });


  lastLevelData.map(item => {
    item["metricType"] = "number"
    item["actual"] = finalObj[item[nestedFields[0]] + "_actual"]
    item[valueFields[0]] = finalObj[item[nestedFields[0]]] ? Number(finalObj[item[nestedFields[0]]]) : 0
    item[valueFields[1]] = finalObj[item[nestedFields[1]] + "_" + item[nestedFields[0]]] ? Number(finalObj[item[nestedFields[1]] + "_" + item[nestedFields[0]]]) : 0
    item[valueFields[2]] = finalObj[item[nestedFields[2]] + "_" + item[nestedFields[1]] + "_" + item[nestedFields[0]]] ? Number(finalObj[item[nestedFields[2]] + "_" + item[nestedFields[1]] + "_" + item[nestedFields[0]]]) : 0
    item[valueFields[3]] = finalObj[item[nestedFields[3]] + "_" + item[nestedFields[2]] + "_" + item[nestedFields[1]] + "_" + item[nestedFields[0]]] ? Number(finalObj[item[nestedFields[3]] + "_" + item[nestedFields[2]] + "_" + item[nestedFields[1]] + "_" + item[nestedFields[0]]]) : 0
    item[valueFields[4]] = finalObj[item[nestedFields[4]] + "_" + item[nestedFields[3]] + "_" + item[nestedFields[2]] + "_" + item[nestedFields[1]] + "_" + item[nestedFields[0]]] ? Number(finalObj[item[nestedFields[4]] + "_" + item[nestedFields[3]] + "_" + item[nestedFields[2]] + "_" + item[nestedFields[1]] + "_" + item[nestedFields[0]]]) : 0
    item[valueFields[5]] = finalObj[item[nestedFields[5]] + "_" + item[nestedFields[4]] + "_" + item[nestedFields[3]] + "_" + item[nestedFields[2]] + "_" + item[nestedFields[1]] + "_" + item[nestedFields[0]]] ? Number(finalObj[item[nestedFields[5]] + "_" + item[nestedFields[4]] + "_" + item[nestedFields[3]] + "_" + item[nestedFields[2]] + "_" + item[nestedFields[1]] + "_" + item[nestedFields[0]]]) : 0
    item[valueFields[6]] = finalObj[item[nestedFields[6]] + "_" + item[nestedFields[5]] + "_" + item[nestedFields[4]] + "_" + item[nestedFields[3]] + "_" + item[nestedFields[2]] + "_" + item[nestedFields[1]] + "_" + item[nestedFields[0]]] ? Number(finalObj[item[nestedFields[6]] + "_" + item[nestedFields[5]] + "_" + item[nestedFields[4]] + "_" + item[nestedFields[3]] + "_" + item[nestedFields[2]] + "_" + item[nestedFields[1]] + "_" + item[nestedFields[0]]]) : 0

    item["color_1"] = finalObj[item[nestedFields[0]] + "_color"]
    item["color_2"] = finalObj[item[nestedFields[1]] + "_" + item[nestedFields[0]] + "_color"]
    item["color_3"] = finalObj[item[nestedFields[2]] + "_" + item[nestedFields[1]] + "_" + item[nestedFields[0]] + "_color"]
    item["color_4"] = finalObj[item[nestedFields[3]] + "_" + item[nestedFields[2]] + "_" + item[nestedFields[1]] + "_" + item[nestedFields[0]] + "_color"]
    item["color_5"] = finalObj[item[nestedFields[4]] + "_" + item[nestedFields[3]] + "_" + item[nestedFields[2]] + "_" + item[nestedFields[1]] + "_" + item[nestedFields[0]] + "_color"]
    item["color_6"] = finalObj[item[nestedFields[5]] + "_" + item[nestedFields[4]] + "_" + item[nestedFields[3]] + "_" + item[nestedFields[2]] + "_" + item[nestedFields[1]] + "_" + item[nestedFields[0]] + "_color"]
    item["color_7"] = finalObj[item[nestedFields[6]] + "_" + item[nestedFields[5]] + "_" + item[nestedFields[4]] + "_" + item[nestedFields[3]] + "_" + item[nestedFields[2]] + "_" + item[nestedFields[1]] + "_" + item[nestedFields[0]] + "_color"]

  });


  return lastLevelData;
}


export const pivotData = (trendAnalysisChart, selectedBreakdown) => {
  // const dynamicKey = (selectedBreakdown?.code).toUpperCase();

  return trendAnalysisChart.map(curr => {
      const pivotKey = curr[selectedBreakdown];

      return {
          ...curr,
          [pivotKey]: curr.VALUE
      };
  });
}