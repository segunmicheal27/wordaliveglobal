import Link from 'next/link';
import '../about/about.css';
import './events.css';

export const metadata = {
  title: 'Events | Word Alive Global',
  description: 'Services, monthly gatherings, quarterly programs, and annual conferences at Word Alive Global.',
};

const weeklyEvents = [
  { time: 'Every Sunday at 8:00 AM', title: 'Banquet Service', desc: 'Join us every Sunday morning for a powerful time of corporate worship, communion, and transformation by the Word.', icon: '⛪' },
  { time: 'Every Monday at 5:00 PM', title: 'Covenant Hour of Prayer', desc: 'Starting our week with prayer and seeking God’s covenant protection and guidance in deep intercession.', icon: '🙏' },
  { time: 'Every Thursday at 4:30 PM', title: 'Global Communion Service', desc: 'Midweek fellowship, teaching of the Word, and partaking in the Holy Communion as a global family.', icon: '🍷' },
];

const monthlyEvents = [
  { time: 'Every Last Friday of the Month', title: 'Night of Breakthroughs (PENIEL VIGIL)', desc: 'An intense night of prayer, miracles, prophetic declarations, and breakthroughs. Come expecting a shift.', icon: '🔥' },
];

const quarterlyEvents = [
  { title: 'Prayer Stretches', desc: 'Extended hours of deep communion, waiting on the Lord, and intercession to build spiritual capacity.', icon: '⚡' },
  { title: 'Atmosphere for Miracles', desc: 'A special healing, deliverance, and miracle service manifesting the supernatural power of God.', icon: '✨' },
];

const annualEvents = [
  { title: 'Kingdom Protege Kamp', date: 'August 15th – 22nd', desc: 'Our annual youth and ministry camp. A week of intense transformation, spiritual training, fire, and fun.', img: '/assets/kamp.jpg' },
  { title: 'Nation Building Conference', date: 'October 1st', desc: 'Raising patriotic and visionary leaders equipped to transform society and represent the Kingdom in all spheres.', img: '/assets/707855464_1313629480917043_9147593798181824774_n.jpg' },
  { title: 'Tech Conference', date: 'May', desc: 'Empowering believers with digital skills, tech insights, and leveraging technology for Kingdom advancement.', img: '/assets/monthly-banner.jpg' },
  { title: 'Business Conference', date: 'June', desc: 'An gathering of entrepreneurs, business leaders, and professionals for strategic insights, networking, and kingdom economics.', img: '/assets/rehobooth.jpg' },
  { title: 'Leadership Conference', date: 'September', desc: 'Strategic capacity building and alignment for church leaders, administrators, and workers.', img: '/assets/670541115_1280138174266174_3753528668510688752_n.jpg' },
  { title: 'Men\'s Conference', date: 'October', desc: 'Empowering, refining, and building men of character, strength, and spiritual authority.', img: '/assets/651705909_1256185556661436_8531847398341812333_n.jpg' },
  { title: 'Womb Conference', date: 'November', desc: 'A strategic conference dedicated to women, celebrating motherhood, family values, and spiritual birthing.', img: '/assets/736562004_1344367244509933_2815077491901948907_n.jpg' },
  { title: 'Refiner\'s Fire (Ministers Conference)', date: 'January', desc: 'Spiritual recharging, alignment, and impartation for ministers, pastors, and church workers.', img: '/assets/726607061_1334844855462172_8114849771933402103_n.jpg' },
  { title: 'Love and Respect (Love Revolution)', date: 'February', desc: 'Focusing on godly relationships, marriage, family building, and sharing Christ’s pure love.', img: '/assets/welcome-church.jpg' },
  { title: 'Resurrection Crusade', date: 'April', desc: 'Easter soul-winning outreach declaring the victory, power, and glory of our risen Lord.', img: '/assets/welcome-to-church.jpg' },
  { title: 'Theatre at its Peak', date: 'December', desc: 'Celebrating Christ and the Christmas season through creative arts, drama, dance, and music.', img: '/assets/726539804_1334844778795513_7561319165988493005_n.jpg' },
  { title: 'Love Outreach', date: 'December', desc: 'Putting love into action by reaching out to the less privileged and sharing gifts during the festive season.', img: '/assets/725120586_1334595455487112_7648685730344785660_n.jpg' },
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

      {/* Weekly Services */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '50px' }}>
            <h2>Weekly Services</h2>
            <p>Join us in fellowship throughout the week.</p>
          </div>
          <div className="services-grid">
            {weeklyEvents.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div className="service-badge">{s.time}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly & Quarterly Events */}
      <section className="section-padding" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '50px' }}>
            <h2>Monthly & Quarterly Events</h2>
            <p>Special services focused on breakthroughs, growth, and supernatural manifestations.</p>
          </div>
          <div className="services-grid" style={{ marginBottom: '40px' }}>
            {monthlyEvents.map((s, i) => (
              <div key={i} className="service-card highlight-card" style={{ background: 'var(--color-primary)', color: '#fff' }}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-badge" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>{s.time}</div>
                <h3 style={{ color: '#fff' }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.88)' }}>{s.desc}</p>
              </div>
            ))}
            {quarterlyEvents.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div className="service-badge">Quarterly Program</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '50px' }}>
            <h2>Annual Conferences & Outreaches</h2>
            <p>Our major yearly gatherings dedicated to leadership, tech, business, and crusade.</p>
          </div>
          <div className="events-grid">
            {annualEvents.map((ev, i) => (
              <div key={i} className="event-card">
                <div className="event-img">
                  <img src={ev.img} alt={ev.title} />
                  <div className="event-date-badge">{ev.date}</div>
                </div>
                <div className="event-body">
                  <h3>{ev.title}</h3>
                  <p>{ev.desc}</p>
                  <Link href="/contact" className="btn btn-accent" style={{ marginTop: '16px' }}>Enquire / Register</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="location-section section-padding" style={{ background: '#fff' }}>
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
