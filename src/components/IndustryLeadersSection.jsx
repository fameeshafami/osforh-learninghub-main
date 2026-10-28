import React from 'react';
import './IndustryLeadersSection.css';

const YOUTUBE_SHORTS = [
  'CBr1OQHVjy8',
  'KsOn09ruU3M',
  '2TvdP2bP934',
  'HQ35A4jjQMM',
  'STQHsFvH6Uo',
  'sA2GGM7LDNk',
  '0GsOLV6ZqG0',
  'MX7wPGFgMzA',
  'lUTzmGPK1JM'
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9.4 7.2 7.2 4.8-7.2 4.8V7.2Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export default function IndustryLeadersSection() {
  const movingShorts = [...YOUTUBE_SHORTS, ...YOUTUBE_SHORTS];

  return (
    <section className="video-stories" id="stories" aria-labelledby="video-stories-title">
      <div className="video-stories__container">
        <header className="video-stories__header">
          <h2 id="video-stories-title">
            See what learning at <br />
            <em>Osforh feels like.</em>
          </h2>
          <p>Fresh moments, practical skills, and the people behind every ambitious next step.</p>
        </header>

        <div className="video-stories__shell">
          <div className="video-stories__topbar">
            <span>Latest short videos</span>
            <a href="https://www.youtube.com/@OsforhLearningHub" target="_blank" rel="noopener noreferrer">
              Explore all videos <ArrowIcon />
            </a>
          </div>

          <div className="video-stories__marquee" aria-label="Osforh Learning Hub short videos">
            <div className="video-stories__track">
              {movingShorts.map((videoId, index) => (
                <a
                  className="video-stories__card"
                  href={`https://www.youtube.com/shorts/${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`${videoId}-${index}`}
                  aria-label={`Watch Osforh short video ${(index % YOUTUBE_SHORTS.length) + 1}`}
                >
                  <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt="" loading={index > 3 ? 'lazy' : 'eager'} />
                  <span className="video-stories__shade" />
                  <span className="video-stories__play"><PlayIcon /></span>
                  <span className="video-stories__watch">Watch short</span>
                </a>
              ))}
            </div>
          </div>

          <div className="video-stories__footer">
            <span><i aria-hidden="true" /> New stories added regularly</span>
            <span>Hover to pause · Tap a video to play</span>
          </div>
        </div>
      </div>
    </section>
  );
}
