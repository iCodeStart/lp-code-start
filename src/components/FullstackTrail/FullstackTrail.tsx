import { Chip } from "../Chip";
import './FullstackTrail.styles.scss'

export function FullstackTrail() {
  return (
    <div className="fullstack-trail">
      <div className="container">
        <div className="title-container">
          <Chip label="Trilha" />
          <h1 className="section-title">Nossa trilha fullstack</h1>
        </div>
        <p className="fullstack-trail__text">
          Você vai aprender tudo sobre a linguagem mais utilizada pelas
          empresas, que é o Javascript{" "}
        </p>
        <div className="fullstack-trail__content">
          <div className="fullstack-desktop">
            <img src="/roadmapCode.webp" alt="Trilha fullstack Code Start" />
          </div>
          <div className="fullstack-mobile">
            <img
              src="/roadmapCodeMobile.webp"
              alt="Trilha fullstack Code Start"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
