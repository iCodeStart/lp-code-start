import { Teacher } from "./Teacher/Teacher";

export function Teachers() {
  const arrayTeachers = [
    {
      img: "./teacher-1.png",
      name: "Alan Costa Braulio",
      description: "+10 anos de experiência com programação",
    },
    {
      img: "./teacher-1.png",
      name: "Moésio Marcelino",
      description: "+5 anos de experiência com programação",
    },
    {
      img: "./teacher-1.png",
      name: "Davi Quirino",
      description: "+5 anos de experiência com programação",
    },
  ];
  return (
    <div className="teachers">
      <div className="container">
        <h1 className="section-title">Quem serão seus professores?</h1>
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
