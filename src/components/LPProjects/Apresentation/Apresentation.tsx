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
           O Guia para qualquer pessoa conseguir seu primeiro emprego na área de programação
          </h1>
          <p>
          Aprenda o que é realmente cobrado <strong>pelas maiores empresas do mercado</strong> e tudo que você precisa saber com um passo a passo simples e fácil de ser aplicado
          </p>
          {/* <p>
            Aqui nós <strong style={{ color: "white" }}>GARANTIMOS</strong> a
            sua aprovação.
          </p> */}
        </div>
      </div>
    </div>
  );
}
