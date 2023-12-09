import "./css/projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      id="projects"
      className="container bloque-projects"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="bloque-titulos"
      >
        <h1 className="fondo-titulo">Projects</h1>
        <h2 className="titulo">Projects</h2>
      </div>
      <Proj_1></Proj_1>
      <Proj_2></Proj_2>
    </div>
  );
};

const Proj_1 = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="2000"
      className="bloque-items"
    >
      <div className="item">
        <div className="contenido">
          <img
            data-aos="fade-right"
            data-aos-duration="2500"
            src="src/assets/vivero.JPG"
            alt="Vivero"
            width={100}
          />
          <h3
            data-aos="fade-right"
            data-aos-duration="2000"
            style={{
              textAlign: "center",
            }}
          >
            <b>Nursery Mis Raices</b>
          </h3>
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <p>
              It is an online store of a local nursery. I did this project
              together with a classmate and we really loved how it turned out.
            </p>
            <ul>
              <li>We work together on the Frontend part using React.</li>
              <li>Pages: Home | Products | Us | Trolley.</li>
              <li>
                Features: It can be added to the cart dynamically using useState
                and useEffect.
              </li>
            </ul>
          </p>
        </div>
        <div className="item-caracteristicas">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <i className="fa-brands fa-js"></i>
            <i className="fa-brands fa-react"></i>
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3"></i>
            <i className="fa-brands fa-bootstrap"></i>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <a
              className="btn btn-sm btn-primary"
              style={{
                borderRadius: "10px",
              }}
            >
              Web
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Proj_2 = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="2000"
      className="bloque-items"
    >
      <div className="item">
        <div className="contenido">
          <img
            data-aos="fade-right"
            data-aos-duration="2500"
            src="src/assets/ptoVenta.PNG"
            alt="Punto Venta"
            width={100}
          />
          <h3
            data-aos="fade-right"
            data-aos-duration="2500"
            style={{
              textAlign: "center",
            }}
          >
            <b>Point of Sale</b>
          </h3>
          <p
            data-aos="fade-right"
            data-aos-duration="2500"
          >
            <p>
              System to manage products, clients, suppliers and track income and
              expenses of the premises.
            </p>
            <ul>
              <li>
                CRUD (Created, Read, Update, Delete) of all project entities.
              </li>
              <li>Implement user system.</li>
              <li>Weekly reports, varied search filter, invoice generation.</li>
            </ul>
          </p>
        </div>
        <div className="item-caracteristicas">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <i className="fa-brands fa-java"></i>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <a
              className="btn btn-sm btn-primary"
              style={{
                borderRadius: "10px",
              }}
            >
              Repositorio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
