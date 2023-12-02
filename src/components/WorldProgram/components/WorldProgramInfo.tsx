interface WorldProgramInfoProps {
  index: number;
  titleCard: string;
  text: string;
  font: string;
}
export function WorldProgramInfo({
  index,
  titleCard,
  text,
  font,
}: WorldProgramInfoProps) {
  const getImage = (index: number) => {
    if (index === 0) return "./wallet.svg";
    if (index === 1) return "./searchMoney.svg";
    return "./homeoffice.svg";
  };

  return (
    <div className="programInfo">
      <img src={getImage(index)} alt="Programming separator" />
      <h1 className="programInfo__title">{titleCard}</h1>
      <span dangerouslySetInnerHTML={{ __html: text }}></span>
      <div className="programInfo__font">{font}</div>
    </div>
  );
}
