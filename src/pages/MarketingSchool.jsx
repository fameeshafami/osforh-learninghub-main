import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const PRESS_LOGOS = [
  "Times of India",
  "Malayala Manorama",
  "Indian Express",
  "TEDx",
  "Josh Talks",
  "Khaleej Times",
  "The Hindu",
  "Mathrubhumi"
];

const APPROACH_FEATURES = [
  {
    icon: "💰",
    title: "Flexible EMI Options",
    desc: "Along with full career guidance, we also offer flexible EMI options to make learning accessible."
  },
  {
    icon: "💻",
    title: "Learn by Doing, Not Just Listening",
    desc: "Run ads, build SEO websites, create content, test ideas and learn by actually doing it."
  },
  {
    icon: "🚀",
    title: "Hands-On Projects, Real Campaigns",
    desc: "You will work on real campaigns that give you real results you can show in interviews."
  },
  {
    icon: "🤝",
    title: "Learn From Industry Expert Mentors",
    desc: "Your mentors are marketers, strategists, founders, and creators."
  },
  {
    icon: "🎯",
    title: "One-on-One Mentorship",
    desc: "If you get stuck, someone is always there to guide you one-on-one."
  },
  {
    icon: "📂",
    title: "Build a Real Portfolio",
    desc: "By the time you finish, you'll have projects that recruiters actually want to see."
  },
  {
    icon: "💡",
    title: "Guest Sessions & Industry Talks",
    desc: "Learn tips, tricks, and real stories from people working in top companies."
  },
  {
    icon: "🌐",
    title: "Full Career Support",
    desc: "We help you polish your resume, prepare for interviews, and connect with companies."
  }
];

const COURSES = [
  {
    badge: "Offline · 5 Months + 1 Month Internship",
    title: "Basic to Advanced AI-integrated Digital Marketing Program",
    desc: "Includes 5 months of advanced training with the latest AI tools, plus 1 month focused internship on a special skill.",
    link: "/contact#dm"
  },
  {
    badge: "Online · 5 Months",
    title: "Basic to Advanced AI-integrated Digital Marketing Program (Online)",
    desc: "Study from home with live classes covering the same advanced training, practical projects and AI tools. Perfect if you're working or busy during the day.",
    link: "/contact#dm"
  },
  {
    badge: "Online · 2 Months",
    title: "Performance Marketing Mastery",
    desc: "Specialise in running high-ROI ad campaigns across Google, Meta, Instagram and more. Perfect for those who want to master paid ads in less time.",
    link: "/contact#dm"
  },
  {
    badge: "Coming Soon",
    title: "Content Creation & Social Media Mastery Course",
    desc: "Learn how to grow, engage, and monetise audiences on platforms like Instagram, LinkedIn, YouTube, and Facebook with proven strategies.",
    link: "/contact#gd"
  }
];

const PLACEMENT_PHOTOS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80"
];

const CULTURE_PHOTOS = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80"
];

