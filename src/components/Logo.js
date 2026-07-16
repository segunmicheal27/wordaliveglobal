export default function Logo({ className }) {
  return (
    <div className={`logo-container ${className || ''}`} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 10 55 L 30 55 L 45 20 L 60 85 L 75 55 L 90 55" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
        <span style={{ fontSize: '1.4rem', fontWeight: '800', letterSpacing: '1px', color: 'currentColor' }}>WORD ALIVE</span>
        <span style={{ fontSize: '0.8rem', fontWeight: '400', color: 'currentColor' }}>Global Lifeline</span>
      </div>
    </div>
  );
}
