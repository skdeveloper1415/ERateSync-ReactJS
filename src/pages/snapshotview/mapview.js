import React, { useState } from "react";
// import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import Pointone from "../../assets/images/map-icon/1.png";
import Pointtow from "../../assets/images/map-icon/2.png";
import Pointthree from "../../assets/images/map-icon/3.png";
import Pointfour from "../../assets/images/map-icon/1.png";
import Pointfive from "../../assets/images/map-icon/1.png";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { Checkbox } from "primereact/checkbox";

export default function MapView({ setVisibleRight, activeTab }) {
  const [checked, setChecked] = useState(false);
  // markers
  const markers = [
    {
      geocode: [48.86, 2.3522],
    },
    {
      geocode: [48.85, 2.3522],
    },
    {
      geocode: [48.87, 2.37],
    },
    {
      geocode: [48.86, 2.37],
    },
    {
      geocode: [48.84, 2.37],
    },
  ];

  const customIcon = new Icon({
    iconUrl: Pointone,
    iconSize: [44, 44],
  });

  const customIcon2 = new Icon({
    iconUrl: Pointtow,
    iconSize: [44, 44],
  });

  const customIcon3 = new Icon({
    iconUrl: Pointthree,
    iconSize: [44, 44],
  });

  const customIcon4 = new Icon({
    iconUrl: Pointfour,
    iconSize: [44, 44],
  });

  const customIcon5 = new Icon({
    iconUrl: Pointfive,
    iconSize: [44, 44],
  });

  const handleMarkerClick = () => {
    setVisibleRight(true);
  };

  return (
    <div>
      <MapContainer
        center={[48.8566, 2.3522]}
        zoom={13}
        className="map-container h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker, index) => (
          <Marker
            key=""
            position={marker.geocode}
            eventHandlers={{ click: handleMarkerClick }}
            icon={
              index === 0
                ? customIcon
                : index === 1
                ? customIcon2
                : index === 2
                ? customIcon3
                : index === 3
                ? customIcon4
                : customIcon5
            }
          >
          {activeTab === 0 ?
           null :
           <Tooltip  sticky>
           {activeTab === 1 ? (
             <>
                    <div className="">
                      <div className=" w-[400px] xl:w-[400px] 2xl:w-[450px] 3x:w-[450px]">
                        <div className="">
                          <div className="flex items-center gap-[16px] xl:gap-[16px] 3xl:gap-[0.833vw]">
                            <div className="gap-[16px] p-[6px] xl:p-[6px] 3xl:p-[0.313vw] bg-[#FDF2F8] rounded-lg">
                              <div className="text-[#4E0922] text-[14px] xl:text-[12px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium"><i className="esspd-ai-icon mr-[8px]" />Push to Ai</div>
                            </div>
                            <div className="gap-[16px] p-[6px] xl:p-[6px] 3xl:p-[0.313vw] bg-[#FDF2F8] rounded-lg">
                              <div className="text-[#4E0922] text-[14px] xl:text-[12px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium"><i className="esspd-book mr-[8px]" />Push to Workbook</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Entity Name</div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">ABC School 123</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Entity Type</div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">School district</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Student Count</div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">500</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Requested ($) </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">$8,000</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Discount %</div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">70%</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">USAC Share</div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">$5,600</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Entity Share</div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">$2,400</div>
                            </div>
                          </div>

                          <div className="border-b border-[#E5E7EB]">
                            <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw]">
                              <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold"><i className="esspd-circle-minus mr-[8px]" />Spend</div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">$3,000</div>
                              </div>
                            </div>

                            <div className="bg-[#F5F6F7]">
                              <div className="">
                                <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                                  <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.729vw] font-normal ml-[30px]">Hardware</div>
                                  <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.729vw] font-normal">$1,000</div>
                                </div>
                              </div>

                              <div className="">
                                <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                                  <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.729vw] font-normal ml-[30px]">Service 1</div>
                                  <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.729vw] font-normal">$1,000</div>
                                </div>
                              </div>

                              <div className="">
                                <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                                  <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.729vw] font-normal ml-[30px]">Service 2</div>
                                  <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.729vw] font-normal">$500</div>
                                </div>
                              </div>

                              <div className="">
                                <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                                  <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.729vw] font-normal ml-[30px]">Service 3</div>
                                  <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.729vw] font-normal">$500</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-b border-[#E5E7EB]">
                            <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw]">
                              <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold"><i className="esspd-circle-minus mr-[8px]" />Avg Upgrade</div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">500 Days</div>
                              </div>
                            </div>

                            <div className="bg-[#F5F6F7]">
                              <div className="">
                                <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                                  <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.729vw] font-normal ml-[30px]">Hardware</div>
                                  <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.729vw] font-normal">1000 Days</div>
                                </div>
                              </div>

                              <div className="">
                                <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                                  <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.729vw] font-normal ml-[30px]">Service 1</div>
                                  <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.729vw] font-normal">250 Days</div>
                                </div>
                              </div>

                              <div className="">
                                <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                                  <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.729vw] font-normal ml-[30px]">Service 2</div>
                                  <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.729vw] font-normal">250 Days</div>
                                </div>
                              </div>

                              <div className="">
                                <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                                  <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.729vw] font-normal ml-[30px]">Service 3</div>
                                  <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.729vw] font-normal">500 Days</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Bear %</div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">$2,400</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
             </>
           ) : null}

           {activeTab === 2 ? (
             <>
                    <div className="">
                      <div className="w-[400px] xl:w-[400px] 2xl:w-[450px] 3x:w-[450px]">
                        <div className="">
                          <div className="flex items-center gap-[16px] xl:gap-[16px] 3xl:gap-[0.833vw]">
                            <div className="gap-[16px] p-[6px] xl:p-[6px] 3xl:p-[0.313vw] bg-[#FDF2F8] rounded-lg">
                              <div className="text-[#4E0922] text-[14px] xl:text-[12px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium"><i className="esspd-ai-icon mr-[8px]" />Push to Ai</div>
                            </div>
                            <div className="gap-[16px] p-[6px] xl:p-[6px] 3xl:p-[0.313vw] bg-[#FDF2F8] rounded-lg">
                              <div className="text-[#4E0922] text-[14px] xl:text-[12px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium"><i className="esspd-book mr-[8px]" />Push to Workbook</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Entity Name</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">ABC School 123</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Entity Type</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">School district</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Service Provider</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">XYZ Corp</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Start Date</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">45184</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Max Speed</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">300 MBPS</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Min Speed</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">200 MPBS</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Price</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">$200</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Frequency</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">Monthly</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">No. of Bidders</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">5</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Max Bid ($)</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">$300</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Min Bid ($)</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">$200</div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
             </>
           ) : null}

           {activeTab === 3 ? (
             <>
                    <div className="">
                      <div className="w-[400px] xl:w-[400px] 2xl:w-[450px] 3x:w-[450px]">
                        <div className="">

                          <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Alignment Score</div>

                          <div className="flex items-center gap-[16px] xl:gap-[16px] 3xl:gap-[0.833vw] pt-[16px] xl:pt-[16px] 3xl:pt-[0.833vw]">
                            <div className="gap-[16px] p-[6px] xl:p-[6px] 3xl:p-[0.313vw] bg-[#FDF2F8] rounded-lg">
                              <div className="text-[#4E0922] text-[14px] xl:text-[12px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium"><i className="esspd-ai-icon mr-[8px]" />Push to Ai</div>
                            </div>
                            <div className="gap-[16px] p-[6px] xl:p-[6px] 3xl:p-[0.313vw] bg-[#FDF2F8] rounded-lg">
                              <div className="text-[#4E0922] text-[14px] xl:text-[12px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium"><i className="esspd-book mr-[8px]" />Push to Workbook</div>
                            </div>
                          </div>

                          <div className=" py-[16px] xl:py-[16px] 3xl:py-[0.833vw]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Parameters</div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Alignment Score</div>
                            </div>
                          </div>

                          <div className="border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Tech Refresh Frequency</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">2</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">C2 Funding Availability</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">2</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Stakeholders Change Frequency</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">1</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Device Up-To Date Status</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">1</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Product Alignmnet To Previous RFP</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">1</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Technology Adoption</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">1</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Penetrtion in the Area</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">1</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Free & Reduced Lunch Discount</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">1</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Total Alignment Score</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">1</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw] border-b border-[#E5E7EB]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">Max Bid ($)</div>
                              </div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">$300</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw]">
                            <div className="flex justify-around items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">5 Highest</div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-semibold">1 Lowest</div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
             </>
           ) : null}

           {activeTab === 4 ? (
             <>
                    <div className="">
                      <div className="w-[600px] xl:w-[600px] 2xl:w-[600px] 3x:w-[560px]">
                        <div className="">

                          <div className="flex items-center gap-[16px] xl:gap-[16px] 3xl:gap-[0.833vw]">
                            <div className="gap-[16px] p-[6px] xl:p-[6px] 3xl:p-[0.313vw] bg-[#FDF2F8] rounded-lg">
                              <div className="text-[#4E0922] text-[14px] xl:text-[12px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium"><i className="esspd-ai-icon mr-[8px]" />Push to Ai</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="text-[16px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[0.833vw] font-semibold">Entity Contact Details</div>
                              <div className="flex items-center gap-[10px]">
                                <div className="gap-[16px] p-[6px] xl:p-[6px] 3xl:p-[0.313vw] bg-[#1F2A37] rounded-lg">
                                  <div className="text-[#FFF] text-[12px] xl:text-[10px] 2xl:text-[14px] 3xl:text-[0.729vw] font-medium">Admin</div>
                                </div>
                                <div className="gap-[16px] p-[6px] xl:p-[6px] 3xl:p-[0.313vw] bg-[#FFF] rounded-lg">
                                  <div className="text-[#1F2A37] text-[12px] xl:text-[10px] 2xl:text-[14px] 3xl:text-[0.729vw] font-medium">Technical</div>
                                </div>
                                <div className="gap-[16px] p-[6px] xl:p-[6px] 3xl:p-[0.313vw] bg-[#FFF] rounded-lg">
                                  <div className="text-[#1F2A37] text-[12px] xl:text-[10px] 2xl:text-[14px] 3xl:text-[0.729vw] font-medium">Consultant</div>
                                </div>
                                <div className="gap-[16px] p-[6px] xl:p-[6px] 3xl:p-[0.313vw] bg-[#FFF] rounded-lg">
                                  <div className="text-[#1F2A37] text-[12px] xl:text-[10px] 2xl:text-[14px] 3xl:text-[0.729vw] font-medium">Supplier</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="">
                            <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">Entity Details:</div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw]">
                            <div className="flex items-center gap-[10px]">
                              <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">ABS School District (no-120368)</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw]">
                            <div className="flex items-center gap-[10px]">
                              <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">4 High Street District, Suite 175, North Andover, MA, 01845</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">Website: abcsd.edu</div>
                              </div>
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">Phone: 978-557-5409</div>
                              </div>
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">Ext: NA</div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw]">
                            <div className="flex items-center gap-[10px]">
                              <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">4 High Street District, Suite 175, North Andover, MA, 01845</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw]]">
                            <div className="flex justify-between items-center mb-[8px] xl:mb-[8px] 3xl:mb-[0.417vw]">
                              <div className="flex items-center gap-[10px]">
                                <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">Paul Simon</div>
                              </div>
                              <div className="flex items-center gap-[16px] xl:gap-[16px] 3xl:gap-[0.833vw]">
                                <div className="gap-[16px] p-[6px] xl:p-[6px] 3xl:p-[0.313vw] bg-[#ECEFF3] rounded-md">
                                  <div className="text-[#2C363F] text-[14px] xl:text-[12px] 2xl:text-[15px] 3xl:text-[0.833vw] font-normal">Tenure: 3 Yrs, 5 Month</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw]">
                            <div className="flex items-center gap-[10px]">
                              <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">Phone: 978-557-5409</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw]">
                            <div className="flex items-center gap-[10px]">
                              <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">Ext: NA</div>
                            </div>
                          </div>

                          <div className="mt-[8px] xl:mt-[8px] 3xl:mt-[0.417vw]">
                            <div className="flex items-center gap-[10px]">
                              <div className="custcheck custchecknew"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                              <div className="text-[16px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] font-normal">Email: psimon@abcsd.edu</div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
             </>
           ) : null}
          
         </Tooltip>          
           }
            
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
