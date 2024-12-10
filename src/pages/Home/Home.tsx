import {
  Apresentation,
  Bonus,
  FAQ,
  Guarantee,
  IsForYou,
  Offer,
  Offer2,
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
        <WorldProgram />
        <IsForYou />
        <Testimonials />
        <OurTrail />
        <School />
        <FullstackTrail />
        <Projects />
        <Bonus />
        <Guarantee />
        <Offer2 />
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
