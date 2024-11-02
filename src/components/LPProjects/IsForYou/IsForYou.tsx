import { Chip } from "../../Chip";
import "./IsForYou.styles.scss";

export function IsForYou() {
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
            <h3>
              Sabe da oportunidade do mercado de tecnologia, mas não sabe como
              começar.
            </h3>
          </div>
          <div className="content-is-for-you-card">
            <img src="availability-svgrepo-com.svg" alt="availability" />
            <h3>
              Se sente perdido nos estudos de programação e precisa de um
              caminho.
            </h3>
          </div>
          <div className="content-is-for-you-card">
            <img src="./transicao.webp" alt="transicao" />
            <h3>
              Está insatisfeito com seu emprego atual e quer ser mais
              valorizado.
            </h3>
          </div>
          <div className="content-is-for-you-card">
            <img src="./balance.webp" alt="balance scale" />
            <h3>
              Quer que o seu emprego lhe proporcione uma melhor qualidade de
              vida.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
