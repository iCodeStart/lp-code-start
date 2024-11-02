import { Chip } from "../Chip";
import LazyLoadVideo from "../LazyLoadVideo/LazyLoadVideo";
import { MethodItems } from "../LPProjects";
import { Dashboard } from "../LPProjects/Dashboard";
import "./School.styles.scss";

export function School() {
  return (
    <div className="school">
      <div className="container">
        <div className="title-container">
          <Chip label="Módulos" />
          <h1 className="section-title">
            Veja tudo que você vai ter acesso no AAP
          </h1>
        </div>
        <div className="school__content">
          <div className="school__content-text">
            <div className="school_content-text-item">
              <LazyLoadVideo videoId="6rORoSMq17I" />
            </div>
            <p className="school_content-text-title">
              Vamos te pegar pelas mãos e te ensinar tudo que você precisa
              saber,{" "}
              <strong>
                mesmo que você não tenha muito tempo para estudar.
              </strong>
            </p>

            <Dashboard />
          </div>
          <MethodItems />
        </div>
      </div>
    </div>
  );
}
