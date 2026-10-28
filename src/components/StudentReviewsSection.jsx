import React, { useState, useMemo } from 'react';
import { STUDENT_REVIEWS } from '../data/siteData.jsx';
import './StudentReviewsSection.css';

const FILTERS = [
  { id: 'all', label: 'All Stories' },
  { id: 'dm', label: 'Digital Marketing' },
  { id: 'wd', label: 'Web Development' },
  { id: 'gd', label: 'Graphic Design' },
  { id: 'oa', label: 'Office Administration' }
];

function getInitials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);
}

// Prepares a list of items for seamless infinite marquee scrolling
// Ensures base list has enough width (>= 8 cards) before duplicating
function prepareMarqueeList(items) {
  if (!items || items.length === 0) return [];
  let base = [...items];
  while (base.length < 8) {
    base = [...base, ...items];
  }
  return [...base, ...base];
}

export default function StudentReviewsSection({
  title = "What Our Students Say",
  subtitle = "Read direct testimonials from graduates who built practical skills, launched exciting careers, and transformed their future."
}) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredReviews = useMemo(() => {
    if (activeFilter === 'all') return STUDENT_REVIEWS;
    return STUDENT_REVIEWS.filter((r) => r.category === activeFilter);
  }, [activeFilter]);

  // Prepare single-row marquee items for smooth infinite loop to the left
  const marqueeItems = useMemo(() => {
    const list = filteredReviews.length > 0 ? filteredReviews : STUDENT_REVIEWS;
    return prepareMarqueeList(list);
  }, [filteredReviews]);

  const renderReviewCard = (rev, idx, rowKey) => (
    <article key={`${rowKey}-${rev.id}-${idx}`} className="s-rev-card">
      <div className="s-rev-card-top">
        <div className="s-rev-stars" aria-label="5 out of 5 stars">
          <span className="star-icon">★</span>
          <span className="star-icon">★</span>
          <span className="star-icon">★</span>
          <span className="star-icon">★</span>
          <span className="star-icon">★</span>
          <span className="s-rev-score">5.0</span>
        </div>
        <span className="s-rev-cat-pill">
          {rev.categoryLabel || rev.role}
        </span>
      </div>

      <h3 className="s-rev-heading">{rev.title}</h3>
      <p className="s-rev-body">"{rev.text}"</p>

      <div className="s-rev-author">
        <div className="s-rev-avatar" aria-hidden="true">
          {getInitials(rev.name)}
        </div>
        <div className="s-rev-meta">
          <div className="s-rev-name">
            <span>{rev.name}</span>
            <svg
              className="s-rev-verified"
              viewBox="0 0 24 24"
              fill="currentColor"
              title="Verified Student"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <span className="s-rev-role">{rev.role}</span>
        </div>
        <div className="s-rev-quote-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>
    </article>
  );

  return (
    <section className="s-rev-sec" id="reviews">
      <div className="s-rev-wrap">
        {/* Header */}
        <div className="s-rev-head">
          <h2 className="s-rev-title">
            What Our Students Say About <span className="rev-highlight">Best Learning</span> at Osforh
          </h2>
          {subtitle && <p className="s-rev-lead">{subtitle}</p>}

          <div className="s-rev-rating-pill">
            <span className="s-rev-rating-stars">★★★★★</span>
            <span className="s-rev-rating-val">4.9 / 5.0</span>
            <span className="s-rev-rating-divider">•</span>
            <span className="s-rev-rating-count">Based on 1,200+ Alumni</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="s-rev-filters" role="tablist" aria-label="Review filter">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`s-rev-filter-btn ${activeFilter === f.id ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Single Line Moving Marquee (Moving to LEFT only) */}
        <div className="s-rev-marquee-container">
          <div className="s-rev-marquee-track track-left" title="Scrolls left - hover to pause">
            <div className="s-rev-marquee-inner">
              {marqueeItems.map((rev, idx) => renderReviewCard(rev, idx, 'row-left'))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
