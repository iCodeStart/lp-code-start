import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import "./Contact.styles.scss";

const Contact = () => {
  const handleButtonClick = () => {
    const defaultMessage = encodeURIComponent(
      "Olá, gostaria de saber mais sobre o Treinamento da Code Start!!!"
    );
    window.open(
      `https://api.whatsapp.com/send?phone=+5532998573527&text=${defaultMessage}`,
      "_blank"
    );
  };
  return (
    <div className="contact-container">
      <div className="contact-text-section">
        <div className="contact-heading">
          Este valor pode sofrer
          <br /> reajuste a qualquer momento!
        </div>
        <div className="contact-subtext">
          Por isso, não espere para começar no mundo da programação.
          <br /> E caso tenha alguma dúvida, fale com a equipe no Whatsapp.
        </div>
        <button className="contact-whatsapp-button" onClick={handleButtonClick}>
          <FaWhatsapp className="contact-whatsapp-icon" /> Falar com
          especialista
        </button>
      </div>
      <div className="contact-image-section">
        <img
          src="/whatsappImage.png"
          alt="Imagem de Contato"
          className="contact-image"
        />
      </div>
    </div>
  );
};

export default Contact;
