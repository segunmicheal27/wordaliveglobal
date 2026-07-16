'use client';
import { useState, useEffect } from 'react';
import './TopBar.css';

export default function TopBar() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Target date for Kingdom Protege Kamp 2.0 or next major event
    const targetDate = new Date('2026-08-15T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Prevent hydration mismatch by not rendering the countdown until client side
  if (!mounted) return null;

  return (
    <div className="top-bar">
      <div className="container top-bar-container">
        <div className="top-bar-event">
          <span className="event-label">UPCOMING EVENT (KPK 2.0):</span>
          <div className="countdown">
            <div className="countdown-item"><strong>{timeLeft.days}</strong> <span>DAYS</span></div>
            <div className="countdown-item"><strong>{timeLeft.hours}</strong> <span>HOURS</span></div>
            <div className="countdown-item"><strong>{timeLeft.minutes}</strong> <span>MINUTES</span></div>
            <div className="countdown-item"><strong>{timeLeft.seconds}</strong> <span>SECONDS</span></div>
          </div>
        </div>
        
        <div className="top-bar-contact">
          <a href="mailto:wordalivemetanoia@gmail.com" className="contact-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            wordalivemetanoia@gmail.com
          </a>
          <span className="divider">|</span>
          <a href="tel:+2348135555643" className="contact-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            +234 813 555 5643
          </a>
        </div>
      </div>
    </div>
  );
}
