import React from 'react';
import { URL_GITHUB, URL_LINKEDIN, URL_CV_ES } from '../../data/data';

export const Hero = () => {
  return (
    <div style={{ marginBottom: '5rem', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap-reverse' }}>
      <div style={{ flex: '1', minWidth: '300px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', letterSpacing: '-0.05em', marginBottom: '0.5rem', color: '#fff', lineHeight: '1.1' }}>
          Exequiel Raineri
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#888', marginBottom: '1.5rem', fontWeight: '500' }}>
          Backend Developer | Java & Spring Specialist
        </p>
        
        <div style={{ marginBottom: '2rem', color: '#ccc', lineHeight: '1.8', fontSize: '1rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            De <strong>Santiago del Estero, Argentina</strong>. 25 años.
            <br />
            Programador Universitario en Informática graduado de la <strong>UNSE</strong>.
          </p>
          <p>
            Especializado en el diseño de <strong>arquitecturas de software escalables</strong>, microservicios y desarrollo de APIs robustas. 
            Apasionado por transformar requerimientos complejos en soluciones eficientes y bien estructuradas.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href={URL_GITHUB} target="_blank" rel="noreferrer" className="link-hover">GitHub</a>
          <a href={URL_LINKEDIN} target="_blank" rel="noreferrer" className="link-hover">LinkedIn</a>
          <a href={URL_CV_ES} target="_blank" rel="noreferrer" className="link-hover">Currículum</a>
          <a href="mailto:exeraineridev@gmail.com" className="link-hover">Email</a>
        </div>
      </div>
      
      <div style={{ width: '140px', height: '140px', flexShrink: 0 }}>
        <img 
          src="/exe.webp" 
          alt="Exequiel Raineri" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            borderRadius: '50%',
            filter: 'grayscale(100%)',
            transition: 'all 0.4s ease',
            cursor: 'pointer',
            border: '2px solid #333'
          }}
          onMouseOver={(e) => {
             e.currentTarget.style.filter = 'grayscale(0%)';
             e.currentTarget.style.borderColor = '#fff';
          }}
          onMouseOut={(e) => {
             e.currentTarget.style.filter = 'grayscale(100%)';
             e.currentTarget.style.borderColor = '#333';
          }}
        />
      </div>
      
      <style>{`
        .link-hover {
          color: #aaa;
          font-size: 0.95rem;
          transition: color 0.2s;
        }
        .link-hover:hover {
          color: #fff;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};
