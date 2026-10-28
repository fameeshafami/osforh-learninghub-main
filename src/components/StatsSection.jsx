import React, { useState, useEffect, useRef } from 'react';

const statsData = [
  { target: 350, label: "Hours of hands-on practical lab" },
  { target: 500, label: "Career transitions & placed students" },
  { target: 40, label: "Agency & corporate hiring partners" },
  { target: 15, label: "Active agency mentors" }
];

function StatCard({ target, label }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1600;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target]);

  return (
    <div className={`st rv ${isVisible ? 'on' : ''}`} ref={cardRef}>
      <b>
        <span>{count}</span>
        <i>+</i>
      </b>
      <span>{label}</span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <div className="stats">
      {statsData.map((item, index) => (
        <StatCard key={index} target={item.target} label={item.label} />
      ))}
    </div>
  );
}
