import { Chip } from "../Chip";
import { Teacher } from "./Teacher/Teacher";
import "./Teachers.styles.scss";
import useIsMobile from "../../utils/useIsMobile";

export function Teachers() {
  const isMobile = useIsMobile()
  const openPaymentLink = () => {
    const url = "https://pay.hotmart.com/Y101419032L?checkoutMode=10&offDiscount=CODESTART50&bid=1757614682436";
    window.open(url, `${isMobile ? "_self" : "_blank"}`, "noreferrer");
  };

  const arrayTeachers = [
    {
      img: "./AlanFoto.jpg",
      name: "Alan Braulio",
      description:
        "<p>Programador Full Stack Sênior</p><p>Formado em Engenharia de Computação pela PUC Minas.</p> <p>É desenvolvedor a mais de 10 anos ocupando posições de liderança e destaque nos times que atuou ajudando a gerir e organizar as equipes de desenvolvimento.</p>",
    },
    {
      img: "./DaviFoto.jpg",
      name: "Davi Quirino",
      description:
        "<p>Programador Sênior na Ambev</p></p><p>Formado em Engenharia de Produção pela Universidade do Estado de Minas Gerais, fez transição de carreira e está atuando há mais de 5 anos como desenvolvedor de sistemas.</p><p> Já participou de diversos projetos em empresas de grande porte e com sistemas com uso de milhões de pessoas.</p>",
    },
  ];
  return (
    <div className="teachers">
      <div className="container">
        <div className="title-container">
          <Chip label="Professores" />
          <h1 className="section-title">Quem serão seus professores?</h1>
        </div>
        <div className="teachers__content">
          {arrayTeachers.map((teacher, index) => {
            return (
              <Teacher
                key={index + teacher.name}
                img={teacher.img}
                name={teacher.name}
                description={teacher.description}
              />
            );
          })}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="offer_button"
          onClick={openPaymentLink}
        >
          Quero ser programador
        </button>
      </div>
      {/* {isModalOpen && (
        <ModalOffer
          isPrincipalOffer={"1"}
          onClose={() => setModalOpen(!isModalOpen)}
        />
      )} */}
    </div>
  );
}
