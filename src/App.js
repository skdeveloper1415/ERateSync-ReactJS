import "../src/App.css";
import "../src/nstyle.css";
import React from "react";
import RouteComponent from "./setup/route.component";
import { ToastContainer } from "react-toastify";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


function App() {
  return (
    <>  
      <RouteComponent />
      <ToastContainer  autoClose={1000} />
    </>
  );
}

export default App;
