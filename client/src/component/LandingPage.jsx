import React, { useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import MapContainer from "./Map";
// import { useEffect, useState } from "react";

const LandingPage = () => {
  const [createUserID, setCreateUserID] = useState("");
  const [createThought, setCreateThought] = useState("");
  const [createLat, setCreateLat] = useState("");
  const [createLng, setCreateLng] = useState("");
  
  // function getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     return "hello";
  //   }
  // }

  // function showPosition(position) {
  //   console.log(position)
  // }

  

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // getLocation()

    const userID = createUserID
    const thought = createThought

    console.log("user ID: " + userID)
    console.log("createThought: " + thought)
    // let lat = showPosition()
    // let lng = showPosition()
    // const lat = createLat
    // const lng = createLng

    
    axios
      .post(
        "/api/thoughts/addThought",
        {
          user_id: userID,
          thought: thought,
          // lat: lat,
          // lng: lng
        },
      )
      .then((res) => {
        console.log("response from axios:", res);
        if (res.status === 200) {
          alert("thought & userID created");
        }
      })
      .catch((err) => console.log("This is the axios error ==>", err));
  };

  return (
    <div>
      <Nav />
      <div className=" bg-slate-400 h-screen flex flex-col justify-center items-center space-y-4">
        <div className="bg-gradient-to-tr from-[#469494] to-[#181919] w-[30%] h-[36%] text-center mt-20 rounded-xl shadow-2x border-2 border-[#181919] ">
          <h1 className="text-3xl text-white font-bold mt-5 pb-3">
            Share a Thought
          </h1>
          <form>
            <label for="userID"></label>
            <input className="text-center rounded-sm" type="text" id="userID" onChange={(e) => setCreateUserID(e.target.value)} placeholder="UserID" /><br/><br/>
            <label  for="fname"> </label>
            <textarea className="rounded-sm text-center" rows="4" cols="30" placeholder="what are you thinking" type="text" id="fname" onChange={(e) => setCreateThought(e.target.value)}></textarea>
                  <br/><br/>
            <button
            className="p-2 w-[25%] rounded-lg border-5 bg-slate-200 border-white "
            onClick={handleSubmit}
          >
            Submit
          </button>
          </form>
        </div>

        <div className=" box-content border-[#469494] border-8 w-[50%] h-[50%]">
          <MapContainer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
