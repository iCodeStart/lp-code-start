import React from 'react';
import './App.css';
import { Benefits, Bonus, Header, Offer, Projects, School, Teachers, Testimonials, WorldProgramming, FAQ } from './components';

function App() {
  return (
    <>
      <Header />
      <WorldProgramming />
      <Benefits/>
      <Testimonials/>
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
