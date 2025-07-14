import { Chip } from "../Chip";
import "./BonusIA.styles.scss";

const BonusIA = () => {
  const features = [
    "Fundamentos de Inteligência Artificial",
    "Machine Learn",
    "Visão computacional",
    "Inteligência de documentos",
    "IA generativa",
    "Integração com IA",
  ];

  const interviewFeatures = [
    "Simulador de Entrevistas Técnicas",
    "Perguntas Personalizadas por Nível",
    "Feedback em Tempo Real",
    "Diferentes Tecnologias (React, Node, Python)",
    "Análise de Performance",
    "Dicas de Comunicação Técnica",
  ];

  return (
    <div className="bonus-ia" id="bonus-ia">
      <div className="bonus-container">
        {/* Header com efeito de brilho */}
        <div className="bonus-header">
          <Chip label="BÔNUS EXCLUSIVO" />
          <h1 className="bonus-title">
            <strong>TREINAMENTO COMPLETO</strong> DE FUNDAMENTOS DE IA
          </h1>
          <div className="bonus-subtitle">
            <p>
              <strong>VALOR REAL: R$ 497,00</strong>
            </p>
            <p>
              <strong>HOJE: TOTALMENTE GRÁTIS</strong>
            </p>
          </div>
        </div>

        {/* Card principal com imagem */}
        <div className="bonus-card">
          <div className="card-header">
            <div className="price-tag">
              <span className="original-price">R$ 497,00</span>
              <span className="free-price">GRÁTIS</span>
            </div>
          </div>

          <div className="card-content">
            <div className="content-grid">
              <div className="text-content">
                <h2 className="section-title">O que você vai aprender:</h2>

                <div className="features-grid">
                  <div className="feature-column">
                    <h3 className="column-title"> IA para programadores</h3>
                    {features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <span className="check-icon">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="feature-column">
                    <h3 className="column-title">IA na prática</h3>
                    {interviewFeatures.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <span className="check-icon">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bonus-highlight">
                  <div className="highlight-box">
                    <h3>PROJETO PRÁTICO INCLUSO</h3>
                    <p>Crie um simulador de entrevistas técnicas com IA que:</p>
                    <ul>
                      <li>Adapta perguntas ao seu nível</li>
                      <li>Escolhe a tecnologia que você quer aprender</li>
                      <li>Fornece feedback personalizado</li>
                      <li>Prepara você para o mercado real</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="value-proposition">
              <div className="value-item">
                <span className="value-icon">💰</span>
                <div>
                  <h4>Valor Real</h4>
                  <p>R$ 497,00</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">🎁</span>
                <div>
                  <h4>Bônus Exclusivo</h4>
                  <p>100% Grátis</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">⚡</span>
                <div>
                  <h4>Acesso Imediato</h4>
                  <p>Incluso no Curso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusIA;
