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
            Se você investir 1 hora por dia para seguir o método{" "}
            <strong>AAP </strong>, em 90 dias estará pronto para ser contratado
            como programador
          </h1>
          <p>
            Só por seguir um método, você já aumenta em 90% as chances de não
            desistir de mais um projeto na sua vida
          </p>
          <p>Calma, vamos te mostrar como funciona 👇🏻</p>
        </div>
      </div>
    </div>
  );
}
