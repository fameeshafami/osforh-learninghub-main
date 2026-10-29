import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import ProgramDetail from '../components/ProgramDetail.jsx';
import { PROGRAMS, PROGRAM_KEYS } from '../data/siteData.jsx';

export default function Programs() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState('dm');

  // Synchronize activeKey with URL hash and scroll when arriving with a hash
  useEffect(() => {
    document.title = "Programs | Osforh Learning Hub";
    const hash = location.hash.replace('#', '');
    if (hash && PROGRAMS[hash]) {
      setActiveKey(hash);
      setTimeout(() => {
        const el = document.getElementById('programs-tabs') || document.getElementById('pnl');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && PROGRAMS[hash]) {
      setActiveKey(hash);
    }
  }, [location.hash]);

  const handleSelectTab = (key) => {
    setActiveKey(key);
    navigate(`/programs#${key}`);
    const el = document.getElementById('programs-tabs') || document.getElementById('pnl');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <PageHeader
        className="programs-page-header"
        badge="Our Programs"
        title={
          <>
            Programs built for <span className="gr">real careers</span>
          </>
        }
        description="Five practical AI-integrated programs, each with live projects, mentor reviews and career support. Pick one to see exactly what you will learn."
      />

      {/* Sticky Program Navigation Tabs */}
      <div className="tabs" id="programs-tabs">
        <div className="wrap">
          {PROGRAM_KEYS.map((key) => {
            const prog = PROGRAMS[key];
            const isActive = activeKey === key;
            return (
              <Link
                key={key}
                to={`/programs#${key}`}
                className={`tb ${isActive ? 'on' : ''}`}
                style={{ '--c': prog.a }}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelectTab(key);
                }}
              >
                <i></i>
                {prog.s}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Active Program View */}
      <section>
        <div className="wrap" id="pnl">
          <ProgramDetail programKey={activeKey} program={PROGRAMS[activeKey]} />
        </div>
      </section>

      {/* Every Program Includes Section */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg), var(--s) 50%, var(--bg))' }}>
        <div className="wrap">
          <div className="hd rv on">
            <div className="eb">Every Program Includes</div>
            <h2>
              The same <span className="gr">practical support</span>, whichever you pick
            </h2>
          </div>
          <div className="w4">
            <div className="rv on">
              Live projects
              <small>Real briefs from the first weeks, not practice files.</small>
            </div>
            <div className="rv on">
              Mentor reviews
              <small>Working professionals check your work and tell you what the industry expects.</small>
            </div>
            <div className="rv on">
              Portfolio
              <small>You finish with case studies and a portfolio link to show in interviews.</small>
            </div>
            <div className="rv on">
              Career support
              <small>Mock interviews, agency referrals and placement assistance.</small>
            </div>
          </div>
        </div>
      </section>

      {/* Program Selector Guide */}
      <section>
        <div className="wrap">
          <div className="hd rv on">
            <h2>
              Find the program that <span className="gr">fits you</span>
            </h2>
            <p>You do not need a background in any of these. Start with what you enjoy.</p>
          </div>
          <div className="w4">
            <Link
              className="rv on"
              to="/programs#dm"
              onClick={(e) => {
                e.preventDefault();
                handleSelectTab('dm');
              }}
              style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
            >
              You like ads, numbers and growth
              <small>Choose Digital Marketing &amp; AI and run live campaigns.</small>
            </Link>
            <Link
              className="rv on"
              to="/programs#gd"
              onClick={(e) => {
                e.preventDefault();
                handleSelectTab('gd');
              }}
              style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
            >
              You like colour, type and brands
              <small>Choose Graphic Design and finish with a professional design portfolio.</small>
            </Link>
            <Link
              className="rv on"
              to="/programs#wd"
              onClick={(e) => {
                e.preventDefault();
                handleSelectTab('wd');
              }}
              style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
            >
              You like building things that work
              <small>Choose Web Development and build responsive sites or full-stack web apps.</small>
            </Link>
            <Link
              className="rv on"
              to="/programs#ve"
              onClick={(e) => {
                e.preventDefault();
                handleSelectTab('ve');
              }}
              style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
            >
              You like storytelling, visual effects and reels
              <small>Choose Video Editing &amp; AI and craft cinematic and viral videos.</small>
            </Link>
            <Link
              className="rv on"
              to="/programs#oa"
              onClick={(e) => {
                e.preventDefault();
                handleSelectTab('oa');
              }}
              style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
            >
              You like order, planning and people
              <small>Choose Office Administration for a steady professional career.</small>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
