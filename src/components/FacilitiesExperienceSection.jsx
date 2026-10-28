import React from 'react';
import { Link } from 'react-router-dom';
import './FacilitiesExperienceSection.css';

export default function FacilitiesExperienceSection() {
  const facilities = [
    {
      title: 'Job oriented and updated syllabus',
      desc: 'Curriculum co-created with top agencies to reflect real-world commercial tools and hiring demands.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h20"></path>
          <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
          <path d="m7 21 5-5 5 5"></path>
          <path d="M9 7h6"></path>
          <path d="M9 11h4"></path>
        </svg>
      )
    },
    {
      title: 'Affordable fee structure',
      desc: 'Transparent course pricing with easy monthly installment options and zero hidden costs.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"></path>
          <path d="M14 8H8a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"></path>
          <path d="M11 6v12"></path>
        </svg>
      )
    },
    {
      title: '100% Live and Interactive classes',
      desc: 'Zero pre-recorded theory. Active daily studio sessions with live client ad spend and real code.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2"></rect>
          <line x1="8" x2="16" y1="21" y2="21"></line>
          <line x1="12" x2="12" y1="17" y2="21"></line>
          <polygon points="10 8 15 10 10 12 10 8" fill="currentColor"></polygon>
        </svg>
      )
    },
    {
      title: 'Training by Top Level Managers',
      desc: 'Learn directly from working Creative Directors, Senior Full-Stack Architects, and PPC Specialists.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <polyline points="16 11 18 13 22 9"></polyline>
        </svg>
      )
    },
    {
      title: 'Internship support',
      desc: '1 to 3 months live agency client internship to build proven commercial experience and portfolio.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
        </svg>
      )
    },
    {
      title: '100% Placement Support',
      desc: 'Dedicated career desk with portfolio audits, resume building, mock interviews, and 80+ hiring partners.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          <circle cx="12" cy="14" r="2"></circle>
        </svg>
      )
    }
  ];

  return (
    <section className="fac-sec" id="facilities">
      <div className="wrap">
        {/* Top Row: Eyebrow + Title on Left, Description on Right (Model 1) */}
        <div className="fac-top-row">
          <div>
            <div className="fac-eyebrow">Our Facilities</div>
            <h2 className="fac-title">
              Discover the <mark className="fac-highlight">Best Learning</mark> Experience!
            </h2>
          </div>
          <div className="fac-desc-box">
            <p className="fac-desc">
              Osforh Learning Hub is Tirur's leading practical skill academy built to help individuals unlock their commercial potential in the most engaging, agency-standard learning environment.
            </p>
          </div>
        </div>

        {/* 6 Feature Items with Circular Icons (Model 1) */}
        <div className="fac-grid">
          {facilities.map((fac, idx) => (
            <div key={idx} className="fac-item">
              <div className="fac-icon-circle">
                {fac.icon}
              </div>
              <h3>{fac.title}</h3>
              <p>{fac.desc}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
