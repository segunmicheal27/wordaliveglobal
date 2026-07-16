import Link from 'next/link';
import '../about/about.css';
import './giving.css';

export const metadata = {
  title: 'Pay Tithe | Word Alive Global',
  description: 'Honor God with your tithe and offerings at Word Alive Global.',
};

export default function Tithe() {
  return (
    <div>
      <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(80,0,60,0.78), rgba(40,0,30,0.88)), url(/assets/724158988_1330315815915076_308006410264472192_n.jpg)' }}>
        <div className="container">
          <h1>Pay Your Tithe</h1>
          <p>"Bring the full tithe into the storehouse." — Malachi 3:10</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="giving-layout">
            <div className="giving-text">
              <h2>Why We Tithe</h2>
              <p>Tithing is an act of worship, obedience, and trust. When we give the first tenth of our income to God, we acknowledge that He is the source of all we have and all we are. It's not just about money — it's about the posture of our heart.</p>
              <p style={{ marginTop: '14px' }}>At Word Alive Global, your tithes go directly into advancing the Gospel in Jos and beyond — funding church operations, outreaches, community development, and mission work.</p>
              <blockquote className="scripture">"Honor the LORD with your wealth and with the firstfruits of all your produce; then your barns will be filled with plenty." — Proverbs 3:9–10</blockquote>
            </div>
            <div className="giving-card">
              <h3>How to Give</h3>
              <div className="bank-details">
                <div className="bank-item">
                  <span className="bank-label">Bank Name</span>
                  <span className="bank-value">🏦 Zenith Bank</span>
                </div>
                <div className="bank-item">
                  <span className="bank-label">Account Name</span>
                  <span className="bank-value">The Spirit Family Ministry</span>
                </div>
                <div className="bank-item">
                  <span className="bank-label">Account Number</span>
                  <span className="bank-value" style={{fontSize:'1.3rem', letterSpacing:'2px'}}>1221745930</span>
                </div>
              </div>
              <p className="giving-note">After giving, please send a confirmation to <strong>wordalivemetanoia@gmail.com</strong> or call <strong>+234 813 555 5643</strong> so we can acknowledge your faithfulness.</p>
              <Link href="/contact" className="btn btn-accent" style={{ marginTop: '24px', display: 'inline-block' }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
