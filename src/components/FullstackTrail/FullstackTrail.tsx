import { Chip } from "../Chip";
import "./FullstackTrail.styles.scss";

export function FullstackTrail({ isMainProduct = true }) {
  const labels = {
    title: isMainProduct ? "Nossa trilha fullstack" : "Nossa trilha Dev Cash",
    subTitle: isMainProduct
      ? "Voce vai aprender tudo sobre a linguagem mais utilizada pelas empresas, que eh o Javascript"
      : "Voce vai aprender tudo que precisa para fazer projetos simples e completos",
    img: isMainProduct ? "/roadmapCode.webp" : "/roadmapDevMobile.webp",
    imgMobile: isMainProduct
      ? "/roadmapCodeMobile.webp"
      : "/roadmapDevMobile.webp",
  };
  return (
    <div className="fullstack-trail">
      <div className="container">
        <div className="title-container">
          <Chip label="Trilha" />
          <h1 className="section-title">{labels.title}</h1>
        </div>
        <p className="fullstack-trail__text">{labels.subTitle}</p>
        <div className="fullstack-trail__content">
          <div className="fullstack-desktop">
            <img src={labels.img} alt="Trilha fullstack Code Start" />
          </div>
          <div className="fullstack-mobile">
            <img src={labels.imgMobile} alt="Trilha fullstack Code Start" />
          </div>
        </div>
      </div>
    </div>
  );
}
