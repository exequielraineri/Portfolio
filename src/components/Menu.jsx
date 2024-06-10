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
    <Navbar expand="lg" className=" bloque-menu bg-black">
      <Container>
        <Navbar.Brand className="logo-exe text-light">
          Exequiel Raineri
        </Navbar.Brand>
        <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto items">
            <Nav>
              <Link
                className={(isEnglish ? "isEnglish" : "isSpain").concat(
                  " underline about"
                )}
                to="about"
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
                spy={true}
                smooth={true}
                duration={500}
              >
                {isEnglish ? "Skills" : "Habilidades"}
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
