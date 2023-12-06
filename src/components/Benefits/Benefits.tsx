import { Chip } from "../Chip";
import { CardBenefits } from "./CardBenefits";

export function Benefits() {
  const arrayTexts = [
    {
      title: "Do básico ao profissional em um único treinamento",
      text: "Você vai ter o guia desde os fundamentos até a excelência na programação.",
    },
    {
      title: "Metodologia validada: da teoria à prática",
      text: "Treinamento com exercícios e projetos reais para te levar ao sucesso profissional.",
    },
    {
      title: "Vagas selecionadas e Linkedin atraente",
      text: "Na Escola Code Start, oferecemos um canal exclusivo de vagas de emprego, além de duas masterclasses sobre como criar um LinkedIn profissional que chama a atenção dos recrutadores.",
    },
    {
      title: "Tire dúvidas e faça escolhas certas para sua carreira",
      text: "Nossa escola oferece suporte especializado, pronto para responder suas dúvidas sobre programação e orientar suas escolhas de carreira.",
    },
  ];
  return (
    <div className="benefits">
      <div className="container">
        <div className="title-container">
          <Chip label="Vantagens" />
          <h1 className="section-title">Do básico ao avançado</h1>
        </div>
        {arrayTexts.map((item, index) => {
          return (
            <>
              <CardBenefits
                key={index}
                index={index}
                titleCard={item.title}
                text={item.text}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
