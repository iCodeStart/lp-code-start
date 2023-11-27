interface LineOfferProps {
    title: string;
    price: string;
}
export function LineOffer({title, price}: LineOfferProps){
    return (
        <div className="line-offer">
            <p>{title}</p>
            <span>{price}</span>
        </div>
    )
}