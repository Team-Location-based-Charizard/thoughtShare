import React from "react";
import { useState } from "react";

const Popup = props => {

  // const [open, setOpen] = useState(false)
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClickClose = () => {
  //   setOpen(false);
  // };
  

  // let popup = null;
  // if (open){
  //   popup = <Popup text={<>
  //     <b>My thought 1</b>
  //     <p>Helloooooooooooooooo</p>
  //   </>} onClose = {handleClickClose} />
  // }

  // return(
  //   <div>
  //   <input type="button"
  //     value="Click to Open Popup"
  //     onClick={handleClickOpen}
  //   /> 
  //   {popup}
  //   </div>
  // )
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