interface TeacherProps {
    img: string;
    name: string;
    description: string;
}
export function Teacher( {img, name, description}: TeacherProps){
    return (
        <div className="teacher">
            <img src={img} alt="Professor Code Start"/>
            <h1>{name}</h1>
            <h2>{description}</h2>
        </div>
    )
}