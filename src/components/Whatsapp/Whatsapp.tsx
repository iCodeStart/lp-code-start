export function Whatsapp() {
  const defaultMessage = encodeURIComponent(
    "Olá, gostaria de saber mais sobre o Treinamento da Code Start!"
  );
 
  return (
    <div className="whatsapp-icon">
    <a href={`https://api.whatsapp.com/send?phone=32998573527&text=${defaultMessage}`} target="_blank" rel="noreferrer"><img className="whatsapp-image" src="/whatsapp1.webp" alt="WhatsApp" /></a>
    </div>
  );
}
