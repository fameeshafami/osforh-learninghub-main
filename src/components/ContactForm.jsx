import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PROGRAMS } from '../data/siteData.jsx';

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
      setProgram(queryCourse);
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
              {program && !Object.values(PROGRAMS).some(p => p.s === program) && (
                <option value={program}>{program}</option>
              )}
              {Object.keys(PROGRAMS).map((key) => (
                <option key={key} value={PROGRAMS[key].s}>
                  {PROGRAMS[key].s}
                </option>
              ))}
              <optgroup label="Digital Marketing Specializations">
                <option value="DIPLOMA IN DIGITAL MARKETING">Diploma in Digital Marketing (3 Mo + 1 Mo Int)</option>
                <option value="DIGITAL MARKETING AND GRAPHIC DESIGNING">Digital Marketing &amp; Graphic Designing (7 Mo + 1 Mo Int)</option>
                <option value="Social Media Marketing">Social Media Marketing (1 Mo + 1 Mo Int)</option>
                <option value="SEO (Search engine Optimisation)">SEO - Search Engine Optimisation (1 Mo + 1 Mo Int)</option>
              </optgroup>
              <optgroup label="Graphic Designing Specializations">
                <option value="Expert-Led Training">Expert-Led Training (3 Mo + 1 Mo Int)</option>
                <option value="Master Graphic Tools">Master Graphic Tools (3 Mo + 1 Mo Int)</option>
              </optgroup>
              <optgroup label="Website Development Specializations">
                <option value="RESPONSIVE DESIGN">Responsive Design (1 Mo + 1 Mo Int)</option>
                <option value="USER FRIENDLY NAVIGATION">User Friendly Navigation (1 Mo + 1 Mo Int)</option>
                <option value="BRANDING AND VISUAL IDENTITY">Branding &amp; Visual Identity (1 Mo + 1 Mo Int)</option>
                <option value="CMS & Platform Management">CMS &amp; Platform Management (1 Mo + 1 Mo Int)</option>
              </optgroup>
              <optgroup label="Video Editing Specializations">
                <option value="SHORT-FORM & VIRAL REELS">Short-Form &amp; Viral Reels (1 Mo + 1 Mo Int)</option>
                <option value="CINEMATIC COLOR & AUDIO">Cinematic Color &amp; Audio (1 Mo + 1 Mo Int)</option>
                <option value="AFTER EFFECTS & MOTION GRAPHICS">After Effects &amp; Motion Graphics (1 Mo + 1 Mo Int)</option>
                <option value="AI VIDEO GENERATION">AI Video Generation &amp; Workflows (1 Mo + 1 Mo Int)</option>
              </optgroup>
              <optgroup label="Office Administration Specializations">
                <option value="Administrative Skills">Administrative Skills (3 Mo + 1 Mo Int)</option>
                <option value="Communication & Interpersonal Skills">Communication &amp; Interpersonal Skills (1 Mo + 1 Mo Int)</option>
                <option value="Office Technology & Tools">Office Technology &amp; Tools (3 Mo + 1 Mo Int)</option>
                <option value="Organizational & Time Management">Organizational &amp; Time Management (1 Mo + 1 Mo Int)</option>
              </optgroup>
              <option value="Undecided">Undecided</option>
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
