import React from 'react';
import {createRoot} from 'react-dom/client'
import ReactDOM from 'react-dom';
import App from './App.jsx';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('div')
// );
 
const container = document.getElementById('div');
const root = createRoot(container);
root.render(<App />);