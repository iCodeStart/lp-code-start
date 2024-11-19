import "./lineoffer.styles.scss";

interface LineOfferProps {
  title: string;
  price?: string;
  description?: string;
}

export function LineOffer({ title, price, description }: LineOfferProps) {
  return (
    <div className="line-offer">
      <p>
        {" "}
        <span style={{ color: "green", marginRight: "5px" }}> ✓</span> {title}
      </p>
      <span style={{ color: "red" }}>
        <s
          style={{
            textDecorationColor: "#D8D8D8",
          }}
        >
          {price ? price : description}
        </s>
      </span>
    </div>
  );
}
