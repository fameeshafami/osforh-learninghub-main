import React from 'react';

export default function PageCurtain({ isNavigating }) {
  return (
    <div
      className={`cv ${isNavigating ? 'active' : ''}`}
      id="cv"
      aria-hidden="true"
    >
      OSFORH
    </div>
  );
}
