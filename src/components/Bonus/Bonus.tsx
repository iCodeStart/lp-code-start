import { Chip } from "../Chip";
import { LineBonus } from "./LineBonus";
import './Bonus.styles.scss'

export function Bonus() {
  const arrayBonus = [
    {
      img: "/codeMoney.webp",
      title: "Recupere o seu investimento",
      subtitle:
        "Ganhe dinheiro como programador mesmo sendo um completo iniciante.",
    },
    {
      img: "/first1.webp",
      title: "Seu primeiro mês",
      subtitle:
        "Tudo que você precisa saber para se destacar no seu primeiro mês na empresa.",
    },
    {
      img: "/posicionamento1.webp",
      title: "Posicionamento de excelência",
      subtitle:
        "Tenha um posicionamento estratégico, com a especialista em LinkedIn, e acelere em até 2x a conquista do seu primeiro emprego",
    },
    {
      img: "/vip.png",
      title: "Grupo Vip",
      subtitle:
        "Participe de uma comunidade de pessoas com o mesmo objetivo, onde compartilhamos dificuldades, ajudamos uns aos outros e crescemos juntos!",
    },
  ];
  return (
    <div className="bonus">
      <div className="container">
        <div className="title-container">
          <Chip label="Bônus" />
          <h1 className="section-title">Você ainda vai ganhar</h1>
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
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
