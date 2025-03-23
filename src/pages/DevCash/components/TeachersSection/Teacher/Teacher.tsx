import "./Teacher.styles.scss";

interface TeacherProps {
  img: string;
  name: string;
  description: string;
}

export function Teacher({ img, name, description }: TeacherProps) {

  return (
    <div className="teacher">
      <img
        src={img}
        alt="Professor Code Start"
      />
      <h1 className="btn-shine">{name}</h1>
      <h2
        dangerouslySetInnerHTML={{ __html: description }}
        style={{ textAlign: "center" }}
      />
    </div>
  );
}
