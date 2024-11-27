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
           Não fique mais perdido e alcance o sucesso profissional no mundo da tecnologia
          </h1>
          <p>
            Criamos o Método <strong>AAP</strong> para ser o seu guia de estudos. Com 1 hora por dia, em 3 meses, você estará pronto para a sua primeira vaga de emprego como programador.
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
