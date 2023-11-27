import React, { useState, useEffect, useRef, useMemo } from "react";

export function OurTrail() {
  const [currentPhase, setCurrentPhase] = useState(1);
  const arrayInfoTrail = useMemo(
    () => [
      {
        title: "Consciência",
        description:
          "Conheça o mercado de trabalho, descubra se já está preparado(a), qual é a especialidade ideal para seu perfil, qual tipo de trabalho escolher, oportunidades nacionais e internacionais, toda a burocracia do programador pj e formas de ganhar dinheiro na programação.",
      },
      {
        title: "Preparação",
        description:
          "Aprenda a montar um perfil atraente no Github e Linkedin que gere networking, descubra o que subir para o Github e como montar um currículo digital.",
      },
      {
        title: "Aplicação",
        description:
          'Descubra os melhores sites de vagas, como escolher as vagas certas e fugir das furadas, como "stalkear" empresas, enviar suas aplicações e gerenciá-las de forma organizada.',
      },
      {
        title: "Testes e Entrevistas",
        description:
          "Conheça os sites de testes técnicos e como realizá-los, como mandar bem nas entrevistas com o RH, em inglês, com o time técnico e com o CEO.",
      },
      {
        title: "Contratação e Especialização",
        description:
          "Após a contratação você não pode parar, se quer escalar sua carreira do nível Júnior ao Sênior é necessário buscar especializações e aprender a como se posicionar para uma possível promoção de cargo ou para vagas melhores.",
      },
    ],
    []
  );

  const connectingLineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const trailSteps = document.querySelectorAll(".trail-step");
      trailSteps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setCurrentPhase(index + 1);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const totalSteps = arrayInfoTrail.length;
    const heightPerStep = 100 / totalSteps;
    const lineHeight = heightPerStep * (currentPhase - 1);

    if (connectingLineRef.current !== null) {
      (
        connectingLineRef.current as HTMLDivElement
      ).style.height = `${lineHeight}%`;
    }
  }, [currentPhase, arrayInfoTrail]);

  return (
    <div className="our-trail">
      <div className="container">
        <h1 className="section-title">Nossa trilha</h1>
        <div className="our-trail__content">
          {arrayInfoTrail.map((info, index) => (
            <div
              key={index}
              className={`trail-step ${
                currentPhase === index + 1 ? "active" : ""
              }`}
            >
              <img
                src="./icon-benefits.svg"
                alt={`Benefícios Code Start - ${info.title}`}
              />
              <div className="card-trail">
                <span className="trail_legend">Fase {index + 1}</span>
                <h1>{info.title}</h1>
                <p>{info.description}</p>
              </div>
            </div>
          ))}
          <div ref={connectingLineRef} className="connecting-line" />
        </div>
      </div>
    </div>
  );
}
