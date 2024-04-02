import "./Guarantee.styles.scss";

export function Guarantee() {
  return (
    <div className="content-guarantee">
      <div>
        <img src="./jobOffer1.png" alt="method" className="image" />
      </div>
      <div>
        <div className="content-text">
          A nossa promessa é forte, mas é{" "}
          <span style={{ color: "white" }}>
            totalmente baseada nos resultados desse método nos nossos alunos.
          </span>
        </div>
        <br />
        <div className="content-text">
          É bem simples. Se você fizer todo o treinamento dentro de 1 ano e não
          conseguir a sua vaga de emprego, vamos te dar uma mentoria individual
          para ver onde você precisa melhorar.
        </div>
        <br />
        <div className="content-text">
          Mas se mesmo assim, você ainda nao conseguir o seu objetivo,{" "}
          <span style={{ color: "white" }}>
            nada mais justo que devolvermos 100% do que você investiu.
          </span>
        </div>
        <br />

        <div className="content-text">
          Resumindo, você tem a garantia de que se fizer o treinamento completo
          dentro de 1 ano e não conseguir o seu resultado, terá todo o seu
          investimento devolvido.
        </div>
        <br />

        <div className="content-text" style={{ color: "white" }}>
          Me responde com a maior sinceridade que puder. O que você tem a
          perder?
        </div>
      </div>
    </div>
  );
}
