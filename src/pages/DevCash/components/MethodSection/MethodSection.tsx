import React from 'react';
import './MethodSection.scss';

export const MethodSection: React.FC = () => {
  return (
    <section className="method">
      <div className="container">
        <div className="method__content">
          <h2>O Dev Cash é diferente de tudo o que você já viu…</h2>
          <p className="intro">O mercado te faz acreditar que para ganhar dinheiro como programador, você precisa de anos de experiência. Mas a verdade é que você só precisa saber onde encontrar os trabalhos certos.</p>
          
          <h3>Com o MÉTODO FREELANCE EXPRESS, você verá um trabalho real sendo fechado, executado e pago, do início ao fim.</h3>
          
          <div className="modules">
            <div className="module-item">
              <span className="check-icon">✅</span>
              <h4>Aula prática</h4>
              <p>Como criar seu perfil de freelancer e configurá-lo corretamente.</p>
            </div>
            
            <div className="module-item">
              <span className="check-icon">✅</span>
              <h4>Busca certeira</h4>
              <p>Como encontrar os melhores trabalhos para iniciantes.</p>
            </div>
            
            <div className="module-item">
              <span className="check-icon">✅</span>
              <h4>Proposta infalível</h4>
              <p>Como fazer uma proposta profissional para o seu cliente.</p>
            </div>
            
            <div className="module-item">
              <span className="check-icon">✅</span>
              <h4>Entrega profissional</h4>
              <p>Como concluir o trabalho e receber o pagamento sem complicação.</p>
            </div>
            
            <div className="module-item">
              <span className="check-icon">✅</span>
              <h4>Escala progressiva</h4>
              <p>Como transformar freelancing em uma renda mensal previsível.</p>
            </div>
          </div>

          <p className="conclusion">Um método prático e validado para você sair da incerteza e começar a ganhar dinheiro rápido!</p>

          {/* <Link
            to="cta"
            smooth={true}
            duration={500}
            className="button-primary"
          >
            Acessar o método Agora!
          </Link> */}
        </div>
      </div>
    </section>
  );
};
