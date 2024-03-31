import "./MethodItems.styles.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function MethodItems() {
  const images = [
    "./SEMANA-1.png",
    "./SEMANA-2.png",
    "./SEMANA-3.png",
    "./SEMANA-4.png",
    "./SEMANA-5.png",
    "./SEMANA-6.png",
    "./SEMANA-7.png",
    "./SEMANA-8.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="container content-method-items">
      <div className="content-method-items-intern">
        <span className="content-method-items-legend">Módulos</span>
        <h2>
          Veja tudo que você vai
          <br />
          ter acesso no AAP:
        </h2>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((item, index) => {
            return (
              <div key={index + item}>
                <img
                  src={item}
                  alt="img"
                  className="slide-image-carousel-method-items"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
