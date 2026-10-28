import React from 'react';

export default function Marquee({ items, renderItem, reverse = false }) {
  // Duplicate array items so the loop is seamless across screens
  const doubled = [...items, ...items];

  return (
    <div className={`mq ${reverse ? 'r2' : ''}`}>
      {doubled.map((item, index) => (
        <React.Fragment key={index}>
          {renderItem(item, index)}
        </React.Fragment>
      ))}
    </div>
  );
}
