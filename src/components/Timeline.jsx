import React, { useState, useEffect, useRef } from 'react';

const steps = [
  ["Discover", "Explore the fields and find the course that fits your interest, with a free 1-on-1 counseling session."],
  ["Learn", "Build strong foundations with guided online and offline classes."],
  ["Practice", "Apply every concept straight away on hands-on exercises."],
  ["Build Projects", "Create campaigns, designs and websites for your portfolio."],
  ["Prepare for Your Career", "Resume guidance, internship opportunities and placement assistance."]
];

export default function Timeline() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.7 - rect.top) / rect.height));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="tl"
      id="tl"
      ref={timelineRef}
      style={{ '--p': scrollProgress }}
    >
      {steps.map((step, index) => {
        const isActive = scrollProgress >= index / 5 + 0.02;
        return (
          <div key={index} className={`sp rv on ${isActive ? 'on' : ''}`}>
            <i>{index + 1}</i>
            <h3>{step[0]}</h3>
            <p>{step[1]}</p>
          </div>
        );
      })}
    </div>
  );
}
