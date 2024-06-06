import { Chip } from "../../Chip";
import "./Guarantee.styles.scss";

export function Guarantee() {
  return (
    <>
      <div className="title-container">
        <Chip label="Garantia 365 dias" />
        <h1 className="section-title1">
          Nós confiamos tanto na nossa entrega que
          <strong> queremos tirar qualquer risco de você...</strong>
        </h1>
      </div>
      <div className="retangulo">
        <h1 style={{ color: "#D8D8D8" }}>
          NOSSA PROPOSTA: <br />
          <img className="guarantee-img" src="https://i.imgur.com/r29LD5Y.png" alt="Code Start"/>
          <br />
          <span style={{ color: "#fff" }}>UMA GARANTIA DE</span>{" "}
          <span style={{ color: "#00bcd3" }}>365 DIAS</span>
        </h1>
        <p>
          Simples: se dentro de 1 ano você assistir nossas aulas e não conseguir
          a sua vaga de programador...
        </p>
        <p>
          <strong>...Nós devolvemos todo o seu dinheiro...</strong>
        </p>
        <p>
          ...Aqui você terá um suporte único e diferenciado para que você passe
          com certeza, ou nós perdemos dinheiro.
        </p>
      </div>
      {/* <div className="content-guarantee">
        <div>
          <img src="./jobOffer1.png" alt="method" className="image" />
        </div>
        <div className="content-context">
          <h1
            style={{ color: "white", textAlign: "center", lineHeight: "50px" }}
          >
            A responsabilidade é toda nossa!
          </h1>

          <br />
          <div className="content-text">
            Se dentro de 1 ano você não conseguir o seu resultado, basta
            preencher um formulário e nós{" "}
            <span style={{ color: "white" }}>
              devolveremos 100% do seu investimento.
            </span>
          </div>
          <br />
          <br />
          <div>
            Você tem tudo para conquistar a vaga dos seus sonhos seguindo o
            nosso método.
          </div>
          <div>
            {" "}
            <br />
            <br />
            Aqui você terá um suporte único e diferenciado para que você passe
            com certeza, ou nós perdemos dinheiro.
          </div>
        </div>
      </div> */}
    </>
  );
}
