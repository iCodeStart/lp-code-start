import "./App.css";
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

function App() {
  return (
    <>
      <Header />
      <div className="content-container">
        <WorldProgram />
        <Benefits />
        <Testimonials />
        <OurTrail />
        <School />
        <Teachers />
        <Projects />
        <Bonus />
        <Offer />
        <FAQ />
        <Footer/>
      </div>
    </>
  );
}

export default App;
