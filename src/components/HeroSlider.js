'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import './HeroSlider.css';

export default function HeroSlider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `linear-gradient(rgba(80, 0, 60, 0.72), rgba(40, 0, 30, 0.88)), url(${slide.image})`
          }}
        >
          <div className="slide-inner">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <div className="slide-buttons">
              <Link href={slide.primaryLink} className="btn btn-accent">{slide.primaryText}</Link>
              <Link href={slide.secondaryLink} className="btn-outline-white">{slide.secondaryText}</Link>
            </div>
          </div>
        </div>
      ))}

      {/* Creative vertical rail on right side */}
      <div className="slider-rail">
        <div className="rail-track">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`rail-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <span className="slide-count">{String(currentSlide + 1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}</span>
      </div>
    </section>
  );
}
