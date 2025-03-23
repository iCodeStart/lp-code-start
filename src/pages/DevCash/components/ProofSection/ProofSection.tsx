import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ProofSection.scss';

export const ProofSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "./prova-social-1.png",
      alt: "Exemplo de vaga freelancer"
    },
    {
      src: "./prova-social-2.png",
      alt: "Exemplo de vaga freelancer"
    },
    {
      src: "./prova-social-3.png",
      alt: "Exemplo de vaga freelancer"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const getItemClassName = (index: number) => {
    if (index === activeIndex) return 'carousel-item active';
    if (index === (activeIndex + 1) % images.length) return 'carousel-item next';
    if (index === (activeIndex - 1 + images.length) % images.length) return 'carousel-item prev';
    return 'carousel-item';
  };

  return (
    <section className="proof">
      <div className="container">
        <div className="proof__content">
          <h2>"Isso parece bom demais para ser verdade..."</h2>
          <p className="subtitle">Se você está duvidando, veja isso:</p>
          
          {/* Desktop Carousel */}
          <div className="proof__carousel">
            <div className="carousel-container">
              <button className="carousel-button prev" onClick={prevSlide}>
                <ChevronLeft size={24} />
              </button>
              
              {images.map((image, index) => (
                <div 
                  key={index}
                  className={getItemClassName(index)}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                  />
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
                <img 
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>

          <div className="conclusion">
            <p>Como você pode perceber, não é a falta de ofertas que está impedindo você de fechar seu primeiro trabalho.</p>
            <p>O problema está na forma como você está buscando essas oportunidades.</p>
          </div>
        </div>
      </div>
    </section>
  );
};