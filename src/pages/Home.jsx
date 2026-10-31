import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import dmImg from '../img/ad6743702d8faa96f9b494d2f65250bf.jpg';
import codingImg from '../img/bb92b0eace00fe146e1ea5b000e8b5b8.jpg';
import videoImg from '../img/fec68bb5292c54a2c3607fb09f06170a.jpg';
import officeImg from '../img/OIP.webp';
import gdImg from '../img/946fd42a-6e73-4c5d-96b7-e0cc1327e68b.png';
import gdArtImg from '../img/7df08871-3653-4e9d-a8a2-a43287fbdd7c.png';
import WhyChooseSection from '../components/WhyChooseSection.jsx';
import StudentReviewsSection from '../components/StudentReviewsSection.jsx';
import FacilitiesExperienceSection from '../components/FacilitiesExperienceSection.jsx';
import IndustryLeadersSection from '../components/IndustryLeadersSection.jsx';

export default function Home() {
  useEffect(() => {
    document.title = "Osforh Learning Hub | Courses & Career Training in Tirur";
    window.scrollTo(0, 0);
  }, []);

  // 1. Hero Accordion & Stage rotation state
  const [heroIndex, setHeroIndex] = useState(0);
  const heroTimerRef = useRef(null);

  const heroPanels = [
    {
      heading: (
        <>
          Digital Marketing &amp; AI<br />
          Run <span>live campaigns</span>
        </>
      ),
      description: "Social media, SEO, search engine marketing, e-commerce and AI tools over 4 months.",
      tabTitle: "Digital Marketing & AI",
      tabDesc: "Social media, SEO, SEM, e-commerce and AI tools."
    },
    {
      heading: (
        <>
          Graphic Design<br />
          Design brands that <span>sell</span>
        </>
      ),
      description: "Canva, Photoshop, Illustrator and InDesign, taught in 3 months.",
      tabTitle: "Graphic Design",
      tabDesc: "Canva, Photoshop, Illustrator and InDesign branding.",
      img: gdArtImg
    },
    {
      heading: (
        <>
          Web Development<br />
          Ship real <span>websites</span>
        </>
      ),
      description: "From HTML, CSS and responsive design to the full MERN stack, in 4 or 6 months.",
      tabTitle: "Web Development",
      tabDesc: "Responsive web design to full MERN stack projects."
    },
    {
      heading: (
        <>
          Video Editing &amp; AI<br />
          Create <span>cinematic videos</span>
        </>
      ),
      description: "Premiere Pro, CapCut, After Effects, DaVinci and AI video generation in 2 months.",
      tabTitle: "Video Editing & AI",
      tabDesc: "Premiere Pro, CapCut, After Effects and AI video."
    }
  ];

  const resetHeroTimer = () => {
    if (heroTimerRef.current) clearInterval(heroTimerRef.current);
    heroTimerRef.current = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroPanels.length);
    }, 4800);
  };

  useEffect(() => {
    resetHeroTimer();
    return () => {
      if (heroTimerRef.current) clearInterval(heroTimerRef.current);
    };
  }, []);

  const handleSelectHero = (idx) => {
    setHeroIndex(idx);
    resetHeroTimer();
  };

  const programsList = [
    {
      title: "Digital Marketing & AI",
      subtags: "SOCIAL MEDIA · SEO · SEM · AI TOOLS",
      duration: "4 months practical",
      link: "/programs#dm",
      img: dmImg,
      desc: "Social media, SEO, search engine marketing, e-commerce, email marketing and AI tools over 4 months."
    },
    {
      title: "Video Editing & AI",
      subtags: "PREMIERE PRO · CAPCUT · AFTER EFFECTS · DAVINCI",
      duration: "2 months practical",
      link: "/programs#ve",
      img: videoImg,
      desc: "Premiere Pro, CapCut, After Effects, DaVinci Resolve and AI video generation in 2 months."
    },
    {
      title: "Graphic Designing",
      subtags: "CANVA · PHOTOSHOP · ILLUSTRATOR · INDESIGN",
      duration: "3 months practical",
      link: "/programs#gd",
      img: gdArtImg,
      desc: "Visual communication, branding, typography, Canva, Photoshop, Illustrator and InDesign in 3 months."
    },
    {
      title: "Website Development",
      subtags: "HTML/CSS · JAVASCRIPT · REACT · MERN STACK",
      duration: "4 or 6 months",
      link: "/programs#wd",
      img: codingImg,
      desc: "From Web Fundamentals (4 months) to Full Stack MERN Development (6 months)."
    },
    {
      title: "Office Administration",
      subtags: "MS OFFICE · DOCUMENTATION · COMMUNICATION",
      duration: "3 months practical",
      link: "/programs#oa",
      img: officeImg,
      desc: "Office software, documentation, professional communication and administrative skills in 3 months."
    }
  ];

  // 2. Instructors data
  const instructors = [
    {
      initial: "R",
      name: "Ramees K.",
      role: "Lead Performance Marketer",
      xp: "8+ years client campaign experience"
    },
    {
      initial: "A",
      name: "Anees Rahman",
      role: "Creative Director & Brand Lead",
      xp: "10+ years agency & packaging experience"
    },
    {
      initial: "S",
      name: "Suhail V.P.",
      role: "Senior Full-Stack Developer",
      xp: "7+ years web apps & e-commerce builds"
    },
    {
      initial: "F",
      name: "Fathima Nihala",
      role: "Executive Operations & MIS Lead",
      xp: "6+ years corporate administration"
    }
  ];

  // 5. Learner reviews data
  const reviews = [
    {
      stars: "★★★★★",
      title: "Handled ₹2 Lakh live ad spend before graduation",
      text: "The practical ad budget sessions at Osforh gave me the confidence to handle Meta Ads for real clients. Placed as a performance marketer in Calicut within two weeks of finishing.",
      name: "Fathima Nihala",
      course: "Digital Marketing & AI Performance"
    },
    {
      stars: "★★★★★",
      title: "My design portfolio got me hired in Kochi",
      text: "Other institutes just teach tool shortcuts. Osforh taught me packaging design, grid systems, and brand psychology. The creative mentors helped me refine 5 full case studies.",
      name: "Rahul Krishna",
      course: "Graphic Design & Visual Identity"
    },
    {
      stars: "★★★★★",
      title: "From non-tech B.Com to junior frontend dev",
      text: "I was scared of programming, but the step-by-step method and desk mentors made JavaScript and React click. Launched three client sites during the course.",
      name: "Ananya Varma",
      course: "Full-Stack Website Development"
    },
    {
      stars: "★★★★★",
      title: "Best decision for career switch in Malappuram",
      text: "The mock interview drill and direct agency connections were game-changers. The trainers genuinely care about your career trajectory even after the batch ends.",
      name: "Mohammed Shafeeq",
      course: "Digital Marketing & AI Performance"
    },
    {
      stars: "★★★★★",
      title: "Advanced Excel and corporate polish",
      text: "The executive office admin course helped me master pivot tables, MIS reporting and professional correspondence. Secured an administrative role smoothly.",
      name: "Shilpa Raj",
      course: "Executive Office Administration"
    },
    {
      stars: "★★★★★",
      title: "Real agency client briefs, no dummy work",
      text: "Working with actual Kerala brand briefs prepared me for agency life in Dubai. Creative directors reviewed our work and gave honest, constructive feedback every week.",
      name: "Adil Roshan",
      course: "Visual Identity & Graphic Design"
    }
  ];

  return (
    <div className="hub-root">
      {/* Hero Section */}
      <div className="dark home-hero">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="pill">Osforh Learning Hub · Tirur</span>
              <div className="stage">
                {heroPanels.map((panel, idx) => (
                  <div
                    key={idx}
                    className={`msg ${idx === heroIndex ? 'on' : ''}`}
                  >
                    <h1 className="h">{panel.heading}</h1>
                    <p>{panel.description}</p>
                  </div>
                ))}
              </div>

              <div className="ctas">
                <Link className="btn ghost" to="/contact">
                  Talk to an expert
                </Link>
                <Link className="btn" to="/programs#dm">
                  Explore programs
                </Link>
              </div>

              {/* Synchronized Pagination Dots */}
              <div className="dots">
                {heroPanels.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={idx === heroIndex ? 'on' : ''}
                    aria-label={`Show slide ${idx + 1}`}
                    onClick={() => handleSelectHero(idx)}
                  ></button>
                ))}
              </div>
            </div>

            {/* Interactive Accordion Right Panel */}
            <div className="acc">
              {heroPanels.map((panel, idx) => (
                <div
                  key={idx}
                  className={`pn ${idx === heroIndex ? 'on' : ''}`}
                  style={
                    idx === heroIndex && panel.img
                      ? {
                          backgroundImage: `linear-gradient(180deg, rgba(6, 31, 20, 0) 30%, rgba(6, 31, 20, 0.94) 100%), url(${panel.img})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat'
                        }
                      : undefined
                  }
                  onClick={() => handleSelectHero(idx)}
                >
                  <b>{panel.tabTitle}</b>
                  <p>{panel.tabDesc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Why Choose Osforh Section */}
      <WhyChooseSection />


      {/* Programs Section */}
      <section className="sec" id="programs" style={{ paddingTop: '20px' }}>
        <div className="wrap">
          <div className="kick">What we have</div>
          <h2>
            Explore our <mark className="hl">programs</mark>
          </h2>

          <div className="cards program-cards-grid" style={{ marginTop: '36px' }}>
            {programsList.map((prog, idx) => (
              <article key={idx} className="card">
                <div className="shot">
                  {prog.img && (
                    <img
                      src={prog.img}
                      alt={prog.title}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="bd">
                  <h3>{prog.title}</h3>
                  {prog.subtags && (
                    <div className="ai-course-tags" style={{ margin: '6px 0 4px', fontSize: '11px', letterSpacing: '0.04em', fontWeight: '700' }}>
                      {prog.subtags}
                    </div>
                  )}
                  <p style={{ fontSize: '13px', color: 'var(--mute)', margin: '8px 0 0', lineHeight: 1.5 }}>
                    {prog.desc}
                  </p>
                  <div className="du">Duration: {prog.duration}</div>
                  <Link className="ob" to={prog.link}>
                    View program →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Student Reviews Section (1st Image) */}
      <StudentReviewsSection />



      {/* Discover the Best Learning Experience & Facilities (Model 1) */}
      <FacilitiesExperienceSection />

      {/* How We Are Creating Industry Leaders (Creative 10/10 Model) */}
      <IndustryLeadersSection />
    </div>
  );
}
