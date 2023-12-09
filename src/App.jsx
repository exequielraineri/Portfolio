import { Menu } from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Menu></Menu>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <Projects></Projects>
      <Skills></Skills>
      <Footer></Footer>
    </>
  );
}

export default App;
