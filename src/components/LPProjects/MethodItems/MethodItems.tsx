import { useEffect, useRef, useState } from "react";
import "./MethodItems.styles.scss";

export function MethodItems() {
  const initialImages = [
    "./1.jpg",
    "./3.jpg",
    "./4.jpg",
    "./5.jpg",
    "./6.jpg",
    "./88.jpg",
    "./90.jpg",
    "./89.jpg",
    "./95.jpg",
    "./96.jpg",
    "./97.jpg",
    "./98.jpg",
    "./102.jpg",
    "./103.jpg",
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [images, setImages] = useState([...initialImages, ...initialImages]);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (slideRef.current) {
        const totalWidth =
          slideRef.current.scrollWidth - slideRef.current.clientWidth;
        currentIndex += 1;


        if (currentIndex >= totalWidth) {
          currentIndex = 0;
          slideRef.current.style.transform = `translateX(-${currentIndex}px)`;
        } else {
          slideRef.current.style.transform = `translateX(-${currentIndex}px)`;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <div className="container content-method-items"></div>
      <div className="slider-container">
        <div className="slides" ref={slideRef}>
          {images.map((src, index) => (
            <div key={index} className="slide">
              <img src={src} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
