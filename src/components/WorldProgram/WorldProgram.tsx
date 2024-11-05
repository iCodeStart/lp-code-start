import { Chip } from "../Chip";
import { WorldProgramInfo } from "./components";
import "./WorldProgram.style.scss";

export function WorldProgram() {
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
      <div className="container__program-info">
        <Chip label="Oportunidade" />
        <h1 className="section-title">A profissão do futuro</h1>
        <div className="world-program-list_img">
          <img
            src="/vagas-abertas1.webp"
            alt="Vagas abertas programador Code Start"
          />
        </div>
        <p className="school_content-text-title">
          A matemática é bastante simples: <br />
          <br />
          Existem muito <strong>mais vagas </strong>para serem preenchidas do
          que profissionais para serem contratados <br />
          <br />E a tendência é que isso ainda aconteça por muito tempo...
        </p>
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
      </div>
    </div>
  );
}
