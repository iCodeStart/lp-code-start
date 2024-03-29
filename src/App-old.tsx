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
import { FullstackTrail } from "./components/FullstackTrail";
import { Whatsapp } from "./components/Whatsapp";

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
  );
}

export default App;
