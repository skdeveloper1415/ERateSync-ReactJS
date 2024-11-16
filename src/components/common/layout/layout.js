import React from 'react';
import LeftSideBar from './leftnav.component';
import TopNav from './topnav.component';


export default function Layout({children, ...pageProps}) {
    const {leftPadding=true} = pageProps
    return (
        // < !--Sidebar -- >
        <div>
            <div className="area"></div>

            <LeftSideBar /> 
             <TopNav pageTitle={pageProps.pageTitle} pageSubTitle={pageProps.pageSubTitle} tabShow={pageProps.tabShow} tabName={pageProps.tabName} 
             activeTab={pageProps.activeTab} setActiveTab={pageProps.setActiveTab}
             />
            <div className={`${pageProps.tabShow === true && leftPadding === false ? '' : pageProps.tabShow === true && leftPadding === true ? 'pt-[122px] 3xl:pt-[7vw] pl-[130px] pr-[30px] xl:pr-[1.083vw] pb-[30px] xl:pb-[60px] 3xl:pb-[3.125vw]' : 'pt-[100px] 3xl:pt-[5.625vw] pl-[130px] pr-[30px] xl:pr-[1.083vw] pb-[30px] xl:pb-[60px] 3xl:pb-[3.125vw]'}`}>
             <main>{children}</main>

            </div>
        </div>
    )
}