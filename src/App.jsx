import "./app.css";
import { Experience } from "./components/Minimal/Experience";
import { Hero } from "./components/Minimal/Hero";
import { Layout } from "./components/Minimal/Layout";
import { Projects } from "./components/Minimal/Projects";
import { Skills } from "./components/Minimal/Skills";

function App() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Projects />
      <Skills />

      <footer className="footer">
        <p>© {new Date().getFullYear()} Exequiel Raineri.</p>
      </footer>
    </Layout>
  );
}

export default App;
