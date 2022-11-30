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
  
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      return "hello";
    }
  }

  function showPosition(position) {
    console.log(position)
  }

  getLocation()

  const handleSubmit = (e) => {
    
    const userID = createUserID
    const thought = createThought

    console.log("user ID: " + userID)
    console.log("createThough: " + thought)
    // let lat = showPosition()
    // let lng = showPosition()
    // const lat = createLat
    // const lng = createLng

    // function getLocation() {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(showPosition);
    //   } else {
    //     return "hello";
    //   }
    // }
  
    // function showPosition(position) {
    //   console.log(position)
    //   // lat = position.coords.latitude
    //   // lng = position.coords.longitude
    //   // return position
    // }

    // getLocation()
    
    // // console.log("handleHost post called");

    // // getLocation()
    
    // // console.log(lat)
    // console.log(lng)
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
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Nav />
      <div className=" bg-slate-400 h-screen flex flex-col justify-center items-center space-y-4">
        <div className="bg-gradient-to-bl from-[#032a267f] to-[#181919] w-[30%] h-[30%] text-center flex flex-col mt-16 rounded-xl shadow-2x border-2 border-[#181919] ">
          <h1 className="text-3xl text-white font-bold pb-4">
            What Are They Thinking?
          </h1>
          <form>
            <label for="userID">User ID </label>
            <input type="text" id="userID" name="userID" onChange={(e) => setCreateUserID(e.target.value)} defaultValue="" /><br/><br/>
            <label for="fname">What Are You Thinking? </label>
            <input type="text" id="fname" name="fname" onChange={(e) => setCreateThought(e.target.value)} defaultValue=""/><br />
          </form>
          <button
            className="p-4 w-[50%] flex justify-items-center rounded-lg border-5 bg-slate-200 border-white "
            onClick={handleSubmit}
          >
            Testing button
          </button>
        </div>

        <div className=" box-content border-[#469494] border-8 w-[50%] h-[50%]">
          <MapContainer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
