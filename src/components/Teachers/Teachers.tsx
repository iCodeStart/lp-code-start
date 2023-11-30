import { Chip } from "../Chip";
import { Teacher } from "./Teacher/Teacher";

export function Teachers() {
  const arrayTeachers = [
    {
      img: "./teacher-1.png",
      name: "Alan Costa Braulio",
      description: "+10 anos de experiência com programação",
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
        "Desenvolvedor Sênior na Ambev com +5 anos de experiência com programação",
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
