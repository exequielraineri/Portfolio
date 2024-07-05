import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carrusel.css";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

export const Carrusel = ({ products }) => {
  return (
    <div>
      <Swiper
        loop={true}
        speed={1500}
        autoplay={{
          delay: 2500, // Delay between transitions in ms
          disableOnInteraction: false, // Continuar autoplay cuando se interactúa con los controles
          stopOnLastSlide: false, // Asegurarse de que no se detiene en la última diapositiva
          reverseDirection: false, // Para que el Swiper no cambie de dirección automáticamente
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 10,
          modifier: 3,
          slideShadows: true,
        }}
        initialSlide={1}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {products.map((prod, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={prod.imagen}
                width={"100%"}
                style={{
                  height: "60vh",
                  objectFit: "contain",
                  position: "relative",
                  objectPosition: "center",
                }}
                alt={"imagen-slide " + (index + 1)}
              />
            </SwiperSlide>
          );
        })}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="swiper-button-next slider-arrow">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
