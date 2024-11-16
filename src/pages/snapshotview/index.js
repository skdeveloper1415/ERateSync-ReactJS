import React, { useState } from "react";
import Layout from "../../components/common/layout/layout";
import Proximityprospect from "./proximityprospect";
import Transactions from "./transactions";
import Broadband from "./broadband";
import Alignment from "./alignment";
import Tenureanalysis from "./tenureanalysis";
import Mapview from "./mapview";
import SideChart from "./sidechart";
import SnapshotFooter from "../../components/snapshotfooter";
import Snapshotfilter from "../../components/snapshotfilter";

export default function Snapshotview() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Layout
      pageTitle="Snapshot View"
      pageSubTitle="Sales"
      leftPadding={false}
      tabShow={true}
      tabName={[
        "Proximity to Prospect",
        "Transactions",
        "Broadband",
        "Alignment",
        "Tenure Analysis",
      ]}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <div className="relative">
        <Mapview activeTab={activeTab} />
        <div className="pl-[133px] 3xl:pl-[6.927vw] pt-[113px] 3xl:pt-[5.885vw] absolute left-0 top-0 z-[999]">
          {activeTab === 0 ? (
            <>
              <Proximityprospect />
            </>
          ) : null}
          {activeTab === 1 ? (
            <>
              <Transactions />
            </>
          ) : null}
          {activeTab === 2 ? (
            <>
              <Broadband />
            </>
          ) : null}
          {activeTab === 3 ? (
            <>
              <Alignment />
            </>
          ) : null}
          {activeTab === 4 ? (
            <>
              <Tenureanalysis />
            </>
          ) : null}
        </div>
        <div className="pl-[133px] 3xl:pl-[6.927vw] z-[9999] absolute top-[200px] left-10">
          <Snapshotfilter/>

        </div>
        <div className="sticky bottom-0 pl-[80px] 3xl:pl-[4.167vw] z-[9999]">
          <SnapshotFooter />
        </div>

       
          <div className="pt-[113px] 3xl:pt-[5.885vw] pr-[14px] 3xl:pr-[0.729vw] absolute right-0 top-0 z-[999]">
            <SideChart activeTab={activeTab} />
          </div>
        
      </div>
    </Layout>
  );
}
