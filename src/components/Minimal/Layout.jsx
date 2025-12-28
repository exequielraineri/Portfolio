import React from 'react';

export const Layout = ({ children }) => {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      {children}
    </div>
  );
};
