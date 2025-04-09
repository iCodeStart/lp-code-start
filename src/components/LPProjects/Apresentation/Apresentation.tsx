import "./Apresentation.styles.scss";
export function Apresentation({ isMainProduct = true }) {
  const labels = {
    title: isMainProduct
      ? "Você nunca mais vai pensar em desistir e se sentir perdido na programação"
      : "Transforme seus estudos em renda",
    subTitle1: isMainProduct
      ? `Domine a programação com o método <strong>AAP</strong> e conquiste a sua vaga de emprego de forma acelerada - Estudando apenas 1 hora por dia!`
      : "Descubra como transformar seu estudo em fonte de renda com o método <strong>Dev Cash</strong> – aprenda tecnologias básicas e comece a faturar ainda na sua jornada de aprendizado, mesmo sem experiência!",
    subTitle2: isMainProduct
      ? "Aqui nós <strong >GARANTIMOS</strong> a sua aprovação."
      : "Aqui, a gente te mostra o caminho para estudar e já lucrar com programação.",
  };

  return (
    <div className="content-lp-project-apresentation">
      <>
        <div className="overlay"></div>

        <div className="content-lp-project-apresentation-container">
          <span className="content-lp-project-apresentation-product-name">
            <img
              style={{ width: "20rem" }}
              src="/logo-code-start.svg"
              alt="logo"
            />
            <span className="content-lp-project-apresentation-alert">
              <i
                className="fas fa-exclamation-circle"
                style={{ marginRight: "0.5rem", color: "#00bcd3" }}
              />
              A MELHOR OPORTUNIDADE DE 2025!
            </span>
          </span>
          <div className="content-lp-project-apresentation-box-texts">
            <h1>{labels.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: labels.subTitle1 }} />
            <p
              dangerouslySetInnerHTML={{ __html: labels.subTitle2 }}
              style={{ color: "white" }}
            />
          </div>
        </div>
      </>
    </div>
  );
}
