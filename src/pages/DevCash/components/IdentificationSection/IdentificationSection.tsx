import React from 'react';
import './IdentificationSection.scss';

export const IdentificationSection: React.FC = () => {
  return (
    <section className="identification">
      <div className="container">
        <div className="identification__content">
          <h2>Isso se parece com a sua realidade?</h2>
          
          <div className="questions">
            <div className="question-item">
              <span className="icon">🔹</span>
              <p>Você já estudou um pouco de programação, mas não sabe como transformar isso em dinheiro.</p>
            </div>
            <div className="question-item">
              <span className="icon">🔹</span>
              <p>Sente insegurança na hora de procurar trabalhos, achando que ainda não está pronto.</p>
            </div>
            <div className="question-item">
              <span className="icon">🔹</span>
              <p>Está cansado de estudar sem ver retorno financeiro.</p>
            </div>
          </div>

          <div className="conclusion">
            <p>Se respondeu sim para qualquer uma dessas afirmações, o Dev Cash é perfeito para você!</p>
            <p>Empresas contratam programadores iniciantes todos os dias!</p>
            <p>A única coisa que falta é você aprender o método certo para transformar seu conhecimento em dinheiro.</p>
          </div>

          {/* <Link
            to="cta"
            smooth={true}
            duration={500}
            className="button-primary"
          >
            Sim! Quero Ter Acesso Agora!
          </Link> */}
        </div>
      </div>
    </section>
  );
};