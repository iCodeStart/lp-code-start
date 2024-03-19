import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Apresentation,
  HowItWorks,
  TheProduct,
  MethodItems,
  IsForYou,
  ExclusiveBonus,
  RiskIsMine,
} from "./components/LPProjects";
import { ProjectsOffer } from "./components/LPProjects/ProjectsOffer";
import {
  Benefits,
  Bonus,
  FAQ,
  Header,
  Offer,
  OurTrail,
  Projects,
  School,
  Teachers,
  Testimonials,
  WorldProgram,
} from "./components";
import { Footer } from "./components/Footer";
import { FullstackTrail } from "./components/FullstackTrail";
import { Whatsapp } from "./components/Whatsapp";


function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <div className="content-container">
            <WorldProgram />
            <Benefits />
            <Testimonials />
            <OurTrail />
            <School />
            <FullstackTrail />
            <Teachers />
            <Projects />
            <Bonus />
            <Offer />
            <FAQ />
            <Footer />
            <Whatsapp />
          </div>
        </>
      } />
      <Route path="/projects" element={
        <>
          <Apresentation />
          <div className="content-container">
            <TheProduct />
            <HowItWorks />
            <IsForYou />
            <MethodItems />
            <ExclusiveBonus />
            <RiskIsMine />
            <ProjectsOffer />
          </div>
        </>
      } />
    </Routes>
  );
}

export default App;
