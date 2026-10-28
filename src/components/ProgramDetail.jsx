import React from 'react';
import { Link } from 'react-router-dom';
import digitalMarketingArt from '../img/5e591fa8-c1f7-4b73-82a4-62242b916fb0.png';
import graphicDesignArt from '../img/7df08871-3653-4e9d-a8a2-a43287fbdd7c.png';
import webDevArt from '../img/bb817a9f-a093-43df-a83c-94b5f7cc35ae.png';
import videoEditingArt from '../img/b4c56eca-7aa5-4f8d-a2bb-30dafaeefb27.png';
import officeAdminArt from '../img/170e9e69-7ec4-4d02-8c1d-83b5a3adf2a6.png';
import WebDevShowcase from './WebDevShowcase.jsx';
import VideoEditingStudioShowcase from './VideoEditingStudioShowcase.jsx';
import OfficeAdminShowcase from './OfficeAdminShowcase.jsx';
import './ProgramDetail.css';

const WHO_CAN_JOIN_DESCS = [
  "No prior experience needed. We start from the basics.",
  "Build a new skill set that employers are hiring for.",
  "Learn practical skills you can apply straight away.",
  "Upskill on weekends or in a hybrid format."
];

export default function ProgramDetail({ programKey, program }) {
  if (!program) return null;

  return (
    <div className="pn" style={{ '--a': program.a }}>
      {/* Hero Header */}
      <div className="top">
        <div>

          <h2>{program.n}</h2>
          <p className="lead">{program.d}</p>

          {/* Duration, Internship & Mode Meta */}
          <div className="meta">
            <div>
              <small>Duration</small>
              <b>{program.dur}</b>
            </div>
            <div>
              <small>Internship / format</small>
              <b>{program.in}</b>
            </div>
            <div>
              <small>Mode</small>
              <b>{program.mode}</b>
            </div>
          </div>


          {/* Campaign Tools */}
          <div className="tools-wrap">
            <div className="tools-label">
              <span>{program.toolsLabel || "CAMPAIGN TOOLS:"}</span>
            </div>
            <div className="tools-chip-list">
              {program.t.map((tool, i) => (
                <span key={i}>{tool}</span>
              ))}
            </div>
          </div>

          <div className="ac">
            <Link className="btn" to={`/contact?course=${encodeURIComponent(program.n)}`}>
              Enroll Now →
            </Link>
            {program.tracks && (
              <a className="btn o" href="#specialized-tracks">
                View Specialized Tracks ↓
              </a>
            )}
            <a className="btn o" href="tel:+919946227177">
              Speak with counselor
            </a>
          </div>
        </div>

        {programKey === 'dm' ? (
          <div className="art art-image" aria-hidden="true">
            <img src={digitalMarketingArt} alt="Digital Marketing and Performance" />
          </div>
        ) : programKey === 'gd' ? (
          <div className="art art-image" aria-hidden="true">
            <img src={graphicDesignArt} alt="Graphic Design and Visual Identity" />
          </div>
        ) : programKey === 'wd' ? (
          <div className="art art-image" aria-hidden="true">
            <img src={webDevArt} alt="Website Development" />
          </div>
        ) : programKey === 've' ? (
          <div className="art art-image" aria-hidden="true">
            <img src={videoEditingArt} alt="Video Editing Course" />
          </div>
        ) : programKey === 'oa' ? (
          <div className="art art-image" aria-hidden="true">
            <img src={officeAdminArt} alt="Office Administration" />
          </div>
        ) : (
          <div className="art" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
            <b>{program.k}</b>
          </div>
        )}
      </div>

      {/* Stage by stage learning roadmap */}
      <h3 className="sub">What you will learn, stage by stage</h3>
      <div className="ph4">
        {program.f.map((stage, i) => (
          <div key={i} className="pz rv on">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <b>0{i + 1}</b>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--mu)', fontWeight: '700' }}>
                Phase 0{i + 1}
              </span>
            </div>
            <h3>{stage[0]}</h3>
            <p>{stage[1]}</p>
            <div>
              {stage[2].map((tag, j) => (
                <span key={j}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* About The Program Section (if present) */}
      {program.about && (
        <div className="dm-about-section rv on">
          <div className="dm-about-header">
            <h3 className="dm-about-title">{program.about.title}</h3>
          </div>
          <div className="dm-about-body">
            <div className="dm-about-paragraphs">
              {program.about.paragraphs.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>
            <div className="dm-about-features">
              <div className="dm-feature-box">
                {/* <div className="fb-icon">🎯</div> */}
                <div>
                  <b>Hands-On Real Projects</b>
                  <p>Work on active live campaigns with actual ad budgets and tangible deliverables.</p>
                </div>
              </div>
              <div className="dm-feature-box">
                {/* <div className="fb-icon">👨‍🏫</div> */}
                <div>
                  <b>Experienced Industry Mentors</b>
                  <p>Learn directly from seasoned practitioners who lead campaigns every day.</p>
                </div>
              </div>
              <div className="dm-feature-box">
                {/* <div className="fb-icon">🚀</div> */}
                <div>
                  <b>100% Career Assistance</b>
                  <p>Portfolio building, mock interviews, and agency referrals right in Tirur & beyond.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Specialized Career Tracks (if present) */}
      {program.tracks && (
        <div className="dm-tracks-section" id="specialized-tracks">
          <div className="dm-tracks-header">
            <h2>
              Choose Your <span className="gr">{program.s || program.n}</span> Track
            </h2>
            <p>
              Tailored curricula built for every career milestone — from fast-track certifications to comprehensive dual-skill diplomas.
            </p>
          </div>

          <div className="dm-tracks-grid">
            {program.tracks.map((track, tIdx) => (
              <div
                key={tIdx}
                className="dm-track-card rv on"
                style={{ '--card-accent': track.color || 'var(--a)' }}
              >
                <div className="dm-track-top">
                  <div className="dm-track-badges">
                    <span className="dm-track-num">{track.trackNum}</span>
                    <span className="dm-track-category">{track.badge}</span>
                  </div>
                  <h3>{track.title}</h3>

                  <div className="dm-track-info-box">
                    <div className="dm-track-info-header">
                      <span>Course Information</span>
                    </div>
                    <div className="dm-track-info-details">
                      <div className="dm-track-info-item">
                        <span>Course Duration: {track.duration}</span>
                      </div>
                      <div className="dm-track-info-item">
                        <span>Internship: {track.internship}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dm-modules-container">
                  <div className="dm-modules-title">Key Modules &amp; Topics</div>
                  <ul className="dm-modules-list">
                    {track.modules.map((mod, mIdx) => (
                      <li key={mIdx}>
                        <span className="dm-module-check">✓</span>
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="dm-track-action">
                  <Link
                    to={track.enrollLink.startsWith('http') ? `/contact?course=${encodeURIComponent(track.title)}` : track.enrollLink}
                    className="dm-track-btn"
                  >
                    Enroll in this Track →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Who can join / Target Audience */}
      <h3 className="sub">Who can join</h3>
      <div className="g3">
        {program.targetAudience ? (
          program.targetAudience.map((item, i) => (
            <div key={i} className="fc rv on">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ font: '800 20px Sora', color: 'var(--a)' }}>
                  {item.num}
                </span>
                <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--mu)', background: 'var(--s)', border: '1px solid var(--ln)', padding: '4px 10px', borderRadius: '99px' }}>
                  {item.tag || "Target Audience"}
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))
        ) : (
          program.w.map((item, i) => (
            <div key={i} className="fc rv on">
              <i></i>
              <h3>{item}</h3>
              <p>{WHO_CAN_JOIN_DESCS[i] || WHO_CAN_JOIN_DESCS[0]}</p>
            </div>
          ))
        )}
      </div>

      {/* Career pathways */}
      <h3 className="sub">Career pathways</h3>
      <div className="cr">
        {program.c.map((career, i) => (
          <span key={i}>{career}</span>
        ))}
      </div>
    </div>
  );
}
