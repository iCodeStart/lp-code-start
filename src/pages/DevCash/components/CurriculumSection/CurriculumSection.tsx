import React from "react";
import "./CurriculumSection.scss";
import { useLocation } from "react-router-dom";

interface CurriculumSectionProps {
  isUpSell?: boolean
}
export function CurriculumSection( { isUpSell }: CurriculumSectionProps) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const srcParam = params.get("src");
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");
  const utmCampaign = params.get("utm_campaign");
  const utmContent = params.get("utm_content");
  return (
    <section className="curriculum">
      <div className="container">
        <div className="curriculum__content">
          <h2>Veja tudo o que está a um clique de distância…</h2>

          <img
            src="./mockupdevcash.png"
            alt="Prévia do conteúdo"
            className="preview-image"
          />

          <div className="modules">
            <h3>Módulos do Curso</h3>
            <ul className="module-list">
              <li>Seja bem vindo!</li>
              <li>Introdução</li>
              <li>Overview das Plataforma de Freelance</li>
              <li>Lista com 32 Plataformas de Freelancer Profissional</li>
              <li>Criando a nossa conta na Plataforma</li>
              <li>Completando o perfil de forma estratégica</li>
              <li>Preenchendo o Onboarding da Plataforma</li>
              <li>Procurando Projetos</li>
              <li>Mostrando o resultado da proposta feita para o cliente</li>
              <li>Codando o Projeto (Parte 1)</li>
              <li>Codando o Projeto (Parte 2)</li>
              <li>Codando o Projeto (Parte 3)</li>
              <li>Hospedando o nosso projeto</li>
              <li>Entregando o projeto para o cliente</li>
              <li>Configurando o saque</li>
              <li>Dados de faturamento</li>
              <li>Considerações finais</li>
            </ul>
          </div>

          <div className="bonus-section">
            <div className="bonus-card">
              <h3>
                <span>🎁</span>
                Bônus 1
              </h3>
              <p>Aprendendo a precificar um projeto profissional</p>
            </div>

            <div className="bonus-card">
              <h3>
                <span>🎁</span>
                Bônus 2
              </h3>
              <p>E-book Code Start (O Guia do programador)</p>
            </div>
          </div>

          {isUpSell ? (
                <>
                  <div style={{ textAlign: "center" }}>
                    <button
                      id="kiwify-upsell-trigger-9eH6J8x"
                      style={{
                        backgroundColor: "#00C0D7",
                        padding: "12px 16px",
                        cursor: "pointer",
                        color: "#000",
                        fontWeight: 600,
                        borderRadius: "4px",
                        border: "1px solid #00C0D7",
                        fontSize: "20px",
                      }}
                    >
                      Sim, quero ganhar dinheiro enquanto estudo
                    </button>
                    <div
                      id="kiwify-upsell-cancel-trigger"
                      style={{
                        marginTop: "1rem",
                        cursor: "pointer",
                        fontSize: "16px",
                        textDecoration: "underline",
                        color: "#999",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Não, eu gostaria de recusar essa oferta
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={`https://pay.kiwify.com.br/znm9MjK?src=${srcParam}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_content=${utmContent}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pricing-section__button-primary"
                >
                  Quero começar agora!
                </a>
              )}
        </div>
      </div>
    </section>
  );
};
