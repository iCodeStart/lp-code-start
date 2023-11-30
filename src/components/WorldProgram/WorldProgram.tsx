// import AOS from "aos";
// import { useEffect } from "react";
import { WorldProgramInfo } from "./components";
import "./WorldProgram.style.scss";
import { Range } from "../Benefits/Range";

export function WorldProgram() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   });
  // }, []);
  const arrayTexts = [
    {
      title: "R$4.472,00",
      text: "Média de salário para <span>Desenvolvedor.",
      font: "Fonte: GlassDoor",
    },
    {
      title: "+15.000 vagas no LinkedIn",
      text: "E uma delas pode ser sua",
      font: "Fonte: LinkedIn",
    },
    {
      title: "78,27%",
      text: "Trabalhando de casa",
      font: "Fonte: Canal Tech",
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
        <Range />
        <div className="world-program-list_img">
          <img
            src="/vagas-abertas.png"
            alt="Vagas abertas programador Code Start"
          />
        </div>
        <button className="btn-buy-info">
          <a href="#offer">
            Quero ser um Programador
          </a>
        </button>
      </div>
    </div>
  );
}
