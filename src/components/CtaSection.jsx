import React from 'react';
import { Link } from 'react-router-dom';

export default function CtaSection({
  title,
  description,
  buttonText = "Apply now",
  buttonLink = "/contact"
}) {
  return (
    <section className="cta">
      <i className="rg"></i>
      <i className="rg" style={{ animationDelay: '2.3s' }}></i>
      <i className="rg" style={{ animationDelay: '4.6s' }}></i>
      <div className="wrap">
        <div className="eb">Join the next batch</div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="ac" style={{ justifyContent: 'center' }}>
          <Link className="btn" to={buttonLink}>
            {buttonText} →
          </Link>
          <a className="btn o" href="tel:+919946227177">
            Call +91 99462 27177
          </a>
        </div>
      </div>
    </section>
  );
}
