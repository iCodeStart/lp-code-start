import { useEffect, useMemo, useRef, useState } from "react";
import { Chip } from "../Chip";

export function OurTrail() {
  const [currentPhase, setCurrentPhase] = useState(1);
  const arrayInfoTrail = useMemo(
    () => [
      {
        title: "Preparação",
        description:
          "Aprenda a como estudar de verdade e se organizar para o mercado de trabalho.",
      },
      {
        title: "Crescimento técnico",
        description:
          "Comece a adquirir conhecimento e executar criando projetos reais.",
      },
      {
        title: "Estruturação",
        description:
          "Aprenda a como estruturar seu currículo e Linkedin de forma estratégica.",
      },
      {
        title: "Simulação de entrevista",
        description:
          "Tenha a chance de treinar antes de ir para o mercado de trabalho.",
      },
      {
        title: "Certificação",
        description:
          "Pegue seu certificado e tenha vantagem competitiva no mercado.",
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

  const getIcon = (index: number) => {
    if (index === 0) return "/number1.svg";
    if (index === 1) return "/number2.svg";
    if (index === 2) return "/number3.svg";
    if (index === 3) return "/number4.svg";
    //return "./number1.svg";
    return "./certificate.svg";
  };

  return (
    <div className="our-trail">
      <div className="container">
        <div className="title-container">
          <Chip label="Jornada" />
          <h1 className="section-title">Sua jornada até o primeiro emprego</h1>
        </div>
        <div className="our-trail__content">
          {arrayInfoTrail.map((info, index) => (
            <div
              key={index}
              className={`trail-step ${
                currentPhase === index + 1 ? "active" : ""
              }`}
            >
              <img
                src={getIcon(index)}
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
