import React from "react";
import { useState } from "react";

const Popup = props => {
  const [open, setOpen] = useState(props.open)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  if (open){
  return(
    <div className="popup-container">
      <div className="popup">
        <span className="close-box" onClick={handleClickClose}>x</span>
        {props.text}
      </div>
    </div>
  )
  }
}

export default Popup;