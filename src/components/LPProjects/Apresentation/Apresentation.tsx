import { useEffect, useState } from "react";
import "./Apresentation.styles.scss";
import ReactGA from "react-ga4";

export function Apresentation() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true); // Exibe o botão após 2 minutos (120000 milissegundos)
    }, 60000); // 2 minutos

    return () => clearTimeout(timer); // Limpa o timer se o componente desmontar
  }, []);
  function trackingClickButton() {
    ReactGA.event({
      category: "apresentation",
      action: "clique-botao-apresentation",
      label: "quero-ser-programador",
    });
  }
  return (
    <div className="content-lp-project-apresentation">
      <div className="overlay"></div>
      <div className="content-lp-project-apresentation-container">
        <span className="content-lp-project-apresentation-product-name">
          MÉTODO AAP
        </span>
        <div className="content-lp-project-apresentation-box-texts">
          <h1>
            Você nunca mais vai pensar em desistir e se sentir perdido na
            programação
          </h1>
          <p>
            Domine a programação com o método <strong>AAP</strong> e coloque seu
            primeiro projeto no ar em menos de 30 dias!
            {/* e conquiste a
            sua vaga de emprego de forma acelerada ainda esse ano - Estudando
            apenas 1 hora por dia! */}
          </p>
          {/* <p>
            Aqui nós <strong style={{ color: "white" }}>GARANTIMOS</strong> a
            sua aprovação.
          </p> */}
          <p>
            Aqui nós <strong style={{ color: "white" }}>GARANTIMOS</strong> o
            seu aprendizado.
          </p>
          <p>
            {showButton && (
              <div className="action-offer-apresentation">
                <a
                  href="#offer"
                  className="btn-buy"
                  onClick={trackingClickButton}
                >
                  <button>Quero ser programador</button>
                </a>
              </div>
            )}
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 60"
          width="28"
          height="60"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "70px",
            height: "70px",
            transform: "translate3d(0px, 0px, 0px)",
          }}
        >
          <defs>
            <clipPath id="__lottie_element_3">
              <rect width="28" height="60" x="0" y="0"></rect>
            </clipPath>
          </defs>
          <g clipPath="url(#__lottie_element_3)">
            <g
              transform="matrix(0.9139999747276306,0,0,0.9139999747276306,14,34)"
              opacity="1"
              style={{ display: "block" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,-0.16699999570846558)">
                <path
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fillOpacity="1"
                  strokeMiterlimit="4"
                  stroke="rgb(249,249,249)"
                  strokeOpacity="1"
                  strokeWidth="2"
                  d=" M14.083499908447266,-8.166500091552734 C14.083499908447266,-8.166500091552734 14.083499908447266,8.166500091552734 14.083499908447266,8.166500091552734 C14.083499908447266,15.939183235168457 7.772683620452881,22.25 0,22.25 C0,22.25 0,22.25 0,22.25 C-7.772683620452881,22.25 -14.083499908447266,15.939183235168457 -14.083499908447266,8.166500091552734 C-14.083499908447266,8.166500091552734 -14.083499908447266,-8.166500091552734 -14.083499908447266,-8.166500091552734 C-14.083499908447266,-15.939183235168457 -7.772683620452881,-22.25 0,-22.25 C0,-22.25 0,-22.25 0,-22.25 C7.772683620452881,-22.25 14.083499908447266,-15.939183235168457 14.083499908447266,-8.166500091552734z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(0.9999982118606567,0,0,0.9999982118606567,14,27.738435745239258)"
              opacity="1"
              style={{ display: "none" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fillOpacity="1"
                  stroke="rgb(249,249,249)"
                  strokeOpacity="1"
                  strokeWidth="2"
                  d=" M-0.27300000190734863,-15.218779563903809 C-0.27300000190734863,-15.218779563903809 -0.27300000190734863,-12.152581214904785 -0.27300000190734863,-12.152581214904785"
                ></path>
              </g>
            </g>
            <g
              style={{ display: "block" }}
              transform="matrix(0.9999982118606567,0,0,0.9999982118606567,14,34)"
              opacity="1"
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fillOpacity="1"
                  stroke="rgb(249,249,249)"
                  strokeOpacity="1"
                  strokeWidth="2"
                  d=" M-0.27300000190734863,-15.13599967956543 C-0.27300000190734863,-15.13599967956543 -0.27300000190734863,-5.863999843597412 -0.27300000190734863,-5.863999843597412"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
