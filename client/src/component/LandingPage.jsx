import * as React from "react";
import Nav from "./Nav";
import Map from "./Map"
// import { useEffect, useState } from "react";

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Map data={{lat:0, lng:0}} zoom={3}/>
      <div className=" bg-slate-400 h-screen flex items-center justify-center">
        <div className="box-border border-4 h-[50%] w-[50%] "></div>
      </div>
    </div>
  );
};

export default LandingPage;
