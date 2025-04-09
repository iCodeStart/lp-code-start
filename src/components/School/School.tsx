import { Chip } from "../Chip";
import LazyLoadVideo from "../LazyLoadVideo/LazyLoadVideo";
import { MethodItems } from "../LPProjects";
import { Dashboard } from "../LPProjects/Dashboard";
import "./School.styles.scss";

export function School({ isMainProduct = true }) {
  const labels = {
    title: isMainProduct
      ? "Veja tudo que vocé vai ter acesso no AAP"
      : "Veja tudo que vocé vai ter acesso no Dev Cash",
    subTitle: isMainProduct
      ? "Vamos te pegar pelas mãos e te ensinar tudo que você precisa saber, mesmo que vocé nao tenha muito tempo para estudar."
      : "",
    contentText: isMainProduct
      ? "Vamos te pegar pelas mãos e te ensinar tudo que você precisa saber,"
      : "Vamos te pegar pelas mãos e te mostrar tudo que vocé precisa saber,",
    strongText: isMainProduct
      ? " mesmo que vocé nao tenha muito tempo para estudar."
      : " na prática, com um projeto real de um cliente",
  };

  const renderVideoOrImage = () => {
    if (isMainProduct) {
      return (
        <div className="school__content">
          <div className="school__content-text">
            <div className="school__content-text-item">
              <LazyLoadVideo videoId="6rORoSMq17I" />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="school__content">
          <div className="school__content-text">
            <img
              src="./mockupdevcash.png"
              alt="Prévia do conteúdo"
              className="preview-image"
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="school">
      <div className="container">
        <div className="title-container">
          <Chip label="Módulos" />
          <h1 className="section-title">{labels.title}</h1>
        </div>

        {renderVideoOrImage()}
        <p className="school_content-text-title">
          {labels.contentText} <strong>{labels.strongText}</strong>
        </p>

        {isMainProduct && <Dashboard />}
      </div>
      <MethodItems isMainProduct={isMainProduct} />
    </div>
  );
}
