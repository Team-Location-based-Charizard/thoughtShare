import * as React from "react";
import Nav from "./Nav";
import MapContainer from "./Map";
// import { useEffect, useState } from "react";

const LandingPage = () => {
  return (
    <div>
      <Nav />

      <div className=" bg-slate-400 h-screen flex flex-col justify-center items-center space-y-4">
        <form>
          <label>
            <h1 className="text-3xl text-white font-bold pb-4">
              What Are They Thinking?
            </h1>
            <input type="text" value="Zip Code" />
          </label>
        </form>
        <div className=" box-content border-[#469494] border-8 w-[50%] h-[50%]">
          <MapContainer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
