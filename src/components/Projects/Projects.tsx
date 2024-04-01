"use client";
import { useState } from "react";
import { Chip } from "../Chip";

export function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const handleCardClick = (index: number) => {
    setActiveProject(index);
  };

  return (
    <div className="projects">
      <div className="container">
        <div className="title-container">
          <Chip label="Projetos" />
          <h1 className="section-title">Alguns dos projetos do método APP</h1>
          <p className="section-subtitle">
            Todo mês desenvolvemos juntos muitos exercícios com resolução,
            projetos e desafios!
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
              src="./project-controle-financeiro.png"
              alt="Controle financeiro"
            />
            <img
              className={
                activeProject === 1 ? "project-img-active" : "project-img"
              }
              src="./project-loja-informatica.png"
              alt="Loja de informática"
            />
            <img
              className={
                activeProject === 2 ? "project-img-active" : "project-img"
              }
              src="./project-portfolio-pessoal.png"
              alt="Portfólio Pessoal"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
