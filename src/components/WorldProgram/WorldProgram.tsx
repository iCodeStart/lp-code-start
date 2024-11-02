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
      title: "+420.000 vagas",
      text: "A busca por novos profissionais é infinita",
      primaryTitle: "Oportunidade",
    },
    {
      title: "78,27%",
      text: "Trabalhe de onde quiser, faça sua rotina e seja dono das suas horas.",
      primaryTitle: "Liberdade",
    },
    {
      title: "R$16.339,29",
      text: "Ganhe um salário maior que 95% das profissões",
      primaryTitle: "Dinheiro",
    },
  ];
  return (
    <div className="world-programming">
      <div className="container__program-info" data-aos="zoom-in">
        <Chip label="Oportunidade" />
        <h1 className="section-title">Empresas estão desesperadas</h1>
        <div className="world-program-list_img">
          <img
            src="/vagas-abertas1.webp"
            alt="Vagas abertas programador Code Start"
          />
        </div>
        <p className="school_content-text-title">
          A matemática é bastante simples: <br />
          <br />
          Existe muito mais vagas para serem preenchidas do que profissionais
          para serem contratados <br />
          <br />E por isso essa é a sua maior vantagem.
        </p>
        <p className="school_content-text-title">
          As empresas estão dispostas a te contratar, mesmo que você tenha pouca
          experiência
        </p>
        <div className="world-program-list_img">
          <img
            src="/oportunidade.webp"
            alt="Oportunidades de vagas para iniciantes na programação"
          />
        </div>
        <h1 className="section-title">Como é a vida de um programador?</h1>
        <div className="world-program-list">
          {arrayTexts.map((item, index) => {
            return (
              <WorldProgramInfo
                key={index}
                index={index}
                titleCard={item.title}
                text={item.text}
                primaryTitle={item.primaryTitle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
