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
import { Apresentation, Guarantee, IsForYou } from "./components/LPProjects";
import { Whatsapp } from "./components/Whatsapp";
import { Reviews } from "./components/Reviews";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Apresentation />
            <div className="content-container">
              <WorldProgram />
              <IsForYou />
              <Testimonials />
              <OurTrail />
              <School />
              <FullstackTrail />
              <Projects />
              <Bonus />
              <Guarantee />
              <Offer />
              {/* <Offer2 /> */}
              <Reviews />
              <Teachers />
              <FAQ />
              <Contact />
              <Footer />
              <Whatsapp />
            </div>
          </>
        }
      />
    </Routes>
  );
}

export default App;
