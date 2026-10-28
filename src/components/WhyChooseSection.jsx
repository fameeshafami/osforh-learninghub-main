import React, { useEffect, useRef, useState } from 'react';
import './WhyChooseSection.css';

const whyReasons = [
  {
    num: "01",
    badge: "INDUSTRY ALIGNED",
    title: "Career-Oriented Training",
    description: "Courses designed for jobs and entrepreneurship."
  },
  {
    num: "02",
    badge: "LIVE PORTFOLIOS",
    title: "Hands-On Projects",
    description: "Learn by doing, not just listening."
  },
  {
    num: "03",
    badge: "1-ON-1 GUIDANCE",
    title: "Expert Mentors",
    description: "Guidance from professionals with real experience."
  },
  {
    num: "04",
    badge: "CAREER PLACED",
    title: "Proven Success Stories",
    description: "Students placed in companies or launching their own ventures."
  },
  {
    num: "05",
    badge: "LIFELONG NETWORK",
    title: "Supportive Community",
    description: "A place to learn, grow, and network."
  }
];

export default function WhyChooseSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const names = whyReasons.map((a) => a.title);

  // Build marquee content (duplicate 4x for seamless loop)
  const forwardNames = [...names, ...names, ...names, ...names];
  const reverseNames = [...names].reverse();
  const reverseRepeated = [...reverseNames, ...reverseNames, ...reverseNames, ...reverseNames];

  return (
    <section
      className={`wc-section${isVisible ? ' wc-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="wc-inner">
        {/* Header */}
        <div className="wc-heading">
          <h2>
            Here are a few reasons why you should choose <mark>Osforh.</mark>
          </h2>
        </div>

        {/* Marquee Row 1 – forward */}
        <div className="wc-marq" aria-label="Why choose Osforh">
          <div className="wc-track">
            {forwardNames.map((name, i) => (
              <span key={`f-${i}`}>{name}</span>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 – reverse */}
        <div className="wc-marq wc-reverse" aria-hidden="true">
          <div className="wc-track">
            {reverseRepeated.map((name, i) => (
              <span key={`r-${i}`}>{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
