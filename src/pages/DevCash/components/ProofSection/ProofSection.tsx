import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ProofSection.scss";
import { Chip } from "../../../../components/Chip";

export const ProofSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "./prova-social-1.png",
      alt: "Exemplo de vaga freelancer",
    },
    {
      src: "./prova-social-2.png",
      alt: "Exemplo de vaga freelancer",
    },
    {
      src: "./prova-social-3.png",
      alt: "Exemplo de vaga freelancer",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const getItemClassName = (index: number) => {
    if (index === activeIndex) return "carousel-item active";
    if (index === (activeIndex + 1) % images.length)
      return "carousel-item next";
    if (index === (activeIndex - 1 + images.length) % images.length)
      return "carousel-item prev";
    return "carousel-item";
  };

  return (
    <section className="proof">
      <div className="container">
        <div className="proof__content">
          <Chip label="Oportunidade" />
          <h1 className="section-title">A profissão do futuro começa agora</h1>
          <p className="school_content-text-title">
            E o melhor: você pode começar sem sair de casa. <br />
            <br />
            Mais de{" "}
            <strong>78% dos programadores já trabalham remotamente, </strong>
            direto do conforto de casa. Sem trânsito, sem chefe pegando no seu
            pé, e com a liberdade de organizar seus próprios horários. <br />
            <br />
            Você estuda no seu ritmo, aplica o que aprendeu em projetos reais —
            e já pode começar a faturar de onde estiver.
          </p>

          {/* Desktop Carousel */}
          <div className="proof__carousel">
            <div className="carousel-container">
              <button className="carousel-button prev" onClick={prevSlide}>
                <ChevronLeft size={24} />
              </button>

              {images.map((image, index) => (
                <div key={index} className={getItemClassName(index)}>
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}

              <button className="carousel-button next" onClick={nextSlide}>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="proof__mobile">
            {images.map((image, index) => (
              <div key={index} className="mobile-item">
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
