import React from "react";
import "./PricingSection.scss";
import { useLocation } from "react-router-dom";

interface PricingSectionProps {
  isUpSell?: boolean;
}
export function PricingSection({ isUpSell }: PricingSectionProps) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const srcParam = params.get("src");
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");
  const utmCampaign = params.get("utm_campaign");
  const utmContent = params.get("utm_content");
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="pricing-section__container">
          <div className="pricing-section__content">
            <div className="pricing-section__intro">
              <h2 className="pricing-section__title">
                O que antes era EXCLUSIVO aos devs seniors, agora está a um
                clique!
              </h2>
              <p className="pricing-section__text">
                Você pode pensar que um treinamento assim custaria R$1.500,00…
              </p>
              <p className="pricing-section__text">
                Mas sabemos como é estar começando e não ter confiança para
                fechar seu primeiro trabalho pago.
              </p>
              <p className="pricing-section__highlight">APENAS HOJE!</p>
            </div>

            <div className="pricing-section__price-card">
              <div className="pricing-section__original-price">
                {isUpSell ? (
                  <>
                    <span>De</span>
                    <span className="pricing-section__amount pricing-section__amount--original">
                      R$ 297,00
                    </span>
                  </>
                ) : (
                  <>
                    <span>De</span>
                    <span className="pricing-section__amount pricing-section__amount--original">
                      R$697,00
                    </span>
                  </>
                )}
              </div>

              <div className="pricing-section__current-price">
                <span>Por apenas</span>
                <div className="pricing-section__options">
                  <div className="pricing-section__installments">
                    {isUpSell ? (
                      <span className="pricing-section__amount pricing-section__amount--installments">
                        <span className="pricing-section__amount pricing-section__amount--installments-installment">
                          12x
                        </span>{" "}
                        R$6,70
                      </span>
                    ) : (
                      <span className="pricing-section__amount pricing-section__amount--installments">
                        <span className="pricing-section__amount pricing-section__amount--installments-installment">
                          12x
                        </span>{" "}
                        R$9,70
                      </span>
                    )}
                  </div>
                  <span className="pricing-section__or">ou</span>
                  <div className="pricing-section__one-time">
                    {isUpSell ? (
                      <>
                        <span className="pricing-section__amount pricing-section__amount--one-time">
                          R$67
                        </span>
                        <span>à vista</span>
                      </>
                    ) : (
                      <>
                        <span className="pricing-section__amount pricing-section__amount--one-time">
                          R$97
                        </span>
                        <span>à vista</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {isUpSell ? (
                <>
                  <div style={{ textAlign: "center" }}>
                    <button
                      id="kiwify-upsell-trigger-6xb0tlP"
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
                  href={`https://pay.kiwify.com.br/UDQpxnq?src=${srcParam}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_content=${utmContent}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pricing-section__button-primary"
                >
                  Quero acessar agora!
                </a>
              )}

              <div className="pricing-section__guarantee">
                <img
                  src="./selo-garantia.png"
                  alt="Selo de garantia"
                  className="pricing-section__guarantee-seal"
                />
                <h3 className="pricing-section__guarantee-title">
                  Garantia Incondicional de 7 Dias
                </h3>
                <p className="pricing-section__guarantee-text">
                  O risco é todo nosso! Teste o Dev Cash por 7 dias. Se não
                  gostar ou achar que não é para você, basta pedir um reembolso
                  e devolveremos 100% do seu investimento.
                </p>
                <p className="pricing-section__guarantee-text">
                  Mas podemos garantir que, ao colocar o método em prática, você
                  verá os resultados que deseja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
