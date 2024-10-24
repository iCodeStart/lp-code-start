import "./lineoffer.styles.scss";

interface LineOfferProps {
  title: string;
  price?: string;
  description?: string;
}

export function LineOffer({ title, price, description }: LineOfferProps) {
  return (
    <div className="line-offer">
      <p>{title}</p>
      <span style={{ color: "red" }}>
        <s
          style={{
            textDecorationColor: "#D8D8D8",
          }}
        >
          {/* Renderiza o preço se existir, caso contrário renderiza a descrição */}
          {price ? price : description}
        </s>
      </span>
    </div>
  );
}
