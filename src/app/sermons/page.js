import Link from 'next/link';
import '../about/about.css';
import './sermons.css';

export const metadata = {
  title: 'Sermons | Word Alive Global',
  description: 'Watch and listen to inspiring messages and sermons from Word Alive Global.',
};

const sermons = [
  { title: 'The Power of Koinonia', speaker: 'Word Alive Global', date: 'July 13, 2026', url: 'https://www.facebook.com/reel/1395370765775180', img: '/assets/monthly-banner.jpg' },
  { title: 'Raising the Banner', speaker: 'Word Alive Global', date: 'July 6, 2026', url: 'https://www.facebook.com/reel/1240919769110506', img: '/assets/707855464_1313629480917043_9147593798181824774_n.jpg' },
  { title: 'Sphere of Influence', speaker: 'Word Alive Global', date: 'June 29, 2026', url: 'https://www.facebook.com/reel/1661863704888683', img: '/assets/726539804_1334844778795513_7561319165988493005_n.jpg' },
  { title: 'Fire of God', speaker: 'Word Alive Global', date: 'June 22, 2026', url: 'https://www.facebook.com/reel/4655817228020811', img: '/assets/693110577_1300620235551301_4514687064432534844_n.jpg' },
  { title: 'Rehoboth — Room for Us', speaker: 'Word Alive Global', date: 'June 15, 2026', url: 'https://www.facebook.com/reel/1655187442215167', img: '/assets/rehobooth.jpg' },
  { title: 'Living in the Overflow', speaker: 'Word Alive Global', date: 'June 1, 2026', url: 'https://www.facebook.com/thespiritfamily7/videos/2166533907462645', img: '/assets/kamp.jpg' },
];

export default function Sermons() {
  return (
    <div className="sermons-page">
      <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(80,0,60,0.78), rgba(40,0,30,0.88)), url(/assets/726607061_1334844855462172_8114849771933402103_n.jpg)' }}>
        <div className="container">
          <h1>Sermons & Messages</h1>
          <p>Let the Word of God transform your life.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '50px' }}>
            <h2>Latest Messages</h2>
            <p>Catch up on our recent sermons. Watch, listen and be blessed.</p>
          </div>
          <div className="sermons-grid">
            {sermons.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="sermon-card">
                <div className="sermon-thumb">
                  <img src={s.img} alt={s.title} />
                  <div className="play-btn">▶</div>
                </div>
                <div className="sermon-body">
                  <span className="sermon-date">{s.date}</span>
                  <h3>{s.title}</h3>
                  <p>{s.speaker}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Video Cards — replaces blocked iframes */}
      <section className="section-padding" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '50px' }}>
            <h2>Watch Our Messages</h2>
            <p>Click any card below to watch the full message on Facebook.</p>
          </div>
          <div className="video-cards-grid">
            {sermons.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="video-card">
                <div className="video-card-thumb">
                  <img src={s.img} alt={s.title} />
                  <div className="video-card-overlay">
                    <div className="video-play-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <span className="watch-label">Watch on Facebook</span>
                  </div>
                </div>
                <div className="video-card-info">
                  <span className="sermon-date">{s.date}</span>
                  <h3>{s.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="join-cta" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))', padding: '80px 0' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff' }}>Attend Live</h2>
          <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 28px' }}>Experience the Word in person. Join us every Sunday at 9:00 AM in Jos.</p>
          <Link href="/events" className="btn btn-accent">View Service Times</Link>
        </div>
      </section>
    </div>
  );
}
