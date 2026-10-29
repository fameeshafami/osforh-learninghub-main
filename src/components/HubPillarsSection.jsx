import React from 'react';
import { Link } from 'react-router-dom';
import './HubPillarsSection.css';

export default function HubPillarsSection() {
  const pillars = [
    {
      badge: 'Hands-on Studio',
      title: 'Live Client Sprints',
      desc: 'Work on live Meta & Google ad budgets, production React web apps, and commercial design briefs—not dummy classroom exercises.',
      metricLabel: 'Hands-on Work',
      metricVal: '100% Real Budgets',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      ),
      features: [
        'Real ₹2L+ live campaign budgets handled',
        'Direct client briefs & creative deliverables',
        'GitHub & design production portfolio commits'
      ]
    },
    {
      badge: 'Working Practitioners',
      title: '1-on-1 Desk Mentoring',
      desc: 'Daily standups and side-by-side guidance with working agency leads who review your code, campaigns, and designs line-by-line.',
      metricLabel: 'Daily Mentorship',
      metricVal: 'Zero Doubt Backlog',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      features: [
        'Daily standup sprints & design reviews',
        'Instant desk-side doubt resolution',
        'Agency workflow standards & best practices'
      ]
    },
    {
      badge: 'Career Launchpad',
      title: 'Verified Career Launch',
      desc: 'Graduate with 5 recruiter-ready portfolio case studies, an official agency internship letter, and direct interview calls across Kerala & GCC.',
      metricLabel: 'Hiring Network',
      metricVal: '80+ Partner Agencies',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      ),
      features: [
        '1–3 month agency internship letter',
        'Curated mock HR & technical interviews',
        'Direct referral access to 80+ agency partners'
      ]
    }
  ];

  return (
    <section className="hub-pillars-sec" id="advantages">
      <div className="wrap">
        <div className="hub-pillars-header">
          <div className="hub-pillars-badge">
            <span className="pillar-dot"></span>
            Why Osforh Learning Hub
          </div>
          <h2>
            Engineered for real careers, <span className="accent-text">not just theory</span>
          </h2>
          <p>
            Three foundational advantages that transform college freshers into commercial creators and developers through hands-on practical mastery.
          </p>
        </div>

        <div className="hub-pillars-grid">
          {pillars.map((p, idx) => (
            <div key={idx} className="hub-pillar-card">
              <div className="pillar-top">
                <div className="pillar-icon-box">{p.icon}</div>
                <span className="pillar-badge-tag">{p.badge}</span>
              </div>

              <h3>{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>

              <ul className="pillar-features">
                {p.features.map((feat, fidx) => (
                  <li key={fidx}>
                    <span className="pillar-check-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="pillar-metric-bar">
                <span>{p.metricLabel}</span>
                <b>{p.metricVal}</b>
              </div>
            </div>
          ))}
        </div>

        <div className="hub-pillars-cta-row">
          <Link to="/why-osforh" className="hub-pillars-cta-btn">
            Explore All Hub Advantages →
          </Link>
        </div>
      </div>
    </section>
  );
}
