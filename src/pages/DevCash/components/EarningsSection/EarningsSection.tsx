import React from "react";
// import { Link } from "react-scroll";
import "./EarningsSection.scss";

export const EarningsSection: React.FC = () => {
  return (
    <section className="earnings">
      <div className="container">
        <div className="earnings__content">
          <h2>Mas quanto dá para ganhar como freelancer?</h2>

          <div className="earnings-cards">
            <div className="earnings-card">
              <h3>Primeiros Meses</h3>
              <div className="amount">R$1.000 a R$3.000</div>
              <p>Com trabalhos rápidos e simples</p>
            </div>

            <div className="earnings-card featured">
              <h3>Aplicando o Método</h3>
              <div className="amount">R$5.000+</div>
              <p>Por mês aplicando o método de forma consistente</p>
            </div>
          </div>

          <div className="earnings__content--footer">
            <p className="potential">
              Potencial ilimitado para quem segue e escala o processo.
            </p>
            <p className="start-small">
              Comece com pequenos trabalhos e aumente seus ganhos a cada mês!
            </p>
          </div>
          {/* <Link
            to="cta"
            smooth={true}
            duration={500}
            className="button-primary"
          >
            QUERO GANHAR DINHEIRO!
          </Link> */}
        </div>
      </div>
    </section>
  );
};
