import React from 'react';
import './TransformationSection.scss';

export const TransformationSection: React.FC = () => {
  return (
    <section className="transformation">
      <div className="container">
        <div className="transformation__content">
          <div className="intro-text">
            <h1 className="highlight">Enquanto você estuda horas sem ver retorno…</h1>
            <p>…freelancers iniciantes estão fechando trabalhos e faturando 1, 2 e até 3 salários mínimos entregando projetos simples e rápidos.</p>
          </div>
          
          <div className="problem-statement">
            <p>Sabemos como é frustrante se candidatar a uma vaga, atualizar o e-mail a cada 5 minutos esperando uma resposta… e perceber que, mais uma vez, foi ignorado por não ter experiência.</p>
            <p className="error-message">❌ O problema não é você! O problema é como você está buscando o seu primeiro trabalho.</p>
          </div>

          <h2>Existe um passo a passo simples para qualquer pessoa:</h2>
          <div className="benefits">
            <div className="benefit-item">
              <span className="check-icon">✅</span>
              <p>Fechar o primeiro trabalho pago</p>
            </div>
            <div className="benefit-item">
              <span className="check-icon">✅</span>
              <p>Executá-lo com qualidade, mesmo sem experiência</p>
            </div>
            <div className="benefit-item">
              <span className="check-icon">✅</span>
              <p>Receber R$1.500+ na sua conta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};