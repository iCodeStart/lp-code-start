import { useEffect, useMemo, useRef, useState } from "react";
import { Chip } from "../Chip";
import "./OurTrail.styles.scss";

export function OurTrail({ isMainProduct = true }) {
  const [currentPhase, setCurrentPhase] = useState(1);
  const arrayInfoTrail = useMemo(
    () => [
      {
        title: "Fase Start",
        description:
          "Construa e publique os seus primeiros projetos e comece a criar um portfólio.",
      },
      {
        title: "Fase Alicerce",
        description:
          "Consolide o seu conhecimento deixando seus projetos mais robustos, sendo capaz de fazê-los sozinho.",
      },
      {
        title: "Fase de Expansão",
        description:
          "Com seu portfólio, aprenda a aparecer para as empresas de forma estratégica. Aqui você monta seu currículo e Linkedin.",
      },
      {
        title: "Fase Mestre",
        description:
          "Aplique o método AAP nas entrevistas de emprego e seja destaque nos processos seletivos.",
      },
      {
        title: "Certificado",
        description:
          "Comprove o seu conhecimento com as horas que você investiu no método AAP.",
      },
    ],
    []
  );

  const arrayInfoTrailDevCash = useMemo(
    () => [
      {
        title: "Fase Despertar",
        description: "Saia do zero com clareza e direção.",
      },
      {
        title: "Fase Mão na Massa",
        description:
          "Você vai colocar a mão no código desde o início, criando soluções simples e úteis — que já podem ser oferecidas como serviços.",
      },
      {
        title: "Primeiros Trabalhos",
        description:
          "Vamos te mostrar onde encontrar oportunidades, como montar seu portfólio e como se posicionar para fechar seus primeiros clientes.",
      },
      {
        title: "Fase Aceleração",
        description:
          "Você aprende como equilibrar aprendizado e trabalho, aumentando sua renda enquanto continua evoluindo como dev.",
      },
      {
        title: "Prova de Valor",
        description:
          "Ao final, você terá um portfólio real, experiência prática e um certificado que comprova o quanto você evoluiu.",
      },
    ],
    []
  );
  const arrayTexts = isMainProduct ? arrayInfoTrail : arrayInfoTrailDevCash;

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
    const totalSteps = arrayTexts.length;
    const heightPerStep = 100 / totalSteps;
    const lineHeight = heightPerStep * (currentPhase - 1);

    if (connectingLineRef.current !== null) {
      (
        connectingLineRef.current as HTMLDivElement
      ).style.height = `${lineHeight}%`;
    }
  }, [currentPhase, arrayTexts]);

  const getIcon = (index: number) => {
    if (index === 0) return "/number1.svg";
    if (index === 1) return "/number2.svg";
    if (index === 2) return "/number3.svg";
    if (index === 3) return "/number4.svg";
    return "./certificate.svg";
  };

  return (
    <div className="our-trail">
      <div className="container">
        <div className="title-container">
          <Chip label="O método AAP" />
          <h1 className="section-title">
            Sua jornada até o primeiro emprego...
          </h1>
        </div>
        <div className="our-trail__content">
          {arrayTexts.map((info, index) => (
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
                <span className="trail_legend" style={{ color: "#00bcd3" }}>
                  <strong>Fase {index + 1}</strong>
                </span>
                <h1 style={{ color: "#fff", lineHeight: "30px" }}>
                  {info.title}
                </h1>
                <p style={{ color: "#fff", fontSize: "20px" }}>
                  {info.description}
                </p>
              </div>
            </div>
          ))}
          <div ref={connectingLineRef} className="connecting-line" />
        </div>
      </div>
    </div>
  );
}
