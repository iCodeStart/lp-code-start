import AOS from "aos";
import { useEffect } from "react";
interface TeacherProps {
  img: string;
  name: string;
  description: string;
}
export function Teacher({ img, name, description }: TeacherProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="teacher" data-aos="fade-up">
      <img
        src={img}
        alt="Professor Code Start"
        style={{
          display: "block",
          width: "100%",
          height: "600px",
          margin: "30px auto",
          borderRadius: "10px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease, boxShadow 0.3s ease",
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
      <h1
        style={{
          marginTop: "-45px",
          width: "100%",
          zIndex: 99,
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        {name}
      </h1>
      <h2 dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}
