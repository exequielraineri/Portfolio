import { FiArrowUpRight, FiDownload, FiMail } from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { contact, profile, stats } from "../data/profile";

export function Hero() {
  return (
    <section className="hero" id="sobre-mi">
      <div className="hero__grid">
        <div className="hero__main">
          {profile.available && (
            <p className="status-pill">
              <span className="status-pill__dot" aria-hidden="true" />
              {profile.availableText}
            </p>
          )}

          <h1 className="hero__name">{profile.name}</h1>

          <p className="hero__role">
            {profile.role}
            <span className="hero__role-sep" aria-hidden="true">
              /
            </span>
            <span className="hero__role-tagline">{profile.tagline}</span>
          </p>

          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#contacto">
              <FiMail aria-hidden="true" />
              Trabajemos juntos
            </a>
            <a className="btn btn--outline" href={contact.cv} target="_blank" rel="noreferrer">
              <FiDownload aria-hidden="true" />
              Descargar CV
            </a>
          </div>

          <div className="hero__socials">
            <a href={contact.github} target="_blank" rel="noreferrer" className="icon-link" aria-label="GitHub">
              <SiGithub aria-hidden="true" />
              GitHub
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="icon-link" aria-label="LinkedIn">
              <SiLinkedin aria-hidden="true" />
              LinkedIn
            </a>
            <a href={`mailto:${contact.email}`} className="icon-link">
              <FiArrowUpRight aria-hidden="true" />
              {contact.email}
            </a>
          </div>
        </div>

        <aside className="hero__side">
          <figure className="hero__portrait">
            <img src="/exe.webp" alt={profile.name} width="320" height="320" loading="eager" />
          </figure>
          <p className="hero__location">{profile.location}</p>
        </aside>
      </div>

      <dl className="stats">
        {stats.map((stat) => (
          <div className="stats__item" key={stat.label}>
            <dt className="stats__value">{stat.value}</dt>
            <dd className="stats__label">{stat.label}</dd>
          </div>
        ))}
      </dl>

      <div className="hero__bio">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
