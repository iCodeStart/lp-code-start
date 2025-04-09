import { Chip } from "../../Chip";
import "./IsForYou.styles.scss";

export function IsForYou({ isMainProduct = true }) {
  const labels = {
    option1: isMainProduct
      ? "Sabe da oportunidade do mercado de tecnologia, mas não sabe como comecar."
      : "Sabe que o mercado de tecnologia está em alta, mas ainda não faz ideia de por onde começar.",
    option2: isMainProduct
      ? "Se sente perdido nos estudos de programação e precisa de um caminho."
      : "Se sente perdido nos estudos, tentando aprender sozinho e sem ver resultado.",
    option3: isMainProduct
      ? "Está insatisfeito com seu emprego atual e quer ser mais valorizado."
      : "Está cansado do emprego atual e quer finalmente trabalhar com algo que traga reconhecimento e propósito.",
    option4: isMainProduct
      ? "Quer que o seu emprego lhe proporcione uma melhor qualidade de vida."
      : "Busca mais qualidade de vida, com a liberdade de trabalhar de casa e conquistar sua independência financeira.",
  };
  return (
    <div className="container content-is-for-you">
      <div className="content-is-for-you-intern">
        <div className="title-container">
          <Chip label="Sobre o método" />
          <h1 className="section-title">Para quem é:</h1>
        </div>
        <div className="content-is-for-you-cards">
          <div className="content-is-for-you-card">
            <img src="./lampada.webp" alt="lampada" />
            <h3>{labels.option1}</h3>
          </div>
          <div className="content-is-for-you-card">
            <img src="availability-svgrepo-com.svg" alt="availability" />
            <h3>{labels.option2}</h3>
          </div>
          <div className="content-is-for-you-card">
            <img src="./transicao.webp" alt="transicao" />
            <h3>{labels.option3}</h3>
          </div>
          <div className="content-is-for-you-card">
            <img src="./balance.webp" alt="balance scale" />
            <h3>{labels.option4}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
