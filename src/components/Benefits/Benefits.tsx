import { Chip } from "../Chip";
import { CardBenefits } from "./CardBenefits";

export function Benefits() {
  const arrayTexts = [
    {
      title: "Do básico ao profissional em um único treinamento",
      text: "Se você sente que a programação é um mundo distante, sem entender por onde começar, o treinamento da Escola Code Start é a solução. Vamos te guiar desde os fundamentos até os níveis mais avançados, construindo a base sólida que você precisa para se tornar um programador profissional.",
    },
    {
      title: "Metodologia validada: da teoria à prática",
      text: "Nós acreditamos que a teoria aplicada à prática vai te levar para o próximo nível! Dessa forma nós estruturamos o conteúdo para que, em paralelo aos cursos, você possa fazer exercícios para treinar e também executar seus conhecimentos em projetos que são realmente utilizados no mercado de trabalho.",
    },
    {
      title: "Vagas selecionadas, currículo profissional e Linkedin atraente",
      text: "Muitos programadores enfrentam desafios ao procurar emprego: não encontram vagas adequadas ou possuem currículos que não destacam suas habilidades. Na Escola Code Start, oferecemos um canal exclusivo de vagas de emprego, além de duas masterclasses sobre como criar um LinkedIn profissional e um currículo que chama a atenção dos recrutadores.",
    },
    {
      title: "Tire dúvidas e faça escolhas certas para sua carreira",
      text: "Não fique perdido na jornada de aprendizado. Nossa escola oferece suporte especializado, pronto para responder suas dúvidas sobre programação e orientar suas escolhas de carreira. Conte com um apoio valioso para alcançar seus objetivos.",
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
