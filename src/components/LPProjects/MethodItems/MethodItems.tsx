import { useEffect, useRef, useState } from "react";
import "./MethodItems.styles.scss";

export function MethodItems({ isMainProduct = true }) {
  const initialImages = isMainProduct
    ? [
        "./1.webp",
        "./69.webp",
        "./70.webp",
        "./71.webp",
        "./95.webp",
        "./28.webp",
        "./88.webp",
        "./90.webp",
        "./89.webp",
        "./95.webp",
        "./96.webp",
        "./97.webp",
        "./98.webp",
        "./102.webp",
        "./103.webp",
      ]
    : [
        "./1.webp",
        "./70.webp",
        "./71.webp",
        "./95.webp",
        "./28.webp",
        "./88.webp",
        "./devcash24.webp",
        "./devcash25.webp",
        "./devcash26.webp",
        "./devcash27.webp",
        "./devcash28.webp",
        "./devcash29.webp",
        "./devcash30.webp",
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
