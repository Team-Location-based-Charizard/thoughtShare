import * as React from "react";
// import { useEffect, useState } from "react";

const Nav = () => {
  return (
    <div className="absolute w-full py-4 pl-20 font-abc text-white flex justify-between bg-gradient-to-tr from-[#469494] via-[#053a3a] to-[#032a26]">
        <span className="text-3xl ml-3">ThoughtShare</span>
        <span className="ml-3">
        <a class="inline-block border border-[#032a26] rounded py-1 px-3 bg-[#469494] text-white mr-3" href="#">Sign Up</a>
        <a class="inline-block border border-[#032a26] rounded py-1 px-3 bg-[#469494] text-white mr-3" href="#">Login</a>
        </span>
      
    </div>
  ) 
};

export default Nav;