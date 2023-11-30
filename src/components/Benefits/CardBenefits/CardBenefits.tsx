// import AOS from 'aos';
// import { useEffect } from "react";

interface CardBenefitsProps {
  titleCard: string;
  text: string;
}

export function CardBenefits({ titleCard, text }: CardBenefitsProps) {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   });
  // }, []);
  return (
    <div className="card-benefits" data-aos="fade-right">
      <div className="card-benefits__title">
        <img src="./icon-benefits.svg" alt="Benefícios Code Start" />
        <h1>{titleCard}</h1>
      </div>
      <div className="card-benefits__text">{text}</div>
    </div>
  );
}
