import React from 'react';
import { Link } from 'react-router-dom';
import certificateImg from '../img/certificate-credential.jpg';
import './CredentialsSection.css';

export default function CredentialsSection() {
  const credentials = [
    {
      icon: '📜',
      pill: 'Course Completion',
      title: 'Verified Osforh Hub Certificate',
      desc: 'Industry-recognized diploma certified with unique registration ID and tamper-proof QR code for global employer verification.',
      tags: ['Unique QR Code', 'Employer Shareable', 'Lifetime Valid']
    },
    {
      icon: '💼',
      pill: 'Commercial Experience',
      title: 'Agency Internship Experience Letter',
      desc: 'Official recommendation letter signed by Creative Directors & Agency Leads confirming your work on live client projects and budgets.',
      tags: ['Live Client Projects', 'Director Signed', 'Commercial Proof']
    },
    {
      icon: '🚀',
      pill: 'Job Ready',
      title: '5-Project Recruiter Portfolio',
      desc: 'Graduate with 5 production case studies—clean GitHub repositories for coders, Behance portfolios for designers, and real ad-spend reports for marketers.',
      tags: ['5 Case Studies', 'GitHub & Behance', 'Direct Recruiter Review']
    },
    {
      icon: '🌐',
      pill: 'Global Badges',
      title: 'Global Certification Readiness',
      desc: 'Complete curriculum aligned with Meta Certified Associate, Google Ads Search & Display, HubSpot Inbound, and modern web frameworks.',
      tags: ['Meta Certified Prep', 'Google Ads Validated', 'HubSpot Aligned']
    }
  ];

  return (
    <section className="credentials-sec" id="credentials">
      <div className="glow-orb-1"></div>
      <div className="glow-orb-2"></div>

      <div className="wrap">
        <div className="credentials-header">
          <div className="credentials-badge">
            <span className="pulse-dot"></span>
            Career Credentials &amp; Proofs
          </div>
          <h2>
            Graduate with proofs that <span className="gold-highlight">demand respect</span>
          </h2>
          <p>
            Degrees get scanned, but verifiable work gets hired. Every Osforh student graduates with authenticated academic certification, an official agency internship letter, and a ready-to-hire portfolio.
          </p>
        </div>

        <div className="credentials-grid">
          {/* Visual Showcase (Certificate + Internship Letter Mockup) */}
          <div className="credentials-visual">
            <div className="credentials-img-wrap">
              <img
                src={certificateImg}
                alt="Osforh Learning Hub Certificate of Completion and Agency Internship Letter"
                loading="lazy"
              />
              <div className="credentials-verified-tag">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
                100% Verifiable Credential
              </div>
            </div>

            <div className="credentials-stats-ribbon">
              <div className="stat-item">
                <b>ISO Aligned</b>
                <small>Training Standards</small>
              </div>
              <div className="stat-item">
                <b>1–3 Months</b>
                <small>Agency Internship</small>
              </div>
              <div className="stat-item">
                <b>5+ Projects</b>
                <small>Portfolio Proof</small>
              </div>
            </div>
          </div>

          {/* 4 Key Credential Pillars */}
          <div className="credentials-cards">
            {credentials.map((cred, idx) => (
              <div key={idx} className="cred-card">
                <div className="cred-icon-box">{cred.icon}</div>
                <div className="cred-body">
                  <div className="cred-top">
                    <h3>{cred.title}</h3>
                    <span className="cred-pill">{cred.pill}</span>
                  </div>
                  <p>{cred.desc}</p>
                  <div className="cred-tags">
                    {cred.tags.map((t, tidx) => (
                      <span key={tidx} className="cred-tag">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Verification Banner */}
        <div className="credentials-footer-cta">
          <div className="cta-text">
            <h4>Ready to build your career with certified proof?</h4>
            <p>Speak with an Osforh admissions counselor in Tirur or walk into our campus to inspect curriculum & sample portfolios.</p>
          </div>
          <div className="cta-actions">
            <div className="verified-badge-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Recognized by 80+ Regional Agencies
            </div>
            <Link to="/contact" className="btn-verify">
              Enquire Now →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
