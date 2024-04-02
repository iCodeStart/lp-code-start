import { Chip } from "../Chip";
import { MethodItems } from "../LPProjects";
import "./School.styles.scss";

export function School() {
  return (
    <div className="school">
      <div className="container">
        <div className="title-container">
          <Chip label="Módulos" />
          <h1 className="section-title">
            Veja tudo que você vai ter acesso no APP
          </h1>
        </div>
        <div className="school__content">
          <div className="school__content-text">
            <p className="school_content-text-title">
              Vamos te pegar pelas mãos e te ensinar tudo que você precisa
              saber,{" "}
              <strong>
                mesmo que você não tenha muito tempo para estudar.
              </strong>
            </p>
            <div className="school_content-text-item">
              <img src="./icon-benefits.svg" alt="Benefícios Code Start" />
              <p>
                Não fique mais preocupado com o que você vai estudar.
                <br /> <br /> É simples, já validamos e deixamos EXATAMENTE o
                que você precisa assistir <strong>todos os dias.</strong> <br />
                <br />A sua produtividade vai aumentar de uma forma que você
                nunca imaginou!
              </p>
            </div>
          </div>
          <MethodItems />
          {/* <div className="school_content_code-start">
            <img src="./ipad-code-start.png" alt="Comunidade Code Start" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
