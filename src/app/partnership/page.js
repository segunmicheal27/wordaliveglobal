import Link from 'next/link';
import '../about/about.css';
import '../fundraising/giving.css';

export const metadata = {
  title: 'Partnership | Word Alive Global',
  description: 'Become a ministry partner with Word Alive Global and advance the Kingdom of God.',
};

const benefits = [
  { icon: '🙏', title: 'Prayer Coverage', desc: 'We commit to praying for all our partners by name every month.' },
  { icon: '📖', title: 'Partner Updates', desc: 'Receive regular newsletters and updates about the ministry and how your support is making an impact.' },
  { icon: '🎁', title: 'Partner Gifts', desc: 'As our way of blessing you, partners receive special gifts including CDs, books and devotionals.' },
  { icon: '📞', title: 'Pastoral Access', desc: 'Partners have direct access to leadership for prayer requests and personal correspondence.' },
  { icon: '✨', title: 'Special Events', desc: 'Exclusive invitations to partner appreciation dinners, retreats, and special services.' },
  { icon: '💎', title: 'Covenant Blessing', desc: 'We believe in the covenant of sowing and reaping. As you sow into this ministry, God returns it multiplied.' },
];

export default function Partnership() {
  return (
    <div>
      <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(80,0,60,0.78), rgba(40,0,30,0.88)), url(/assets/727602613_1336055988674392_8463230546365889723_n.jpg)' }}>
        <div className="container">
          <h1>Become a Partner</h1>
          <p>Join hands with us to raise the banner of Jesus on every Sphere of Influence.</p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section-padding">
        <div className="container">
          <div className="giving-layout">
            <div className="giving-text">
              <h2>Why Partner With Us?</h2>
              <p>A ministry partner is more than a financial contributor — you are a co-labourer in the harvest field. When you partner with Word Alive Global, you share in every soul won, every life transformed, every city touched.</p>
              <p style={{ marginTop: '14px' }}>Our vision is enormous: to raise the banner of Jesus Christ across every sphere of society — family, business, government, education, arts, media, and religion. We cannot do it alone. We need people like you who believe in this mandate.</p>
              <blockquote className="scripture">"And do not forget to do good and to share with others, for with such sacrifices God is pleased." — Hebrews 13:16</blockquote>
              <Link href="/contact" className="btn btn-accent" style={{ marginTop: '28px', display: 'inline-block' }}>Become a Partner Today</Link>
            </div>
            <div className="giving-card">
              <h3>Partnership Tiers</h3>
              <div className="bank-details">
                <div className="bank-item">
                  <span className="bank-label">🌱 Seed Partner</span>
                  <span className="bank-value">₦5,000 / month</span>
                </div>
                <div className="bank-item">
                  <span className="bank-label">🔥 Fire Partner</span>
                  <span className="bank-value">₦20,000 / month</span>
                </div>
                <div className="bank-item">
                  <span className="bank-label">👑 Royal Partner</span>
                  <span className="bank-value">₦50,000 / month</span>
                </div>
                <div className="bank-item">
                  <span className="bank-label">💎 Covenant Partner</span>
                  <span className="bank-value">₦100,000+ / month</span>
                </div>
              </div>
              <p className="giving-note">All tiers are monthly commitments. One-time gifts are also greatly welcomed and appreciated.</p>
              <Link href="/contact" className="btn btn-accent" style={{ marginTop: '24px', display: 'inline-block' }}>Register as Partner</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="section-padding" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '50px' }}>
            <h2>What You Receive as a Partner</h2>
            <p>Partnership is a two-way covenant. We honour and value every partner.</p>
          </div>
          <div className="vm-grid">
            {benefits.map((b, i) => (
              <div key={i} className="vm-card">
                <div className="vm-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="join-cta" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))', padding: '80px 0' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff' }}>Ready to Partner?</h2>
          <p style={{ color: 'rgba(255,255,255,0.88)', maxWidth: '560px', margin: '0 auto 28px', fontSize: '1.1rem' }}>Fill our contact form and our team will reach out with full partner registration details.</p>
          <Link href="/contact" className="btn btn-accent">Contact Us Now</Link>
        </div>
      </section>
    </div>
  );
}
