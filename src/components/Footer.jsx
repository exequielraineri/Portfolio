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
          <p>
            Developed by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/exequielraineri/"
              className="text-light"
            >
              Exequiel Raineri
            </a>
          </p>
          <p>{new Date().getFullYear()}</p>
        </>
      ) : (
        <>
          <p>
            Desarrollado por{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/exequielraineri/"
              className="text-light"
            >
              Exequiel Raineri
            </a>
          </p>
          <p>{new Date().getFullYear()}</p>
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
          href="mailto:exeraineridev@gmail.com"
        >
          <i className="fa-regular fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
};
