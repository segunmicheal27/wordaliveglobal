'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import './Navbar.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/sermons', label: 'Sermons' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/fundraising', label: 'Fundraising' },
  { href: '/partnership', label: 'Partnership' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled || !isHome ? 'scrolled solid' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-links desktop-nav">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? 'active' : ''}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions desktop-nav">
          <Link href="/tithe" className="btn btn-accent">Pay Tithe</Link>
        </div>

        {/* Hamburger Button */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`mobile-nav-link ${pathname === href ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link href="/tithe" className="btn btn-accent mobile-tithe-btn" onClick={() => setMenuOpen(false)}>
            Pay Tithe
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  );
}
