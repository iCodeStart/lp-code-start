import { Chip } from "../Chip";
import { Teacher } from "./Teacher/Teacher";

export function Teachers() {
  const arrayTeachers = [
    {
      img: "./teacher-1.png",
      name: "Alan Costa Braulio",
      description:
        "Formei em Engenharia de Computação pela PUC Minas. Sou desenvolvedor Web a mais de 10 anos ocupando posições de liderança e destaque nos times que atuei ajudando a gerir e organizar as equipes de desenvolvimento. Atualmente atuo como Desenvolvedor Sênior.",
    },
    {
      img: "./teacher-2.png",
      name: "Moésio Marcelino",
      description: "+5 anos de experiência com programação",
    },
    {
      img: "./teacher-3.png",
      name: "Davi Quirino",
      description:
        "Formei em Engenharia de Produção pela Universidade do Estado de Minas Gerais, fiz transição de carreira e estou atuando há mais de 5 anos como desenvolvedor de sistemas. Já participei de diversos projetos em empresas de grande porte e com sistemas com uso de milhões de pessoas. Atualmente atuo como Desenvolvedor Sênior.",
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
          {arrayTeachers.map((teacher) => {
            return (
              <Teacher
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
