import {
  Code2,
  Rocket,
  Trophy,
  Zap,
  ArrowRight,
  Play,
  LineChart,
  Code,
} from "lucide-react";
import { CSSProperties } from "react";

type NestedCSSProperties = CSSProperties & {
  [key: string]: string | number | NestedCSSProperties | undefined;
};

const styles: { [key: string]: NestedCSSProperties } = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0A0A0A",
    color: "#ffffff",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  nav: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  logoIcon: {
    width: "2rem",
    height: "2rem",
    color: "#00ff66",
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: "700",
    background: "linear-gradient(to right, #00ff66, #00cc52)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  menu: {
    display: "flex",
    gap: "2.5rem",
    alignItems: "center",
  },
  menuLink: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "0.875rem",
    fontWeight: "500",
    transition: "color 0.2s",
    ":hover": {
      color: "#00ff66",
    },
  },
  button: {
    backgroundColor: "#00ff66",
    color: "#000000",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    fontWeight: "600",
    fontSize: "0.875rem",
    cursor: "pointer",
    border: "none",
    transition: "all 0.2s",
    boxShadow: "0 0 20px rgba(0, 255, 102, 0.3)",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 0 30px rgba(0, 255, 102, 0.5)",
    },
  },
  hero: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "6rem 1.5rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "center",
  },
  heroContent: {
    position: "relative",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    backgroundColor: "rgba(0, 255, 102, 0.1)",
    color: "#00ff66",
    padding: "0.5rem 1rem",
    borderRadius: "9999px",
    marginBottom: "2rem",
    fontSize: "0.875rem",
    fontWeight: "500",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "700",
    lineHeight: "1.1",
    marginBottom: "1.5rem",
    background: "linear-gradient(to right, #ffffff, #00ff66)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    fontSize: "1.125rem",
    color: "#9ca3af",
    marginBottom: "2.5rem",
    lineHeight: "1.6",
  },
  stats: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    marginBottom: "2.5rem",
  },
  avatars: {
    display: "flex",
    marginRight: "-0.75rem",
  },
  avatar: {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "9999px",
    border: "2px solid #0A0A0A",
    marginLeft: "-0.75rem",
    boxShadow: "0 0 0 2px rgba(0, 255, 102, 0.3)",
  },
  statsInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  statsText: {
    fontWeight: "600",
    fontSize: "1.125rem",
  },
  statsSubtext: {
    color: "#9ca3af",
    fontSize: "0.875rem",
  },
  heroImage: {
    position: "relative",
  },
  mainImage: {
    width: "100%",
    height: "auto",
    borderRadius: "1rem",
    border: "1px solid rgba(0, 255, 102, 0.2)",
    boxShadow: "0 0 50px rgba(0, 255, 102, 0.15)",
  },
  floatingCard: {
    position: "absolute",
    bottom: "-2rem",
    left: "-2rem",
    backgroundColor: "rgba(10, 10, 10, 0.95)",
    padding: "1.5rem",
    borderRadius: "1rem",
    border: "1px solid rgba(0, 255, 102, 0.2)",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    backdropFilter: "blur(10px)",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
  },
  chartIcon: {
    width: "3rem",
    height: "3rem",
    color: "#00ff66",
  },
  features: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "6rem 1.5rem",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "4rem",
    background: "linear-gradient(to right, #ffffff, #00ff66)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2rem",
  },
  featureCard: {
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    padding: "2rem",
    borderRadius: "1rem",
    border: "1px solid rgba(0, 255, 102, 0.1)",
    transition: "all 0.3s",
    ":hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 0 30px rgba(0, 255, 102, 0.1)",
      border: "1px solid rgba(0, 255, 102, 0.3)",
    },
  },
  featureIcon: {
    width: "3rem",
    height: "3rem",
    color: "#00ff66",
    marginBottom: "1.5rem",
  },
  featureTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "1rem",
  },
  featureDescription: {
    color: "#9ca3af",
    lineHeight: "1.6",
  },
  cta: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "6rem 1.5rem",
    textAlign: "center",
  },
  ctaTitle: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "1.5rem",
    background: "linear-gradient(to right, #ffffff, #00ff66)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  ctaDescription: {
    color: "#9ca3af",
    fontSize: "1.25rem",
    maxWidth: "600px",
    margin: "0 auto 3rem",
    lineHeight: "1.6",
  },
  ctaButton: {
    backgroundColor: "#00ff66",
    color: "#000000",
    padding: "1rem 2.5rem",
    borderRadius: "0.5rem",
    fontWeight: "600",
    fontSize: "1.125rem",
    cursor: "pointer",
    border: "none",
    transition: "all 0.2s",
    boxShadow: "0 0 30px rgba(0, 255, 102, 0.3)",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.75rem",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 0 40px rgba(0, 255, 102, 0.5)",
    },
  },
};

