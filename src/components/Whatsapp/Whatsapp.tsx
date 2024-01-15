export function Whatsapp() {
  const handleButtonClick = () => {
    const defaultMessage = encodeURIComponent(
      "Olá, gostaria de saber mais sobre o Treinamento da Code Start!"
    );
    window.open(
      `https://api.whatsapp.com/send?phone=32998573527&text=${defaultMessage}`,
      "_blank"
    );
  };
  return (
    <div className="whatsapp-icon" onClick={handleButtonClick}>
      <img className="whatsapp-image" src="/whatsapp1.png" alt="WhatsApp" />
    </div>
  );
}
