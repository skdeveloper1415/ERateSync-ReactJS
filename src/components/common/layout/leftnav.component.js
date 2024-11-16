import { Link, useNavigate } from "react-router-dom";
import { React, useState } from "react";
import SimpleBar from "simplebar-react";
import { Button } from 'primereact/button';
import "simplebar-react/dist/simplebar.min.css";
import LogoIcon from '../../../../src/assets/images/left-menu-icons/Logo-small.svg'
import Logo from '../../../../src/assets/images/left-menu-icons/Logo-big.svg'

export default function LeftSideBar() {

  const [activate, setActivate] = useState("");
  const toggleActive = () => {
    setActivate(activate === "active" ? "" : "active");
  };

  return (
    // < !--Sidebar -- >
    <div className="fixed top-0 left-0 z-[99999] max-md:h-full left-menu-mobile-H">
      <div className="w-[96px] lg:hover:w-[280px] bg-white shadow-[0px_24px_48px_-12px_rgba(16,24,40,0.25)] left-menu-h py-4 2xl:py-6 px-4 overflow-hidden max-md:h-full left-menu-mobile" id={activate}>

        <div className="relative h-full">
          <div className="logo_icon pl-2 mb-4" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
            <img src={LogoIcon} alt="logo icon" />
          </div>
          <div className="logo min-w-[222px] pl-2 mb-4">
            <Link to={''}>
              <img src={Logo} alt="logo icon" />
            </Link>
          </div>

          <SimpleBar style={{ maxHeight: "100%", height: "calc(100%)" }}>
            <div data-simplebar>
              {/* <div className="visible lg:hidden">
                <Button icon="pi pi-bars" onClick={toggleActive} style={{ color: '#8F91AD', background: '#FFF', border: '0', padding: '10px', marginLeft: '10px' }}></Button></div> */}
              <ul className="left-menu h-full">
                <li className="divide"></li>
                <li className="dashboard">
                  <Link to={'/snapshotview'}>
                    <span>Snapshot View</span>
                  </Link>
                </li>
                <li className="details">
                  <Link to={'/details470'}>
                    <span>470 Details</span>
                  </Link>
                </li>
                <li className="advancedanalysis">
                  <Link to={''}>
                    <span>Advanced Analysis</span>
                  </Link>
                </li>

                <li className="researchassist">
                  <Link to={'/researchassist'}>
                    <span>Research Assist</span>
                  </Link>
                </li>
                <li className="latestnews">
                  <Link to={''}>
                    <span>Latest News</span>
                  </Link>
                </li>
                <li className="workbook">
                  <Link to={''}>
                    <span>Workbook</span>
                  </Link>
                </li>
              </ul>
            </div>
          </SimpleBar>
          <div className="absolute left-0 right-0 bottom-0">
            <ul className="left-menu hoverNone">
              <li className="divide pb-3"></li>
              <li className="settings">
                <Link to={''}>
                  <span>Settings</span>
                </Link>
              </li>
              <li className="darkMode pb-2">
                <Link to={''}>
                  <span>Dark Theme</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
