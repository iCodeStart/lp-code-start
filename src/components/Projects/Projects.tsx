"use client";
import { useState } from "react";
import { CardInfoProject } from "./CardInfoProject";

export function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const handleCardClick = (index: number) => {
    setActiveProject(index);
  };

  return (
    <div className="projects">
      <div className="container">
        <h1 className="section-title">
          Alguns dos projetos que você vai criar na Escola da Code Start
        </h1>
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
          <h3>E muito mais....</h3>
          <CardInfoProject text="Todo mês desenvolvemos juntos muitos exercícios com resolução, projetos e desafios!" />
          <CardInfoProject text="Ao finalizar, você terá um repertório de respeito e experiência para desenvolver soluções alinhadas com diversas áreas do mercado de trabalho" />
        </div>
      </div>
    </div>
  );
}
