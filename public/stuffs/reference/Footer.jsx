// Footer.jsx — Fibex Site Footer

function Footer({ onNav }) {
  const s = {
    footer: { background: '#0119FE', padding: '64px 56px 40px', color: '#fff' },
    top: {
      display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 48, marginBottom: 56,
    },
    brand: { display: 'flex', flexDirection: 'column', gap: 16 },
    logoRow: { display: 'flex', alignItems: 'center', gap: 10 },
    tagline: {
      fontFamily: "'Baufra', sans-serif", fontWeight: 700,
      fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.6)', marginTop: 2,
    },
    about: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 13,
      color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, maxWidth: 260, marginTop: 4,
    },
    colTitle: {
      fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 11,
      letterSpacing: '0.06em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.65)', marginBottom: 18,
    },
    links: { display: 'flex', flexDirection: 'column', gap: 12 },
    link: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 14,
      color: 'rgba(255,255,255,0.9)', cursor: 'pointer',
      transition: 'color 0.15s', textDecoration: 'none',
    },
    divider: { borderTop: '1px solid rgba(255,255,255,0.2)', marginBottom: 28 },
    bottom: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    copy: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 12,
      color: 'rgba(255,255,255,0.7)',
    },
    capsule: {
      background: '#F12400', color: '#fff',
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 11, padding: '7px 18px', borderRadius: 9999,
    },
  };

  return (
    <footer style={s.footer}>
      <div style={s.top}>
        <div style={s.brand}>
          <div style={s.logoRow}>
            <FibexEmblem size={28} color="#fff" />
            <FibexWordmark height={17} color="#fff" />
          </div>
          <div style={s.tagline}>True Speed. True Connection.</div>
          <p style={s.about}>Honest, fast fiber internet for every Filipino household. No hidden fees. No runaround. Just real speed.</p>
        </div>
        <div>
          <div style={s.colTitle}>Plans</div>
          <div style={s.links}>
            {['Plans'].map(l => (
              <span key={l} style={s.link} onClick={() => onNav(l)}>{l}</span>
            ))}
          </div>
        </div>
        <div>
          <div style={s.colTitle}>Company</div>
          <div style={s.links}>
            {['About', 'Contact'].map(l => (
              <span key={l} style={s.link} onClick={() => onNav(l)}>{l}</span>
            ))}
          </div>
        </div>
        <div>
          <div style={s.colTitle}>Contact</div>
          <div style={s.links}>
            <span style={s.link}>sales@fibexph.com</span>
            <span style={s.link}>0967-348-2428</span>
            <span style={s.link}>(044) 305-8173</span>
            <span style={s.link}>www.fibexph.com</span>
          </div>
        </div>
      </div>
      <hr style={s.divider} />
      <div style={s.bottom}>
        <div style={s.copy}>© 2025 Fibex Broadband Inc. All rights reserved. Philippines.</div>
        <div style={s.capsule}>WiFi for All.</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
