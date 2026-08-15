import React from 'react';
import { URL_GITHUB, URL_LINKEDIN, URL_CV } from '../../data/data';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-main">
        <h1 className="hero-name">Exequiel Raineri</h1>
        <p className="hero-role">Backend Developer · Java &amp; Spring Specialist</p>

        <div className="hero-bio">
          <p>
            De <strong>Santiago del Estero, Argentina</strong>. 25 años.
            <br />
            Programador Universitario en Informática graduado de la <strong>UNSE</strong>.
          </p>
          <p>
            Especializado en el diseño de <strong>arquitecturas de software escalables</strong>, microservicios y desarrollo de APIs robustas.
            Apasionado por transformar requerimientos complejos en soluciones eficientes y bien estructuradas.
          </p>
        </div>

        <div className="hero-links">
          <a href={URL_GITHUB} target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
          <a href={URL_LINKEDIN} target="_blank" rel="noreferrer" className="nav-link">LinkedIn</a>
          <a href={URL_CV} target="_blank" rel="noreferrer" className="nav-link">Currículum</a>
          <a href="mailto:exeraineridev@gmail.com" className="nav-link">Email</a>
        </div>
      </div>

      <div className="hero-avatar-wrap">
        <img src="/exe.webp" alt="Exequiel Raineri" className="hero-avatar" />
      </div>
    </div>
  );
};
