import React from 'react';
import './App.css';
import { Benefits, Header, Projects, School, Testimonials, WorldProgramming } from './components';

function App() {
  return (
    <>
      <Header />
      <WorldProgramming />
      <Benefits/>
      <Testimonials/>
      <School/>
      <Projects/>
    </>
  );
}

export default App;
