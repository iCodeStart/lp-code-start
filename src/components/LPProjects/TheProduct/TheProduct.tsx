import "./TheProduct.styles.scss";

export function TheProduct() {
  return (
    <div className="content-the-product">
      <div className="content-the-product-iframe">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/Pjz38aOIHQE?si=GPc764mN-WUHvOEi"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
      <div className="content-the-product-box-container">
        <a className="content-the-product-button" href="#teste">
          Fazer parte
        </a>
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
                  fill="#000000" // Definindo a cor preta
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
                  fillOpacity="0"
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
                  fillOpacity="0"
                  stroke="rgb(249,249,249)"
                  strokeOpacity="1"
                  strokeWidth="2"
                  d=" M-0.27300000190734863,-15.13599967956543 C-0.27300000190734863,-15.13599967956543 -0.27300000190734863,-5.863999843597412 -0.27300000190734863,-5.863999843597412"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <div className="content-the-product-box-texts">
          <h2 className="content-the-product-title">
            Quantas vezes você já se sentiu confuso tentando aprender
            programação?
          </h2>
          <h3 className="content-the-product-subtitle">
            Você sabe o quão frustrante é se sentir perdido no mundo da
            programação. Você se dedica, mas as vagas para trabalhar nas
            empresas parecem exigir o impossível. As horas de estudo se tornam
            um fardo enquanto você luta para equilibrar a sua vida pessoal com o
            seu aprendizado. Cada tentativa falha de dominar uma nova habilidade
            só aumenta a sua sensação de desânimo. Você não está só.{" "}
            <span>
              <strong>
                Nós entendemos essas dores porque já estivemos lá.
              </strong>
            </span>
            <br />
            <br />A culpa por se sentir assim não é sua. A grande maioria dos
            cursos só colocam as aulas lá e querem que quase que milagrosamente
            você tenha foco e motivação para estudar. Não é assim que nosso
            cérebro funciona. Você só precisa de uma didática diferente, uma
            forma de aprender que não seja cansativa e que você veja evolução
            todo santo dia. Chega de ficar comprando cursos e mais cursos
            cansativos que você nunca termina.
          </h3>
          <img
            src="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/Agrupar-3.png.webp"
            alt="Produto Code Start"
          />
        </div>
      </div>
    </div>
  );
}
