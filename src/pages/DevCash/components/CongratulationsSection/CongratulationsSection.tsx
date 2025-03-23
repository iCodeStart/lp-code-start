export function CongratulationsSection() {
  const styles = {
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
  };

  return (
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
          Você acaba de dar o primeiro passo para dominar HTML, CSS, JavaScript,
          React e Node. Mas e se você pudesse começar a ganhar dinheiro{" "}
          <span style={{ fontWeight: 600, color: "#00C0D7" }}>
            antes mesmo de terminar o curso
          </span>
          ?
        </p>
      </div>
    </div>
  );
}
