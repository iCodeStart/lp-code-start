import { LineOffer } from "./LineOffer";

import useIsMobile from "../../utils/useIsMobile";

import "./Offer2.styles.scss";

export function Offer2() {
  const isMobile = useIsMobile();

  const courses = [
    { title: "Lógica de Programação", price: 59, isActive: true },
    { title: "HTML/CSS", price: 129, isActive: true },
    { title: "Git/Github", price: 129, isActive: true },
    { title: "Javascript", price: 147, isActive: true },
    { title: "Bootstrap", price: 129, isActive: false },
    { title: "React JS", price: 197, isActive: false },
    { title: "Node JS", price: 197, isActive: false },
  ];

  const additionalItems = [
    {
      title: "Conteúdos sobre mercado de trabalho",
      price: 47,
      isActive: false,
    },
    { title: "Exercícios", price: 97, isActive: true },
    {
      title: "Projetos reais",
      price: 197,
      isActive: true,
    },
    { title: "Suporte exclusivo para alunos", price: 97, isActive: true },
    {
      title: "Networking com pessoas da profissão",
      price: 97,
      isActive: false,
    },
    { title: "Simulação de entrevistas", price: 197, isActive: false },
  ];

  const itemsWithDescription = [
    {
      title: "Grupo Vip Code Start",
      description: "Incalculável",
      isActive: false,
    },
    {
      title: "Certificado validado",
      description: "Incalculável",
      isActive: true,
    },
    {
      title: "Acesso Vitalício",
      description: "Incalculável",
      isActive: true,
    },
  ];

  const total =
    courses.reduce((acc, course) => {
      return course.isActive ? acc + course.price : acc;
    }, 0) +
    additionalItems.reduce((acc, item) => {
      return item.isActive ? acc + item.price : acc;
    }, 0);

  const openPaymentLink = () => {
    const url = "https://pay.kiwify.com.br/UQJFF4d?coupon=CODESTART50";
    window.open(url, `${isMobile ? "_self" : "_blank"}`, "noreferrer");
  };

  return (
    <>
      <div className="offer" id="offer">
        <div className="container2">
          <div className="card-offer">
            <p className="title-card-offer">Oferta Básica</p>
            {courses.map((course, index) => (
              <LineOffer
                key={index}
                title={`${course.title}`}
                price={`R$ ${course.price},00`}
                isActive={course.isActive}
              />
            ))}
            {additionalItems.map((item, index) => (
              <LineOffer
                key={index}
                title={`${item.title}`}
                price={`R$ ${item.price},00`}
                isActive={item.isActive}
              />
            ))}

            {itemsWithDescription.map((item, index) => (
              <LineOffer
                key={index}
                title={`${item.title}`}
                description={item.description}
                isActive={item.isActive}
              />
            ))}

            <div className="card-offer__total">
              <p style={{
                    color: "#fff"
                  }}>Total</p>
              <span style={{ color: "red" }}>
                <s
                  style={{
                    textDecorationColor: "#D8D8D8",
                  }}
                >{`R$ ${total},00`}</s>
              </span>
            </div>
            <div className="guarantee_access">
              <h1 className="card-offer__price">
                <p style={{ fontSize: "22px" }}>12x de</p>19,72
              </h1>
              <p className="card-offer__price__all">
                {" "}
                ou{" "}
                <span style={{ fontWeight: "bold", color: "white" }}>
                  197
                </span>{" "}
                à vista
              </p>
              {/* <p style={{ fontWeight: "bold", color: "white" }}>MAS CALMA...</p>
              <p>
                Para começar o ano do jeito certo preparamos um PRESENTE
                ESPECIAL para VOCÊ!
              </p> */}

              <button
                className="offer_button"
                onClick={() => openPaymentLink()}
              >
                Quero acessar agora
              </button>
              {/* {isModalOpen && (
                <ModalOffer
                  isPrincipalOffer={"2"}
                  onClose={() => setModalOpen(!isModalOpen)}
                />
              )} */}

              {/* <p>
                *Válido para os dias: <strong>{obterDatas()}</strong>
              </p> */}
            </div>
            <img
              className="cards-accept"
              src="./cartoons.png"
              alt="Cartões aceitos Code Start"
            />
          </div>
        </div>
      </div>
    </>
  );
}
