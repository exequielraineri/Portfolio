import "./app.css";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";
import { useReveal } from "./hooks/useReveal";

function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#proyectos">
        Saltar a proyectos
      </a>

      <div className="backdrop" aria-hidden="true" />

      <Nav />

      <main className="container" id="top">
        <Hero />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
