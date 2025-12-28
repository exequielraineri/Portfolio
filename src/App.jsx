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
      
      <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #222', color: '#444', fontSize: '0.8rem' }}>
        <p>© {new Date().getFullYear()} Exequiel Raineri.</p>
      </footer>
    </Layout>
  );
}

export default App;
