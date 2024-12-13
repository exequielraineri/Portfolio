import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./css/menu.css";
import { Link } from "react-scroll";
import { useContext } from "react";
import { counterContext } from "../context/contextCounter";
export const Menu = () => {
  const {
    value: { isEnglish, setIsEnglish },
  } = useContext(counterContext);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="bloque-menu bg-transparent"
      style={{
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
    >
      <Container>
        <Navbar.Brand className="logo-exe text-white">Portfolio.</Navbar.Brand>
        <Navbar.Toggle
          className="bg-transparent border-0"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto items">
            <Nav>
              <Link
                className={(isEnglish ? "isEnglish" : "isSpain").concat(
                  " underline about"
                )}
                to="about"
                href="#about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {isEnglish ? "About Me" : "Sobre Mi"}
              </Link>
            </Nav>
            <Nav>
              <Link
                className={(isEnglish ? "isEnglish" : "isSpain").concat(
                  " underline experience"
                )}
                to="experience"
                spy={true}
                href="experience"
                smooth={true}
                duration={500}
              >
                {isEnglish ? "Experience" : "Experiencia"}
              </Link>
            </Nav>
            <Nav>
              <Link
                className={(isEnglish ? "isEnglish" : "isSpain").concat(
                  " underline projects"
                )}
                to="projects"
                href="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                {isEnglish ? "Projects" : "Proyectos"}
              </Link>
            </Nav>
            <Nav>
              <Link
                className={(isEnglish ? "isEnglish" : "isSpain").concat(
                  " underline skills"
                )}
                to="skills"
                href="skills"
                spy={true}
                smooth={true}
                duration={500}
              >
                {isEnglish ? "Skills" : "Habilidades"}
              </Link>
            </Nav>
            <Nav>
              <a
                className={!isEnglish && "border-bottom"}
                href="#spain"
                title="Spain"
                onClick={() => setIsEnglish(false)}
              >
                <img src="/flag-spain.png" alt="Spain" />
              </a>
              <a
                className={isEnglish && "border-bottom"}
                href="#english"
                title="English"
                onClick={() => setIsEnglish(true)}
              >
                <img src="/flag-english.png" alt="English" />
              </a>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
