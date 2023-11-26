import { BenefitsLineProgramming } from "./components/BenefitsLineProgramming";

export function WorldProgramming() {
  const arrayTexts = [
    {
      title: "Ganhe acima da média com programação",
      text: "O mercado em crescimento busca profissionais qualificados e o <span>nosso treinamento vai te conduzir a esse sucesso.</span> Ganhe, cresça profissionalmente e conquiste a liberdade geográfica que você sempre desejou.",
    },
    {
      title:
        "Mais de 15.000 vagas de programação aguardando por você no Linkedin",
      text: "Hoje, mais do que nunca, <span>o mercado de programação está em alta</span>, e as oportunidades são vastas. Imagine-se ocupando uma das mais de 15.000 vagas disponíveis no LinkedIn. Com nosso método, você não só aprende a programar, mas também se prepara para conquistar o emprego dos seus sonhos.",
    },
    {
      title: "Liberdade financeira e geográfica",
      text: "A Code Start não é apenas um treinamento; é o seu guia para conquistar a liberdade. <span>Trabalhe de casa, elimine as longas jornadas de transporte e alcance a estabilidade financeira.</span> Transforme sua vida com uma metodologia validada, criada para você aprender a programar de forma rápida e eficaz.",
    },
  ];
  return (
    <div className="world-programming">
      <div className="container">
        <h1 className="section-title">O mundo da programação</h1>
        {arrayTexts.map((item, index) => {
          return (
            <BenefitsLineProgramming
              key={index}
              titleCard={item.title}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
}
