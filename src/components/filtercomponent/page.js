import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from "primereact/dropdown";
import { pivotFilterArray } from "../utils";
import { MultiSelect } from 'primereact/multiselect';
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../../store/slices/globalState";


export default function FilterComponentGeospatial({ data = [], drilldownData = [], pageName = 'Summary', isSalesDistrict = true, isOrderSource = true, isChannelType = true, isWeek = true }) {
  const dispatch = useDispatch();
  const months = useSelector(state => state.global.months)
  const weeks = useSelector(state => state.global.weeks)
  const years = useSelector(state => state.global.years)
  const SalesDistrict = useSelector(state => state.global.salesDistrict)
  const ChannelType = useSelector(state => state.global.ChannelType)
  const OrderSource = useSelector(state => state.global.OrderSource)
  const [trigger, setTrigger] = useState(true);
  const [ingredient, setIngredient] = useState('');
  const [selectedYear, setSelectedYear] = useState(null);
  const [channeltype, setSelectedChannelType] = useState(null);
  const [ordersource, setSelectedOrderSource] = useState(null);
  const [salesdistrict, setSelectedSalesDistrict] = useState(null);
  const [Month, setSelectedMonth] = useState(null);
  const [Week, setSelectedWeek] = useState(null);

  const [year, setYear] = useState([])
  const [month, setMonth] = useState([])
  const [salesDistrict, setSalesDistrict] = useState([])
  const [orderSource, setOrderSource] = useState([])
  const [channelType, setChannelType] = useState([])
  const [week, setWeek] = useState([])
  // const year = [
  //   { name: "All", },
  //   { name: "1", },
  //   { name: "2", },
  // ];

  let dependency = pageName === "Summary" ? data : drilldownData

  useEffect(() => {
    if (pageName === "Summary") {
      if (data?.length > 0) {
        let yearFilter = data?.[45]?.data || [];
        const yearData = pivotFilterArray(yearFilter, "Year");
        setYear(yearData);  // Set state for years
        dispatch(setState({ years: yearData }));
  
        let monthFilter = data?.[46]?.data || [];
        const updatedMonthsData = monthFilter.map(item => ({
          Month: item.Month.trim(),
        }));
        const monthData = pivotFilterArray(updatedMonthsData, "Month");
        setMonth(monthData);
        const monthCustomise = monthData?.filter(item => item.name !== "April" && item.name !== "August");
        dispatch(setState({ months: monthCustomise }));
  
        let salesDistrictFilter = data?.[48]?.data || [];
        const updatedSalesDistrictData = salesDistrictFilter.map(item => ({
          "Sales District": item["Sales District"].trim(),
        }));
        const salesDistrictData = pivotFilterArray(updatedSalesDistrictData, "Sales District");
        setSalesDistrict(salesDistrictData);
        const salesDistrictCustomise = salesDistrictData?.filter(item => item.name !== "Arabian Tech Solutions" && item.name !== "Desert Innovations");
        dispatch(setState({ salesDistrict: salesDistrictCustomise }));
  
        let orderSourceFilter = data?.[49]?.data || [];
        const updatedOrderSourceData = orderSourceFilter.map(item => ({
          "Order Source": item["Order Source"].trim(),
        }));
        setOrderSource(pivotFilterArray(updatedOrderSourceData, "Order Source"));
  
        let channelTypeFilter = data?.[47]?.data || [];
        const updatedChannelData = channelTypeFilter.map(item => ({
          "CHANNEL TYPE": item["CHANNEL TYPE"].trim(),
        }));
        const channelTypeData = pivotFilterArray(updatedChannelData, "CHANNEL TYPE");
        setChannelType(channelTypeData);
        dispatch(setState({ ChannelType: channelTypeData }));
      }
    } else if (pageName === "Drilldown") {
      if (drilldownData?.length > 0) {
        let yearFilter = drilldownData?.[1]?.data || [];
        const yearData = pivotFilterArray(yearFilter, "Year");
        setYear(yearData);
        dispatch(setState({ years: yearData }));
  
        let monthFilter = drilldownData?.[2]?.data || [];
        const updatedMonthsData = monthFilter.map(item => ({
          Month: item.Month.trim(),
        }));
        const monthData = pivotFilterArray(updatedMonthsData, "Month");
        setMonth(monthData);
        dispatch(setState({ months: monthData }));
  
        let weekFilter = drilldownData?.[3]?.data || [];
        const updatedWeeksData = weekFilter.map(item => ({
          Week: item.Week.trim(),
        }));
        const weekData = pivotFilterArray(updatedWeeksData, "Week");
        setWeek(weekData);
        dispatch(setState({ weeks: weekData }));
      }
    }
  }, [dependency]); 



  return (
    <div className="bg-[#FFFFFF] border border-[#FFFFFF] mb-[25px] xl:mb-[1.302vw] rounded-[8px] shadow-md shadow-[#0000001A] pl-[12px] 2xl:pl-[0.729vw] max-md:py-3">
      <div className="flex justify-between max-md:gap-y-3" data-aos-anchor-placement="top-center" data-aos-duration="300">
        <div className="flex flex-wrap items-center">
          <div className="flex flex-wrap gap-[4px] items-center">
            <div className="rounded px-3 xl:px-[0.625vw]  py-[8px] xl:py-[0.417vw] cursor-pointer max-w-[200px] hover:max-w-[200px] ease-in duration-300 overflow-hidden bg-[#F6F7F9]">
              <div className="text-[#6B7280] font-normal text-[10px] xl:text-[0.521vw] work-sans-style min-w-max">Year</div>
              <div className="FilterDropdown leading-4">
                {console.log("years",years)}
                <MultiSelect value={years}
                  onChange={(e) => {
                    setSelectedMonth(e.value);
                    dispatch(setState({years : e.value}))
                    setTrigger(!trigger)
                    dispatch(setState({ Trigger: trigger }))
                  }}
                  options={year || []}
                  optionLabel="name"
                  placeholder="2024"
                  maxSelectedLabels={3}
                  style={{ border: "0px solid #F2F4F7" }}
                  // display="chip"
                  className={`min-w-[90px] bg-[#F2F4F7] placeholder:text-[#6C768B] text-[#6C768B] dark:bg-[#272F31] custom-multiselect`} />

                {/* <Dropdown
                  value={Month} onChange={(e) => setSelectedMonth(e.value)}
                  options={year}
                  optionLabel="name"
                  placeholder="2024"
                  className={`min-w-[90px] bg-[#F2F4F7] placeholder:text-[#6C768B] text-[#6C768B] dark:bg-[#272F31]`}
                  panelClassName="customFilter"
                  style={{ border: "0px solid #F2F4F7" }}
                /> */}
              </div>
            </div>
            {/* <div className="rounded px-3 xl:px-[0.625vw]  py-[8px] xl:py-[0.417vw] cursor-pointer max-w-[70px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#F6F7F9]">
              <div className="text-[#767A87] font-normal text-[10px] xl:text-[0.521vw] work-sans-style min-w-max">Quarter</div>
              <div className="FilterDropdown leading-4">
                <Dropdown
                  value={selectedYear} onChange={(e) => setSelectedYear(e.value)}
                  options={year}
                  optionLabel="name"
                  placeholder="All"
                  className={`min-w-[90px] bg-[#F2F4F7] placeholder:text-[#6C768B] text-[#6C768B] dark:bg-[#272F31]`}
                  panelClassName="customFilter"
                  style={{ border: "0px solid #F2F4F7" }}
                />
              </div>
            </div> */}
            {/* <div className="rounded px-3 xl:px-[0.625vw]  py-[8px] xl:py-[0.417vw] cursor-pointer max-w-[70px] hover:max-w-[100px] ease-in duration-300 overflow-hidden bg-[#F6F7F9]">
              <div className="text-[#767A87] font-normal text-[10px] xl:text-[0.521vw] work-sans-style min-w-max">Month</div>
              <div className="FilterDropdown leading-4">
                <Dropdown
                  value={selectedYear} onChange={(e) => setSelectedYear(e.value)}
                  options={month}
                  optionLabel="name"
                  placeholder="All"
                  className={`min-w-[90px] bg-[#F2F4F7] placeholder:text-[#6C768B] text-[#6C768B] dark:bg-[#272F31]`}
                  panelClassName="customFilter"
                  style={{ border: "0px solid #F2F4F7" }}
                />
              </div>
            </div> */}
{console.log("months",years)}
            <div className="rounded px-3 xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] cursor-pointer max-w-[200px] hover:max-w-[200px] ease-in duration-300 overflow-hidden bg-[#F6F7F9]">
              <div className="text-[#767A87] font-normal text-[10px] xl:text-[0.521vw] work-sans-style min-w-max">Month</div>
              <div className="FilterDropdown leading-4">
                <MultiSelect value={months}
                  onChange={(e) => {
                    console.log("event",e)
                    setSelectedYear(e.value)
                    dispatch(setState({months : e.value}))
                    setTrigger(!trigger)
                    dispatch(setState({ Trigger: trigger }))
                  }}
                  options={month}
                  optionLabel="name"
                  placeholder="All"
                  maxSelectedLabels={3}
                  style={{ border: "0px solid #F2F4F7" }}
                  // display="chip"
                  className={`min-w-[90px] bg-[#F2F4F7] placeholder:text-[#6C768B] text-[#6C768B] dark:bg-[#272F31] custom-multiselect`} />
                {/* <MultiSelect
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.value)} 
                  options={month}
                  optionLabel="name"
                  placeholder="All"
                  className={`min-w-[90px] bg-[#F2F4F7] placeholder:text-[#6C768B] text-[#6C768B] dark:bg-[#272F31]`}
                  panelClassName="customFilter"
                  style={{ border: "0px solid #F2F4F7" }}
                  display="chip"
                /> */}
              </div>
            </div>

            {isSalesDistrict && <div className="rounded px-3 xl:px-[0.625vw]  py-[8px] xl:py-[0.417vw] cursor-pointer max-w-[200px] hover:max-w-[200px] ease-in duration-300 overflow-hidden bg-[#F6F7F9]">
              <div className="text-[#767A87] font-normal text-[10px] xl:text-[0.521vw] work-sans-style min-w-max">Sales District </div>
              <div className="FilterDropdown leading-4">
                <MultiSelect value={SalesDistrict}
                  onChange={(e) => {
                    setSelectedSalesDistrict(e.value)
                    dispatch(setState({salesDistrict : e.value}))
                    setTrigger(!trigger)
                    dispatch(setState({ Trigger: trigger }))
                  }}
                  options={salesDistrict}
                  optionLabel="name"
                  placeholder="All"
                  maxSelectedLabels={3}
                  style={{ border: "0px solid #F2F4F7" }}
                  // display="chip"
                  className={`min-w-[90px] bg-[#F2F4F7] placeholder:text-[#6C768B] text-[#6C768B] dark:bg-[#272F31] custom-multiselect`} />
                {/* <Dropdown
                  value={salesdistrict} onChange={(e) => setSelectedSalesDistrict(e.value)}
                  options={salesDistrict}
                  optionLabel="name"
                  placeholder="All"
                  className={`min-w-[120px] bg-[#F2F4F7] placeholder:text-[#6C768B] text-[#6C768B] dark:bg-[#272F31]`}
                  panelClassName="customFilter"
                  style={{ border: "0px solid #F2F4F7" }}
                /> */}
              </div>
            </div>}
            {/* <div className="rounded px-3 xl:px-[0.625vw]  py-[8px] xl:py-[0.417vw] cursor-pointer max-w-[140px] hover:max-w-[165px] ease-in duration-300 overflow-hidden bg-[#F6F7F9]">
              <div className="text-[#767A87] font-normal text-[10px] xl:text-[0.521vw] work-sans-style min-w-max">Distribution Channel</div>
              <div className="FilterDropdown leading-4">
                <Dropdown
                  value={selectedYear} onChange={(e) => setSelectedYear(e.value)}
                  options={year}
                  optionLabel="name"
                  placeholder="All"
                  className={`min-w-[160px] bg-[#F2F4F7] placeholder:text-[#6C768B] text-[#6C768B] dark:bg-[#272F31]`}
                  panelClassName="customFilter"
                  style={{ border: "0px solid #F2F4F7" }}
                />
              </div>
            </div> */}
            {/* <div className="rounded px-3 xl:px-[0.625vw]  py-[8px] xl:py-[0.417vw] cursor-pointer max-w-[110px] hover:max-w-[140px] ease-in duration-300 overflow-hidden bg-[#F6F7F9]">
              <div className="text-[#767A87] font-normal text-[10px] xl:text-[0.521vw] work-sans-style min-w-max">Customer Group</div>
              <div className="FilterDropdown leading-4">
                <Dropdown
                  value={selectedYear} onChange={(e) => setSelectedYear(e.value)}
                  options={year}
                  optionLabel="name"
                  placeholder="All"
                  className={`min-w-[130px] bg-[#F2F4F7] placeholder:text-[#6C768B] text-[#6C768B] dark:bg-[#272F31]`}
                  panelClassName="customFilter"
                  style={{ border: "0px solid #F2F4F7" }}
                />
              </div>
            </div> */}
            {isOrderSource && <div className="rounded px-3 xl:px-[0.625vw]  py-[8px] xl:py-[0.417vw] cursor-pointer max-w-[200px] hover:max-w-[200px] ease-in duration-300 overflow-hidden bg-[#F6F7F9]">
              <div className="text-[#767A87] font-normal text-[10px] xl:text-[0.521vw] work-sans-style min-w-max">Order Source</div>
              <div className="FilterDropdown leading-4">
              <MultiSelect value={OrderSource}
                  onChange={(e) => {
                    setSelectedOrderSource(e.value)
                    dispatch(setState({OrderSource : e.value}))
                    setTrigger(!trigger)
                    dispatch(setState({ Trigger: trigger }))
                  }}
                  options={orderSource}
                  optionLabel="name"
                  placeholder="All"
                  maxSelectedLabels={3}
                  style={{ border: "0px solid #F2F4F7" }}
                  // display="chip"
                  className={`min-w-[90px] bg-[#F2F4F7] placeholder:text-[#6C768B] text-[#6C768B] dark:bg-[#272F31] custom-multiselect`} />
                {/* <Dropdown
                  value={ordersource} onChange={(e) => setSelectedOrderSource(e.value)}
                  options={orderSource}
                  optionLabel="name"
                  placeholder="All"
                  className={`min-w-[120px] bg-[#F2F4F7] placeholder:text-[#6C768B] text-[#6C768B] dark:bg-[#272F31]`}
                  panelClassName="customFilter"
                  style={{ border: "0px solid #F2F4F7" }}
                /> */}
              </div>
            </div>}
            {isChannelType && <div className="rounded px-3 xl:px-[0.625vw]  py-[8px] xl:py-[0.417vw] cursor-pointer max-w-[200px] hover:max-w-[200px] ease-in duration-300 overflow-hidden bg-[#F6F7F9]">
              <div className="text-[#767A87] font-normal text-[10px] xl:text-[0.521vw] work-sans-style min-w-max">Channel Type</div>
              <div className="FilterDropdown leading-4">

              <MultiSelect value={ChannelType}
                  onChange={(e) => {
                    setSelectedChannelType(e.value)
                    dispatch(setState({ChannelType : e.value}))
                    setTrigger(!trigger)
                    dispatch(setState({ Trigger: trigger }))
                  }}
                  options={channelType}
                  optionLabel="name"
                  placeholder="All"
                  maxSelectedLabels={3}
                  style={{ border: "0px solid #F2F4F7" }}
                  // display="chip"
                  className={`min-w-[90px] bg-[#F2F4F7] placeholder:text-[#6C768B] text-[#6C768B] dark:bg-[#272F31] custom-multiselect`} />
                {/* <Dropdown
                  value={channeltype} onChange={(e) => setSelectedChannelType(e.value)}
                  options={channelType}
                  optionLabel="name"
                  placeholder="All"
                  className={`min-w-[140px] bg-[#F2F4F7] placeholder:text-[#6C768B] text-[#6C768B] dark:bg-[#272F31]`}
                  panelClassName="customFilter"
                  style={{ border: "0px solid #F2F4F7" }}
                /> */}
              </div>
            </div>}

            {isWeek && <div className="rounded px-3 xl:px-[0.625vw]  py-[8px] xl:py-[0.417vw] cursor-pointer max-w-[200px] hover:max-w-[200px] ease-in duration-300 overflow-hidden bg-[#F6F7F9]">
              <div className="text-[#767A87] font-normal text-[10px] xl:text-[0.521vw] work-sans-style min-w-max">Week</div>
              <div className="FilterDropdown leading-4">
              <MultiSelect value={weeks}
                  onChange={(e) => {
                    setSelectedWeek(e.value)
                    dispatch(setState({weeks : e.value}))
                    setTrigger(!trigger)
                    dispatch(setState({ Trigger: trigger }))
                  }}
                  options={week}
                  optionLabel="name"
                  placeholder="All"
                  maxSelectedLabels={3}
                  style={{ border: "0px solid #F2F4F7" }}
                  // display="chip"
                  className={`min-w-[90px] bg-[#F2F4F7] placeholder:text-[#6C768B] text-[#6C768B] dark:bg-[#272F31] custom-multiselect`} />
                {/* <Dropdown
                  value={Week} onChange={(e) => setSelectedWeek(e.value)}
                  options={week}
                  optionLabel="name"
                  placeholder="All"
                  className={`min-w-[140px] bg-[#F2F4F7] placeholder:text-[#6C768B] text-[#6C768B] dark:bg-[#272F31]`}
                  panelClassName="customFilter"
                  style={{ border: "0px solid #F2F4F7" }}
                /> */}
              </div>
            </div>}
          </div>
          <div className="border border-[#E4E7E9] py-0.5 px-3 ml-1 rounded-md "><Link to={''} className="inline-block dark:text-[#000000] font-medium text-[#374151] text-xs">Add<i className="maid-plus ml-2" ></i></Link></div>
        </div>

        <div className="flex items-center border-l border-[#E5E7EB]">
          <div className="text-[#6B7280] font-normal text-xs xl:text-[0.625vw] py-2 xl:py-[0.568vw] px-3 xl:px-[0.833vw] flex flex-col items-start leading-tight space-y-[12px] space-y-[0.629vw]">
            <div className="text-[12px] xl:text-[0.729vw] text-[#4B586E] font-medium text-start"> View By</div>
            <div className="radio-view flex justify-start">
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center">
                  <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
                  <label htmlFor="ingredient1" className="ml-2 text-[12px] xl:text-[0.729vw] text-[#4B586E] font-medium">Billed Quantity</label>
                </div>
                <div className="flex items-center">
                  <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
                  <label htmlFor="ingredient2" className="ml-2 text-[12px] xl:text-[0.729vw] text-[#4B586E] font-medium">Sales ($)</label>
                </div>

                <div className="flex items-center">
                  <RadioButton inputId="ingredient4" name="pizza" value="Onion" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Onion'} />
                  <label htmlFor="ingredient4" className="ml-2 text-[12px] xl:text-[0.729vw] text-[#4B586E] font-medium">Gross Margin</label>
                </div>
              </div>
            </div>
          </div>
          <div className="work-sans-style text-right text-[#9CA1AB] space-y-[5px] font-normal text-xs xl:text-[0.625vw] py-2 xl:py-[0.568vw] px-3 xl:px-[0.833vw] flex flex-col items-end leading-tight">
            <i className="maid-arrow-left-line pt-0.5 text-[#9CA1AB]"></i>
            <span>Applied <br></br> Filters</span>
          </div>
          <div className="work-sans-style bg-[#40454A] rounded-tr-[8px] rounded-br-[8px] text-white font-normal text-xs xl:text-[0.625vw] py-2 xl:py-[0.568vw] px-3 xl:px-[1vw] flex gap-4 items-center cursor-pointer h-full" >
            <i className="maid-filter-search text-[18px] xl:text-[1.042vwvw]"></i>
            <span>All <br></br> Filters</span>
          </div>
        </div>
      </div>
    </div>
  );
}
