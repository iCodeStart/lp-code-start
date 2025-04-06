import "./Apresentation.styles.scss";
export function Apresentation() {
  return (
    <div className="content-lp-project-apresentation">
      <>
        <div className="overlay"></div>

        <div className="content-lp-project-apresentation-container">
          <span className="content-lp-project-apresentation-product-name">
            <img
              style={{ width: "20rem" }}
              src="/logo-code-start.svg"
              alt="logo"
            />
            <span className="content-lp-project-apresentation-alert">
              <i
                className="fas fa-exclamation-circle"
                style={{ marginRight: "0.5rem", color: "#00bcd3" }}
              />
              A MELHOR OPORTUNIDADE DE 2025!
            </span>
          </span>
          <div className="content-lp-project-apresentation-box-texts">
            <h1>
              Você nunca mais vai pensar em desistir e se sentir perdido na
              programação
            </h1>
            <p>
              Domine a programação com o método <strong>AAP</strong> e conquiste
              a sua vaga de emprego de forma acelerada - Estudando apenas 1 hora
              por dia!
            </p>
            <p>
              Aqui nós <strong style={{ color: "white" }}>GARANTIMOS</strong> a
              sua aprovação.
            </p>
          </div>
        </div>
      </>
    </div>
  );
}
