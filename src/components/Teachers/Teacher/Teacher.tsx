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
        style={{
          display: "block",
          width: "500px",
          margin: "10px auto",
          borderRadius: "10px",
          boxShadow: "inset 0 0 10px #000, inset 0 0 20px #000",
          transition: "transform 0.3s ease, boxShadow 0.3s ease",
          mixBlendMode: "multiply",
          objectFit: "cover",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.03)";
          e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.4)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.2)";
        }}
      />
      <h1 className="btn-shine">{name}</h1>
      <h2
        dangerouslySetInnerHTML={{ __html: description }}
        style={{ textAlign: "center" }}
      />
    </div>
  );
}
