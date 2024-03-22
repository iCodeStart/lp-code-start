// components/Header.js

export function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__content-container">
            <div className="header__content-logo">
              <img src="/logo-code-start.svg" alt="logo" />
              <a href="#offer" className="btn-buy hidden-mobile">
                <button>Quero trabalhar de casa</button>
              </a>
            </div>
          </div>
          <div className="header__content-titles">
            <h1 className="header__content-titles-title">
              <strong>
                Você nunca mais vai se sentir perdido e desmotivado para estudar
                programação
              </strong>
            </h1>
            <h2 className="header__content-titles-subtitle">
              Com o método <strong>A.P.P.</strong> você vai aprender de vez por
              todas a programar e conquistar a sua vaga de emprego de forma
              acelerada ainda esse ano
            </h2>
          </div>
          <a href="#offer" className="btn-buy" style={{ marginTop: "2em" }}>
            <button>Quero me inscrever</button>
          </a>
        </div>
      </div>
    </div>
  );
}
