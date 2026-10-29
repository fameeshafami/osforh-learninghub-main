import React, { useState, useEffect } from 'react';
import videoFrameImg from '../img/videoframe_1341.png';
import './VideoEditingStudioShowcase.css';

export default function VideoEditingStudioShowcase({ accent = '#006738' }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [colorGrade, setColorGrade] = useState('cinematic'); // 'neutral' | 'cinematic'
  const [timecode, setTimecode] = useState('00:01:24:18');

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      const frames = Math.floor(Math.random() * 60).toString().padStart(2, '0');
      const secs = (20 + Math.floor(Math.random() * 10)).toString().padStart(2, '0');
      setTimecode(`00:01:${secs}:${frames}`);
    }, 120);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="ves-root" style={{ '--accent-color': accent }}>
      {/* Top Console Bar */}
      <div className="ves-console-header">
        <div className="ves-badge-row">
          <span className="ves-live-tag">
            <span className={`ves-rec-dot ${isPlaying ? 'blinking' : ''}`}></span>
            {isPlaying ? 'PLAYING' : 'PAUSED'}
          </span>
          <span className="ves-res-pill">4K UHD • 60 FPS</span>
          <span className="ves-ai-pill">⚡ AI INTEGRATED</span>
        </div>

        <div className="ves-controls-row">
          <button
            type="button"
            className={`ves-btn-lut ${colorGrade === 'cinematic' ? 'active' : ''}`}
            onClick={() => setColorGrade(colorGrade === 'cinematic' ? 'neutral' : 'cinematic')}
            title="Toggle Cinematic Film LUT Color Grade"
          >
            🎨 {colorGrade === 'cinematic' ? 'Film LUT: On' : 'Film LUT: Off'}
          </button>
          <button
            type="button"
            className="ves-btn-play"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? '⏸ Pause' : '▶ Play Studio'}
          </button>
        </div>
      </div>

      {/* Main Studio Frame */}
      <div className="ves-studio-box">
        {/* Monitor Screen Area */}
        <div className={`ves-monitor-screen grade-${colorGrade}`}>
          <img src={videoFrameImg} alt="Video Editing Studio Preview" className="ves-monitor-img" />
          
          <div className="ves-monitor-overlay">
            {/* Viewfinder Reticle */}
            <div className="ves-viewfinder-corners">
              <span className="corner tl"></span>
              <span className="corner tr"></span>
              <span className="corner bl"></span>
              <span className="corner br"></span>
            </div>

            {/* Top Screen Info */}
            <div className="ves-monitor-info-top">
              <span className="ves-osforh-cam">OSFORH_STUDIO_CAM_A</span>
              <span className="ves-timecode">{timecode}</span>
            </div>

            {/* Audio Waveform Meter */}
            <div className="ves-audio-meter">
              <span className="ves-meter-label">CH 1/2</span>
              <div className="ves-meter-bars">
                {[...Array(12)].map((_, i) => (
                  <span
                    key={i}
                    className={`ves-vu-bar ${isPlaying ? 'active' : ''}`}
                    style={{ animationDelay: `${i * 0.08}s` }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* NLE Multi-Track Timeline */}
        <div className="ves-timeline">
          {/* Timeline Header & Time Marks */}
          <div className="ves-timeline-ruler">
            <span>00:00</span>
            <span>00:15</span>
            <span>00:30</span>
            <span>00:45</span>
            <span>01:00</span>
            <span>01:15</span>
            <span>01:30</span>
          </div>

          {/* Animated Playhead Needle */}
          <div className={`ves-playhead ${isPlaying ? 'running' : 'paused'}`}>
            <span className="ves-playhead-head"></span>
            <span className="ves-playhead-line"></span>
          </div>

          {/* Tracks */}
          <div className="ves-tracks-stack">
            {/* Video Track 2: AI & VFX */}
            <div className="ves-track-row v2">
              <span className="ves-track-label">V2 (AI &amp; VFX)</span>
              <div className="ves-track-lane">
                <div className="ves-clip clip-ai">
                  <span className="clip-icon">🤖</span>
                  <span className="clip-title">AI Video Synthesis</span>
                </div>
                <div className="ves-clip clip-vfx">
                  <span className="clip-icon">✨</span>
                  <span className="clip-title">After Effects Motion</span>
                </div>
              </div>
            </div>

            {/* Video Track 1: Primary Edit */}
            <div className="ves-track-row v1">
              <span className="ves-track-label">V1 (Main Video)</span>
              <div className="ves-track-lane">
                <div className="ves-clip clip-premiere">
                  <span className="clip-icon">🎬</span>
                  <span className="clip-title">Premiere Pro 4K Cut</span>
                </div>
                <div className="ves-clip clip-davinci">
                  <span className="clip-icon">🎨</span>
                  <span className="clip-title">DaVinci Color Grade</span>
                </div>
                <div className="ves-clip clip-capcut">
                  <span className="clip-icon">📱</span>
                  <span className="clip-title">CapCut Viral Hook</span>
                </div>
              </div>
            </div>

            {/* Audio Track 1: Foley & Sound Design */}
            <div className="ves-track-row a1">
              <span className="ves-track-label">A1 (Master Audio)</span>
              <div className="ves-track-lane">
                <div className="ves-clip clip-audio">
                  <span className="clip-icon">🎵</span>
                  <span className="clip-title">Foley Sound Design • Voice EQ &amp; Limiter (48kHz 24-bit)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Supported Footer Pills */}
        <div className="ves-tools-footer">
          <span className="ves-chip premiere">Premier Pro</span>
          <span className="ves-chip aftereffects">After Effect</span>
          <span className="ves-chip capcut">Capcut</span>
          <span className="ves-chip davinci">Davinci</span>
          <span className="ves-chip ai">AI generation</span>
        </div>
      </div>
    </div>
  );
}