export default function MarketingSchool() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [hours, setHours] = useState(0);
  const [students, setStudents] = useState(0);
  const [partners, setPartners] = useState(0);
  const [mentors, setMentors] = useState(0);
  const statsRef = useRef(null);
  const [statsAnimated, setStatsAnimated] = useState(false);

  useEffect(() => {
    document.title = "Marketing School by HACA | Learn in a Career-Driven Ecosystem";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          const duration = 1600;
          const start = performance.now();
          const animate = (time) => {
            const p = Math.min(1, (time - start) / duration);
            const ease = 1 - Math.pow(1 - p, 3);
            setHours(Math.round(350 * ease));
            setStudents(Math.round(1500 * ease));
            setPartners(Math.round(60 * ease));
            setMentors(Math.round(25 * ease));
            if (p < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsAnimated]);

  return (
    <div className="ms-page">
      <style>{`
        .ms-page {
          background-color: #ffffff;
          color: #000000;
          font-family: -apple-system, BlinkMacSystemFont, 'Satoshi', sans-serif;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .ms-page h1, .ms-page h2, .ms-page h3 {
          font-family: 'Darker Grotesque', sans-serif;
          letter-spacing: -0.02em;
        }

        /* Top Bar */
        .ms-nav {
          position: sticky;
          top: 0;
          z-index: 60;
          background: #ffffff;
          border-bottom: 1px solid #f0f4ff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px clamp(16px, 4vw, 60px);
        }

        .ms-logo {
          font-family: 'Darker Grotesque', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #000000;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ms-logo-tag {
          font-size: 11px;
          background: #E6EFFF;
          color: #015AFF;
          font-family: sans-serif;
          padding: 2px 8px;
          border-radius: 99px;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .ms-menu {
          display: flex;
          align-items: center;
          background: #E6EFFF;
          border-radius: 1000px;
          padding: 8px 24px;
          gap: 28px;
        }

        .ms-menu a {
          font-size: 15px;
          font-weight: 500;
          color: #000000;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
        }

        .ms-menu a.active {
          color: #015AFF;
          font-weight: 600;
        }

        .ms-menu a.active::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #015AFF;
        }

        .ms-btn-pill {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          height: 52px;
          background: #E6EFFF;
          border-radius: 26px;
          padding: 4px 22px 4px 6px;
          cursor: pointer;
          overflow: hidden;
          text-decoration: none;
          color: #000000;
          font-weight: 600;
          font-size: 15px;
          transition: 0.3s;
        }

        .ms-btn-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #015AFF;
          display: grid;
          place-items: center;
          color: #ffffff;
          font-size: 18px;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ms-btn-pill:hover .ms-btn-circle {
          transform: translateX(110px);
        }

        .ms-btn-pill:hover {
          background: #015AFF;
          color: #ffffff;
        }

        /* Hero Section */
        .ms-hero {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px clamp(16px, 4vw, 60px) 40px;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .ms-hero h1 {
          font-size: clamp(48px, 6vw, 76px);
          font-weight: 800;
          line-height: 0.95;
          margin-bottom: 24px;
        }

        .ms-hero p.lead {
          font-size: 18px;
          color: #555555;
          max-width: 480px;
          line-height: 1.6;
          margin-bottom: 34px;
        }

        .ms-badge-box {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f7f9fc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 8px 14px;
          font-size: 13px;
          color: #334155;
          font-weight: 600;
          margin-top: 30px;
        }

        .ms-hero-art {
          position: relative;
          aspect-ratio: 1;
          max-height: 520px;
          border-radius: 28px;
          overflow: hidden;
          background: #eef4ff;
          box-shadow: 0 30px 60px -20px rgba(1, 90, 255, 0.15);
        }

        .ms-hero-art img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Press Ticker */
        .ms-press {
          background: #fafcff;
          border-block: 1px solid #eef2ff;
          padding: 24px 0;
          overflow: hidden;
        }

        .ms-press-track {
          display: flex;
          gap: 60px;
          width: max-content;
          animation: ms-marquee 28s linear infinite;
        }

        .ms-press-track:hover {
          animation-play-state: paused;
        }

        .ms-press-logo {
          font-family: 'Darker Grotesque', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          transition: color 0.3s;
        }

        .ms-press-logo:hover {
          color: #015AFF;
        }

        /* About / Video Section */
        .ms-about {
          max-width: 1320px;
          margin: 70px auto;
          padding: 0 24px;
        }

        .ms-info-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #015AFF;
          background: #E6EFFF;
          padding: 6px 16px;
          border-radius: 99px;
          margin-bottom: 20px;
        }

        .ms-info-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #015AFF;
        }

        .ms-about-desc {
          font-size: clamp(20px, 2.5vw, 32px);
          font-weight: 500;
          line-height: 1.35;
          color: #111111;
          margin-bottom: 40px;
        }

        .ms-video-card {
          position: relative;
          aspect-ratio: 16/9;
          max-height: 540px;
          border-radius: 24px;
          overflow: hidden;
          background: #0a1128;
          display: grid;
          place-items: center;
          cursor: pointer;
        }

        .ms-video-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
          transition: transform 0.6s, opacity 0.3s;
        }

        .ms-video-card:hover img {
          transform: scale(1.03);
          opacity: 0.85;
        }

        .ms-play-btn {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #E6EFFF;
          padding: 6px 20px 6px 8px;
          border-radius: 99px;
          border: 0;
          cursor: pointer;
          font-weight: 700;
          font-size: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          transition: transform 0.3s;
        }

        .ms-play-btn:hover {
          transform: scale(1.08);
        }

        .ms-play-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #015AFF;
          display: grid;
          place-items: center;
          color: #ffffff;
        }

        /* Stats Section */
        .ms-stats {
          max-width: 1320px;
          margin: 60px auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
        }

        .ms-stat-item {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .ms-stat-num {
          font-family: 'Darker Grotesque', sans-serif;
          font-size: 64px;
          font-weight: 800;
          color: #000000;
          line-height: 1;
        }

        .ms-stat-plus {
          color: #015AFF;
          font-size: 44px;
          font-weight: 800;
        }

        .ms-stat-label {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
          line-height: 1.3;
        }

        /* Approach Grid */
        .ms-approach {
          background: #041026;
          color: #ffffff;
          padding: 90px 24px;
        }

        .ms-approach-inner {
          max-width: 1320px;
          margin: 0 auto;
        }

        .ms-approach-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 60px;
          gap: 30px;
          flex-wrap: wrap;
        }

        .ms-approach-head h2 {
          font-size: clamp(34px, 4.5vw, 56px);
          font-weight: 800;
          max-width: 620px;
          color: #ffffff;
          line-height: 1.05;
        }

        .ms-grid-8 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 34px 28px;
        }

        .ms-feat-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .ms-feat-icon {
          font-size: 28px;
          margin-bottom: 14px;
        }

        .ms-feat-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
          line-height: 1.1;
        }

        .ms-feat-card p {
          color: #94a3b8;
          font-size: 15px;
          line-height: 1.5;
          margin: 0;
        }

        /* Courses Section */
        .ms-courses {
          max-width: 1320px;
          margin: 90px auto;
          padding: 0 24px;
        }

        .ms-courses-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 50px;
          gap: 20px;
          flex-wrap: wrap;
        }

        .ms-courses-head h2 {
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 800;
          line-height: 1.05;
        }

        .ms-course-row {
          display: grid;
          grid-template-columns: 1fr 1.3fr auto;
          gap: 40px;
          align-items: center;
          padding: 34px 24px;
          border-bottom: 1px solid #e2e8f0;
          border-radius: 20px;
          transition: background-color 0.3s, color 0.3s, transform 0.3s;
          cursor: pointer;
          text-decoration: none;
          color: #000000;
        }

        .ms-course-row:hover {
          background-color: #015AFF;
          color: #ffffff;
          transform: translateY(-4px);
        }

        .ms-course-row:hover p,
        .ms-course-row:hover .ms-course-badge {
          color: #ffffff;
        }

        .ms-course-row:hover .ms-course-badge {
          background: rgba(255, 255, 255, 0.2);
        }

        .ms-course-row:hover svg {
          transform: rotate(45deg);
          color: #ffffff;
        }

        .ms-course-badge {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          background: #E8F1FF;
          color: #015AFF;
          padding: 6px 14px;
          border-radius: 99px;
          margin-bottom: 12px;
          transition: background-color 0.3s, color 0.3s;
        }

        .ms-course-row h3 {
          font-size: 28px;
          font-weight: 700;
          line-height: 1.15;
          margin: 0;
        }

        .ms-course-row p {
          color: #64748b;
          font-size: 15px;
          line-height: 1.5;
          margin: 0;
          transition: color 0.3s;
        }

        .ms-course-arrow {
          font-size: 32px;
          color: #015AFF;
          transition: transform 0.3s, color 0.3s;
        }

        /* Placements Double Marquee */
        .ms-placements {
          background: #f8faff;
          padding: 80px 0;
          overflow: hidden;
        }

        .ms-placements-head {
          max-width: 1320px;
          margin: 0 auto 40px;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          flex-wrap: wrap;
        }

        .ms-placements-head h2 {
          font-size: clamp(34px, 4.5vw, 56px);
          font-weight: 800;
          line-height: 1.05;
        }

        .ms-cards-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: ms-marquee 45s linear infinite;
          margin-bottom: 20px;
        }

        .ms-cards-track.reverse {
          animation-direction: reverse;
        }

        .ms-cards-track:hover {
          animation-play-state: paused;
        }

        .ms-photo-card {
          width: 220px;
          height: 270px;
          border-radius: 16px;
          overflow: hidden;
          background: #e2e8f0;
          flex-shrink: 0;
          box-shadow: 0 6px 20px rgba(0,0,0,0.06);
          transition: transform 0.3s;
        }

        .ms-photo-card:hover {
          transform: translateY(-8px);
        }

        .ms-photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Blue CTA Banner */
        .ms-cta-blue {
          max-width: 1320px;
          margin: 60px auto 0;
          padding: 0 24px;
        }

        .ms-cta-blue-box {
          background: #015AFF;
          border-radius: 28px;
          padding: 70px 40px;
          text-align: center;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .ms-cta-blue-box h2 {
          font-size: clamp(34px, 5vw, 68px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 26px;
        }

        /* Culture Gallery */
        .ms-culture {
          max-width: 1320px;
          margin: 90px auto;
          padding: 0 24px;
        }

        .ms-culture-head {
          margin-bottom: 40px;
        }

        .ms-culture-head h2 {
          font-size: clamp(34px, 4.5vw, 56px);
          font-weight: 800;
        }

        .ms-culture-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .ms-culture-item {
          aspect-ratio: 4/3;
          border-radius: 18px;
          overflow: hidden;
          background: #f1f5f9;
        }

        .ms-culture-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .ms-culture-item:hover img {
          transform: scale(1.05);
        }

        @keyframes ms-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 900px) {
          .ms-hero {
            grid-template-columns: 1fr;
          }
          .ms-menu {
            display: none;
          }
          .ms-course-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .ms-approach-head {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      {/* Top Navbar */}
      <header className="ms-nav">
        <Link to="/" className="ms-logo">
          HACA <i>•</i> Marketing School
          <span className="ms-logo-tag">CAREER-DRIVEN</span>
        </Link>

        <nav className="ms-menu">
          <Link to="/" className="active">Home</Link>
          <a href="#courses">Courses</a>
          <a href="#approach">Our Approach</a>
          <a href="#placements">Success Stories</a>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/contact" className="ms-btn-pill">
          <div className="ms-btn-circle">↗</div>
          <span>Contact Us</span>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="ms-hero">
        <div>
          <h1>
            Learn the skill.<br />
            Build the demand.<br />
            <span style={{ color: '#015AFF' }}>Join Marketing School.</span>
          </h1>

          <p className="lead">
            Learn in a space where ideas flow, projects matter, and your growth is the absolute priority.
          </p>

          <Link to="/contact" className="ms-btn-pill" style={{ height: '60px', paddingRight: '30px' }}>
            <div className="ms-btn-circle" style={{ width: '50px', height: '50px' }}>↗</div>
            <span style={{ fontSize: '17px' }}>Enquire Now</span>
          </Link>

          <div className="ms-badge-box">
            <span>🏆</span>
            <span>World Education Summit Awarded Curriculum</span>
          </div>
        </div>

        <div className="ms-hero-art">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
            alt="Marketing School Mentor Session"
          />
        </div>
      </section>

      {/* Press Marquee */}
      <section className="ms-press">
        <div className="ms-press-track">
          {[...PRESS_LOGOS, ...PRESS_LOGOS].map((name, i) => (
            <div key={i} className="ms-press-logo">
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* About Marketing School */}
      <section className="ms-about">
        <div className="ms-info-tag">
          <div className="ms-info-dot"></div>
          <span>About Marketing School</span>
        </div>

        <p className="ms-about-desc">
          Here, we don't just explain marketing; we make you apply it. You'll run ads, write copy, build websites, optimise for SEO, launch campaigns, and fix mistakes, with someone guiding you whenever you get stuck.
        </p>

        <div
          className="ms-video-card"
          onClick={() => setIsPlayingVideo(!isPlayingVideo)}
        >
          {isPlayingVideo ? (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/y-iyA5UXJLk?autoplay=1"
              title="Marketing School Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <img
                src="https://img.youtube.com/vi/y-iyA5UXJLk/maxresdefault.jpg"
                alt="Marketing program impact video"
              />
              <button className="ms-play-btn" type="button">
                <div className="ms-play-icon">▶</div>
                <span>Play Story</span>
              </button>
            </>
          )}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="ms-stats" ref={statsRef}>
        <div className="ms-stat-item">
          <div>
            <span className="ms-stat-num">{hours}</span>
            <span className="ms-stat-plus">+</span>
          </div>
          <span className="ms-stat-label">Hours of<br />Hands-On Learning</span>
        </div>

        <div className="ms-stat-item">
          <div>
            <span className="ms-stat-num">{students}</span>
            <span className="ms-stat-plus">+</span>
          </div>
          <span className="ms-stat-label">Total Placed<br />Students</span>
        </div>

        <div className="ms-stat-item">
          <div>
            <span className="ms-stat-num">{partners}</span>
            <span className="ms-stat-plus">+</span>
          </div>
          <span className="ms-stat-label">Partner Companies<br />for Careers</span>
        </div>

        <div className="ms-stat-item">
          <div>
            <span className="ms-stat-num">{mentors}</span>
            <span className="ms-stat-plus">+</span>
          </div>
          <span className="ms-stat-label">Expert Mentors<br />Guiding You</span>
        </div>
      </section>

      {/* Our Approach (8 Pillars Dark Section) */}
      <section className="ms-approach" id="approach">
        <div className="ms-approach-inner">
          <div className="ms-approach-head">
            <div className="ms-info-tag" style={{ background: 'rgba(1, 90, 255, 0.2)', color: '#38bdf8' }}>
              <div className="ms-info-dot" style={{ background: '#38bdf8' }}></div>
              <span>Our Approach</span>
            </div>

            <h2>Why Marketing School Feels Like the Right Decision</h2>
          </div>

          <div className="ms-grid-8">
            {APPROACH_FEATURES.map((item, i) => (
              <div key={i} className="ms-feat-card">
                <div className="ms-feat-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="ms-courses" id="courses">
        <div className="ms-courses-head">
          <div className="ms-info-tag">
            <div className="ms-info-dot"></div>
            <span>Career Programs</span>
          </div>

          <h2>We've Career-Focused Programs Just for You</h2>
        </div>

        <div>
          {COURSES.map((course, i) => (
            <Link key={i} to={course.link} className="ms-course-row">
              <div>
                <span className="ms-course-badge">{course.badge}</span>
                <h3>{course.title}</h3>
              </div>

              <p>{course.desc}</p>

              <div className="ms-course-arrow">↗</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Placements Marquee Showcase */}
      <section className="ms-placements" id="placements">
        <div className="ms-placements-head">
          <div className="ms-info-tag">
            <div className="ms-info-dot"></div>
            <span>Placements</span>
          </div>

          <h2>Your Name Could Be Next on Our Success List</h2>
        </div>

        {/* Row 1 Scrolling Right */}
        <div className="ms-cards-track">
          {[...PLACEMENT_PHOTOS, ...PLACEMENT_PHOTOS].map((url, i) => (
            <div key={i} className="ms-photo-card">
              <img src={url} alt={`Placed Student ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        {/* Row 2 Scrolling Left */}
        <div className="ms-cards-track reverse">
          {[...PLACEMENT_PHOTOS.slice().reverse(), ...PLACEMENT_PHOTOS.slice().reverse()].map((url, i) => (
            <div key={i} className="ms-photo-card">
              <img src={url} alt={`Placed Student ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        {/* Big Blue CTA Box */}
        <div className="ms-cta-blue">
          <div className="ms-cta-blue-box">
            <h2>You're Only One Decision Away from a Different Future</h2>
            <Link
              to="/contact"
              className="ms-btn-pill"
              style={{
                background: '#ffffff',
                color: '#000000',
                height: '60px',
                paddingRight: '32px'
              }}
            >
              <div className="ms-btn-circle" style={{ background: '#000000' }}>↗</div>
              <span>Join Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="ms-culture">
        <div className="ms-culture-head">
          <div className="ms-info-tag">
            <div className="ms-info-dot"></div>
            <span>Culture</span>
          </div>
          <h2>The Energy Here Feels Different</h2>
        </div>

        <div className="ms-culture-grid">
          {CULTURE_PHOTOS.map((url, i) => (
            <div key={i} className="ms-culture-item">
              <img src={url} alt={`Culture moment ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
