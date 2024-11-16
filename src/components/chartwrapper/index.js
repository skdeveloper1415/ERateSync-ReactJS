import React, { useState, useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { CSVLink } from "react-csv";
import { useReactToPrint } from "react-to-print";
import ReactFullscreen from 'react-easyfullscreen';
import ExcelDownloader from './exportn/ExcelDownloader';
import { Link } from 'react-router-dom';

export default function ChartWrapper(props) {
  const [activeTab, setActiveTab] = useState(1);
  // const [infoIcon, setInfoIcon] = useState(props.infoIcon);
  // const [dropdown2, setDropdown2] = useState(props.dropdown2);
  // const [dropdown1, setDropdown1] = useState(props.dropdown1);
  // const [bulbIcon, setBulbIcon] = useState(props.bulbIcon);
  const [ExportIcon] = useState(props.ExportIcon);
  // const [graphIcon, setGraphIcon] = useState(props.graphIcon);
  const [filterIcon] = useState(props.FilterIcon);
  const [wrappertabs] = useState(props.WrapperTabs);
  // const [searchIcon, setSearchIcon] = useState(props.SearchIcon);
  // const [downloadIcon, setDownloadIcon] = useState(props.downloadIcon);

  const op = useRef(null);
  const Bots = useRef();
  const handleClick = (e) => {
    document.querySelector('body').classList.toggle('echartHeight');
  }

  //Print Function
  const handlePrintBots = useReactToPrint({
    content: () => Bots.current,
  });

  const { formatDownloadedData = [], formatFileName = 'Demo', 
    //isDetailedExport = false, disablepdf = false, title = 'abc', subtitle = 'abc', placeholder1 = 'Dimention', placeholder2 = 'Dimention2', data = [] 
  } = props;

  const headers = [
    { label: "First Name", key: "id" },
    { label: "Last Name", key: "name" },
    { label: "Email", key: "value" },
    { label: "Age", key: "age" }
  ];

  const csvReport = {
    data: formatDownloadedData,
    headers: headers,
    filename: `${formatFileName}.csv`
  };

  // const [selectedCity, setSelectedCity] = useState(null);
  // const cities = [
  //   { name: "New York", code: "NY" },
  //   { name: "Rome", code: "RM" },
  // ];



  return (
    <div className='h-full'>


      <ReactFullscreen>
        {({ ref, onToggle, onExit }) => (
          <div ref={ref} className=' h-full fullScreen'>
            <div className='h-full'>
              <div className={`flex items-center justify-between ${props.classname}`}>
                <div>
                  <div className={`text-[#4B586E] dark:text-[#FFF] text-[16px] xl:text-[14px] 3xl:text-[0.938vw] font-semibold  ${props.text}`}>
                    <p>{props.title}</p>
                  </div>
                  <div className={`text-[#24262D] text-[18px] xl:text-[0.729vw] font-normal  ${props.text}`}><p>{props.subtitle}</p></div>
                </div>
                <div className='space-x-2 optionbtn flex items-center wrapper_icons  custm_dropdwon text-[#6C768B] dark:text-[#B3B9C6]'>
                  {
                    // dropdown1 === true ?
                    //   <Dropdown
                    //     value={selectedCity}
                    //     onChange={(e) => setSelectedCity(e.value)}
                    //     options={cities}
                    //     optionLabel="name"
                    //     placeholder={props.placeholder1}
                    //     className="w-full xl:w-[10.417vw] md:h-[40px]"
                    //     style={{ border: "1px solid #DDE1EA", borderRadius: "8px" }}
                    //   />
                    //   : null
                  }
                  {
                    // dropdown2 === true ?
                    //   <Dropdown
                    //     value={selectedCity}
                    //     onChange={(e) => setSelectedCity(e.value)}
                    //     options={cities}
                    //     optionLabel="name"
                    //     placeholder={props.placeholder2}
                    //     className="w-full xl:w-[10.417vw] md:h-[40px]"
                    //     style={{ border: "1px solid #DDE1EA", borderRadius: "8px" }}
                    //   />
                    //   : null
                  }

                  {
                    wrappertabs === true ?
                      <>
                      <div className='2xl:rounded-[0.417vw] rounded-lg overflow-hidden flex items-center'>
                      <button onClick={() => setActiveTab(0)} className={`${activeTab === 0 ? 'text-white bg-[#383B41]' : 'text-[#9CA1AB] bg-[#F5F6F7]'} block 2xl:text-[0.729vw] text-xs font-medium leading-5 2xl:leading-[1.094vw] 2xl:py-[0.208vw] py-1 2xl:px-[0.521vw] px-2.5`}>Bottom 10</button>
                      <button onClick={() => setActiveTab(1)} className={`${activeTab === 1 ? 'text-white bg-[#383B41]' : 'text-[#9CA1AB] bg-[#F5F6F7]'} block 2xl:text-[0.729vw] text-xs font-medium leading-5 2xl:leading-[1.094vw] 2xl:py-[0.208vw] py-1 2xl:px-[0.521vw] px-2.5`}>Top 10</button>
                      </div>
                      </>
                      : null
                  }
                  
                  {
                    filterIcon === true ?
                      <Link to={'/'} className='leading-none bg-[#F5F6F7] w-6 h-6 rounded-lg flex items-center justify-center text-[10px]'><i className='maid-arrow-up-right'></i></Link>
                      : null
                  }
                  {
                    // graphIcon === true ?
                    //   <Link to={'/'} className='leading-none'><i className='finance-graph text-[14px] xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                    //   : null
                  }
                  {
                    // downloadIcon === true ?
                    //   <Link to={'/'} className='leading-none'><i className='finance-lightbulb text-[14px] xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                    //   : null
                  }
                  {
                    // bulbIcon === true ?
                    //   <Link to={'/'} className='leading-none'><i className='finance-note-download text-[14px] xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                    //   : null
                  }
                  {
                    // infoIcon === true ?
                    //   <Link to={'/'} className='leading-none'><i className='finance-info text-[14px] xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                    //   : null
                  }
                  {
                    props.maximizeIcon === true ?
                      <Link to={'/'}
                        className='leading-none'
                        onClick={() => {
                          onToggle();
                        }}
                      >
                        <i onClick={handleClick} className='finance-pluse text-[14px] xl:text-[0.94vw] align-top'></i></Link>
                      : null
                  }
                  {
                    ExportIcon === true ?
                      <div>
                        <div className="card flex">
                          <button onClick={(e) => op.current.toggle(e)}>
                            <div className="cursor-pointer leading-none bg-[#F5F6F7] w-6 h-6 rounded-lg flex items-center justify-center">
                              <i className='maid-three-dots text-[2.5px] align-top' title='Click here for multiple option'></i>
                            </div>
                          </button>
                          <OverlayPanel ref={op} className="dropdownList custoverly">
                            <div className='flex flex-col text-left gap-y-2 wrapperOption text-[14px] xl:text-[0.730vw] text-[#363A44] dark:text-[#B3B9C6]'>
                              <button className='flex gap-2 items-center hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200' to={'/'} onClick={() => { handlePrintBots(); onExit(); }}>
                                <i className='pi pi-print '></i>
                                <span>Print to pdf</span>
                              </button>
                              <button className='flex gap-2 items-center hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200'>
                                <i className='pi pi-download '></i>
                                <CSVLink {...csvReport}>Export to CSV</CSVLink>
                              </button>
                              <div className='flex gap-2 items-center cursor-pointer hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200'>
                                <i className='pi pi-download '></i>
                                <ExcelDownloader data={formatDownloadedData} />
                              </div>
                              {/* <div className='flex gap-2 items-center cursor-pointer hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200'>
                                <i className='pi pi-download '></i>
                                <PdfDownloader
                                  title={formatFileName}
                                  isDetailedExport={isDetailedExport}
                                  data={formatDownloadedData}
                                  id={props.id}
                                /></div> */}
                            </div>
                          </OverlayPanel>
                        </div>
                      </div>
                      : null
                  }
                </div>
              </div>
              <div ref={Bots}>
                {props.data}
              </div>
            </div>
          </div>
        )}
      </ReactFullscreen>
    </div>
  )
}