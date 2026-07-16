import Link from 'next/link';
import '../about/about.css';
import './giving.css';

export const metadata = {
  title: 'Fundraising | Word Alive Global',
  description: 'Support the special projects and building initiatives of Word Alive Global.',
};

const projects = [
  { title: 'Church Building Project', goal: '₦50,000,000', raised: 35, desc: 'We are building a permanent worship centre in Jos to accommodate our growing congregation and community programs.', img: '/assets/651705909_1256185556661436_8531847398341812333_n.jpg' },
  { title: 'Outreach & Missions', goal: '₦10,000,000', raised: 60, desc: 'Funding regular community outreaches, feeding programs, and missionary trips across Plateau State and beyond.', img: '/assets/736562004_1344367244509933_2815077491901948907_n.jpg' },
  { title: 'Media & Technology', goal: '₦5,000,000', raised: 72, desc: 'Upgrading our recording, live-streaming and social media capacity so we can reach more souls online.', img: '/assets/monthly-banner.jpg' },
];

export default function Fundraising() {
  return (
    <div>
      <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(80,0,60,0.78), rgba(40,0,30,0.88)), url(/assets/651705909_1256185556661436_8531847398341812333_n.jpg)' }}>
        <div className="container">
          <h1>Fundraising</h1>
          <p>Together, we can build something greater for God's Kingdom.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '50px' }}>
            <h2>Active Projects</h2>
            <p>Every contribution — big or small — moves us closer to our goal.</p>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <div className="project-img">
                  <img src={p.img} alt={p.title} />
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: `${p.raised}%` }} />
                  </div>
                  <div className="project-meta">
                    <span>{p.raised}% raised</span>
                    <span>Goal: {p.goal}</span>
                  </div>
                  <Link href="/contact" className="btn btn-accent" style={{ marginTop: '18px', display: 'inline-block' }}>Contribute Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="join-cta" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))', padding: '80px 0' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff' }}>Your Gift Matters</h2>
          <p style={{ color: 'rgba(255,255,255,0.88)', maxWidth: '560px', margin: '0 auto 28px', fontSize: '1.1rem' }}>To sow into any of these projects, contact us directly and we will provide bank details for the specific project you'd like to support.</p>
          <Link href="/contact" className="btn btn-accent">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
