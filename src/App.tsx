import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Bonus,
  FAQ,
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
import {
  Apresentation,
  ExclusiveBonus,
  Guarantee,
  HowItWorks,
  IsForYou,
  MethodItems,
  RiskIsMine,
  TheProduct,
} from "./components/LPProjects";
import { ProjectsOffer } from "./components/LPProjects/ProjectsOffer";
import { Whatsapp } from "./components/Whatsapp";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {/* <Header /> */}
            <Apresentation />
            <div className="content-container">
              {/* <TheProduct /> */}
              <WorldProgram />
              {/* <Benefits /> */}
              <IsForYou />
              <MethodItems/>
              <Testimonials />
              <OurTrail />
              <School />
              <FullstackTrail />
              <Projects />
              <Bonus />
              {/* <Guarantee /> */}
              <Offer />
              <Teachers />
              <FAQ />
              <Footer />
              <Whatsapp />
            </div>
          </>
        }
      />
      <Route
        path="/projects"
        element={
          <>
            <Apresentation />
            <div className="content-container">
              <TheProduct />
              <Guarantee />
              <HowItWorks />
              <IsForYou />
              <MethodItems />
              <ExclusiveBonus />
              <RiskIsMine />
              <ProjectsOffer />
            </div>
          </>
        }
      />
    </Routes>
  );
}

export default App;
