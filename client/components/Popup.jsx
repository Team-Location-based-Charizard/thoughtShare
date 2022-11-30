import React from "react";
import { useState } from "react";

const Popup = props => {

  return(
    <div className="popup-container">
      <div className="popup">
        <span className="close-box" onClick={props.onClose}> x </span>
        {props.text}
      </div>
    </div>
  )
  }


export default Popup;