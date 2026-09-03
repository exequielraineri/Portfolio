import { useEffect, useMemo, useState } from "react";
import { contact, profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";

const SECTIONS = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "stack", label: "Stack" },
  { id: "contacto", label: "Contacto" },
];

export function Nav() {
  const ids = useMemo(() => SECTIONS.map((s) => s.id), []);
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top" aria-label="Ir al inicio">
          <span className="nav__mark" aria-hidden="true">
            {initials}
          </span>
          <span className="nav__brand-text">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Secciones del sitio">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`nav__link ${active === section.id ? "is-active" : ""}`}
              aria-current={active === section.id ? "true" : undefined}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--sm btn--outline nav__cv" href={contact.cv} target="_blank" rel="noreferrer">
          Currículum
        </a>
      </div>
    </header>
  );
}
