import React, { useState } from 'react';
import { render } from 'react-dom';
import Popup from '../components/Popup.jsx';

function App() {

  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  

  let popup = null;
  if (open){
    popup = <Popup text={<>
      <b>My thought 1</b>
      <p>Helloooooooooooooooo</p>
    </>} onClose = {handleClickClose} />
  }

  return(
    <div>
    <input type="button"
      value="Click to Open Popup"
      onClick={handleClickOpen}
    /> 
    {popup}
    </div>
  )
}
  

  


export default App;