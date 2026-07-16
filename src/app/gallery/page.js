import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import GalleryGrid from './GalleryGrid';
import '../about/about.css';
import './gallery.css';

export const metadata = {
  title: 'Gallery | Word Alive Global',
  description: 'Moments from our services, events, and community life at Word Alive Global.',
};

export default function Gallery() {
  // Read images directly from the public/assets directory at build time
  const assetsDir = path.join(process.cwd(), 'public', 'assets');
  let images = [];
  
  try {
    const files = fs.readdirSync(assetsDir);
    // Filter for image files
    images = files
      .filter(file => file.match(/\.(jpg|jpeg|png|gif)$/i))
      .map(file => `/assets/${file}`);
  } catch (error) {
    console.error("Error reading assets directory:", error);
  }

  return (
    <div>
      <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(80,0,60,0.78), rgba(40,0,30,0.88)), url(/assets/651705909_1256185556661436_8531847398341812333_n.jpg)' }}>
        <div className="container">
          <h1>Photo Gallery</h1>
          <p>Moments of faith, fellowship, and family at Word Alive Global.</p>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#F9FAFB', paddingTop: '60px' }}>
        <div className="container">
          <GalleryGrid images={images} />
        </div>
      </section>

      <section className="join-cta" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))', padding: '80px 0' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff' }}>Be Part of the Family</h2>
          <p style={{ color: 'rgba(255,255,255,0.88)', maxWidth: '560px', margin: '0 auto 28px', fontSize: '1.1rem' }}>Come experience these moments with us live. We would love to welcome you this Sunday.</p>
          <Link href="/events" className="btn btn-accent">View Service Times</Link>
        </div>
      </section>
    </div>
  );
}
