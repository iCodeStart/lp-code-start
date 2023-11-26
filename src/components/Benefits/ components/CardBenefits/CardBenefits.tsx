interface CardBenefitsProps {
  titleCard: string;
  text: string;
}

export function CardBenefits({ titleCard, text }: CardBenefitsProps) {
  return (
    <div className="card-benefits">
      <div className="card-benefits__title">
        <img src="./icon-benefits.svg" alt="Benefícios Code Start" />
        <h1>{titleCard}</h1>
      </div>
      <div className="card-benefits__text">{text}</div>
    </div>
  );
}
