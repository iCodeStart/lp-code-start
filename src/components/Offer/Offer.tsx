import { LineOffer } from "./LineOffer";

import useIsMobile from "../../utils/useIsMobile";

import "./Offer.styles.scss";
import { Chip } from "../Chip";

export function Offer() {
  const isMobile = useIsMobile();

  const courses = [
    { title: "Lógica de Programação", price: 59 },
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
    {
      title: "Acesso Vitalício",
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

  const openPaymentLink = () => {
    const url = "https://pay.kiwify.com.br/TABlI0t?coupon=CODESTART50";
    window.open(url, `${isMobile ? "_self" : "_blank"}`, "noreferrer");
  };

  return (
    <>
      <div className="offer" id="offer">
        <div className="title-container">
          <Chip label="Investimento" />
          <h1 className="section-title">
            <strong>TUDO O QUE VOCÊ PRECISA</strong> EM UM LUGAR SÓ
          </h1>
          <h3 className="section-subtitle">
            Temos mais um presente especial para você: O acesso é vitalício,
            você investe apenas uma vez e tem acesso à formação para sempre!
          </h3>
          <h3 className="section-subtitle">Veja mais abaixo 👇</h3>
          <br />
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
              <p
                style={{
                  color: "#fff",
                }}
              >
                Total
              </p>
              <span style={{ color: "red" }}>
                <s
                  style={{
                    textDecorationColor: "#D8D8D8",
                  }}
                >{`R$ ${total},00`}</s>
              </span>
            </div>
            <div className="guarantee_access">
              <h3>INVISTA UMA VEZ E TENHA ACESSO PARA SEMPRE</h3>
              <h1 className="card-offer__price">
                <p style={{ fontSize: "22px" }}>12x de</p>30,72
              </h1>
              <p className="card-offer__price__all">
                {" "}
                ou{" "}
                <span style={{ fontWeight: "bold", color: "white" }}>
                  297
                </span>{" "}
                à vista
              </p>

              <button
                className="offer_button"
                onClick={() => openPaymentLink()}
              >
                Quero acessar agora
              </button>

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
              <p style={{ color: "#fff" }}>
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
