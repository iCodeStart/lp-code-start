import "./Apresentation.styles.scss";

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
        </div>
      </div>
    </div>
  );
}
