import './LineBonus.styles.scss'

interface LineBonusProps {
  img: string;
  title: string;
  subtitle: string;
}
export function LineBonus({
  img,
  title,
  subtitle,
}:
LineBonusProps) {
  return (
    <div className="line-bonus">
      <div className="line-bonus__content">
        <img src={img} alt="Bonus Code Start" className="line-bonus__image" />
        <div className="line-bonus_content-texts">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
