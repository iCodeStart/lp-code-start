"use client";
import { useEffect, useState } from "react";
import { Chip } from "../Chip";

export function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    // Cria um intervalo que atualiza o estado `activeProject` a cada 1 segundo
    const interval = setInterval(() => {
      setActiveProject((current) => (current === 2 ? 0 : current + 1));
    }, 2000);

    // Limpa o intervalo quando o componente é desmontado
    // para evitar vazamentos de memória
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (index: number) => {
    setActiveProject(index);
  };

  return (
    <div className="projects">
      <div className="container">
        <div className="title-container">
          <Chip label="Projetos" />
          <h1 className="section-title">
            O que você vai ser capaz de fazer com o método AAP
          </h1>
          <p className="section-subtitle">
            Projetos impossíveis de serem ignorados pelos recrutadores!
          </p>
        </div>
        <div className="projects__content">
          <div className="cards-projects">
            <div
              className={
                activeProject === 0 ? "card-project-active" : "card-project"
              }
              onClick={() => handleCardClick(0)}
            >
              Controle financeiro
            </div>
            <div
              className={
                activeProject === 1 ? "card-project-active" : "card-project"
              }
              onClick={() => handleCardClick(1)}
            >
              Loja de informática
            </div>
            <div
              className={
                activeProject === 2 ? "card-project-active" : "card-project"
              }
              onClick={() => handleCardClick(2)}
            >
              Portfólio Pessoal
            </div>
          </div>
          <div className="images-projects">
            <img
              className={
                activeProject === 0 ? "project-img-active" : "project-img"
              }
              src="./project-controle-financeiro.webp"
              alt="Controle financeiro"
            />
            <img
              className={
                activeProject === 1 ? "project-img-active" : "project-img"
              }
              src="./project-loja-informatica.webp"
              alt="Loja de informática"
            />
            <img
              className={
                activeProject === 2 ? "project-img-active" : "project-img"
              }
              src="./project-portfolio-pessoal.webp"
              alt="Portfólio Pessoal"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
