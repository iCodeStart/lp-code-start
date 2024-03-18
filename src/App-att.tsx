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
import { Apresentation, HowItWorks, TheProduct } from "./components/LPProjects";
import { Whatsapp } from "./components/Whatsapp";

function App() {

  return (
    <>
      <Apresentation/>
      <div className="content-container">
      <TheProduct/>
      <HowItWorks/>
      </div>
    </>
  );
}

export default App;
