import React from 'react';

export const Section = ({ title, children }) => {
  return (
    <section className="section">
      {title && <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem', color: '#666' }}>{title}</h2>}
      {children}
    </section>
  );
};
