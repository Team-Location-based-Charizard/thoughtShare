import React, { useState } from 'react';
import Popup from '../components/Popup.jsx';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
    {isOpen && <Popup
      text={<>
        <b>My thought</b>
        <p>Helloooooooooooooooo</p>
        <button>Test button</button>
      </>}
      open={true}
    />}
  </div>
}

export default App;