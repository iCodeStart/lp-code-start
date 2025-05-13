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
          <img
            className="guarantee-img"
            src="https://i.imgur.com/r29LD5Y.png"
            alt="Code Start"
          />
          <br />
          <span style={{ color: "#fff" }}>UMA GARANTIA DE</span>{" "}
          <span style={{ color: "#00bcd3" }}>365 DIAS</span>
        </h1>
        <p>
          Simples: se você assistir 100% das nossas aulas e após assistir tudo (e nos comprovar que assistiu),
          dentro de 1 ano você não conseguir a sua vaga de programador...
        </p>
        <p style={{ fontSize: "24px" }}>
          <strong>...Nós devolvemos todo o seu dinheiro...</strong>
        </p>
        <p>
          ...Aqui você terá um suporte único e diferenciado para que você passe
          com certeza, ou nós perdemos dinheiro.
        </p>
      </div>
    </>
  );
}
