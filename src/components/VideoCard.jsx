import React from 'react';

export default function VideoCard({ video }) {
  return (
    <a
      className="vv rv on"
      href="https://youtube.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="th">
        <s>▶</s>
        <em>{video.duration}</em>
      </div>
      <div className="b">
        <small>{video.category}</small>
        <h3>{video.title}</h3>
        <p>{video.desc}</p>
      </div>
    </a>
  );
}
