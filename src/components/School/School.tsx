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
                Já imaginou você na frente do computador sem se preocupar com o
                que vai estudar hoje?
                <br /> É simples, já validamos e deixamos exatamente o que você
                precisa assistir todos os dias. <br />
                Imagina o quanto a sua produtividade e o seu tempo livre vão
                aumentar.
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
