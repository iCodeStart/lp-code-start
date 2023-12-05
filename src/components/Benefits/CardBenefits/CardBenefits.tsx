import AOS from "aos";
import { useEffect } from "react";

interface CardBenefitsProps {
  titleCard: string;
  text: string;
  index: number;
}

export function CardBenefits({ titleCard, text, index }: CardBenefitsProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      className={index % 2 === 0 ? "card-benefits" : "card-benefits2"}
      data-aos="fade-right"
    >
      <div className="card-benefits__title">
        <img src="./icon-benefits.svg" alt="Benefícios Code Start" />
        <h1>{titleCard}</h1>
      </div>
      <div className="card-benefits__text">{text}</div>
    </div>
  );
}
