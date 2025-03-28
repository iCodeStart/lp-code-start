import { useLocation } from "react-router-dom";
import { Teacher } from "./Teacher/Teacher";
import "./TeachersSection.styles.scss";

interface TeachersSectionProps {
  isUpSell?: boolean
}

export function TeachersSection( { isUpSell } : TeachersSectionProps) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const srcParam = params.get("src");
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");
  const utmCampaign = params.get("utm_campaign");
  const utmContent = params.get("utm_content");
  const arrayTeachers = [
    {
      img: "./AlanFoto.jpg",
      name: "Alan Braulio",
      description:
        "<p>Programador Full Stack Sênior</p><p>Formado em Engenharia de Computação pela PUC Minas.</p> <p>É desenvolvedor a mais de 10 anos ocupando posições de liderança e destaque nos times que atuou ajudando a gerir e organizar as equipes de desenvolvimento.</p>",
    },
    {
      img: "./DaviFoto.jpg",
      name: "Davi Quirino",
      description:
        "<p>Programador Sênior na Ambev</p></p><p>Formado em Engenharia de Produção pela Universidade do Estado de Minas Gerais, fez transição de carreira e está atuando há mais de 5 anos como desenvolvedor de sistemas.</p><p> Já participou de diversos projetos em empresas de grande porte e com sistemas com uso de milhões de pessoas.</p>",
    },
  ];
  return (
    <div className="teachers-section">
      <div className="container">
        <div className="teachers-section__content">
          {arrayTeachers.map((teacher, index) => {
            return (
              <Teacher
                key={index + teacher.name}
                img={teacher.img}
                name={teacher.name}
                description={teacher.description}
              />
            );
          })}
        </div>
        <div className="teachers-section__choices">
          <h3>Agora você tem duas escolhas…</h3>
          <div className="teachers-section__choices-choice-item">
            <span className="icon">✅</span>
            <p>Começar agora e finalmente fechar seu primeiro trabalho pago</p>
          </div>
          <div className="teachers-section__choices-choice-item">
            <span className="icon">❌</span>
            <p>
              Ignorar essa oportunidade e continuar esperando pela vaga perfeita
              que nunca chega
            </p>
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
                  href={`https://pay.kiwify.com.br/znm9MjK?src=${srcParam}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_content=${utmContent}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pricing-section__button-primary"
                >
                  QUERO O SEGREDO
                </a>
              )}
        </div>
      </div>
    </div>
  );
}
