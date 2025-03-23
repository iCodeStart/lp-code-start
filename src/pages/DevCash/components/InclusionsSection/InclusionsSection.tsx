import React from "react";
import "./InclusionsSection.scss";

export const InclusionsSection: React.FC = () => {
  return (
    <section className="inclusions">
      <div className="container">
        <div className="inclusions__content">
          <h2>Aprenda na prática como ganhar dinheiro como freelancer</h2>

          <p className="intro-text">
            Chega de teoria vazia! No{" "}
            <strong className="project-important-info">Dev Cash</strong>, você
            verá
            <strong className="project-important-info">
              {" "}
              um passo a passo e sem cortes
            </strong>{" "}
            como encontramos um projeto real, fechamos um contrato de{" "}
            <strong className="project-important-info">R$800</strong>,
            executamos o trabalho em{" "}
            <strong className="project-important-info">4 dias</strong> e
            recebemos o pagamento em{" "}
            <strong className="project-important-info">20 dias</strong>.
          </p>

          <div className="features">
            <div className="feature-item">
              <div className="icon">🎯</div>
              <p>
                Como encontrar oportunidades reais de trabalho, mesmo começando
                do zero
              </p>
            </div>

            <div className="feature-item">
              <div className="icon">💼</div>
              <p>
                Negociação transparente: veja como fechamos o contrato e
                garantimos o pagamento
              </p>
            </div>

            <div className="feature-item">
              <div className="icon">💰</div>
              <p>
                Execução do projeto sem enrolação: acompanhe todo o processo até
                o pagamento
              </p>
            </div>
          </div>

          <div className="bonus">
            <h3>E ainda…</h3>
            <ul>
              <li>
                Tenha acesso a uma lista com mais de 30 plataformas para
                freelancers
              </li>
              <li>Guia Prático: Como começar na programação do jeito certo</li>
              <li>Workshop: Como precificar um projeto profissional</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
