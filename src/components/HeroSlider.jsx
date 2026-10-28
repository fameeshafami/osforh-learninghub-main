import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '../data/siteData.jsx';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    resetTimer();
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    resetTimer();
  };

  const handleDotClick = (index) => {
    setCurrent(index);
    resetTimer();
  };

  return (
    <header className="hero" id="hero">
      {HERO_SLIDES.map((slide, i) => {
        const isCurrent = i === current;
        return (
          <div
            key={i}
            className={`sl ${isCurrent ? 'on' : ''}`}
            style={{ '--s1': slide.accent }}
          >
            <i className="gl"></i>

            {/* Rising particle effects */}
            {[...Array(7)].map((_, k) => (
              <i
                key={k}
                className="pt"
                style={{
                  width: `${4 + (k % 3) * 2}px`,
                  height: `${4 + (k % 3) * 2}px`,
                  left: `${8 + k * 13}%`,
                  bottom: `${10 + k * 9}%`,
                  '--d': `${8 + k * 1.5}s`,
                  animationDelay: `-${k * 1.3}s`
                }}
              ></i>
            ))}

            <div className="wrap">
              {/* Right side: image or orbit + pills */}
              {slide.img ? (
                <div className="hero-img">
                  <img src={slide.img} alt="" />
                </div>
              ) : (
                <>
                  <i className="orbit"><i></i></i>
                  {slide.tags && slide.tags.map((tag, k) => (
                    <span
                      key={k}
                      className="ft"
                      style={{
                        top: `${26 + k * 20}%`,
                        right: `${4 + (k % 2) * 9}%`,
                        '--d': `${5 + k}s`,
                        animationDelay: `-${k * 1.7}s`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </>
              )}

              <div className="in">
                {slide.badge && <div className="eb">{slide.badge}</div>}

                {slide.isH1 ? (
                  <h1>{slide.headline}</h1>
                ) : (
                  <h2 className="t">{slide.headline}</h2>
                )}

                <p>{slide.description}</p>

                <div className="ac">
                  <Link className="btn" to={slide.primaryBtn.link}>
                    {slide.primaryBtn.text} →
                  </Link>
                  <Link className="btn o" to={slide.secondaryBtn.link}>
                    {slide.secondaryBtn.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button className="arr ar-p" onClick={handlePrev} aria-label="Previous Slide">
        ‹
      </button>
      <button className="arr ar-n" onClick={handleNext} aria-label="Next Slide">
        ›
      </button>

      {/* Pagination Dots */}
      <div className="dts" id="dts">
        {HERO_SLIDES.map((_, i) => (
          <i
            key={i}
            className={i === current ? 'on' : ''}
            onClick={() => handleDotClick(i)}
            role="button"
            tabIndex={0}
            aria-label={`Go to slide ${i + 1}`}
          ></i>
        ))}
      </div>
    </header>
  );
}
