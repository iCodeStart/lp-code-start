import { Chip } from "../Chip";
import { LineBonus } from "./LineBonus";

export function Bonus() {
  const arrayBonus = [
    {
      img: "/interview.png",
      title: "SIMULAÇÃO DE ENTREVISTAS TÉCNICAS",
      subtitle:
        "Oportunidade do aluno testar seus conhecimentos para tentar ser aprovado em uma vaga de emprego.",
    },
    {
      img: "/linkedin1.png",
      title: "MASTERCLASS EXCLUSIVA SOBRE O LINKEDIN",
      subtitle:
        "Uma Tech Recruiter de uma das maiores empresas do Brasil e do mundo destrinchou tudo sobre o LinkedIn e as principais dúvidas de como usar a plataforma para procurar vagas exclusivamente para os nossos alunos.",
    },
    {
      img: "/projects1.png",
      title: "ACESSO AOS PROJETOS JÁ DESENVOLVIDOS",
      subtitle:
        "Acesso a todas aulas e códigos dos projetos práticos desenvolvidos em turmas anteriores.",
    },
  ];
  return (
    <div className="bonus">
      <div className="container">
        <div className="title-container">
          <Chip label="Bônus" />
          <h1 className="section-title">Você vai ganhar</h1>
        </div>
        <div className="bonus__content">
          <div className="bonus_content_card">
            {arrayBonus.map((bonus, index) => {
              return (
                <LineBonus
                  key={index}
                  img={bonus.img}
                  title={bonus.title}
                  subtitle={bonus.subtitle}
                  orientation={index % 2 === 0 ? "left" : "right"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
