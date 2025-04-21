import "./Spinner.styles.scss";

export default function Spinner() {
  return (
    <div className="spinner-container">
      <div className="spinner" />
      <p className="spinner-text">Carregando...</p>
    </div>
  );
}
