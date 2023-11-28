import { Chip } from "../Chip";
import { LineOffer } from "./LineOffer";

export function Offer() {
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
    { title: "Projetos desenvolvidos na Code Start", price: 197 },
    { title: "Suporte exclusivo para alunos", price: 97 },
    { title: "Networking com pessoas da profissão", price: 97 },
    { title: "Simulação de entrevistas", price: 197 },
  ];

  const total =
    courses.reduce((acc, course) => acc + course.price, 0) +
    additionalItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div className="offer">
        <div className="container">
          <div className="title-container">
            <Chip label="Investimento" />
            <h1 className="section-title">Tudo o que você vai levar</h1>
          </div>
          <div className="card-offer">
            {courses.map((course, index) => (
              <LineOffer
                key={index}
                title={`Acesso ao curso de ${course.title}`}
                price={`R$ ${course.price},00`}
              />
            ))}
            {additionalItems.map((item, index) => (
              <LineOffer
                key={index}
                title={`Acesso a ${item.title}`}
                price={`R$ ${item.price},00`}
              />
            ))}
            <div className="card-offer__total">
              <p>Total</p>
              <span>
                <s>{`R$ ${total},00`}</s>
              </span>
            </div>
            <div className="guarantee_access">
              <h4>Mas hoje você não vai precisar investir isso...</h4>
              <h3>
                Aprenda do zero ao profissional e tenha acesso imediato por
                apenas 12x de
              </h3>
              <h1 className="card-offer__price">R$29,90</h1>
              <button className="offer_button">
                QUERO SER UM PROGRAMADOR COMPLETO
              </button>
            </div>
            <img
              className="cards-accept"
              src="./cartoons.png"
              alt="Cartões aceitos Code Start"
            />
            <div className="guarantee">
              <img src="./seven-days.png" alt="Garantia de 7 dias" />
              <p>
                Você tem até 07 dias para solicitar o cancelamento e receber seu
                investimento de volta. Basta solicitar o seu reembolso enviando
                um simples e-mail para o nosso suporte (contato@icodestart.com)
                dentro do prazo estabelecido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
