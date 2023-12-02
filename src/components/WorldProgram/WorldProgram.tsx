import AOS from "aos";
import { useEffect } from "react";
import { Range } from "../Benefits/Range";
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
      title: "R$4.472,00",
      text: "Média de salário para <span>desenvolvedor",
      font: "Fonte: GlassDoor",
    },
    {
      title: "78,27%",
      text: "Trabalhando de casa",
      font: "Fonte: Canal Tech",
    },
    {
      title: "+15.000 vagas",
      text: "E uma delas pode ser sua",
      font: "Fonte: LinkedIn",
    },
  ];
  return (
    <div className="world-programming">
      <div className="container__program-info" data-aos="zoom-in">
        <h1 className="section-title">A melhor profissão da década</h1>
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
        <div className="world-program-list_img">
          <img
            src="/vagas-abertas.png"
            alt="Vagas abertas programador Code Start"
          />
        </div>
        <Range />
        <button className="btn-buy-info">
          <a href="#offer">Quero ser um programador</a>
        </button>
      </div>
    </div>
  );
}
