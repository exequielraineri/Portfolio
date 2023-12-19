import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./css/menu.css";
import { Link } from "react-scroll";
export const Menu = () => {
  return (
    <Navbar
      expand="lg"
      className=" bloque-menu"
    >
      <Container>
        <Navbar.Brand className="logo-exe">Exequiel Raineri</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto items">
            <Nav>
              <Link
                className="underline about"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About Me
              </Link>
            </Nav>
            <Nav>
              <Link
                className="underline experience"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                Experience
              </Link>
            </Nav>
            <Nav>
              <Link
                className="underline projects"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </Nav>
            <Nav>
              <Link
                className="underline skills"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
