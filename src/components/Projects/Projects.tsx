"use client";
import { useEffect, useState } from "react";
import { Chip } from "../Chip";
import './Projects.styles.scss'

export function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((current) => (current === 3 ? 0 : current + 1));
    }, 2000);
  
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
            <div
              className={
                activeProject === 3 ? "card-project-active" : "card-project"
              }
              onClick={() => handleCardClick(3)}
            >
              Agenda de Clientes
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
            <img
              className={
                activeProject === 3 ? "project-img-active" : "project-img"
              }
              src="./project-agency.webp"
              alt="Agenda de Clientes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
