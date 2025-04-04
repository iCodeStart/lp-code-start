import "./Footer.styles.scss";

export function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <img src="./logo-code-start.svg" alt="Logo Code Start" />
          <div className="copyright">
            <span>Code Start © 2025</span>
            <span>Todos os direitos reservados - CNPJ: 48.848.520/0001-85</span>
          </div>
        </div>
      </div>
    </div>
  );
}
