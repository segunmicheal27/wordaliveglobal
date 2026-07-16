import './home.css';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import VideoGrid from '@/components/VideoGrid';

const slides = [
  {
    image: '/assets/monthly-banner.jpg',
    title: 'Welcome to 2026',
    subtitle: 'Our Year of KOINONIA.',
    primaryText: 'Discover Our Vision',
    primaryLink: '/about',
    secondaryText: 'Join Service',
    secondaryLink: '/events'
  },
  {
    image: '/assets/welcome-church.jpg',
    title: 'Revealing Jesus Christ',
    subtitle: 'Raising the banner of Jesus on every Sphere of Influence.',
    primaryText: 'Watch Sermons',
    primaryLink: '/sermons',
    secondaryText: 'About Us',
    secondaryLink: '/about'
  },
  {
    image: '/assets/kamp.jpg',
    title: 'A Family of Faith',
    subtitle: 'Join a vibrant community dedicated to living out the teachings of Jesus.',
    primaryText: 'Get Connected',
    primaryLink: '/contact',
    secondaryText: 'Upcoming Events',
    secondaryLink: '/events'
  },
  {
    image: '/assets/rehobooth.jpg',
    title: 'Worship Experience',
    subtitle: 'Encounter God through powerful worship and transformative messages.',
    primaryText: 'Join Service',
    primaryLink: '/events',
    secondaryText: 'Latest Sermon',
    secondaryLink: '/sermons'
  },
  {
    image: '/assets/726539804_1334844778795513_7561319165988493005_n.jpg',
    title: 'Partner With Us',
    subtitle: 'Your generosity helps us continue our mission across the globe.',
    primaryText: 'Become a Partner',
    primaryLink: '/partnership',
    secondaryText: 'Pay Tithe',
    secondaryLink: '/tithe'
  }
];

export default function Home() {
  return (
    <div className="home-page">
      <HeroSlider slides={slides} />

      {/* Welcome Section */}
      <section className="welcome-section section-padding">
        <div className="container welcome-grid">
          <div className="welcome-text">
            <h2 className="text-accent">Welcome to Word Alive Global</h2>
            <h3>A Family of Faith in Jos</h3>
            <p>We are a vibrant, diverse community dedicated to living out the teachings of Jesus Christ. Whether you are seeking answers, looking for a place to belong, or desiring to deepen your faith, you have a home here.</p>
            <Link href="/about" className="btn btn-primary" style={{ marginTop: '20px' }}>Learn More</Link>
          </div>
          <div className="welcome-image glass-panel">
            <img src="/assets/welcome-church.jpg" alt="Welcome to Word Alive Global" />
          </div>
        </div>
      </section>

      {/* Upcoming Events / Sermons */}
      <section className="events-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Upcoming Events & Sermons</h2>
            <p>Join us as we grow together in spirit and truth.</p>
          </div>
          
          <div className="grid">
            {/* Event Card 1 */}
            <div className="card glass-panel">
              <div className="card-tag">Sunday Service</div>
              <h3>Worship Experience</h3>
              <p>Every Sunday at 9:00 AM. Join us for a powerful time of worship and the Word.</p>
              <Link href="/events" className="card-link">View Details &rarr;</Link>
            </div>
            
            {/* Event Card 2 */}
            <div className="card glass-panel">
              <div className="card-tag">Midweek</div>
              <h3>Bible Study</h3>
              <p>Wednesdays at 5:30 PM. Dive deep into the scriptures and discover life-changing truths.</p>
              <Link href="/events" className="card-link">View Details &rarr;</Link>
            </div>
            
            {/* Sermon Card */}
            <div className="card glass-panel highlight-card">
              <div className="card-tag tag-accent">Latest Sermon</div>
              <h3>The Power of Influence</h3>
              <p>Catch up on our latest message series on raising the banner of Jesus.</p>
              <Link href="/sermons" className="card-link">Watch Now &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <VideoGrid />

      {/* Call to Action (Giving & Partnership) */}
      <section className="cta-section">
        <div className="container text-center animate-fade-in">
          <h2>Support Our Ministry</h2>
          <p>Whether you're paying your tithe, contributing to our fundraising projects, or partnering with our vision, your generosity makes an eternal impact.</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
            <Link href="/tithe" className="btn btn-accent" style={{ padding: '15px 40px', fontSize: '1.2rem' }}>Pay Tithe</Link>
            <Link href="/fundraising" className="btn btn-primary glass-panel" style={{ padding: '15px 40px', fontSize: '1.2rem' }}>Fundraising</Link>
            <Link href="/partnership" className="btn btn-primary glass-panel" style={{ padding: '15px 40px', fontSize: '1.2rem' }}>Partnership</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
