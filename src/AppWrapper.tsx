import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ReactGA from "react-ga4";
ReactGA.initialize("G-MB4QPP471B");


function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;