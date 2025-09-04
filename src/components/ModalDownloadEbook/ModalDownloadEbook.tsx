import { useState } from "react";
import InputMask from "react-input-mask";
import { DataExcel, useSendDataToExcel } from "../../queries";
import useIsMobile from "../../utils/useIsMobile";

import "./ModalDownloadEbook.styles.scss";

export const ModalDownloadEbook = () => {
  const { mutate } = useSendDataToExcel();
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState<DataExcel>({
    nome: "",
    email: "",
    telefone: "",
  });
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const cleanedPhone = getCleanedPhone(formData.telefone);
    const formattedName = `Ebook-${formData.nome}`;
    const dataToSend = {
      ...formData,
      nome: formattedName,
      telefone: cleanedPhone,
    };
    setFormData({ nome: "", email: "", telefone: "" });
    mutate(dataToSend, {
      onSuccess: () => {
        openPaymentLink();
        setFormData({ nome: "", email: "", telefone: "" });
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      },
      onError: () => {
        alert("Erro ao enviar dados");
        setIsLoading(false);
      },
    });
  };

  const getCleanedPhone = (phone: string) => {
    return phone.replace(/\D/g, "");
  };

  const openPaymentLink = () => {
    let url = "/ebook-code-start.pdf";
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
    <div className="modal-download-ebook">
      <div className="modal-download-ebook-content">
          <h2>Você ganhou:</h2>
          <h4 style={{ lineHeight: "2.5rem" }}>
            ACESSO AO E-BOOK GUIA DO PROGRAMADOR
          </h4>
        <span style={{ fontWeight: "bold"}}>
          Preencha seus dados para ter acesso ao e-book!
        </span>
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
            {isLoading ? "Recebendo E-book..." : "Acessar E-book"}
          </button>
        </form>
      </div>
    </div>
  );
};