const SummaryContent = () => {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <Code style={styles.logoIcon} />
          <span style={styles.logoText}>Code Start</span>
        </div>
        <div style={styles.menu}>
          <a href="#features" style={styles.menuLink}>
            Recursos
          </a>
          <a href="#roadmap" style={styles.menuLink}>
            Roteiro
          </a>
          <a href="#pricing" style={styles.menuLink}>
            Preços
          </a>
          <button style={styles.button}>Comece a Aprender</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.badge}>
            <Rocket size={16} />
            <span>Nova Maneira de Aprender Programação</span>
          </div>
          <h1 style={styles.title}>
            Domine a Programação Através do Aprendizado Visual
          </h1>
          <p style={styles.description}>
            Transforme conceitos de programação complexos em experiências
            visuais intuitivas. Aprenda mais rapidamente e aprofunde sua
            compreensão com nossa abordagem revolucionária.
          </p>
          <div style={styles.stats}>
            <div style={styles.avatars}>
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={`https://source.unsplash.com/random/100x100?face&sig=${i}`}
                  style={styles.avatar}
                  alt="Estudante"
                />
              ))}
            </div>
            <div style={styles.statsInfo}>
              <div style={styles.statsText}>Mais de 15.000 Estudantes</div>
              <div style={styles.statsSubtext}>Já estão aprendendo</div>
            </div>
          </div>
          <button style={styles.ctaButton}>
            <span>Inicie Sua Jornada</span>
            <ArrowRight size={20} />
          </button>
        </div>
        <div style={styles.heroImage}>
          <img
            src="https://source.unsplash.com/random/800x600?coding"
            alt="Programação Interativa"
            style={styles.mainImage}
          />
          <div style={styles.floatingCard}>
            <LineChart style={styles.chartIcon} />
            <div style={styles.statsInfo}>
              <div style={styles.statsText}>Aprendizado Interativo</div>
              <div style={styles.statsSubtext}>Aprenda na prática</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={styles.features} id="features">
        <h2 style={styles.sectionTitle}>
          Experiência de Aprendizado Revolucionária
        </h2>
        <div style={styles.featureGrid}>
          {[
            {
              icon: <Code2 style={styles.featureIcon} />,
              title: "Caminho de Aprendizado Visual",
              description:
                "Transforme conceitos abstratos em representações visuais intuitivas",
            },
            {
              icon: <Play style={styles.featureIcon} />,
              title: "Exercícios Interativos",
              description:
                "Pratique com feedback em tempo real e ferramentas de depuração visuais",
            },
            {
              icon: <Trophy style={styles.featureIcon} />,
              title: "Sistema de Conquistas",
              description:
                "Acompanhe seu progresso com marcos de aprendizado gamificados",
            },
          ].map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              {feature.icon}
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>
          Pronto para Transformar Seu Aprendizado?
        </h2>
        <p style={styles.ctaDescription}>
          Junte-se a milhares de estudantes que já descobriram o poder da
          educação em programação visual.
        </p>
        <button style={styles.ctaButton}>
          <span>Comece Hoje</span>
          <Zap size={20} />
        </button>
      </section>
    </div>
  );
};

export default SummaryContent;
