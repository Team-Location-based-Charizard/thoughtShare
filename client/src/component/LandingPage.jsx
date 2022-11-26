import * as React from "react";
import Nav from "./Nav";
import MapContainer from "./Map"
// import { useEffect, useState } from "react";

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <div className=" bg-slate-400 h-screen flex items-center justify-center">
        <div className="box-border border-8 w-[66%] h-[50%]">
        <MapContainer />
        </div>
        
      </div>
    </div>
  );
};

export default LandingPage;
