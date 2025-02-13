import {
  GraduationCap,
  DollarSign,
  Clock,
  Brain,
  CheckCircle2,
} from "lucide-react";

export function DevCash() {
  const styles = {
    container: {
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
    },
    hero: {
      backgroundColor: "#00C0D7",
      color: "#000",
      padding: "4rem 0",
    },
    heroContent: {
      maxWidth: "64rem",
      margin: "0 auto",
      padding: "0 1rem",
      textAlign: "center" as const,
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
      lineHeight: 1.2,
    },
    subheading: {
      fontSize: "1.5rem",
      opacity: 0.9,
    },
    mainContent: {
      maxWidth: "64rem",
      margin: "0 auto",
      padding: "3rem 1rem",
    },
    card: {
      backgroundColor: "#111",
      borderRadius: "0.5rem",
      padding: "2rem",
      boxShadow: "0 4px 6px rgba(0, 192, 215, 0.1)",
      marginBottom: "3rem",
      border: "1px solid rgba(0, 192, 215, 0.2)",
    },
    benefitsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "2rem",
      marginBottom: "3rem",
    },
    benefitCard: {
      backgroundColor: "#111",
      borderRadius: "0.5rem",
      padding: "1.5rem",
      boxShadow: "0 4px 6px rgba(0, 192, 215, 0.1)",
      border: "1px solid rgba(0, 192, 215, 0.2)",
    },
    icon: {
      width: "3rem",
      height: "3rem",
      marginBottom: "1rem",
    },
    benefitTitle: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      color: "#fff",
      marginBottom: "0.75rem",
    },
    benefitText: {
      color: "#999",
    },
    featureList: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "1rem",
    },
    featureItem: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
    },
    checkIcon: {
      width: "1.5rem",
      height: "1.5rem",
      color: "#00C0D7",
      flexShrink: 0,
      marginTop: "0.25rem",
    },
    priceCard: {
      backgroundColor: "rgba(0, 192, 215, 0.1)",
      borderRadius: "0.5rem",
      padding: "2rem",
      boxShadow: "0 4px 6px rgba(0, 192, 215, 0.1)",
      marginBottom: "3rem",
      textAlign: "center" as const,
      border: "1px solid rgba(0, 192, 215, 0.3)",
    },
    priceTitle: {
      fontSize: "1.875rem",
      fontWeight: "bold",
      color: "#fff",
      marginBottom: "1.5rem",
    },
    price: {
      fontSize: "2.25rem",
      fontWeight: "bold",
      color: "#00C0D7",
      marginBottom: "0.5rem",
    },
    guarantee: {
      textAlign: "center" as const,
      color: "#999",
      marginBottom: "2rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heading}>
            Espere! Sua Jornada Para Se Tornar um Desenvolvedor Está Quase
            Completa
          </h1>
          <p style={styles.subheading}>
            Descubra como começar a ganhar dinheiro com programação
            <span style={{ fontWeight: "bold" }}>
              {" "}
              enquanto ainda está estudando
            </span>
          </p>
        </div>
      </div>

      <div style={styles.mainContent}>
        <div style={styles.card}>
          <h2
            style={{
              ...styles.benefitTitle,
              fontSize: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            Parabéns pela sua decisão de aprender programação! 🎉
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#999", lineHeight: 1.7 }}>
            Você acaba de dar o primeiro passo para dominar HTML, CSS,
            JavaScript, React e Node. Mas e se você pudesse começar a ganhar
            dinheiro{" "}
            <span style={{ fontWeight: 600, color: "#00C0D7" }}>
              antes mesmo de terminar o curso
            </span>
            ?
          </p>
        </div>

        <div style={styles.benefitsGrid}>
          <div style={styles.benefitCard}>
            <DollarSign style={{ ...styles.icon, color: "#00C0D7" }} />
            <h3 style={styles.benefitTitle}>Comece a Faturar Mais Cedo</h3>
            <p style={styles.benefitText}>
              Aprenda estratégias comprovadas para conseguir seus primeiros
              clientes e projetos freelance, mesmo sendo iniciante.
            </p>
          </div>

          <div style={styles.benefitCard}>
            <Clock style={{ ...styles.icon, color: "#00C0D7" }} />
            <h3 style={styles.benefitTitle}>Acelere Seu Progresso</h3>
            <p style={styles.benefitText}>
              Descubra como aplicar na prática o que está aprendendo e ganhe
              experiência real de mercado simultaneamente.
            </p>
          </div>

          <div style={styles.benefitCard}>
            <Brain style={{ ...styles.icon, color: "#00C0D7" }} />
            <h3 style={styles.benefitTitle}>Mindset Profissional</h3>
            <p style={styles.benefitText}>
              Desenvolva a mentalidade certa para se posicionar no mercado e
              conquistar clientes mesmo sendo iniciante.
            </p>
          </div>

          <div style={styles.benefitCard}>
            <GraduationCap style={{ ...styles.icon, color: "#00C0D7" }} />
            <h3 style={styles.benefitTitle}>Aprenda na Prática</h3>
            <p style={styles.benefitText}>
              Receba um guia passo a passo para encontrar e executar seus
              primeiros projetos reais.
            </p>
          </div>
        </div>

        <div style={styles.card}>
          <h2 style={styles.priceTitle}>O Que Você Vai Receber no Dev Cash:</h2>
          <div style={styles.featureList}>
            {[
              "Veja tudo na prática: acompanhe um projeto real, do primeiro contato à entrega.",
              "Negocie e feche contratos lucrativos: estratégias para conversar com clientes e conquistar projetos.",
              "Precifique com segurança: saiba como valorizar seu trabalho e aumentar seus ganhos.",
              "Receba de verdade: entenda como organizar pagamentos e garantir seu lucro.",
              "Técnicas de negociação para desenvolvedores iniciantes",
              "Use as ferramentas certas: reduza tempo de produção e entregue mais valor.",
            ].map((item, index) => (
              <div key={index} style={styles.featureItem}>
                <CheckCircle2 style={styles.checkIcon} />
                <p style={styles.benefitText}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.priceCard}>
          <div style={{ textAlign: "center" }}>
            <h2 style={styles.priceTitle}>Investimento Especial</h2>
            <div style={{ marginBottom: "1.5rem" }}>
              <p style={{ fontSize: "1.125rem", color: "#999" }}>
                De{" "}
                <span style={{ textDecoration: "line-through" }}>R$ 397</span>{" "}
                por apenas:
              </p>
              <p style={styles.price}>R$ 197</p>
              <p style={{ color: "#999" }}>ou 12x de R$ 19,70</p>
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#999",
                marginBottom: "2rem",
              }}
            >
              ⚡ Oferta especial disponível apenas neste momento
            </p>

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
          </div>
        </div>

        <div style={styles.guarantee}>
          <p style={{ marginBottom: "0.5rem" }}>
            🔒 Garantia incondicional de 7 dias
          </p>
          <p style={{ fontSize: "0.875rem" }}>
            Se você não ficar satisfeito com o conteúdo, devolvemos 100% do seu
            dinheiro
          </p>
        </div>
      </div>
    </div>
  );
}
