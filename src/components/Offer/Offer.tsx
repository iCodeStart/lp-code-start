import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import InputMask from "react-input-mask";

import { Chip } from "../Chip";
import { LineOffer } from "./LineOffer";
import "./Offer.styles.scss";
import { DataExcel, useSendDataToExcel } from "../../queries";
import { useState } from "react";
import useIsMobile from "../../utils/useIsMobile";

export function Offer() {
  const isMobile = useIsMobile();
  const location = useLocation();
  const { mutate } = useSendDataToExcel();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<DataExcel>({
    nome: "",
    email: "",
    telefone: "",
  });
  const params = new URLSearchParams(location.search);
  const srcParam = params.get("src");
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");
  const utmCampaign = params.get("utm_campaign");
  const utmContent = params.get("utm_content");

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

  function trackingClickButton() {
    ReactGA.event({
      category: "offer",
      action: "clique-botao-offer",
      label: "quero-me-inscrever-inferior",
    });
  }

  const openPaymentLink = () => {
    const url = `https://pay.kiwify.com.br/TABlI0t?coupon=CODESTART50&name=${
      formData.nome
    }&email=${formData.email}&phone=${getCleanedPhone(
      formData.telefone
    )}&src=${srcParam}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_content=${utmContent}`;
    window.open(url, `${isMobile ? "_self" : "_blank"}`, "noreferrer");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "telefone") {
      const formattedValue = formatPhone(value);
      setFormData((prevData) => ({ ...prevData, [name]: formattedValue }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")
      .replace(/(\d)(\d{4})$/, "$1-$2");
  };

  const getCleanedPhone = (phone: string) => {
    return phone.replace(/\D/g, "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const cleanedPhone = getCleanedPhone(formData.telefone);
    const dataToSend = { ...formData, telefone: cleanedPhone };
    mutate(dataToSend, {
      onSuccess: () => {
        trackingClickButton();
        openPaymentLink();
        setModalOpen(false);
        setFormData({ nome: "", email: "", telefone: "" });
        setIsLoading(false);
      },
      onError: () => {
        alert("Erro ao enviar o cupom.");
        setIsLoading(false);
      },
    });
  };

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
                online e com{" "}
                <span style={{ color: "white" }}>acesso VITALÍCIO,</span> por
                apenas:
              </h3>
              <h1 className="card-offer__price">
                <p style={{ fontSize: "22px" }}>12x de</p>59,72
              </h1>
              <p className="card-offer__price__all">
                {" "}
                ou{" "}
                <span style={{ fontWeight: "bold", color: "white" }}>
                  597
                </span>{" "}
                à vista
              </p>
              <p>MAS CALMA QUE TEM MAIS!</p>
              <p>
                Estamos no mês da BLACK FRIDAY e preparamos um PRESENTE ESPECIAL
                para VOCÊ!
              </p>

              <button
                className="offer_button"
                onClick={() => setModalOpen(true)}
              >
                QUERO VER MEU PRESENTE
              </button>
              {isModalOpen && (
                <div className="modal-backdrop">
                  <div className="modal-content">
                    <h2>Seu presente é: UM CUPOM DE 50% DE DESCONTO</h2>
                    <h4>Preencha os dados e receba seu cupom!</h4>
                    <form onSubmit={handleSubmit}>
                      <div className="input-box">
                        <input
                          type="text"
                          name="nome"
                          placeholder="Nome"
                          value={formData.nome}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="input-box">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="input-box">
                        <InputMask
                          mask="(99) 99999-9999"
                          name="telefone"
                          placeholder="Telefone"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <button type="submit" disabled={isLoading}>
                        {isLoading ? "Aplicando cupom..." : "Receber Cupom"}
                      </button>
                    </form>
                  </div>
                </div>
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
