import { Chip } from "../../Chip";
import "./IsForYou.styles.scss";

export function IsForYou() {
  return (
    <div className="container content-is-for-you">
      <div className="content-is-for-you-intern">
        <div className="title-container">
          <Chip label="AAP é para você" />
          <h1 className="section-title">
            Não importa qual a sua situação atual
          </h1>
        </div>
        {/* <Chip label="" />
        <span className="content-is-for-you-legend">AAP é para você</span>
        <h2>
          Não importa qual a sua
          <br />
          situação atual
        </h2> */}
        <div className="content-is-for-you-cards">
          <div className="content-is-for-you-card">
            <img
              src="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/icons8-clientes-64.png.webp"
              alt="Code Start"
            />
            <h3>
              Está querendo começar a programar, e não sabe por onde começar.
            </h3>
          </div>
          <div className="content-is-for-you-card">
            <img
              src="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/icons8-digital-100.png.webp"
              alt="Code Start"
            />
            <h3>
              Está começando agora, mas a falta de foco te prejudica para
              continuar.
            </h3>
          </div>
          <div className="content-is-for-you-card">
            <img
              src="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/icons8-clientes-64.png.webp"
              alt="Code Start"
            />
            <h3>
              Quer fazer transição de carreira e precisa conciliar o seu
              trabalho com os estudos
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
