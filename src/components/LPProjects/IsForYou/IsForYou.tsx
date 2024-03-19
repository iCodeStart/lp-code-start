import "./IsForYou.styles.scss";

export function IsForYou() {
  return (
    <div className="container content-is-for-you">
      <div className="content-is-for-you-intern">
        <span className="content-is-for-you-legend">PNE é para você</span>
        <h2>Não importa qual a sua<br/>situação atual</h2>
        <div className="content-is-for-you-cards">
            <div className="content-is-for-you-card">
                <img src="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/icons8-clientes-64.png.webp" alt="Code Start"/>
                <h3>Está começando agora e não faz ideia de como conseguir bons clientes</h3>
            </div>
            <div className="content-is-for-you-card">
                <img src="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/unnamed-file.png.webp" alt="Code Start"/>
                <h3>Está começando agora e não faz ideia de como conseguir bons clientes</h3>
            </div>
            <div className="content-is-for-you-card">
                <img src="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/icons8-digital-100.png.webp" alt="Code Start"/>
                <h3>Está começando agora e não faz ideia de como conseguir bons clientes</h3>
            </div>
        </div>
      </div>
    </div>
  );
}
