import AOS from "aos";
import { useEffect } from "react";
import { Chip } from "../Chip";
import "./Testimonials.styles.scss";

export function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="testimonials">
      <div className="container">
        <div className="title-container">
          <Chip label="Depoimentos" />
          <h1 className="section-title">
            Veja o que nossos alunos acham da nossa escola!
          </h1>
        </div>
        <div className="testimonials__content">
          <img
            src="./depoimento-6.jpeg"
            alt="Depoimento Code Start"
            data-aos="fade-left"
          />
          <img
            src="./depoimento-5.jpeg"
            alt="Depoimento Code Start"
            data-aos="fade-up"
          />
          <img
            src="./depoimento-4.jpeg"
            alt="Depoimento Code Start"
            data-aos="fade-right"
          />
          <img
            src="./depoimento-1.jpeg"
            alt="Depoimento Code Start"
            data-aos="fade-right"
          />
          <img
            src="./depoimento-2.jpeg"
            alt="Depoimento Code Start"
            data-aos="fade-up"
          />
          <img
            src="./depoimento-3.jpeg"
            alt="Depoimento Code Start"
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  );
}
