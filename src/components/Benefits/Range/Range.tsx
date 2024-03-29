import AOS from "aos";
import { useEffect } from "react";
import "./range.styles.scss";

const ranges = [
  {
    value: "R$ 1.622,80",
    label: "Estagiário",
  },
  {
    value: "R$ 3.987,43",
    label: "Júnior",
  },
  {
    value: "R$ 8.023,44",
    label: "Pleno",
  },
  {
    value: "R$ 15.510,34",
    label: "Sênior",
  },
  {
    value: "R$ 16.339,29",
    label: "Especialistas",
  },
];

export function Range() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="range-container" data-aos="fade-up">
        <hr className="range-line" />

        <div className="range-list">
          {ranges.map(({ label, value }, idx) => (
            <div key={idx} className="range-info">
              <span className="range-value">{value}</span>
              <div className="range-dot" />
              <span className="range-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="programInfo__font">* Fonte: Código Fonte</div>
    </>
  );
}
