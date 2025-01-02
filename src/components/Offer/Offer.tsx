import { LineOffer } from "./LineOffer";
import { useState } from "react";
import ModalOffer from "../ModalOffer/ModalOffer";

import "./Offer.styles.scss";
import { Chip } from "../Chip";

export function Offer() {
  const [isModalOpen, setModalOpen] = useState(false);

  const courses = [
    { title: "HTML/CSS", price: 129 },
    { title: "Bootstrap", price: 129 },
    { title: "Git/Github", price: 129 },
    { title: "Javascript", price: 147 },
    { title: "React JS", price: 197 },
    { title: "Node JS", price: 197 },
  ];

  const additionalItems = [
    { title: "Conteúdos sobre mercado de trabalho", price: 47 },
    { title: "Exercícios", price: 97 },
    { title: "Projetos reais", price: 197 },
    { title: "Suporte exclusivo para alunos", price: 97 },
    { title: "Networking com pessoas da profissão", price: 97 },
    { title: "Simulação de entrevistas", price: 197 },
  ];

  const itemsWithDescription = [
    {
      title: "Grupo Vip Code Start",
      description: "Incalculável",
    },
    {
      title: "Certificado validado",
      description: "Incalculável",
    },
  ];

  const total =
    courses.reduce((acc, course) => acc + course.price, 0) +
    additionalItems.reduce((acc, item) => acc + item.price, 0);

  const obterDatas = () => {
    const hoje = new Date();
    const ontem = new Date(hoje);
    const anteontem = new Date(hoje);

    ontem.setDate(hoje.getDate() - 1);
    anteontem.setDate(hoje.getDate() - 2);

    const diaHoje = hoje.getDate();
    const diaOntem = ontem.getDate();
    const diaAnteontem = anteontem.getDate();

    const meses = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];
    const mesAtual = meses[hoje.getMonth()];

    return `${diaAnteontem}, ${diaOntem} e ${diaHoje} de ${mesAtual}`;
  };

  return (
    <>
      <div className="offer" id="offer">
        <div className="title-container">
          <Chip label="Investimento" />
          <h1 className="section-title">
            <strong>TUDO O QUE VOCÊ PRECISA</strong> EM UM LUGAR SÓ
          </h1>
        </div>
        <div className="container1">
          <span className="pricing1">
            <span>Oferta Completa</span>
          </span>

          <div className="card-offer">
            <p className="title-card-offer">Especial de 2025:</p>
            {courses.map((course, index) => (
              <LineOffer
                key={index}
                title={`${course.title}`}
                price={`R$ ${course.price},00`}
              />
            ))}
            {additionalItems.map((item, index) => (
              <LineOffer
                key={index}
                title={`${item.title}`}
                price={`R$ ${item.price},00`}
              />
            ))}

            {itemsWithDescription.map((item, index) => (
              <LineOffer
                key={index}
                title={`${item.title}`}
                description={item.description}
              />
            ))}

            <div className="card-offer__total">
              <p>Total</p>
              <span style={{ color: "red" }}>
                <s
                  style={{
                    textDecorationColor: "#D8D8D8",
                  }}
                >{`R$ ${total},00`}</s>
              </span>
            </div>
            <div className="guarantee_access">
              <h4>Esse é o preço original, mas investindo agora você vai...</h4>
              <h3>
                Aprender do zero ao profissional, em um só treinamento, 100%
                online:
              </h3>
              <h1 className="card-offer__price">
                <p style={{ fontSize: "22px" }}>12x de</p>29,72
              </h1>
              <p className="card-offer__price__all">
                {" "}
                ou{" "}
                <span style={{ fontWeight: "bold", color: "white" }}>
                  297
                </span>{" "}
                à vista
              </p>
              <p style={{ fontWeight: "bold", color: "white" }}>MAS CALMA...</p>
              <p>
                Para começar o ano do jeito certo preparamos um PRESENTE
                ESPECIAL para VOCÊ!
              </p>

              <button
                className="offer_button"
                onClick={() => setModalOpen(true)}
              >
                QUERO VER MEU PRESENTE
              </button>
              {isModalOpen && (
                <ModalOffer
                  isPrincipalOffer={"1"}
                  onClose={() => setModalOpen(!isModalOpen)}
                />
              )}

              <p>
                *Válido para os dias: <strong>{obterDatas()}</strong>
              </p>
            </div>
            <img
              className="cards-accept"
              src="./cartoons.png"
              alt="Cartões aceitos Code Start"
            />
            <div className="guarantee">
              <img src="./seven-days.webp" alt="Garantia de 7 dias" />
              <p>
                Você terá sete dias para experimentar o treinamento sem nenhum
                compromisso. Se nesse período você achar que tudo isso não vale
                <strong> pelo menos o dobro do que você pagou</strong>, então
                basta entrar em contato com nossa equipe de suporte 24 horas que
                devolveremos todo o seu dinheiro, sem perguntinhas ou
                questionamentos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
