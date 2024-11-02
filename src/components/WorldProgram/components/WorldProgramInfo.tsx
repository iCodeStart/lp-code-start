interface WorldProgramInfoProps {
  index: number;
  titleCard: string;
  text: string;
  primaryTitle: string;
}
export function WorldProgramInfo({
  index,
  titleCard,
  text,
  primaryTitle,
}: WorldProgramInfoProps) {
  const getImage = (index: number) => {
    if (index === 0) return "./jobs.svg";
    if (index === 1) return "./home-office.svg";
    return "./wallet2.svg";
  };

  return (
    <div className="programInfo">
      <div style={{ marginBottom: "15px", fontWeight: "bold" }}>
        {primaryTitle}
      </div>
      <img src={getImage(index)} alt="Programming separator" />
      <h1 className="programInfo__title">{titleCard}</h1>
      <span dangerouslySetInnerHTML={{ __html: text }}></span>
    </div>
  );
}
