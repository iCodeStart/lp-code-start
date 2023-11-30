// import AOS from "aos";
// import { useEffect } from "react";
interface CardInfoProjectProps {
  text: string;
}
export function CardInfoProject({ text }: CardInfoProjectProps) {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   });
  // }, []);
  return (
    <div className="card-info-project" data-aos="fade-left">
      <img src="./icon-benefits.svg" alt="Benefícios Code Start" />
      <p>{text}</p>
    </div>
  );
}
