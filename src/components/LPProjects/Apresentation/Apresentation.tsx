import "./Apresentation.styles.scss";
import React, { lazy, Suspense } from "react";
import ReactGA from "react-ga4";

const Button = lazy(() => import("./components/ButtonApresentation/ButtonApresentation"));

function trackingClickButton() {
  ReactGA.event({
    category: "apresentation",
    action: "clique-botao-apresentation",
    label: "quero-ser-programador",
  });
}

export function Apresentation() {
  return (
    <div className="content-lp-project-apresentation">
      <div className="overlay"></div>
      <div className="content-lp-project-apresentation-container">
        <span className="content-lp-project-apresentation-product-name">
          MÉTODO AAP
        </span>
        <div className="content-lp-project-apresentation-box-texts">
          <h1>
            Você nunca mais vai pensar em desistir e se sentir perdido na
            programação
          </h1>
          <p>
            Domine a programação com o método <strong>AAP</strong> e conquiste a
            sua vaga de emprego de forma acelerada ainda esse ano - Estudando
            apenas 1 hora por dia!
          </p>
          <p>
            Aqui nós <strong style={{ color: "white" }}>GARANTIMOS</strong> a
            sua aprovação.
          </p>
          <div className="action-offer-apresentation">
            <a href="#offer" className="btn-buy" onClick={trackingClickButton}>
              <Suspense fallback={<div>Loading...</div>}>
                <Button text="Quero ser programador" />
              </Suspense>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
