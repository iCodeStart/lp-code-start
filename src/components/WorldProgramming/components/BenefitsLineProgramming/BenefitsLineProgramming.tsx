interface BenefitsLineProgrammingProps {
  titleCard: string;
  text: string;
}
export function BenefitsLineProgramming({
  titleCard,
  text,
}: BenefitsLineProgrammingProps) {
  return (
    <div className="world-programming__line">
      <div className="world-programming_line-card">{titleCard}</div>
      <div className="word-programming-icon-container">
        <img src="./programming-icon.svg" alt="Programming separator" />
      </div>

      <span
        className="world-programming_line-text"
        dangerouslySetInnerHTML={{ __html: text }}
      ></span>
    </div>
  );
}
