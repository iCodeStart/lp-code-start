import { useEffect, useState } from "react";
import "./MethodItems.styles.scss";

export function MethodItems() {
  const initialImages = [
    "./1.jpg",
    "./2.jpg",
    "./3.jpg",
    "./4.jpg",
    "./10.jpg",
    "./5.jpg",
    "./6.jpg",
    "./11.jpg",
    "./7.jpg",
    "./8.jpg",
    "./12.jpg",
    "./9.jpg",
  ];

  const [images, setImages] = useState(initialImages);

  useEffect(() => {
    const interval = setInterval(() => {
      // Rotaciona a primeira imagem para o final do array
      setImages((prevImages) => [...prevImages.slice(1), prevImages[0]]);
    }, 2000); // Ajuste para a velocidade desejada do autoplay

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container content-method-items">
        {/* <div className="content-method-items-intern">
          <span className="content-method-items-legend">Módulos</span>
          <h2>
            Veja tudo que você vai
            <br />
            ter acesso no AAP:
          </h2>
        </div> */}
      </div>
      <div className="slider-container">
        <div className="slides">
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

// export function MethodItems() {
//   const images = [
//     "./SEMANA-1.png",
//     "./SEMANA-2.png",
//     "./SEMANA-3.png",
//     "./SEMANA-4.png",
//     "./SEMANA-5.png",
//     "./SEMANA-6.png",
//     "./SEMANA-7.png",
//     "./SEMANA-8.png",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const sliderRef = useRef(null);

//   const slidesToShow = 5;
//   const slideWidth = 100 / slidesToShow; // Por exemplo, se slidesToShow for 5, cada slide tem 20% da largura do contêiner
//   const translateX = currentIndex * slideWidth;
//   const autoplaySpeed = 2000;

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, autoplaySpeed);

//     return () => clearTimeout(timer);
//   }, [currentIndex, images.length]);

//   const getSlides = () => {
//     let slides = [];
//     const startIndex = currentIndex;
//     const endIndex = startIndex + slidesToShow;

//     for (let i = startIndex; i < endIndex; i++) {
//       slides.push(
//         <div key={i} className="slide">
//           <img src={images[i % images.length]} alt={`Slide ${i}`} />
//         </div>
//       );
//     }

//     return slides;
//   };

//   return (
//     <div className="container content-method-items">
//       <div className="content-method-items-intern">
//         <span className="content-method-items-legend">Módulos</span>
//         <h2>
//           Veja tudo que você vai
//           <br />
//           ter acesso no AAP:
//         </h2>
//       </div>
//       <div className="slider-container" ref={sliderRef}>
//         <div
//           className="slides"
//           style={{ transform: `translateX(-${translateX}%)` }}
//         >
//           {getSlides()}
//         </div>
//       </div>
//     </div>
//   );
// }

// import "./MethodItems.styles.scss";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export function MethodItems() {

//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//   };

//   return (
//     <div className="container content-method-items">
//       <div className="content-method-items-intern">
//         <span className="content-method-items-legend">Módulos</span>
//         <h2>
//           Veja tudo que você vai
//           <br />
//           ter acesso no AAP:
//         </h2>
//       </div>
//       <div className="slider-container">
//         <Slider {...settings}>
//           {images.map((item, index) => {
//             return (
//               <div key={index + item}>
//                 <img
//                   src={item}
//                   alt="img"
//                   className="slide-image-carousel-method-items"
//                 />
//               </div>
//             );
//           })}
//         </Slider>
//       </div>
//     </div>
//   );
// }
