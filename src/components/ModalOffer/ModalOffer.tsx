import { useState } from "react";
import ReactGA from "react-ga4";
import InputMask from "react-input-mask";
import { DataExcel, useSendDataToExcel } from "../../queries";
import useIsMobile from "../../utils/useIsMobile";
import { useLocation } from "react-router-dom";

import "./ModalOffer.styles.scss";

interface ModalOfferProps {
  isPrincipalOffer: boolean;
  onClose?: () => void;
}

const ModalOffer = ({ isPrincipalOffer, onClose }: ModalOfferProps) => {
  const { mutate } = useSendDataToExcel();
  const isMobile = useIsMobile();
  const location = useLocation();
  const [formData, setFormData] = useState<DataExcel>({
    nome: "",
    email: "",
    telefone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const numberForm = isPrincipalOffer ? "1" : "2";
  const params = new URLSearchParams(location.search);
  const srcParam = params.get("src");
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");
  const utmCampaign = params.get("utm_campaign");
  const utmContent = params.get("utm_content");

  function trackingClickButton() {
    ReactGA.event({
      category: "offer",
      action: "clique-botao-offer",
      label: "quero-me-inscrever-inferior",
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const cleanedPhone = getCleanedPhone(formData.telefone);
    const formattedName = `${numberForm}-${formData.nome}`;
    const dataToSend = {
      ...formData,
      nome: formattedName,
      telefone: cleanedPhone,
    };
    console.log("dataToSend", dataToSend);
    mutate(dataToSend, {
      onSuccess: () => {
        trackingClickButton();
        openPaymentLink();
        setFormData({ nome: "", email: "", telefone: "" });
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      },
      onError: () => {
        alert("Erro ao enviar o cupom.");
        setIsLoading(false);
      },
    });
  };

  const getCleanedPhone = (phone: string) => {
    return phone.replace(/\D/g, "");
  };

  const openPaymentLink = () => {
    let url = "";
    if (isPrincipalOffer) {
      url = `https://pay.kiwify.com.br/TABlI0t?coupon=CODESTART50&name=${
        formData.nome
      }&email=${formData.email}&phone=${getCleanedPhone(
        formData.telefone
      )}&src=${srcParam}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_content=${utmContent}`;
    } else {
      url = `https://pay.kiwify.com.br/vhZP9Nm?coupon=CODESTART50&name=${
        formData.nome
      }&email=${formData.email}&phone=${getCleanedPhone(
        formData.telefone
      )}&src=${srcParam}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_content=${utmContent}`;
    }
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

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Seu presente é:<br/><br/> ACESSO VITALÍCIO AO TREINAMENTO</h2>
        <h4>Preencha seus dados, finalize sua compra e garanta enquanto o presente está ativo!</h4>
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
            {isLoading ? "Aplicando presente..." : "Garantir meu acesso"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default ModalOffer;
