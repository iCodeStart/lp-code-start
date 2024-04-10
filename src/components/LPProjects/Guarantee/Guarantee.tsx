import "./Guarantee.styles.scss";

export function Guarantee() {
  return (
    <div className="content-guarantee">
      <div>
        <img src="./jobOffer1.png" alt="method" className="image" />
      </div>
      <div className="content-context">
        <h1 style={{ color: "white", textAlign: "center", lineHeight: "50px" }}>
          A responsabilidade é toda nossa!
        </h1>

        <br />
        <div className="content-text">
          Se dentro de 1 ano você não conseguir o seu resultado, basta preencher
          um formulário e nós{" "}
          <span style={{ color: "white" }}>
            devolveremos 100% do seu investimento.
          </span>
        </div>
        <br />
        <br />
        <div>
          Você tem tudo para conquistar a vaga dos seus sonhos seguindo o nosso
          método.
        </div>
        <div>
          {" "}
          <br />
          <br />
          Aqui você terá um suporte único e diferenciado para que você passe com
          certeza, ou nós perdemos dinheiro.
        </div>
        {/* <br />
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
        </div> */}
        {/* <br />

        <div className="content-text">
          Resumindo, você tem a garantia de que se fizer o treinamento completo
          dentro de 1 ano e não conseguir o seu resultado, terá todo o seu
          investimento devolvido.
        </div>
        <br />

        <div className="content-text" style={{ color: "white" }}>
          Me responde com a maior sinceridade que puder. O que você tem a
          perder?
        </div> */}
      </div>
    </div>
  );
}
