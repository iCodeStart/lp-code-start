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
           Sem saber nada de programação construa seu primeiro projeto em 30 dias
          </h1>
          <p>
           Tudo que você precisa é de um <strong>passo a passo simples e fácil</strong> de ser aplicado para começar a ganhar dinheiro com programação
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
