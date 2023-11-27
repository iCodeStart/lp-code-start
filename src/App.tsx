import React from 'react';
import './App.css';
import { Benefits, Bonus, Header, Offer, OurTrail, Projects, School, Teachers, Testimonials, WorldProgramming, FAQ } from './components';

function App() {
  return (
    <>
      <Header />
      <WorldProgramming />
      <Benefits/>
      <Testimonials/>
      <OurTrail/>
      <School/>
      <Teachers/>
      <Projects/>
      <Bonus/>
      <Offer/>
      <FAQ />
    </>
  );
}

export default App;
