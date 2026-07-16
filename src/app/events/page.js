import Link from 'next/link';
import '../about/about.css';
import './events.css';

export const metadata = {
  title: 'Events | Word Alive Global',
  description: 'Upcoming services, programs, and community events at Word Alive Global in Jos.',
};

const regularServices = [
  { day: 'Sunday', time: '9:00 AM', title: 'Sunday Worship Service', desc: 'Join us every Sunday for a powerful time of praise, worship and the Word of God.', icon: '⛪' },
  { day: 'Wednesday', time: '5:30 PM', title: 'Midweek Bible Study', desc: 'Dive deeper into the Scriptures every Wednesday. Come hungry for truth.', icon: '📖' },
  { day: 'Friday', time: '6:00 PM', title: 'Night Vigil / Prayer', desc: 'A time of corporate prayer, intercession and spiritual warfare every first Friday.', icon: '🙏' },
  { day: 'Saturday', time: '10:00 AM', title: 'Youth Fellowship', desc: 'A dedicated gathering for the young and young at heart to grow in faith together.', icon: '🔥' },
];

const upcomingEvents = [
  { title: 'Koinonia Sunday', date: 'July 20, 2026', desc: 'A special service celebrating our Year of Fellowship. Come with family and friends.', img: '/assets/monthly-banner.jpg' },
  { title: 'Monthly Rehoboth', date: 'July 27, 2026', desc: 'Our monthly special service — a night of breakthrough, miracles and testimonies.', img: '/assets/rehobooth.jpg' },
  { title: 'KAMP 2026', date: 'August 10–14, 2026', desc: 'Word Alive Global Annual Ministry Camp. Expect transformation, impartation and fire!', img: '/assets/kamp.jpg' },
];

export default function Events() {
  return (
    <div className="events-page">
      <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(80,0,60,0.78), rgba(40,0,30,0.88)), url(/assets/670541115_1280138174266174_3753528668510688752_n.jpg)' }}>
        <div className="container">
          <h1>Events & Services</h1>
          <p>Come as you are. Encounter God with us.</p>
        </div>
      </section>

      {/* Regular Services */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '50px' }}>
            <h2>Regular Services</h2>
            <p>Our doors are always open. Come worship with us!</p>
          </div>
          <div className="services-grid">
            {regularServices.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div className="service-badge">{s.day} · {s.time}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '50px' }}>
            <h2>Upcoming Programs</h2>
            <p>Mark your calendar and come prepared to experience God.</p>
          </div>
          <div className="events-grid">
            {upcomingEvents.map((ev, i) => (
              <div key={i} className="event-card">
                <div className="event-img">
                  <img src={ev.img} alt={ev.title} />
                  <div className="event-date-badge">{ev.date}</div>
                </div>
                <div className="event-body">
                  <h3>{ev.title}</h3>
                  <p>{ev.desc}</p>
                  <Link href="/contact" className="btn btn-accent" style={{ marginTop: '16px' }}>Register / Enquire</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="location-section section-padding">
        <div className="container location-grid">
          <div className="location-text">
            <h2>Find Us in Jos</h2>
            <p>We are located in the heart of Jos, Plateau State, Nigeria. You are welcome to walk in any Sunday and be part of the Word Alive Global family.</p>
            <ul className="location-details">
              <li>📍 Kazizi Mall, Kwang Rayfield Road, Jos, Nigeria</li>
              <li>📞 <a href="tel:+2348135555643">+234 813 555 5643</a></li>
              <li>📧 <a href="mailto:wordalivemetanoia@gmail.com">wordalivemetanoia@gmail.com</a></li>
            </ul>
            <Link href="/contact" className="btn btn-accent" style={{ marginTop: '28px' }}>Get Directions</Link>
          </div>
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125694.4!2d8.8921!3d9.9285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105375bcf3783e4b%3A0xdc76ae012da23b81!2sJos%2C%20Plateau%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
