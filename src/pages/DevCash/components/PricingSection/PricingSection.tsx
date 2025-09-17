import React from "react";
import "./PricingSection.scss";
import { useLocation } from "react-router-dom";
import { Chip } from "../../../../components/Chip";
import { HotmartSalesFunnel } from "../../../../components/HotmartFunnel/HotmartFunnel";

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
        <div className="title-container">
          <Chip label="Investimento" />
          <h1 className="section-title">
            <strong>TUDO O QUE VOCÊ PRECISA</strong> EM UM LUGAR SÓ
          </h1>
        </div>

        <div className="pricing-section__container">
          <div className="pricing-section__content">
            <div className="pricing-section__price-card">
              <div className="pricing-section__what-you-get">
                {!isUpSell ? (
                  <>
                    <h2 className="pricing-section__subtitle">
                      Recapitulando tudo que você irá receber:
                    </h2>
                    <div
                      className="pricing-section__list pricing-section__list--right"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <div>✅ Curso completo de Lógica de Programação</div>
                      <div>✅ Curso completo de HTML/CSS</div>
                      <div>✅ Curso completo de Git/Github</div>
                      <div>✅ Curso completo de Javascript</div>
                      <div>
                        ✅ Suporte para tirar dúvidas ao longo do caminho
                      </div>
                      <div>✅ Materiais complementares e modelos prontos</div>
                      <div>✅ Certificado de conclusão</div>
                    </div>
                    <p
                      className="pricing-section__total-value"
                      style={{
                        color: "#FF4D4D",
                        textAlign: "right",
                        textDecoration: "line-through",
                        fontSize: "0.95rem",
                        marginTop: "0.5rem",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      Valor total: R$497
                    </p>
                    <hr style={{ margin: "2rem 0", borderColor: "#444" }} />
                  </>
                ) : null}

                <h3 className="pricing-section__subtitle">
                  Acesso ao Dev Cash
                </h3>
                <div
                  className="pricing-section__list pricing-section__list--right"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div>✅ Curso completo do Dev Cash</div>
                </div>
                <p
                  className="pricing-section__total-value"
                  style={{
                    color: "#FF4D4D",
                    textAlign: "right",
                    textDecoration: "line-through",
                    fontSize: "0.95rem",
                    marginTop: "0.5rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Valor total: R$347
                </p>
                <hr style={{ margin: "2rem 0", borderColor: "#444" }} />
                <h3 className="pricing-section__subtitle">
                  E mais, você também leva de bônus:
                </h3>
                <div
                  className="pricing-section__list pricing-section__list--right"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    🎁 Lista com mais de 30 plataformas para freelancers
                    <span
                      style={{
                        color: "#FF4D4D",
                        marginLeft: "0.5rem",
                        fontSize: "0.9rem",
                        textDecoration: "line-through",
                      }}
                    >
                      R$97
                    </span>
                  </div>
                  <div>
                    🎁 Guia Prático: Como começar na programação do jeito certo
                    <span
                      style={{
                        color: "#FF4D4D",
                        marginLeft: "0.5rem",
                        fontSize: "0.9rem",
                        textDecoration: "line-through",
                      }}
                    >
                      R$67
                    </span>
                  </div>
                  <div>
                    🎁 Workshop: Como precificar um projeto profissional
                    <span
                      style={{
                        color: "#FF4D4D",
                        marginLeft: "0.5rem",
                        fontSize: "0.9rem",
                        textDecoration: "line-through",
                      }}
                    >
                      R$57
                    </span>
                  </div>
                </div>
                <p
                  className="pricing-section__total-value"
                  style={{
                    color: "#FF4D4D",
                    textAlign: "right",
                    textDecoration: "line-through",
                    fontSize: "0.95rem",
                    marginTop: "0.5rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Valor dos bônus: R$221
                </p>
              </div>

              <div className="pricing-section__original-price">
                <span>Tudo isso deveria custar</span>
                <span className="pricing-section__amount pricing-section__amount--original">
                  {isUpSell ? "R$ 297,00" : "R$1.065,00"}
                </span>
                <span style={{ lineHeight: "1.5" }}>
                  Mas hoje você vai ter acesso ao Dev Cash, junto com todos os
                  bônus,
                </span>
              </div>

              <div className="pricing-section__current-price">
                <span>Por apenas</span>
                <div className="pricing-section__options">
                  <div className="pricing-section__installments">
                    <span className="pricing-section__amount pricing-section__amount--installments">
                      <span className="pricing-section__amount pricing-section__amount--installments-installment">
                        12x
                      </span>{" "}
                      {isUpSell ? "R$6,70" : "R$9,70"}
                    </span>
                  </div>
                  <span className="pricing-section__or">
                    ou {isUpSell ? "R$67" : "R$97"} à vista
                  </span>
                </div>
              </div>

              {isUpSell ? (
                <HotmartSalesFunnel />
              ) : (
                <a
                  href={`https://pay.kiwify.com.br/3G7XOoQ?src=${srcParam}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_content=${utmContent}`}
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
