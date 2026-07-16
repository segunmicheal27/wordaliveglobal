import Link from 'next/link';
import './about.css';

export const metadata = {
  title: 'About Us | Word Alive Global',
  description: 'Learn about Word Alive Global, our vision, mission, and leadership in Jos, Nigeria.',
};

const leadership = [
  { name: 'The Lead Pastor', role: 'Senior Pastor', img: '/assets/707855464_1313629480917043_9147593798181824774_n.jpg' },
  { name: 'Ministry Team', role: 'Elders & Deacons', img: '/assets/693110577_1300620235551301_4514687064432534844_n.jpg' },
  { name: 'Worship Team', role: 'Music & Arts Ministry', img: '/assets/717810775_1324417619838229_7007602907179101897_n.jpg' },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(80,0,60,0.78), rgba(40,0,30,0.88)), url(/assets/726607061_1334844855462172_8114849771933402103_n.jpg)' }}>
        <div className="container">
          <h1>About Word Alive Global</h1>
          <p>A family of faith revealing Jesus Christ in Jos, Nigeria and beyond.</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-section section-padding">
        <div className="container vm-grid">
          <div className="vm-card">
            <div className="vm-icon">👁</div>
            <h3>Our Vision</h3>
            <p>To reveal Jesus Christ — raising the banner of Jesus on every Sphere of Influence: family, business, government, arts, education, media and religion.</p>
          </div>
          <div className="vm-card accent">
            <div className="vm-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To make disciples of all nations, equipping believers to carry the light of the Gospel into every sphere of their daily lives, transforming society from the inside out.</p>
          </div>
          <div className="vm-card">
            <div className="vm-icon">🕊</div>
            <h3>Our Values</h3>
            <p>Faith, Fellowship (Koinonia), Worship, Discipleship, and Service. We are committed to a lifestyle of prayer and a deep love for one another and for our city.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section section-padding" style={{ background: '#fff' }}>
        <div className="container story-grid">
          <div className="story-image">
            <img src="/assets/welcome%20to%20church.jpg" alt="Word Alive Global Church gathering" />
          </div>
          <div className="story-text">
            <h2><span className="text-accent">Our Story</span></h2>
            <h3>Born Out of a Burden for Jos</h3>
            <p>Word Alive Global is a vibrant, Spirit-filled church located in Jos, Plateau State, Nigeria. We were founded with a burning desire to see the city of Jos — and the world — transformed by the power of the Gospel of Jesus Christ.</p>
            <p style={{ marginTop: '16px' }}>From our very first gathering, we have been committed to authentic worship, deep biblical teaching, and a radical love for community. What began as a small group of believers has grown into a diverse, multigenerational family passionate about making Jesus known.</p>
            <p style={{ marginTop: '16px' }}>We believe 2026 is our Year of <strong>KOINONIA</strong> — deep, genuine fellowship and community — and we are pressing deeper into what it truly means to be the family of God.</p>
            <Link href="/contact" className="btn btn-accent" style={{ marginTop: '28px' }}>Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '50px' }}>
            <h2>Our Leadership</h2>
            <p>Servant leaders committed to shepherding the flock and advancing the Kingdom.</p>
          </div>
          <div className="grid">
            {leadership.map((l, i) => (
              <div key={i} className="leader-card">
                <div className="leader-img">
                  <img src={l.img} alt={l.name} />
                </div>
                <h3>{l.name}</h3>
                <p>{l.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="join-cta">
        <div className="container text-center">
          <h2>Come As You Are</h2>
          <p>No matter where you are on your spiritual journey, there is a place for you at Word Alive Global.</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '28px', flexWrap: 'wrap' }}>
            <Link href="/events" className="btn btn-accent">Join a Service</Link>
            <Link href="/contact" className="btn-outline-dark">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
