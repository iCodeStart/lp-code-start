import React from 'react';
import './App.css';
import { Benefits, Bonus, Header, Projects, School, Teachers, Testimonials, WorldProgramming } from './components';

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
    </>
  );
}

export default App;
