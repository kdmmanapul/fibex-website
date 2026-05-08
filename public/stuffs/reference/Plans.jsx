// Plans.jsx — Fibex Plans Page (all sections stacked)

function PlansPage({ onApply }) {

  const residentialPlans = [
    { name: 'FIBEX ELITE',          price: '999',   speed: '200',   unit: 'Mbps', desc: 'Perfect for everyday browsing, streaming, and social media.',                         features: ['Unlimited data', 'Free installation', '24/7 support', 'Low latency'],                    bg: '#fff',    fg: '#000' },
    { name: 'FIBEX RUSH',           price: '1,499', speed: '300',   unit: 'Mbps', desc: 'Faster speeds for multitaskers, remote work, and HD video calls.',                   features: ['Unlimited data', 'Free installation', 'Priority support', 'Low latency'],              bg: '#0119FE', fg: '#fff' },
    { name: 'FIBEX BLAZE',          price: '1,999', speed: '400',   unit: 'Mbps', desc: 'Blazing fast for power users, gaming households, and busy families.',                features: ['Unlimited data', 'Free installation', 'Priority support', 'Low latency'],              bg: '#0119FE', fg: '#fff', featured: true },
    { name: 'FIBEX TURBO',          price: '2,499', speed: '500',   unit: 'Mbps', desc: 'Maximum speed for serious streamers, heavy downloaders, and SMEs.',                  features: ['Unlimited data', 'Free installation', 'VIP support', 'Ultra-low latency'],             bg: '#fff',    fg: '#000' },
    { name: 'FIBEX PREMIUM TURBO',  price: '7,999', speed: '1,000', unit: 'Mbps', desc: 'Enterprise-grade gigabit fiber for businesses and power households.',                features: ['Unlimited data', 'Free installation', 'Dedicated account manager', 'SLA guarantee'], bg: '#0119FE', fg: '#fff' },
  ];

  const businessPlans = [
    { name: 'BUSINESS STARTER', price: '2,499', speed: '100', unit: 'Mbps', desc: 'Reliable fiber for small offices, cafes, and local businesses.',                  features: ['Unlimited data', 'Free installation', 'Business support', 'Static IP available'],   bg: '#fff',   fg: '#000' },
    { name: 'BUSINESS PLUS',    price: '2,700', speed: '150', unit: 'Mbps', desc: 'More bandwidth for growing teams and multi-device environments.',                 features: ['Unlimited data', 'Free installation', 'Priority support', 'Static IP available'],   bg: '#0119FE', fg: '#fff' },
    { name: 'BUSINESS PRO',     price: '3,299', speed: '200', unit: 'Mbps', desc: 'High-performance for medium businesses, clinics, and offices.',                   features: ['Unlimited data', 'Free installation', 'Dedicated support line', 'Static IP'],       bg: '#0119FE', fg: '#fff', featured: true },
    { name: 'BUSINESS TURBO',   price: '4,999', speed: '300', unit: 'Mbps', desc: 'Enterprise bandwidth for high-demand operations and large teams.',                features: ['Unlimited data', 'Free installation', 'SLA guarantee', 'Static IP'],               bg: '#0119FE', fg: '#fff' },
    { name: 'BUSINESS MAX',     price: '9,999', speed: '500', unit: 'Mbps', desc: 'Maximum throughput for large enterprises and high-volume usage.',                 features: ['Unlimited data', 'Free installation', 'Dedicated account manager', 'SLA + Static IP'], bg: '#fff',  fg: '#000' },
  ];

  const s = {
    page: { background: '#fff', minHeight: '100vh' },

    // Hero
    hero: { background: '#0119FE', padding: '100px 56px 64px', textAlign: 'center' },
    heroEyebrow: { fontFamily: "'Baufra', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 16 },
    heroH1: { fontFamily: "'Origin', sans-serif", fontWeight: 900, fontSize: 'clamp(40px, 5vw, 68px)', color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 16 },
    heroSub: { fontFamily: "'Montserrat', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: 560, margin: '0 auto 12px', lineHeight: 1.6 },
    redCapsule: { display: 'inline-block', background: '#F12400', color: '#fff', fontFamily: "'Origin', sans-serif", fontWeight: 900, fontSize: 13, padding: '8px 24px', borderRadius: 9999, marginTop: 8 },

    // Anchor nav
    anchorNav: { background: '#000', display: 'flex', justifyContent: 'center', gap: 0 },
    anchorBtn: (active) => ({
      fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 13,
      padding: '18px 40px', border: 'none', cursor: 'pointer', letterSpacing: '0.04em',
      background: 'transparent', color: active ? '#fff' : 'rgba(255,255,255,0.4)',
      borderBottom: active ? '3px solid #0119FE' : '3px solid transparent',
      transition: 'all 0.15s',
    }),

    // Section wrappers
    sectionLight: { background: '#f5f5f5', padding: '80px 56px' },
    sectionDark:  { background: '#000',    padding: '80px 56px' },
    sectionWhite: { background: '#fff',    padding: '80px 56px' },
    sectionBlue:  { background: '#e6e9ff', padding: '80px 56px' },

    sectionInner: { maxWidth: 1200, margin: '0 auto' },
    sectionLabel: { fontFamily: "'Baufra', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#0119FE', marginBottom: 12 },
    sectionLabelLight: { fontFamily: "'Baufra', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 12 },
    sectionH2:    { fontFamily: "'Origin', sans-serif", fontWeight: 900, fontSize: 'clamp(32px, 3.5vw, 48px)', color: '#000', lineHeight: 1.05, marginBottom: 8 },
    sectionH2W:   { fontFamily: "'Origin', sans-serif", fontWeight: 900, fontSize: 'clamp(32px, 3.5vw, 48px)', color: '#fff', lineHeight: 1.05, marginBottom: 8 },
    sectionSub:   { fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: '#666', marginBottom: 48 },
    sectionSubW:  { fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 48 },
    grid3: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 },
    grid2: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, maxWidth: 800, margin: '20px auto 0' },

    // Cards
    card: (bg, featured) => ({
      background: bg, borderRadius: 24, padding: '36px 32px',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden',
      boxShadow: featured ? '0 8px 40px rgba(1,25,254,0.3)' : '0 4px 16px rgba(0,0,0,0.08)',
      transform: featured ? 'scale(1.03)' : 'none',
    }),
    featuredBadge: { position: 'absolute', top: 20, right: 20, background: '#F12400', color: '#fff', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 9999 },
    planLabel: (fg) => ({ fontFamily: "'Baufra', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase', color: fg === '#fff' ? 'rgba(255,255,255,0.45)' : '#666', marginBottom: 8 }),
    planName:  (fg) => ({ fontFamily: "'Origin', sans-serif", fontWeight: 900, fontSize: 18, color: fg, lineHeight: 1.1, marginBottom: 16 }),
    speedRow: { display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 8 },
    speedNum: () => ({ fontFamily: "'Origin', sans-serif", fontWeight: 900, fontSize: 56, color: '#fff', lineHeight: 1, letterSpacing: '-0.03em' }),
    speedUnit: () => ({ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 16, color: '#fff' }),
    priceTag: (fg) => ({ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 15, color: fg === '#fff' ? 'rgba(255,255,255,0.85)' : '#0119FE', marginBottom: 4 }),
    priceSuper: (fg) => ({ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: 11, color: fg === '#fff' ? 'rgba(255,255,255,0.45)' : '#aaa', marginBottom: 20 }),
    divider: (fg) => ({ borderTop: `1px solid ${fg === '#fff' ? 'rgba(255,255,255,0.1)' : '#e0e0e0'}`, margin: '16px 0' }),
    desc: (fg) => ({ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: fg === '#fff' ? 'rgba(255,255,255,0.65)' : '#555', lineHeight: 1.65, marginBottom: 20 }),
    featureList: { listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8, flex: 1 },
    featureItem: (fg) => ({ display: 'flex', alignItems: 'center', gap: 10, fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: fg === '#fff' ? 'rgba(255,255,255,0.85)' : '#444' }),
    checkDot: (fg) => ({ width: 18, height: 18, borderRadius: '50%', background: fg === '#fff' ? 'rgba(255,255,255,0.15)' : '#e6e9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: fg === '#fff' ? '#fff' : '#0119FE', fontWeight: 700, flexShrink: 0 }),
    cardBtn: { marginTop: 28 },
    disclaimer: { textAlign: 'center', marginTop: 40, fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: '#888', lineHeight: 1.7 },

    // DIA
    diaGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', maxWidth: 1100, margin: '0 auto' },
    diaTag: { display: 'inline-block', background: '#F12400', color: '#fff', fontFamily: "'Origin', sans-serif", fontWeight: 900, fontSize: 11, padding: '6px 16px', borderRadius: 9999, marginBottom: 20 },
    diaH2: { fontFamily: "'Origin', sans-serif", fontWeight: 900, fontSize: 'clamp(32px, 3.5vw, 44px)', color: '#fff', lineHeight: 1.05, marginBottom: 20 },
    diaBlue: { color: '#0119FE' },
    diaBody: { fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 32 },
    diaCard: { background: 'rgba(255,255,255,0.04)', borderRadius: 24, padding: '40px 36px', border: '1px solid rgba(255,255,255,0.08)' },
    diaCardTitle: { fontFamily: "'Origin', sans-serif", fontWeight: 900, fontSize: 26, color: '#fff', lineHeight: 1.05, marginBottom: 16 },
    diaCardBody: { fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 28 },
    diaPoints: { display: 'flex', flexDirection: 'column', gap: 12 },
    diaPoint: { display: 'flex', gap: 10, alignItems: 'center', fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.75)' },
    diaDot: { width: 20, height: 20, borderRadius: '50%', background: '#0119FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#fff', fontWeight: 700, flexShrink: 0 },

    // Perks bar
    perks: { background: '#0119FE', borderRadius: 0, padding: '48px 56px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 },
    perkItem: { borderTop: '2px solid rgba(255,255,255,0.25)', paddingTop: 24 },
    perkTitle: { fontFamily: "'Origin', sans-serif", fontWeight: 900, fontSize: 16, color: '#fff', marginBottom: 8 },
    perkDesc:  { fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 },
  };

  const perks = [
    { title: 'Fast Installation', desc: 'Scheduled within 3–5 business days. No long waits.' },
    { title: 'Reliable Fiber',    desc: 'Fiber-optic lines built above industry standards.' },
    { title: 'Low Latency',       desc: 'Ideal for gaming, video calls, and real-time apps.' },
    { title: 'No Hidden Fees',    desc: '₱999 means ₱999. No fine print. Ever.' },
  ];

  function PlanCard({ plan, typeLabel }) {
    return (
      <div style={s.card(plan.bg, plan.featured)}>
        {plan.featured && <div style={s.featuredBadge}>Most Popular</div>}
        <div style={s.planLabel(plan.fg)}>{typeLabel}</div>
        <div style={s.planName(plan.fg)}>{plan.name}</div>
        <div style={s.speedRow}>
          <span style={s.speedNum(plan.fg)}>{plan.speed}</span>
          <span style={s.speedUnit(plan.fg)}> {plan.unit}</span>
        </div>
        <div style={s.priceTag(plan.fg)}><sup style={{ fontSize: 11 }}>PHP</sup> {plan.price}<span style={{ fontWeight: 400, fontSize: 12 }}>/month</span></div>
        <div style={s.priceSuper(plan.fg)}>What you see is what you pay.</div>
        <hr style={s.divider(plan.fg)} />
        <p style={s.desc(plan.fg)}>{plan.desc}</p>
        <ul style={s.featureList}>
          {plan.features.map(f => (
            <li key={f} style={s.featureItem(plan.fg)}>
              <span style={s.checkDot(plan.fg)}>✓</span>{f}
            </li>
          ))}
        </ul>
        <div style={s.cardBtn}>
          <FibexBtn
            variant={plan.bg === '#0119FE' ? 'whiteBlue' : plan.bg === '#000' ? 'outlineWhite' : 'primary'}
            onClick={() => onApply(plan.name)}
            style={{ width: '100%' }}
          >Apply Now</FibexBtn>
        </div>
      </div>
    );
  }

  return (
    <div style={s.page}>

      {/* Hero */}
      <div style={s.hero}>
        <div style={s.heroEyebrow}>Fibex Plans</div>
        <h1 style={s.heroH1}>Pick your speed.</h1>
        <p style={s.heroSub}>All plans include unlimited data, free installation, and zero lock-in contracts. Prices exclusive of VAT.</p>
        <div style={s.redCapsule}>No fine print. Just fast internet.</div>
      </div>

      {/* Anchor nav */}
      <div style={s.anchorNav}>
        {['Residential', 'Business', 'DIA'].map(label => (
          <a key={label} href={`#section-${label.toLowerCase()}`}
            style={{ ...s.anchorBtn(false), textDecoration: 'none', display: 'inline-block' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderBottomColor = '#0119FE'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.borderBottomColor = 'transparent'; }}
          >{label === 'DIA' ? 'Direct Internet Access' : label}</a>
        ))}
      </div>

      {/* ── Residential ─────────────────────────────────────────────────────── */}
      <div id="section-residential" style={s.sectionLight}>
        <div style={s.sectionInner}>
          <div style={s.sectionLabel}>Residential Plans</div>
          <h2 style={s.sectionH2}>Honest plans. Real speeds.</h2>
          <p style={s.sectionSub}>Fast fiber installation · Reliable connection · Low latency for gaming & WFH</p>
          <div style={s.grid3}>
            {residentialPlans.slice(0, 3).map(p => <PlanCard key={p.name} plan={p} typeLabel="Residential" />)}
          </div>
          <div style={s.grid2}>
            {residentialPlans.slice(3).map(p => <PlanCard key={p.name} plan={p} typeLabel="Residential" />)}
          </div>
          <p style={s.disclaimer}>Prices exclusive of VAT · Free installation · Low latency · <strong>Apply: sales@fibexph.com</strong></p>
        </div>
      </div>

      {/* ── Business ────────────────────────────────────────────────────────── */}
      <div id="section-business" style={s.sectionWhite}>
        <div style={s.sectionInner}>
          <div style={s.sectionLabel}>Business Plans</div>
          <h2 style={s.sectionH2}>Built for business.</h2>
          <p style={s.sectionSub}>Reliable fiber for SMEs, offices, clinics, cafes, and growing teams</p>
          <div style={s.grid3}>
            {businessPlans.slice(0, 3).map(p => <PlanCard key={p.name} plan={p} typeLabel="Business" />)}
          </div>
          <div style={s.grid2}>
            {businessPlans.slice(3).map(p => <PlanCard key={p.name} plan={p} typeLabel="Business" />)}
          </div>
          <p style={s.disclaimer}>Business plans include static IP option · Priority support · <strong>sales@fibexph.com</strong></p>
        </div>
      </div>

      {/* ── DIA ─────────────────────────────────────────────────────────────── */}
      <div id="section-dia" style={s.sectionDark}>
        <div style={s.diaGrid}>
          <div>
            <div style={s.diaTag}>Dedicated Internet Access</div>
            <h2 style={s.diaH2}>Enterprise-grade.<br/><span style={s.diaBlue}>Uncompromised.</span></h2>
            <p style={s.diaBody}>
              The DIA Line is designed for large establishments that require high-performance, secure, and always-on internet connectivity. This service provides a dedicated, uncontended fiber connection exclusively assigned to the client — ensuring consistent speeds, low latency, and reliable uptime.
            </p>
            <FibexBtn variant="primary" size="lg" onClick={() => onApply('DIA')}>Request a Quote</FibexBtn>
          </div>
          <div style={s.diaCard}>
            <div style={s.diaCardTitle}>Dedicated Fiber.<br/>Just for you.</div>
            <p style={s.diaCardBody}>
              Unlike shared connections, your DIA line is never congested — no matter the time of day. Built for hospitals, universities, government offices, data centers, and large commercial establishments.
            </p>
            <div style={s.diaPoints}>
              {['Uncontended bandwidth — never shared', 'Symmetrical upload & download speeds', 'Static IP address included', '99.9% Uptime SLA', '24/7 monitoring & rapid response', 'Dedicated account manager', 'Custom enterprise agreements'].map(pt => (
                <div key={pt} style={s.diaPoint}>
                  <div style={s.diaDot}>✓</div>{pt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Perks bar */}
      <div style={s.perks}>
        {perks.map(p => (
          <div key={p.title} style={s.perkItem}>
            <div style={s.perkTitle}>{p.title}</div>
            <div style={s.perkDesc}>{p.desc}</div>
          </div>
        ))}
      </div>

    </div>
  );
}

Object.assign(window, { PlansPage });
