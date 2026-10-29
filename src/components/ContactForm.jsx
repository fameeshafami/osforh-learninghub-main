import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PROGRAMS } from '../data/siteData.jsx';

const COURSE_LIST = [
  "Digital Marketing",
  "Graphic Design",
  "Web Development",
  "Video Editing",
  "Office Administration"
];

function normalizeCourse(name) {
  if (!name) return 'Digital Marketing';
  const lower = name.toLowerCase();
  if (lower.includes('market') || lower.includes('seo') || lower.includes('sem') || lower === 'dm') {
    return 'Digital Marketing';
  }
  if (lower.includes('graphic') || lower.includes('design') || lower === 'gd') {
    return 'Graphic Design';
  }
  if (lower.includes('web') || lower.includes('full stack') || lower.includes('code') || lower === 'wd') {
    return 'Web Development';
  }
  if (lower.includes('video') || lower.includes('editing') || lower.includes('reel') || lower === 've') {
    return 'Video Editing';
  }
  if (lower.includes('office') || lower.includes('admin') || lower === 'oa') {
    return 'Office Administration';
  }
  return COURSE_LIST.includes(name) ? name : 'Digital Marketing';
}

export default function ContactForm() {
  const location = useLocation();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState('Digital Marketing');
  const [mode, setMode] = useState('Offline Campus');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryCourse = searchParams.get('course');
    if (queryCourse) {
      setProgram(normalizeCourse(queryCourse));
      return;
    }

    const hash = location.hash.replace('#', '');
    if (hash && PROGRAMS[hash]) {
      setProgram(PROGRAMS[hash].s);
    }
  }, [location.search, location.hash]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi Osforh, I’m ${fullName} (${phone}). Interested in: ${program} · ${mode}.`;
    const whatsappUrl = `https://wa.me/919946227177?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fcard rv on">
      <h3>Enquire now</h3>
      {/* <p>Book a free 1-on-1 counseling &amp; demo seat.</p> */}

      <form onSubmit={handleSubmit}>
        <label>
          Full name
          <input
            type="text"
            required
            placeholder="your name"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>

        <div className="g2">
          <label>
            WhatsApp / phone
            <input
              type="tel"
              required
              placeholder="+91 99462 XXXXX"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>

          <label>
            Program
            <select
              value={program}
              onChange={(e) => setProgram(e.target.value)}
            >
              {COURSE_LIST.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label>Preferred learning mode</label>
        <div className="md">
          {['Offline Campus', 'Hybrid / Weekend', 'Online Only'].map((opt) => (
            <label key={opt}>
              <input
                type="radio"
                name="mode"
                value={opt}
                checked={mode === opt}
                onChange={() => setMode(opt)}
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>

        <button className="btn" type="submit">
          Submit enquiry →
        </button>
      </form>
    </div>
  );
}
