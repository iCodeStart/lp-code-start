import "./lineoffer.styles.scss";

interface LineOfferProps {
  title: string;
  price?: string;
  description?: string;
  isActive?: boolean;
}

export function LineOffer({
  title,
  price,
  description,
  isActive = true,
}: LineOfferProps) {
  return (
    <div className="line-offer">
      <p>
        {" "}
        {isActive && (
          <>
            <span style={{ color: "green", marginRight: "5px" }}> ✓</span>
            {title}
          </>
        )}
        {!isActive && (
          <span style={{ color: "#D8D8D8", opacity: "0.5" }}>
            <span style={{ color: "#D8D8D8", marginRight: "5px" }}> ✖️ </span>

            {title}
          </span>
        )}
      </p>
      {isActive && (
        <span style={{ color: "red" }}>
          <s
            style={{
              textDecorationColor: "#D8D8D8",
            }}
          >
            {price ? price : description}
          </s>
        </span>
      )}

      {!isActive && (
        <span style={{ color: "#D8D8D8", opacity: "0.5" }}>
          <span>{price ? price : description}</span>
        </span>
      )}
    </div>
  );
}
