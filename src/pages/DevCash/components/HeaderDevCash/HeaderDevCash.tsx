import "./HeaderDevCash.scss";

interface HeaderDevCashProps {
  isUpSell?: boolean
}

export function HeaderDevCash({ isUpSell }: HeaderDevCashProps) {
  const title = isUpSell ? (
    <h1>
      Espere! Sua Jornada Para Se Tornar um Desenvolvedor <span className="highlight">Está Quase Completa</span>
    </h1>
  ) : (
    <h1>
      Descubra como pegar projetos enquanto ainda é um programador <span className="highlight">INICIANTE</span> e comece a {" "}
      <span className="highlight">GANHAR DINHEIRO</span>{" "} enquanto estuda para se desenvolver
    </h1>
  );

  return (
    <header className="header-dev-cash">
      <div className="container">
        <div className="header-dev-cash__content">
          {title}
          <h2>
            Acesse um método testado para fechar seus primeiros projetos como freelancer nos próximos dias.
          </h2>
        </div>
      </div>
    </header>
  );
}
