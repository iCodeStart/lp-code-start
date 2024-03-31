import { Chip } from "../Chip";
import { LineBonus } from "./LineBonus";

export function Bonus() {
  const arrayBonus = [
    {
      img: "/closeFriends.png",
      title: "Close friends",
      subtitle:
        "Acesso a 3 meses de conteúdos exclusivos e valiosos para você acelerar o seu aprendizado ainda mais.",
    },
    {
      img: "/devCodeStart.png",
      title: "Programador Code Start",
      subtitle:
        "Tudo que você precisa saber para se destacar no seu primeiro mês na empresa.",
    },
    {
      img: "/codeMoney.png",
      title: "Recupere o seu investimento",
      subtitle:
        "Ganhe dinheiro como programador mesmo sendo um completo iniciante.",
    },
    // {
    //   img: "/interview.png",
    //   title: "SIMULAÇÃO DE ENTREVISTAS TÉCNICAS",
    //   subtitle:
    //     "Oportunidade do aluno testar seus conhecimentos para tentar ser aprovado em uma vaga de emprego.",
    // },
    {
      img: "/posicionamento1.png",
      title: "Posicionamento de excelência",
      subtitle:
        "Descubra todos os segredos e tenha grande vantagem sobre os seus concorrentes com um posicionamento de excelência com a especialista em LinkedIn",
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
                  //orientation={index % 2 === 0 ? "left" : "right"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
