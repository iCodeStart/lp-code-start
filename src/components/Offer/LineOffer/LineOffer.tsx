import "./lineoffer.styles.scss";

interface LineOfferProps {
  title: string;
  price: string;
}
export function LineOffer({ title, price }: LineOfferProps) {
  return (
    <div className="line-offer">
      <p>{title}</p>
      <span style={{ color: "red" }}>
        <s
          style={{
            textDecorationColor: "white",
          }}
        >
          {price}
        </s>
      </span>
    </div>
  );
}
