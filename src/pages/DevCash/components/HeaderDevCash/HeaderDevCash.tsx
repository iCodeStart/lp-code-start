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
      Descubra como programadores iniciantes estão fechando seus primeiros
      trabalhos pagos e faturando{" "}
      <span className="highlight">R$1.500+ sem CLT!</span>
    </h1>
  );

  return (
    <header className="header-dev-cash">
      <div className="container">
        <div className="header-dev-cash__content">
          {title}
          <h2>
            Acesse o protocolo simples e validado para fechar seu primeiro
            trabalho freelancer nas próximas semanas.
          </h2>
        </div>
      </div>
    </header>
  );
}
