import AOS from "aos";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import { Chip } from "../Chip";
import { LineOffer } from "./LineOffer";

export function Offer() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const srcParam = params.get("src");
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");
  const utmCampaign = params.get("utm_campaign");
  const utmContent = params.get("utm_content");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
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

  function trackingClickButton() {
    ReactGA.event({
      category: "offer",
      action: "clique-botao-offer",
      label: "quero-me-inscrever-inferior",
    });
  }

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
        <div className="container">
          <div className="title-container">
            <Chip label="Investimento" />
            <h1 className="section-title">
              <strong>TUDO O QUE VOCÊ PRECISA</strong> EM UM LUGAR SÓ
            </h1>
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
              <span style={{ color: "red" }}>
                <s
                  style={{
                    textDecorationColor: "#D8D8D8",
                  }}
                >{`R$ ${total},00`}</s>
              </span>
            </div>
            <div className="guarantee_access">
              {/* <h4>Mas hoje você não vai precisar investir isso...</h4> */}
              <h4>Esse é o preço original, mas investindo agora você vai...</h4>
              <h3>
                Aprender do zero ao profissional, em um só treinamento, 100%
                online e com{" "}
                <span style={{ color: "white" }}>acesso imediato,</span> por
                apenas:
              </h3>
              <h1 className="card-offer__price">
                <p style={{ fontSize: "15px" }}>12x de</p>29,70
              </h1>
              <p style={{ letterSpacing: "7.4px", color: "#D8D8D8" }}>
                {" "}
                ou 297 à vista
              </p>
              <a
                href={`https://pay.kiwify.com.br/0UKSbBo?src=${srcParam}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_content=${utmContent}`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="offer_button" onClick={trackingClickButton}>
                  QUERO ME INSCREVER
                </button>
              </a>
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
