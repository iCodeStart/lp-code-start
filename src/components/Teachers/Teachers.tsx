import { useLocation } from "react-router-dom";
import { Chip } from "../Chip";
import { Teacher } from "./Teacher/Teacher";
import './Teachers.styles.scss';

export function Teachers() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const srcParam = params.get("src");
  const arrayTeachers = [
    {
      img: "./teacherAlan1.jpeg",
      name: "Alan Braulio",
      description:
        "<p>Formei em Engenharia de Computação pela PUC Minas.</p> <p>Sou desenvolvedor Web a mais de 10 anos ocupando posições de liderança e destaque nos times que atuei ajudando a gerir e organizar as equipes de desenvolvimento.</p><p>Atualmente atuo como Desenvolvedor Sênior.</p>",
    },
    {
      img: "./teacherDavi.jpeg",
      name: "Davi Quirino",
      description:
        "<p>Formei em Engenharia de Produção pela Universidade do Estado de Minas Gerais, fiz transição de carreira e estou atuando há mais de 5 anos como desenvolvedor de sistemas.</p><p> Já participei de diversos projetos em empresas de grande porte e com sistemas com uso de milhões de pessoas.</p><p> Atualmente atuo como Desenvolvedor Sênior.</p>",
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
          href={`https://pay.kiwify.com.br/orBxsQS${
            srcParam ? `?src=${srcParam}` : ""
          }`}
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
