import AOS from "aos";
import { useEffect } from "react";
import "./School.styles.scss";

export function School() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="school">
      <div className="container" data-aos="zoom-in-up">
        <h1 className="section-title">A Escola Code Start</h1>
        <div className="school__content">
          <div className="school__content-text">
            <p className="school_content-text-title">
              A Code Start é uma escola completa de programação, onde vamos te
              pegar pelas mãos e te entregar o passo a passo para você dar os
              seus primeiros passos e se tornar um profissional qualificado.
            </p>
            <div className="school_content-text-item">
              <img src="./icon-benefits.svg" alt="Benefícios Code Start" />
              <p>
                Nós acreditamos em ideias e soluções criativas para te ensinar
                da forma correta o mundo da tecnologia, através de uma
                metodologia única, e uma trilha de estudos em que você só
                precisa seguir o que ensinamos.
              </p>
            </div>
            <div className="school_content-text-item">
              <img src="./icon-benefits.svg" alt="Benefícios Code Start" />
              <p>
                Acreditamos no básico bem feito, e na Escola Code Start você
                será capaz de encontrar dentre os nossos valores:
              </p>
            </div>
          </div>
          <div className="school_content_code-start">
            <img src="./ipad-code-start.png" alt="Comunidade Code Start" />
          </div>
        </div>
      </div>
    </div>
  );
}
