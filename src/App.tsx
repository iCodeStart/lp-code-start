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

function App() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
