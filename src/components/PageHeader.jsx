import React from 'react';

export default function PageHeader({ badge, title, description, className = '' }) {
  return (
    <header className={`ph ${className}`.trim()}>
      <i className="orb"><i></i></i>
      <div className="wrap">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
}
