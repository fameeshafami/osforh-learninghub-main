import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ProgramCard({ programKey, program, index }) {
  const cardRef = useRef(null);

  const handlePointerMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-8px)`;
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
  };

  return (
    <Link
      ref={cardRef}
      to={`/programs#${programKey}`}
      className="vc rv on"
      style={{ '--a': program.a }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="vi">{program.k}</div>
      <div className="vn">0{index + 1} / 04</div>
      <h3>{program.n}</h3>
      <p>{program.d.split('.')[0]}.</p>
      <small>{program.dur} · {program.mode}</small>
      <div className="ex">
        View full details <span>→</span>
      </div>
    </Link>
  );
}
