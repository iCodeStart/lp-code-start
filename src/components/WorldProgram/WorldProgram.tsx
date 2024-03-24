import AOS from "aos";
import { useEffect } from "react";
import { Chip } from "../Chip";
import { WorldProgramInfo } from "./components";
import "./WorldProgram.style.scss";

export function WorldProgram() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const arrayTexts = [
    {
      title: "R$16.339,29",
      text: "Média de salário para <span>especialistas em programação",
      font: "Fonte: Código Fonte",
    },
    {
      title: "78,27%",
      text: "Trabalhando de casa",
      font: "Fonte: Canal Tech",
    },
    {
      title: "+420.000 vagas",
      text: "E falta de profissionais para ocuparem essas vagas...",
      font: "Fonte: G1",
    },
  ];
  return (
    <div className="world-programming">
      <div className="container__program-info" data-aos="zoom-in">
        <Chip label="Carreira" />
        <h1 className="section-title">A profissão do futuro</h1>
        <div className="world-program-list_img">
          <img
            src="/vagas-abertas1.jpeg"
            alt="Vagas abertas programador Code Start"
          />
        </div>
        <p className="school_content-text-title">
          A matemática é bastante simples. <br />
          <br />
          Existem muito <strong>mais vagas disponíveis </strong>para poucas
          pessoas para ocupar elas. <br />
          <br />E a tendência é que isso ainda aconteça por muito tempo...
        </p>
        {/* <p className="school_content-text-title">
          Com a globalização e com o avanço das Inteligências Artificiais o
          mercado está cada vez mais precisando de profissionais capacitados.
        </p>
        <p className="school_content-text-title">
          Com a alta procura e falta de profissionais para ocupar essas vagas no
          mercado, os salários e o trabalho remoto fazem essa profissão ser
          considerada por muitos a profissão do futuro.
        </p> */}
        {/* <p className="school_content-text-title">
          <strong>
            Com muitas oportunidades de crescimento, reconhecimento e tempo para
            curtir a sua vida e sua família.
          </strong>
        </p> */}
        <div className="world-program-list">
          {arrayTexts.map((item, index) => {
            return (
              <WorldProgramInfo
                key={index}
                index={index}
                titleCard={item.title}
                text={item.text}
                font={item.font}
              />
            );
          })}
        </div>
        {/* <Range /> */}
        <a href="#offer" className="btn-buy">
          <button>Quero garantir minha vaga</button>
        </a>
      </div>
    </div>
  );
}
