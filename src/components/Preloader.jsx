import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 10) + 4;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => setHidden(true), 900);
        }, 200);
      } else {
        setProgress(current);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <div className={`pre ${isDone ? 'out' : ''}`} id="pre">
      <div>
        <b id="pn">{progress}</b>
        <span>Osforh Learning Hub</span>
        <i id="pb" style={{ '--p': `${progress}%` }}></i>
      </div>
    </div>
  );
}
