import "./MethodItems.styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
export function MethodItems() {
  return (
    <>
      <div className="container content-method-items">
        <div className="content-method-items-intern">
          <span className="content-method-items-legend">Módulos</span>
          <h2>
            Veja tudo que você vai
            <br />
            ter acesso no PNE:
          </h2>
        </div>
      </div>
      <div className="content-slider">
        <Swiper slidesPerView={6} slidesPerGroup={1} centeredSlides={true} loop={true}  autoplay={true} spaceBetween={20}>
          <SwiperSlide>
            <img
              decoding="async"
              className="swiper-slide-image"
              src="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/NEGOCIACAO-1.png.webp"
              alt="NEGOCIAÇÃO"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              decoding="async"
              className="swiper-slide-image"
              src="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/NEGOCIACAO-1.png.webp"
              alt="NEGOCIAÇÃO"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              decoding="async"
              className="swiper-slide-image"
              src="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/NEGOCIACAO-1.png.webp"
              alt="NEGOCIAÇÃO"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              decoding="async"
              className="swiper-slide-image"
              src="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/NEGOCIACAO-1.png.webp"
              alt="NEGOCIAÇÃO"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              decoding="async"
              className="swiper-slide-image"
              src="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/NEGOCIACAO-1.png.webp"
              alt="NEGOCIAÇÃO"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              decoding="async"
              className="swiper-slide-image"
              src="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/NEGOCIACAO-1.png.webp"
              alt="NEGOCIAÇÃO"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              decoding="async"
              className="swiper-slide-image"
              src="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/NEGOCIACAO-1.png.webp"
              alt="NEGOCIAÇÃO"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              decoding="async"
              className="swiper-slide-image"
              src="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/NEGOCIACAO-1.png.webp"
              alt="NEGOCIAÇÃO"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              decoding="async"
              className="swiper-slide-image"
              src="https://tyvo.com.br/wp-content/webp-express/webp-images/uploads/2024/03/NEGOCIACAO-1.png.webp"
              alt="NEGOCIAÇÃO"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
