import { useEffect } from "react";
import "./css/hero.css";
import Aos from "aos";
import "aos/dist/aos.css";

import imgExe from "../assets/exe.webp";
import VanillaTilt from "vanilla-tilt";

export const Hero = () => {
  VanillaTilt.init(document.querySelectorAll(".card-tilt"), {
    speed: 400,
    max: 5,
    transition: true,
  });
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="2000"
      id="hero"
      className="container bloque-hero"
    >
      <div
        data-tilt
        className="bloque-card shadow card-tilt"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <img
          data-tilt
          className="shadow"
          src={imgExe}
          alt="Exequiel Raineri"
          loading="eager"
        />
        <h2
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          I`m{" "}
          <span>
            <b>Exequiel Raineri</b>
          </span>{" "}
        </h2>
        <h3
          style={{
            color: "#83a5ff",
            fontWeight: 500,
            margin: 0,
            padding: 0,
          }}
        >
          Full Stack Java Developer
        </h3>
        <p
          style={{
            marginTop: 15,
          }}
        >
          Passionate about technology and looking for constant challenges.
        </p>
        <div
          className="d-flex"
          style={{
            width: "80%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              transform: "translateZ(20px)",
            }}
            data-aos="fade-right"
            data-aos-duration="2500"
            className="redes "
          >
            <a
              href="https://www.instagram.com/exeraineri/"
              target="_blank"
              className="icon-redes"
              rel="noreferrer"
            >
              <i
                title="Instagram"
                className="fa-brands fa-instagram"
              ></i>
            </a>
            <a
              href="https://github.com/exequielraineri"
              target="_blank"
              className="icon-redes"
              rel="noreferrer"
            >
              <i
                title="GitHub"
                className="fa-brands fa-github"
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/exequielraineri/"
              target="_blank"
              className="icon-redes"
              rel="noreferrer"
            >
              <i
                title="LinkedIn"
                className="fa-brands fa-linkedin"
              ></i>
            </a>
          </div>
          <div>
            <a
              title="Resume"
              rel="noreferrer"
              target="_blank"
              href="https://drive.google.com/file/d/1eDwyWor5tiEFpUnr9dKJWL-KzQOV-Ix-/view?usp=sharing"
              className="btn btn-dark btn-sm shadow"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
