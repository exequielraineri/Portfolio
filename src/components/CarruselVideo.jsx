// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import { useEffect } from "react";
export const CarruselVideo = () => {
  useEffect(() => {
    register();
  }, []);
  return (
    <div
      className="container carrusel_video"
      style={{
        width: "80%",
      }}
    >
      <swiper-container
        speed="500"
        effect={"coverflow"}
        grabCursor="true"
        centeredSlides="true"
        loop="true"
        slidesPerView="auto"
        navigation="true"
        pagination="true"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
      >
        <swiper-slide
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <video
            className="video"
            muted
            controls
            loop
          >
            <source src={video1} />
          </video>
        </swiper-slide>
        <swiper-slide
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <video
            className="video"
            muted
            controls
            loop
          >
            <source src={video2} />
          </video>
        </swiper-slide>
        <swiper-slide
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <video
            className="video"
            muted
            controls
            loop
          >
            <source
              src={video3}
              type="video/mp4"
            />
          </video>
        </swiper-slide>
        <swiper-slide
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <video
            className="video"
            muted
            loop
            controls
          >
            <source src={video4} />
          </video>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};
