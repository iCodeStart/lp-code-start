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
      <img src={img} alt="Professor Code Start" />
      <h1>{name}</h1>
      <h2>{description}</h2>
    </div>
  );
}
