import React from 'react';
import { ALUMNI } from '../data/siteData.jsx';
import './AlumniMovingShowcase.css';

function getInitials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);
}

export default function AlumniMovingShowcase() {
  // Split alumni into 2 sets for dual-track motion
  const row1 = ALUMNI.slice(0, 5);
  const row2 = ALUMNI.slice(5).concat(ALUMNI.slice(0, 2));

  // Repeat for continuous seamless infinite loop
  const track1 = [...row1, ...row1, ...row1, ...row1];
  const track2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="alumni-moving-sec" id="alumni-showcase">
      <div className="alumni-head-wrap">
        <div className="alumni-eyebrow">
          <i aria-hidden="true"></i>
          <span>PLACED STUDENTS</span>
        </div>
        <h2 className="alumni-title">
          Where our <span className="alumni-green">alumni work</span>
        </h2>
        <p className="alumni-sub">
          Graduates who transitioned from college freshers to commercial creators at top agencies and brands.
        </p>
      </div>

      {/* Row 1 - Moving Left */}
      <div className="alumni-marquee" aria-label="Placed students list">
        <div className="alumni-track move-left">
          {track1.map((student, i) => (
            <div key={`t1-${i}`} className="alumni-card">
              <div className="alumni-av-badge">
                {getInitials(student.name)}
              </div>
              <div className="alumni-info">
                <div className="alumni-name-row">
                  <b>{student.name}</b>
                  <svg className="alumni-check" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div className="alumni-role">{student.role}</div>
                <div className="alumni-company">
                  <span>Placed at {student.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Moving Right */}
      <div className="alumni-marquee is-reverse" aria-hidden="true">
        <div className="alumni-track move-right">
          {track2.map((student, i) => (
            <div key={`t2-${i}`} className="alumni-card">
              <div className="alumni-av-badge">
                {getInitials(student.name)}
              </div>
              <div className="alumni-info">
                <div className="alumni-name-row">
                  <b>{student.name}</b>
                  <svg className="alumni-check" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div className="alumni-role">{student.role}</div>
                <div className="alumni-company">
                  <span>Placed at {student.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
