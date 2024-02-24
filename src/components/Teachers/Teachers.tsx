import { Chip } from "../Chip";
import { Teacher } from "./Teacher/Teacher";

export function Teachers() {
  const arrayTeachers = [
    {
      img: "./teacher-1.png",
      name: "Alan Costa Braulio",
      description:
        "<p>Formei em Engenharia de Computação pela PUC Minas.</p> <p>Sou desenvolvedor Web a mais de 10 anos ocupando posições de liderança e destaque nos times que atuei ajudando a gerir e organizar as equipes de desenvolvimento.</p><p>Atualmente atuo como Desenvolvedor Sênior.</p>",
    },
    {
      img: "./teacher-2.png",
      name: "Moésio Marcelino",
      description:
        "<p>Formei em Análise e Desenvolvimento de Sistemas pela UniFAP Ceará, com mais de 5 anos de experiência, agregadas como QA e Desenvolvedor Frontend.</p><p> Ocupei papéis de liderança, trabalhos com desenvolvimento ágil, mentoria de carreira de pessoas iniciantes, visto como referência técnica pelos pares.</p><p> Atualmente atua como desenvolvedor Sênior.</p>",
    },
    {
      img: "./teacher-3.png",
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
    </div>
  );
}
