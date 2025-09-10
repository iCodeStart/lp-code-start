import { useState, useRef } from "react"; // 👈 add useRef
// import InputMask from "react-input-mask"; // 👈 REMOVA esta linha
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
    telefone: "", // manter por compat, mas o input vai ser não-controlado
  });
  const [isLoading, setIsLoading] = useState(false);

  // 👇 ref pro input de telefone (não-controlado)
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // pega o valor direto do DOM (suporta autofill do iOS)
    const rawPhone = phoneRef.current?.value ?? formData.telefone;
    const cleanedPhone = getCleanedPhone(rawPhone);

    const formattedName = `Ebook-${formData.nome}`;
    const dataToSend = {
      ...formData,
      nome: formattedName,
      telefone: cleanedPhone, // sempre dígitos
    };

    // limpa os campos (inclui DOM do tel)
    setFormData({ nome: "", email: "", telefone: "" });
    if (phoneRef.current) phoneRef.current.value = "";

    mutate(dataToSend, {
      onSuccess: () => {
        openPaymentLink();
        setFormData({ nome: "", email: "", telefone: "" });
        if (phoneRef.current) phoneRef.current.value = "";
        setTimeout(() => setIsLoading(false), 3000);
      },
      onError: () => {
        alert("Erro ao enviar dados");
        setIsLoading(false);
      },
    });
  };

  // limpa TUDO que não é número; remove +55/zeros, limita a 11 dígitos
  const normalizePhone = (val: string) => {
    const onlyDigits = val.replace(/\D/g, "");
    const drop55 = onlyDigits.startsWith("55") && onlyDigits.length >= 12
      ? onlyDigits.slice(2)
      : onlyDigits;
    const dropLeading0 = drop55.startsWith("0") ? drop55.slice(1) : drop55;
    return dropLeading0.slice(0, 11);
  };

  const formatPhoneBR = (digits: string) => {
    if (!digits) return "";
    if (digits.length <= 10) {
      // (DD) xxxx-xxxx
      return digits.replace(/^(\d{0,2})(\d{0,4})(\d{0,4}).*$/, (_, d1, d2, d3) =>
        `${d1 ? `(${d1}` : ""}${d1?.length === 2 ? ")" : d1 ? "" : ""}${d2 ? ` ${d2}` : ""}${d3 ? `-${d3}` : ""}`.trim()
      );
    }
    // (DD) 9xxxx-xxxx
    return digits.replace(/^(\d{0,2})(\d{0,5})(\d{0,4}).*$/, (_, d1, d2, d3) =>
      `${d1 ? `(${d1}` : ""}${d1?.length === 2 ? ")" : d1 ? "" : ""}${d2 ? ` ${d2}` : ""}${d3 ? `-${d3}` : ""}`.trim()
    );
  };

  const getCleanedPhone = (phone: string) => normalizePhone(phone); // já retorna dígitos

  const openPaymentLink = () => {
    const url = `/${fileName}`;
    window.open(url, isMobile ? "_self" : "_blank", "noreferrer");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // nome/email seguem controlados normalmente
    if (name === "nome" || name === "email") {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // sincroniza e formata o telefone vindo de digitação OU autofill
  const syncPhone = () => {
    if (!phoneRef.current) return;
    const digits = normalizePhone(phoneRef.current.value);
    const formatted = formatPhoneBR(digits);
    phoneRef.current.value = formatted;
    // opcional: refletir no state (útil se você exibe em outro lugar)
    setFormData(prev => ({ ...prev, telefone: formatted }));
  };

  return (
    <div className="modal-download-ebook">
      <div className="modal-download-ebook-content">
        <h4 style={{ lineHeight: "2rem" }}>{title}</h4>

        <img
          style={{ width: "10rem", margin: "20px auto" }}
          src="/logo-code-start.svg"
          alt="logo"
        />

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
              autoCapitalize="words"
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
            <input
              ref={phoneRef}
              type="tel"
              name="telefone"
              placeholder="Telefone"
              defaultValue={formData.telefone}  // 👈 NÃO controlado
              autoComplete="tel"
              inputMode="numeric"
              onInput={syncPhone} // digitação
              onBlur={syncPhone}  // autofill que não dispara input
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
