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

export function Home() {
  return (
    <>
      <Apresentation />
      <div className="content-container">
        <School />
        <WorldProgram />
        <IsForYou />
        <Testimonials />
        <OurTrail />
        <FullstackTrail />
        <Projects />
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
}
