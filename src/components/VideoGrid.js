'use client';
import Link from 'next/link';
import './VideoGrid.css';

const videos = [
  {
    url: 'https://www.facebook.com/reel/1395370765775180',
    thumb: '/assets/monthly-banner.jpg',
    title: 'The Power of Koinonia',
    duration: 'Watch on Facebook',
  },
  {
    url: 'https://www.facebook.com/reel/1240919769110506',
    thumb: '/assets/707855464_1313629480917043_9147593798181824774_n.jpg',
    title: 'Raising the Banner',
    duration: 'Watch on Facebook',
  },
  {
    url: 'https://www.facebook.com/reel/1661863704888683',
    thumb: '/assets/726539804_1334844778795513_7561319165988493005_n.jpg',
    title: 'Sphere of Influence',
    duration: 'Watch on Facebook',
  },
  {
    url: 'https://www.facebook.com/reel/4655817228020811',
    thumb: '/assets/693110577_1300620235551301_4514687064432534844_n.jpg',
    title: 'Fire of God',
    duration: 'Watch on Facebook',
  },
  {
    url: 'https://www.facebook.com/reel/1655187442215167',
    thumb: '/assets/rehobooth.jpg',
    title: 'Rehoboth — Room for Us',
    duration: 'Watch on Facebook',
  },
  {
    url: 'https://www.facebook.com/thespiritfamily7/videos/2166533907462645',
    thumb: '/assets/kamp.jpg',
    title: 'Living in the Overflow',
    duration: 'Watch on Facebook',
  },
];

export default function VideoGrid() {
  return (
    <section className="video-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Latest Messages & Reels</h2>
          <p>Catch up on our recent highlights and powerful words — click any video to watch on Facebook.</p>
        </div>
        <div className="video-grid">
          {videos.map((v, i) => (
            <a
              key={i}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="video-card"
            >
              <div className="video-thumb">
                <img src={v.thumb} alt={v.title} />
                <div className="video-overlay">
                  <div className="play-circle">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="video-badge">📘 Facebook</div>
              </div>
              <div className="video-info">
                <h4>{v.title}</h4>
                <span>{v.duration}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: '40px' }}>
          <a
            href="https://www.facebook.com/thespiritfamily7/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View All on Facebook →
          </a>
        </div>
      </div>
    </section>
  );
}
