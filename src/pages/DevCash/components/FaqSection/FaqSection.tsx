import React, { useState } from "react";
import "./FaqSection.scss";

export const FaqSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Preciso ter experiência em programação?",
      answer:
        "Não. Te ensinamos tudo o que precisa para ter conhecimentos básicos de HTML, CSS e JavaScript, para já conseguir os primeiros projetos.",
    },
    {
      question: "Quanto tempo preciso dedicar por semana?",
      answer:
        "Recomendamos dedicar pelo menos 10 horas por semana para obter os melhores resultados. O curso é flexível e você pode estudar no seu próprio ritmo.",
    },
    {
      question: "Em quanto tempo posso começar a ganhar dinheiro?",
      answer:
        "Com dedicação, é possível conseguir o primeiro projeto em 2-4 semanas após iniciar o método. O valor e a quantidade de projetos aumentam com o tempo e experiência.",
    },
    {
      question: "Como funciona a garantia?",
      answer:
        "Oferecemos 7 dias de garantia incondicional. Se você não ficar satisfeito por qualquer motivo, devolvemos 100% do seu investimento.",
    },
    {
      question: "Tenho acesso vitalício ao conteúdo?",
      answer:
        "Sim! Você terá acesso vitalício a todo o conteúdo do curso e suas atualizações futuras.",
    },
  ];

  return (
    <section className="faq">
      <div className="container">
        <div className="faq__content">
          <h2>Perguntas Frequentes</h2>

          <div className="faq-items">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openItem === index ? "open" : ""}`}
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <div className="question">
                  <h3>{item.question}</h3>
                  <span className="arrow">▼</span>
                </div>
                <div className="answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
