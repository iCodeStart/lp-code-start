import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.styles.scss";
import { Chip } from "../Chip";

export function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
    ]
  };

  const imagesTestimonials = [
    "./depoimento-6.jpeg",
    "./depoimento-5.jpeg",
    "./depoimento-4.jpeg",
    "./depoimento-1.jpeg",
    "./depoimento-2.jpeg",
    "./depoimento-3.jpeg",
  ];
  return (
    <>
      <div className="container">
        <div className="title-container">
          <Chip label="Depoimentos" />
          <h1 className="section-title">
            Veja o que nossos alunos acham da Code Start!
          </h1>
        </div>
      </div>
      <div className="testimonials-container">
        <div className="slider-container">
          <Slider {...settings}>
            {imagesTestimonials.map((item, index) => {
              return (
                <div key={index + item}>
                  <img
                    src={item}
                    alt="img"
                    className="slide-image-carousel-testimonial-items"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
