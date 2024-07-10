import { useLocation } from "react-router-dom";
import { Chip } from "../Chip";
import { Teacher } from "./Teacher/Teacher";
import "./Teachers.styles.scss";

export function Teachers() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const srcParam = params.get("src");
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");
  const utmCampaign = params.get("utm_campaign");
  const utmContent = params.get("utm_content");
  const arrayTeachers = [
    {
      img: "./teacherAlan1.jpeg",
      name: "Alan Braulio",
      description:
        "<p>Formado em Engenharia de Computação pela PUC Minas.</p> <p>É desenvolvedor Web a mais de 10 anos ocupando posições de liderança e destaque nos times que atuou ajudando a gerir e organizar as equipes de desenvolvimento.</p><p>Atualmente atua como Desenvolvedor Sênior.</p>",
    },
    {
      img: "./teacherDavi.jpeg",
      name: "Davi Quirino",
      description:
        "<p>Formado em Engenharia de Produção pela Universidade do Estado de Minas Gerais, fez transição de carreira e está atuando há mais de 5 anos como desenvolvedor de sistemas.</p><p> Já participou de diversos projetos em empresas de grande porte e com sistemas com uso de milhões de pessoas.</p><p> Atualmente atua como Desenvolvedor Sênior na AMBEV.</p>",
    },
  ];
  return (
    <div className="teachers">
      <div className="container">
        <div className="title-container">
          <Chip label="Tutores" />
          <h1 className="section-title">Quem serão seus professores?</h1>
        </div>
        <div className="teachers__content">
          {arrayTeachers.map((teacher, index) => {
            return (
              <Teacher
                key={index + teacher.name}
                img={teacher.img}
                name={teacher.name}
                description={teacher.description}
              />
            );
          })}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          href={`https://pay.kiwify.com.br/0UKSbBo?src=${srcParam}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_content=${utmContent}`}
          target="_blank"
          rel="noreferrer"
        >
          <button className="offer_button" data-aos="fade-up">
            Quero ser programador
          </button>
        </a>
      </div>
    </div>
  );
}
