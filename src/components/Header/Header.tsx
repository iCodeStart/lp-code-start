// components/Header.js

export function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__content-container">
            <div className="header__content-logo">
              <img src="/logo-code-start.svg" alt="logo" />
              <button className="btn-buy">Quero trabalhar de casa</button>
            </div>
          </div>
          <div className="header__content-titles">
            <h1 className="header__content-titles-title">
              Ganhe Salário de Médico com Programação
            </h1>
            <h2 className="header__content-titles-subtitle">
              Existem mais de <span>15.000 vagas disponíveis hoje</span> e uma
              delas pode ser sua,{" "}
              <span>mesmo que você não saiba nada de programação!</span>
            </h2>
          </div>
          <button className="btn-buy" style={{ marginTop: "2em" }}>
            Quero trabalhar de casa
          </button>
        </div>
      </div>
    </div>
  );
}
