import "./ExclusiveBonus.styles.scss";

export function ExclusiveBonus() {
  return (
    <div className="container content-bonus">
      <div className="content-bonus-intern">
        <span className="content-bonus-legend">Bônus exclusivos</span>
        <h2>
          E não fica só por isso tenha
          <br />
          aceso a bônus exclusivos:
        </h2>
        <img
          loading="lazy"
          decoding="async"
          width="800"
          height="505"
          src="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/Camada-14-1024x647.png.webp"
          className="attachment-large size-large wp-image-1566"
          alt=""
          srcSet="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/Camada-14-1024x647.png.webp 1024w,  https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/Camada-14-300x189.png.webp 300w,  https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/Camada-14-768x485.png.webp 768w,  https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/Camada-14-1536x970.png.webp 1536w,  https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/Camada-14.png.webp 2028w"
          sizes="(max-width: 800px) 100vw, 800px"
        ></img>
        <h3>Comunicação para vendas<br/> com El Professor da Oratória</h3>
        <h4>Bônus PNE</h4>
        <div className="content-bonus-images">
          <img src="./first-bonus.png" alt="Bônus Code Start"/>
          <img src="./second-bonus.png" alt="Bônus Code Start"/>
        </div>
      </div>
    </div>
  );
}
