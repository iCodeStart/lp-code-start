interface CardInfoProjectProps {
    text: string;
}
export function CardInfoProject({ text }: CardInfoProjectProps){
    return (
        <div className="card-info-project">
            <img src="./icon-benefits.svg" alt="Benefícios Code Start"/>
            <p>{text}</p>
        </div>
    )
}