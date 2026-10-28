import React, { useState } from 'react';
import './WebDevShowcase.css';

export default function WebDevShowcase({ accent = '#006738' }) {
  const [activeDevice, setActiveDevice] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [testingSpeed, setTestingSpeed] = useState(false);
  const [speedTested, setSpeedTested] = useState(false);

  const runSpeedAudit = () => {
    setTestingSpeed(true);
    setSpeedTested(false);
    setTimeout(() => {
      setTestingSpeed(false);
      setSpeedTested(true);
    }, 900);
  };

  return (
    <div className="wds-root" style={{ '--accent-color': accent }}>
      {/* Top Device Switcher Controls */}
      <div className="wds-control-bar" role="tablist" aria-label="Select screen device view">
        <button
          type="button"
          role="tab"
          aria-selected={activeDevice === 'desktop'}
          className={`wds-device-btn ${activeDevice === 'desktop' ? 'active' : ''}`}
          onClick={() => setActiveDevice('desktop')}
        >
          <span className="wds-btn-icon">🖥️</span>
          <span className="wds-btn-text">Desktop View</span>
          <span className="wds-btn-badge">1200px</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeDevice === 'tablet'}
          className={`wds-device-btn ${activeDevice === 'tablet' ? 'active' : ''}`}
          onClick={() => setActiveDevice('tablet')}
        >
          <span className="wds-btn-icon">💻</span>
          <span className="wds-btn-text">Tablet View</span>
          <span className="wds-btn-badge">768px</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeDevice === 'mobile'}
          className={`wds-device-btn ${activeDevice === 'mobile' ? 'active' : ''}`}
          onClick={() => setActiveDevice('mobile')}
        >
          <span className="wds-btn-icon">📱</span>
          <span className="wds-btn-text">Mobile View</span>
          <span className="wds-btn-badge">375px</span>
        </button>
      </div>

      {/* Device Viewport Canvas */}
      <div className={`wds-stage-viewport device-${activeDevice}`}>
        <div className="wds-chassis">
          {/* Top Notch for Mobile */}
          {activeDevice === 'mobile' && (
            <div className="wds-mobile-notch">
              <span className="wds-camera-lens"></span>
              <span className="wds-speaker-grille"></span>
            </div>
          )}

          {/* Browser / Device Titlebar */}
          <div className="wds-titlebar">
            <div className="wds-window-dots" aria-hidden="true">
              <span className="dot dot-close"></span>
              <span className="dot dot-min"></span>
              <span className="dot dot-expand"></span>
            </div>

            <div className="wds-address-bar">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span className="wds-url">https://osforh.edu/web-dev</span>
            </div>

            <div className="wds-screen-pill">
              <span className="wds-pulse-dot"></span>
              <span>{activeDevice === 'desktop' ? '1200px' : activeDevice === 'tablet' ? '768px' : '375px'}</span>
            </div>
          </div>

          {/* Internal Browser Screen */}
          <div className="wds-screen-content">
            {/* Top Identity & Mode Ribbon */}
            <div className="wds-brand-ribbon">
              <div className="wds-code-identity">
                <code>&lt;OsforhDev /&gt;</code>
              </div>
              <div className="wds-mode-indicator">
                <span className="wds-mode-label">
                  {activeDevice === 'desktop' && 'DESKTOP MODE'}
                  {activeDevice === 'tablet' && 'TABLET MODE'}
                  {activeDevice === 'mobile' && 'MOBILE MODE'}
                </span>
              </div>
            </div>

            {/* Core Hero Heading */}
            <div className="wds-hero-block">
              <h3 className="wds-headline">
                Fast, Accessible &amp; Responsive Web Experiences
              </h3>
              <p className="wds-subheadline">
                Built with HTML5 Semantic Architecture, CSS Grid &amp; Modern JavaScript
              </p>
            </div>

            {/* Performance & Quality Badges */}
            <div className="wds-metrics-bar">
              <div className="wds-metric-pill speed">
                <span className="wds-icon">⚡</span>
                <span className="wds-label">100% PageSpeed</span>
              </div>
              <div className="wds-metric-pill mobile">
                <span className="wds-icon">📱</span>
                <span className="wds-label">Mobile-First</span>
              </div>
              <div className="wds-metric-pill cms">
                <span className="wds-icon">🛡️</span>
                <span className="wds-label">Secure CMS</span>
              </div>
            </div>

            {/* Adaptive Live Layout Demonstration */}
            <div className={`wds-wireframe-grid cols-${activeDevice}`}>
              <div className="wds-card-box">
                <div className="wds-card-tags">
                  <span className="wds-tag">HTML5</span>
                  <span className="wds-tag">CSS Grid</span>
                </div>
                <div className="wds-card-heading">Semantic Layout</div>
                <div className="wds-wire-bar w-80"></div>
                <div className="wds-wire-bar w-60"></div>
              </div>

              <div className="wds-card-box">
                <div className="wds-card-tags">
                  <span className="wds-tag">ES6+</span>
                  <span className="wds-tag">React</span>
                </div>
                <div className="wds-card-heading">Dynamic UI</div>
                <div className="wds-wire-bar w-90"></div>
                <div className="wds-wire-bar w-50"></div>
              </div>

              {activeDevice !== 'mobile' && (
                <div className="wds-card-box">
                  <div className="wds-card-tags">
                    <span className="wds-tag">WordPress</span>
                    <span className="wds-tag">Speed</span>
                  </div>
                  <div className="wds-card-heading">Scalable CMS</div>
                  <div className="wds-wire-bar w-70"></div>
                  <div className="wds-wire-bar w-50"></div>
                </div>
              )}
            </div>

            {/* Speed Audit Interactive Tool */}
            <div className="wds-audit-box">
              <div className="wds-audit-info">
                <span className="wds-audit-title">Google Lighthouse Audit:</span>
                {testingSpeed ? (
                  <span className="wds-audit-testing">Calculating Core Web Vitals...</span>
                ) : speedTested ? (
                  <span className="wds-audit-passed">
                    <strong>100 / 100</strong> • LCP: 0.7s • FID: 8ms • CLS: 0
                  </span>
                ) : (
                  <span className="wds-audit-ready">Production Score: 100/100</span>
                )}
              </div>
              <button
                type="button"
                className="wds-test-btn"
                disabled={testingSpeed}
                onClick={runSpeedAudit}
              >
                {testingSpeed ? 'Testing...' : 'Audit Speed ⚡'}
              </button>
            </div>

            {/* Bottom Status Terminal Bar */}
            <div className="wds-footer-bar">
              <div className="wds-code-snippet">
                <span>&lt;body class=&quot;responsive-ready&quot;&gt;</span>
              </div>
              <div className="wds-server-status">
                <span className="wds-status-dot"></span>
                <span>HTTP 200 OK</span>
              </div>
            </div>
          </div>

          {/* Bottom Home Indicator for Mobile */}
          {activeDevice === 'mobile' && (
            <div className="wds-mobile-homebar" aria-hidden="true"></div>
          )}
        </div>
      </div>
    </div>
  );
}

