import { useContext } from "react";
import "./css/footer.css";
import { counterContext } from "../context/contextCounter";
import { Link } from "react-scroll";
export const Footer = () => {
  const {
    value: { isEnglish, setIsEnglish },
  } = useContext(counterContext);
  return (
    <footer className="bg-black">
      {isEnglish ? (
        <>
          <p>Developed by Exequiel Raineri</p>
          <p> 2024</p>
        </>
      ) : (
        <>
          <p>Desarrollado por Exequiel Raineri</p>
          <p>2024</p>
        </>
      )}

      <div className="footer-redes">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/exeraineri/"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/exequielraineri/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/exequielraineri"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:exeraineri15@gmail.com"
        >
          <i className="fa-regular fa-envelope"></i>
        </a>
        <Link
          to={"hero"}
          href="#hero"
          style={{
            cursor: "pointer",
          }}
          title={isEnglish ? "Language" : "Idioma"}
          className="link-info  text-decoration-none "
          onClick={() => setIsEnglish(!isEnglish)}
        >
          {isEnglish ? "| ES" : "| EN"}
        </Link>
      </div>
    </footer>
  );
};
