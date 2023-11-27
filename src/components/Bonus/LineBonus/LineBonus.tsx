interface LineBonusProps {
    img: string;
    title: string;
    subtitle: string;
    orientation: 'left' | 'right';
}
export function LineBonus({img, title, subtitle, orientation}: LineBonusProps){
    return (
        <div className="line-bonus">
            {orientation === 'left' ? (
                <div className="line-bonus__content">
                    <img src={img} alt="Bonus Code Start"/>
                    <div className="line-bonus_content-texts">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </div>
            ) : (
                <div className="line-bonus__content">
                    <div className="line-bonus_content-texts">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <img src={img} alt="Bonus Code Start"/>
                </div>
            )}
        </div>
    )
}