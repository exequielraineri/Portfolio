import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { contact, profile } from "../data/profile";

export function Contact() {
  return (
    <section className="section contact" id="contacto">
      <div className="contact__panel" data-reveal>
        <p className="section__eyebrow">Contacto</p>
        <h2 className="contact__title">
          ¿Tenés un sistema o un sitio en mente?
        </h2>
        <p className="contact__lead">
          Contame qué necesita tu negocio y te respondo con un plan concreto: alcance, plazo y
          precio, sin vueltas. {profile.location}.
        </p>

        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${contact.email}`}>
            <FiMail aria-hidden="true" />
            {contact.email}
          </a>
          <a className="btn btn--outline" href={contact.whatsapp} target="_blank" rel="noreferrer">
            <SiWhatsapp aria-hidden="true" />
            WhatsApp
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="contact__socials">
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="icon-link">
            <SiLinkedin aria-hidden="true" />
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="icon-link">
            <SiGithub aria-hidden="true" />
            GitHub
          </a>
          <a href={contact.cv} target="_blank" rel="noreferrer" className="icon-link">
            <FiArrowUpRight aria-hidden="true" />
            Currículum
          </a>
        </div>
      </div>
    </section>
  );
}
