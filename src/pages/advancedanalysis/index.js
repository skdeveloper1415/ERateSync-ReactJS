import React, { useState } from "react";
import DrillDownTab from "./drilldowntab";
import TrendTab from "./trendtab";
import CrossDimentionTab from "./crossdimentiontab";
import Layout from "../../components/common/layout/layout";

export default function AdvancedAnalysis() {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <Layout
            pageTitle="Advanced Analysis"
            pageSubTitle="Current Page"
            leftPadding={true}
            tabShow={true}
            tabName={[
                "Drilldown",
                "Trend",
                "Cross Dimension",
            ]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        >
            {activeTab === 0 ? <div><DrillDownTab /></div> : null}
            {activeTab === 1 ? <div><TrendTab /></div> : null}
            {activeTab === 2 ? <div><CrossDimentionTab /></div> : null}
        </Layout>
    )
}