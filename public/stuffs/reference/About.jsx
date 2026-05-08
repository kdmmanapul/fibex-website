// About.jsx — Fibex About Page

function AboutPage({ onNav }) {
  const s = {
    page: { background: '#fff' },

    // Hero
    hero: {
      background: '#0119FE',
      padding: '120px 56px 96px',
      position: 'relative',
      overflow: 'hidden',
    },
    heroEyebrow: {
      fontFamily: "'Baufra', sans-serif", fontWeight: 700,
      fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.4)', marginBottom: 20,
    },
    heroH1: {
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 'clamp(48px, 6vw, 80px)', color: '#fff',
      lineHeight: 1.0, letterSpacing: '-0.02em',
      maxWidth: 700, marginBottom: 28,
    },
    heroBlue: { color: '#0119FE' },
    heroSub: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 17,
      color: 'rgba(255,255,255,0.75)', maxWidth: 540, lineHeight: 1.75,
    },
    xDecor: {
      position: 'absolute', right: -40, top: -40,
      width: 400, height: 400, opacity: 0.04,
    },

    // Stats bar
    statsBar: {
      background: '#000d99',
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      padding: '0 56px',
    },
    statCell: {
      padding: '40px 0',
      borderRight: '1px solid rgba(255,255,255,0.12)',
      paddingLeft: 32,
    },
    statNum: {
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 40, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em',
    },
    statLabel: {
      fontFamily: "'Baufra', sans-serif", fontWeight: 700,
      fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)', marginTop: 6,
    },

    // Story section
    storySection: {
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      gap: 80, padding: '96px 56px', maxWidth: 1200, margin: '0 auto',
    },
    storyEyebrow: {
      fontFamily: "'Baufra', sans-serif", fontWeight: 700,
      fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase',
      color: '#0119FE', marginBottom: 20,
    },
    storyH2: {
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 44, color: '#000', lineHeight: 1.05,
      letterSpacing: '-0.01em', marginBottom: 28,
    },
    storyBody: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 15,
      color: '#555', lineHeight: 1.8, marginBottom: 20,
    },
    storyRight: {
      display: 'flex', flexDirection: 'column', gap: 24,
    },
    storyCard: {
      background: '#f5f5f5', borderRadius: 20,
      padding: '28px 32px',
    },
    storyCardTitle: {
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 20, color: '#000', marginBottom: 8,
    },
    storyCardDesc: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 14,
      color: '#666', lineHeight: 1.65,
    },

    // Mission / Vision
    mvSection: {
      background: '#f5f5f5', padding: '80px 56px',
    },
    mvInner: {
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32,
      maxWidth: 1100, margin: '0 auto',
    },
    mvCard: (blue) => ({
      background: blue ? '#0119FE' : '#001faa',
      borderRadius: 24, padding: '48px 44px',
    }),
    mvLabel: {
      fontFamily: "'Baufra', sans-serif", fontWeight: 700,
      fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.4)', marginBottom: 16,
    },
    mvTitle: {
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 36, color: '#fff', lineHeight: 1.05, marginBottom: 20,
    },
    mvBody: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 14,
      color: 'rgba(255,255,255,0.65)', lineHeight: 1.8,
    },

    // Values
    valuesSection: {
      padding: '96px 56px', maxWidth: 1200, margin: '0 auto',
    },
    valuesH2: {
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 44, color: '#000', lineHeight: 1.05,
      textAlign: 'center', marginBottom: 56,
    },
    valuesGrid: {
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
    },
    valueItem: {
      borderTop: '2px solid #000', paddingTop: 24,
    },
    valueTitle: {
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 22, color: '#000', marginBottom: 10,
    },
    valueDesc: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 14,
      color: '#666', lineHeight: 1.7,
    },

    // Responsibility
    respSection: {
      background: '#f5f5f5', padding: '80px 56px',
    },
    respInner: { maxWidth: 1100, margin: '0 auto' },
    respEyebrow: {
      fontFamily: "'Baufra', sans-serif", fontWeight: 700,
      fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase',
      color: '#0119FE', marginBottom: 16,
      textAlign: 'center',
    },
    respH2: {
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 44, color: '#000', textAlign: 'center',
      marginBottom: 56, lineHeight: 1.05,
    },
    respGrid: {
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
    },
    respCard: {
      background: '#fff',
      borderRadius: 20, padding: '32px 28px',
      borderTop: '2px solid #0119FE',
    },
    respTitle: {
      fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
      fontSize: 15, color: '#000', marginBottom: 10,
    },
    respDesc: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 13,
      color: '#555', lineHeight: 1.7,
    },

    // CTA
    ctaSection: {
      background: '#0119FE', padding: '80px 56px', textAlign: 'center',
    },
    ctaH2: {
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 52, color: '#fff', lineHeight: 1.05, marginBottom: 8,
    },
    ctaSub: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 16,
      color: 'rgba(255,255,255,0.65)', marginBottom: 36,
    },
    ctaBtns: { display: 'flex', gap: 14, justifyContent: 'center' },
  };

  const stats = [
    { num: '4,000', label: 'Subscribers' },
    { num: '9', label: 'Universities Served' },
    { num: '2021', label: 'Year Established' },
    { num: '99%', label: 'Uptime Commitment' },
  ];

  const storyCards = [
    { title: 'Est. 2021', desc: 'Fibex Broadband Inc was established in Pampanga, Philippines, with a mission to make honest fiber internet accessible to every Filipino.' },
    { title: 'Built for Pampanga', desc: 'Currently serving San Fernando, Macabebe, Apalit, Bitas, Batasan — with new communities added regularly.' },
    { title: 'Registered & Secure', desc: 'A duly registered Philippine corporation with all proper permits to operate. Our network is built above industry standards.' },
  ];

  const values = [
    { title: 'Honesty', desc: 'No hidden charges. No exaggerated claims. ₱999 means ₱999. Our prices never lie.' },
    { title: 'Service', desc: 'Technicians 7 days a week. 24/7 monitoring. We actually show up and pick up the phone.' },
    { title: 'Community', desc: 'Fiber that reaches barangays, condos, schools, and sari-sari stores. WiFi for all.' },
    { title: 'Fairness', desc: 'What you pay for, you actually get. No asterisks, no fine print, no runaround.' },
  ];

  const responsibilities = [
    { title: 'Bridge the Digital Divide', desc: 'Providing reliable, affordable internet to underserved and rural communities so more Filipinos can access education, jobs, and opportunity.' },
    { title: 'Support Education', desc: 'Supplying 9 universities in Pampanga with dedicated connections, and supporting students with stable, affordable plans.' },
    { title: 'Empower Local Businesses', desc: 'Enabling SMEs, work-from-home entrepreneurs, and sari-sari stores with the connectivity they need to grow.' },
    { title: 'Serve Local Government', desc: 'Providing dedicated fiber lines to municipalities in Pampanga, ensuring safe and reliable service for public institutions.' },
    { title: 'Community Involvement', desc: 'Participating in disaster response, community programs, and local initiatives — not just as a provider, but as a true partner.' },
    { title: 'Transparent & Responsive', desc: 'Fair pricing, honest policies, and quick action during outages — because social responsibility starts with how we treat our customers.' },
  ];

  return (
    <div style={s.page}>
      {/* Hero */}
      <div style={s.hero}>
        <div style={s.heroEyebrow}>About Fibex</div>
        <h1 style={s.heroH1}>
          Fast internet<br/>
          <span style={s.heroBlue}>for every Filipino.</span>
        </h1>
        <p style={s.heroSub}>
          Fibex Broadband Inc. is an established Philippine ISP built on radical transparency — no hidden fees, no exaggerated speed claims. Just honest, reliable fiber internet.
        </p>
      </div>

      {/* Stats bar */}
      <div style={s.statsBar}>
        {stats.map((st, i) => (
          <div key={st.num} style={{ ...s.statCell, ...(i === stats.length - 1 ? { borderRight: 'none' } : {}) }}>
            <div style={s.statNum}>{st.num}</div>
            <div style={s.statLabel}>{st.label}</div>
          </div>
        ))}
      </div>

      {/* Story */}
      <div style={s.storySection}>
        <div>
          <div style={s.storyEyebrow}>Our Story</div>
          <h2 style={s.storyH2}>Started with a simple belief.</h2>
          <p style={s.storyBody}>
            Fibex began with the conviction that every Filipino deserves internet that's honest, reliable, and truly felt. In a world where connection powers work, school, family, and entertainment — too many were left frustrated by hidden fees, false promises, and endless runarounds.
          </p>
          <p style={s.storyBody}>
            From the start, Fibex set out to do things differently. No fine print. No exaggerated claims. Just clear plans, fair pricing, and customer care that actually shows up.
          </p>
          <p style={s.storyBody}>
            What began as a challenger brand quickly grew into a movement for fairness and transparency — empowering households, students, and businesses with internet they can finally trust.
          </p>
        </div>
        <div style={s.storyRight}>
          {storyCards.map(c => (
            <div key={c.title} style={s.storyCard}>
              <div style={s.storyCardTitle}>{c.title}</div>
              <div style={s.storyCardDesc}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission / Vision */}
      <div style={s.mvSection}>
        <div style={s.mvInner}>
          <div style={s.mvCard(true)}>
            <div style={s.mvLabel}>Mission</div>
            <div style={s.mvTitle}>Highest quality. Honest service.</div>
            <p style={s.mvBody}>
              To provide our customers with the highest quality, fast, and reliable internet services for both businesses and households. We build and operate a strong, modern network that delivers secure, high-speed internet while continuously improving our technology and services. We strive to create long-term relationships with our customers — ensuring complete satisfaction.
            </p>
          </div>
          <div style={s.mvCard(false)}>
            <div style={s.mvLabel}>Vision</div>
            <div style={s.mvTitle}>Separate from the rest.</div>
            <p style={s.mvBody}>
              Fibex will separate itself from the competition with innovative solutions to the existing shortcomings in the current industry. We envision a Philippines where every household, every school, and every small business has access to honest, fast, and fairly priced fiber internet — with no fine print and no compromise.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div style={s.valuesSection}>
        <h2 style={s.valuesH2}>Built different.</h2>
        <div style={s.valuesGrid}>
          {values.map(v => (
            <div key={v.title} style={s.valueItem}>
              <div style={s.valueTitle}>{v.title}</div>
              <p style={s.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Responsibility */}
      <div style={s.respSection}>
        <div style={s.respInner}>
          <div style={s.respEyebrow}>Social Responsibility</div>
          <h2 style={s.respH2}>More than just internet.</h2>
          <div style={s.respGrid}>
            {responsibilities.map(r => (
              <div key={r.title} style={s.respCard}>
                <div style={s.respTitle}>{r.title}</div>
                <p style={s.respDesc}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={s.ctaSection}>
        <h2 style={s.ctaH2}>WiFi for all.</h2>
        <p style={s.ctaSub}>Fast, reliable, and honest — for every home and business.</p>
        <div style={s.ctaBtns}>
          <FibexBtn variant="whiteBlue" size="lg" onClick={() => onNav('Plans')}>See Plans</FibexBtn>
          <FibexBtn variant="outlineWhite" size="lg" onClick={() => onNav('Contact')}>Get in Touch</FibexBtn>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { AboutPage });
