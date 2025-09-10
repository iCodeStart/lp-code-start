import { useState } from "react";
import InputMask from "react-input-mask";
import { DataExcel, useSendDataToExcel } from "../../queries";
import useIsMobile from "../../utils/useIsMobile";

import "./ModalDownloadEbook.styles.scss";

interface ModalDownloadEbookProps {
  title?: string;
  subtitle?: string;
  actionButton?: string;
  loadingButton?: string;
  fileName?: string;
}

export const ModalDownloadEbook = ({
  title = "ACESSO AO E-BOOK GUIA DO PROGRAMADOR",
  subtitle = "Preencha seus dados para ter acesso ao e-book!",
  actionButton = 'Acessar E-book',
  loadingButton = 'Recebendo E-book...',
  fileName = 'ebook-code-start.pdf',
}: ModalDownloadEbookProps) => {
  const { mutate } = useSendDataToExcel();
  const isMobile = useIsMobile();

  const [formData, setFormData] = useState<DataExcel>({
    nome: "",
    email: "",
    telefone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

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
        setTimeout(() => setIsLoading(false), 3000);
      },
      onError: () => {
        alert("Erro ao enviar dados");
        setIsLoading(false);
      },
    });
  };

  const getCleanedPhone = (phone: string) => phone.replace(/\D/g, "");

  const openPaymentLink = () => {
    const url = `/${fileName}`;
    window.open(url, isMobile ? "_self" : "_blank", "noreferrer");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // ➜ Removemos formatPhone aqui; deixamos o InputMask fazer seu trabalho
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="modal-download-ebook">
      <div className="modal-download-ebook-content">
        <h4 style={{ lineHeight: "2rem" }}>{title}</h4>

        <img style={{ width: "10rem", margin: "20px auto" }} src="/logo-code-start.svg" alt="logo" />

        <span style={{ fontWeight: "bold" }}>{subtitle}</span>

        <form onSubmit={handleSubmit} autoComplete="on">
          <div className="input-box">
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleInputChange}
              autoComplete="name"
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
              autoComplete="email"
              required
            />
          </div>

          <div className="input-box">
            <InputMask
              mask="(99) 99999-9999"
              maskChar={null}
              name="telefone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleInputChange}
              onBlur={handleInputChange}
              required
            />
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? loadingButton : actionButton}
          </button>
        </form>
      </div>
    </div>
  );
};

