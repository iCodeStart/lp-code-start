import {
  Apresentation,
  Bonus,
  FAQ,
  Guarantee,
  IsForYou,
  Offer,
  OurTrail,
  Projects,
  School,
  Teachers,
  Testimonials,
  WorldProgram,
} from "../../components";
import Contact from "../../components/Contact/Contact";
import { Footer } from "../../components/Footer";
import { FullstackTrail } from "../../components/FullstackTrail";
import { Reviews } from "../../components/Reviews";
import { Whatsapp } from "../../components/Whatsapp";

const Home = () => {
  return (
    <>
      <Apresentation />
      <div className="content-container">
        <WorldProgram />
        <IsForYou />
        <Testimonials />
        <OurTrail />
        <FullstackTrail />
        <Projects />
        <School />
        <Bonus />
        <Guarantee />
        <Offer />
        <Reviews />
        <Teachers />
        <FAQ />
        <Contact />
        <Footer />
        <Whatsapp />
      </div>
    </>
  );
};

export default Home;
