/* eslint-disable react/no-unknown-property */
import { Menu } from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Link } from "react-scroll";
import { HeroV2 } from "./components/HeroV2/HeroV2";
import { Analytics } from "@vercel/analytics/react";
import { FaArrowUp } from "react-icons/fa";

function App() {
  window.addEventListener("scroll", function () {
    var scrollValue = window.scrollY;

    const botonFloating = this.document.getElementById("btnFloating");
    if (scrollValue > 500) {
      botonFloating.classList.add("aparecer");
    } else {
      botonFloating.classList.remove("aparecer");
    }
  });

  return (
    <div
      style={
        {
          // position: "relative",
          // backgroundColor: "#000011",
        }
      }
    >
      {/* <video
          src={video2}
          loop={true}
          autoPlay={true}
          muted={true}
          width={"100%"}
          height={"100%"}
          style={{
            maxWidth: "700px",
            opacity: 0.05,
            position: "fixed",
            top: 0,
            right: 0,
            objectFit: "cover",
            objectPosition: "center",
          }}
        ></video> */}
      {/* <Hero></Hero> */}

      <Menu></Menu>
      {/* <Analytics /> */}
      <HeroV2></HeroV2>
      <main
        style={{
          // backgroundColor: "#000011",
          background: "linear-gradient(to bottom,  transparent,#000011 4%)",
        }}
      >
        <AboutMe></AboutMe>
        <Experience></Experience>
        <Projects></Projects>
        <Skills></Skills>
        <Footer></Footer>
        <Link
          id="btnFloating"
          className="btn btn-light shadow btnFloating"
          style={{}}
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <FaArrowUp />
        </Link>
      </main>
    </div>
  );
}

export default App;
