/* eslint-disable react/no-unknown-property */
import { Menu } from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Link } from "react-scroll";

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
    <>
      <Menu></Menu>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <Projects></Projects>
      <Skills></Skills>
      <Footer></Footer>

      <Link
        id="btnFloating"
        className="btn btn-light shadow btnFloating"
        to="hero"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </Link>
    </>
  );
}

export default App;
