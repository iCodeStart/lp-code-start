import { useEffect, useState } from "react";
import "./VSLAula.styles.scss";
import ModalOffer from "../../components/ModalOffer/ModalOffer";

export function VSLAula() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://scripts.converteai.net/a1daae9f-91a4-4ef8-a980-94e7c129722f/players/6754c15c07d9af4244e95c93/player.js";
    script.async = true;

    let isScriptAdded = false;

    const initializePlayer = () => {
      const playerElement = document.getElementById(
        "vid_6754c15c07d9af4244e95c93"
      );
      if (playerElement && !isScriptAdded) {
        document.head.appendChild(script);
        isScriptAdded = true; // Marcar como adicionado
      } else if (!playerElement) {
        console.error("Elemento do player não encontrado.");
      }
    };

    // Adiciona um atraso para garantir que o DOM esteja pronto
    const timeoutId = setTimeout(initializePlayer, 500);

    // Limpeza ao desmontar o componente
    return () => {
      clearTimeout(timeoutId);
      if (isScriptAdded) {
        document.head.removeChild(script); // Remover apenas se o script foi adicionado
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true); // Mostra o botão após 5 segundos
    }, 1200000);

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, []);

  return (
    <div className="container vsl-page">
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h2>Como aprendi a programar em 3 meses e consegui meu emprego</h2>
        <p>(mesmo sem faculdade na área de TI)</p>
      </span>

      <div
        id="vid_6754c15c07d9af4244e95c93"
        //style={{ position: "relative", width: "100%" }}
      >
        <img
          id="thumb_6754c15c07d9af4244e95c93"
          src="https://images.converteai.net/a1daae9f-91a4-4ef8-a980-94e7c129722f/players/6754c15c07d9af4244e95c93/thumbnail.jpg"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          alt="thumbnail"
        />
        <div
          id="backdrop_6754c15c07d9af4244e95c93"
          style={{
            WebkitBackdropFilter: "blur(5px)",
            backdropFilter: "blur(5px)",
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%",
          }}
        ></div>
      </div>
      {showButton && (
        <button
          className="offer_button"
          style={{ marginTop: "1rem" }}
          onClick={() => setModalOpen(true)}
        >
          QUERO FAZER PARTE
        </button>
      )}
      {isModalOpen && (
        <ModalOffer
          isPrincipalOffer={"3"}
          onClose={() => setModalOpen(!isModalOpen)}
        />
      )}
      <img src="./logo-code-start.svg" alt="Logo Code Start" width="120px" />
    </div>
  );
}
