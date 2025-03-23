import React from 'react';
import './AudienceSection.scss';

export const AudienceSection: React.FC = () => {
  return (
    <section className="audience">
      <div className="container">
        <div className="audience__content">
          <h2>Para quem é essa oportunidade?</h2>
          
          <div className="ideal-profiles">
            <div className="profile-item">
              <span className="check">✅</span>
              <p>Para quem já sabe o básico de programação e quer transformar isso em dinheiro</p>
            </div>
            <div className="profile-item">
              <span className="check">✅</span>
              <p>Para quem quer um método testado para conseguir clientes e trabalhos pagos</p>
            </div>
            <div className="profile-item">
              <span className="check">✅</span>
              <p>Para quem busca liberdade financeira e flexibilidade de horário</p>
            </div>
          </div>

          <div className="warning">
            <h3>⚠ Atenção</h3>
            <p>Se você quer continuar apenas estudando sem ver resultados, esse método NÃO é para você.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
