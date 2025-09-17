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

          <div className="bonus">
            <h3>E ainda…</h3>
            <ul>
              <li>
                Tenha acesso a uma lista com mais de 30 plataformas para
                freelancers
              </li>
              <li>Guia Prático: Como começar na programação do jeito certo</li>
              <li>Workshop: Como precificar um projeto profissional</li>
            </ul>
          </div>

          {isUpSell ? (
                <>
                <div></div>
                {/* <div>
                    <button
                      id="kiwify-upsell-trigger-BbF4QXG"
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
                  </div> */}
                </>
              ) : (
                <a
                  href={`https://pay.kiwify.com.br/3G7XOoQ?src=${srcParam}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_content=${utmContent}`}
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
