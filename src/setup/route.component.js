//***** Admin ******** /
import { Routes, Route, Navigate } from "react-router-dom";
//Common
import PageNotFound from '../pages/404Page';
// import Landing from "../pages/landing";

// import Charts from "../pages/charts";
// import Summary from "../pages/summary";
// import Drilldown from "../pages/drilldown";
import Details470 from "../pages/details470";
import Snapshotview from "../pages/snapshotview";
import Login from "./auth/login";
import {useIsAuthenticated} from "@azure/msal-react";
import AdvancedAnalysis from "../pages/advancedanalysis";
import Workbookmenu from "../pages/workbookmenu";
import ResearchAssist from '../pages/researchassist'
import Latestnews from "../pages/latestnews";


export default function RouteComponent() {
    const isAuthenticated = useIsAuthenticated();
    console.log("isAuthenticated",isAuthenticated)
    return (
        <Routes>
            {/* <Route exact path="/" element={<Login />} /> */}
            <Route exact path="/" element={isAuthenticated ? <Navigate to="/pages/landing" /> : <Login />} />
            
            {isAuthenticated ? (
                <>
                    {/* <Route path="/pages/landing" element={<Landing />} />
                    <Route path="/pages/charts" element={<Charts />} />
                    <Route path="/pages/summary" element={<Summary />} />
                    <Route path="/pages/drilldown" element={<Drilldown />} /> */}
                </>
            ) : (
                // Redirect to login if not authenticated
                <Route path="*" element={<Navigate to="/" />} />
            )}
            
            
            <Route path="*" element={<PageNotFound />} />
            <Route path="/details470" element={<Details470 />} />
            <Route path="/snapshotview" element={<Snapshotview />} />
            <Route path="/advancedanalysis" element={<AdvancedAnalysis />} />
            <Route path="/latestnews" element={<Latestnews />} />
            <Route path="/workbookmanu" element={<Workbookmenu />} />
            <Route path="/researchassist" element={<ResearchAssist />} />
            
        </Routes>
    );
}