// Hero.jsx — Fibex Hero Section (matches screenshot layout)

function Hero({ onCTA }) {
  const s = {
    section: {
      background: '#fff',
      minHeight: 'calc(100vh - 68px)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'stretch'
    },
    headline: {
      position: 'absolute',
      top: 72,
      left: 56,
      zIndex: 10
    },
    h1line1: {
      fontFamily: "'Origin', sans-serif",
      fontWeight: 900,
      fontSize: 'clamp(40px, 5vw, 68px)',
      color: '#000',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      display: 'block'
    },
    h1line2: {
      fontFamily: "'Origin', sans-serif",
      fontWeight: 900,
      fontSize: 'clamp(40px, 5vw, 68px)',
      color: '#0119FE',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      display: 'block'
    },
    sub: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
      fontSize: 16,
      color: '#444',
      marginTop: 18
    },
    ctaRow: {
      display: 'flex', gap: 12, marginTop: 28
    },
    // Blue blob center
    blueBlob: {
      position: 'absolute',
      bottom: 0,
      left: '26%',
      width: '52%',
      height: '90%',
      background: '#0119FE',
      borderRadius: '56px 56px 0 0',
      zIndex: 1
    },
    // Persons area
    personsWrap: {
      position: 'absolute',
      bottom: 0,
      left: '24%',
      zIndex: 2,
      width: '56%',
      height: '92%',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center'
    },
    // Right card area
    rightCard: {
      position: 'absolute',
      top: '50%',
      right: 56,
      transform: 'translateY(-52%)',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 20
    },
    speechBubble: {
      background: '#0119FE',
      borderRadius: 32,
      padding: '32px 40px',
      maxWidth: 280,
      textAlign: 'right'
    },
    speechText: {
      fontFamily: "'Origin', sans-serif",
      fontWeight: 900,
      fontSize: 38,
      color: '#fff',
      lineHeight: 1.1,
      letterSpacing: '-0.01em'
    },
    priceRow: {
      display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8
    },
    priceCapsule: {
      background: '#F12400',
      color: '#fff',
      fontFamily: "'Origin', sans-serif",
      fontWeight: 900,
      fontSize: 24,
      padding: '14px 32px',
      borderRadius: 9999
    },
    priceNote: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 13,
      color: '#444',
      textAlign: 'right',
      lineHeight: 1.6
    },
    // Bottom bar
    bottomBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 5,
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 64,
      padding: '16px 56px'
    },
    statItem: {
      display: 'flex', flexDirection: 'column', gap: 2
    },
    statNum: {
      fontFamily: "'Origin', sans-serif",
      fontWeight: 900,
      fontSize: 22,
      color: '#fff',
      lineHeight: 1
    },
    statLabel: {
      fontFamily: "'Baufra', sans-serif", fontWeight: 700,
      fontSize: 10,
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.45)'
    },
    dividerLine: {
      width: 1, height: 36, background: 'rgba(255,255,255,0.12)'
    }
  };

  const stats = [
  { num: '4,000+', label: 'Subscribers' },
  { num: '9', label: 'Universities Served' },
  { num: '99%', label: 'Uptime Guaranteed' }];


  return (
    <section style={s.section}>
      {/* Headline */}
      <div style={s.headline}>
        <span style={s.h1line1}>Zero lags,</span>
        <span style={s.h1line2}>Stable wins</span>
        <div style={s.sub}>Your journey starts here</div>
        <div style={s.ctaRow}>
          <FibexBtn variant="primary" size="lg" onClick={() => onCTA('plans')}>See Plans</FibexBtn>
          <FibexBtn variant="outline" size="lg" onClick={() => onCTA('xurecheck')}>Try XureCheck</FibexBtn>
        </div>
      </div>

      {/* People placeholder */}
      <div style={s.personsWrap} />

      {/* Right card */}
      <div style={s.rightCard}>
        <div style={s.speechBubble}>
          <div style={s.speechText}>Speed<br />promised.<br />Speed<br />delivered.</div>
        </div>
        <div style={s.priceRow}>
          <div style={s.priceCapsule}>as low as ₱999 / month</div>
          <div style={s.priceNote}>
            <strong>Unlimited data.</strong><br />
            Ideal for everyday streaming, gaming & WFH
          </div>
        </div>
      </div>

      {/* Spacer + bottom bar */}
      <div style={{ height: 'calc(100vh - 68px)', minHeight: 520 }} />
      <div style={s.bottomBar}>
        {stats.map((s2, i) =>
        <React.Fragment key={s2.num}>
            {i > 0 && <div style={s.dividerLine} />}
            <div style={s.statItem}>
              <div style={s.statNum}>{s2.num}</div>
              <div style={{ ...s.statLabel, color: "rgb(255, 255, 255)" }}>{s2.label}</div>
            </div>
          </React.Fragment>
        )}
      </div>
    </section>);

}

Object.assign(window, { Hero });