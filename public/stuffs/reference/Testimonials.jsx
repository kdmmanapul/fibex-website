// Testimonials.jsx — Social proof section

function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Santos',
      location: 'San Fernando, Pampanga',
      text: 'Finally, an ISP that actually delivers what they promise! I signed up for the BLAZE plan and my connection has been rock-solid since day one. No more buffering during our family video calls.',
      plan: 'FIBEX BLAZE',
      rating: 5,
      avatar: 'assets/avatar-maria.svg',
    },
    {
      name: 'Jomar Reyes',
      location: 'Macabebe, Pampanga',
      text: 'Nagtatrabaho ako sa bahay at dati palagi akong nag-a-apologize sa mga clients dahil sa connection. Since lumipat sa Fibex, wala na. Consistent speed, laging stable.',
      plan: 'FIBEX RUSH',
      rating: 5,
      avatar: 'assets/avatar-jomar.svg',
    },
    {
      name: 'Cafe de Pampa',
      location: 'Apalit, Pampanga',
      text: 'We run a cafe and needed stable WiFi for both our POS system and customers. Fibex Business Pro has been flawless. Installation was fast, support is responsive. Highly recommend!',
      plan: 'BUSINESS PRO',
      rating: 5,
      avatar: 'assets/avatar-cafe.svg',
    },
    {
      name: 'Angelo Cruz',
      location: 'Bitas, Pampanga',
      text: 'Hindi ko inexpect na ganito ka-consistent ang connection. Gaming, streaming, work — kaya ng kaya. Worth every peso. No hidden charges, exactly as advertised.',
      plan: 'FIBEX TURBO',
      rating: 5,
      avatar: 'assets/avatar-angelo.svg',
    },
    {
      name: 'Dr. Liza Mendoza',
      location: 'San Fernando, Pampanga',
      text: "Our clinic's telemedicine setup needed a reliable connection. Fibex delivered. The team was professional and the setup was clean. We've had zero downtime in months.",
      plan: 'BUSINESS PLUS',
      rating: 5,
      avatar: 'assets/avatar-liza.svg',
    },
    {
      name: 'Ryan Buenaventura',
      location: 'Masantol, Pampanga',
      text: "Matagal na kaming walang maaasahang internet dito sa amin. Fibex ang unang nagbigay ng tunay na fiber sa area namin. Grabe ang improvement sa aming pang-araw-araw.",
      plan: 'FIBEX ELITE',
      rating: 5,
      avatar: 'assets/avatar-ryan.svg',
    },
  ];

  const s = {
    section: { background: '#fff', padding: '96px 56px' },
    header: { textAlign: 'center', marginBottom: 56 },
    eyebrow: { fontFamily: "'Baufra', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#0119FE', marginBottom: 12 },
    h2: { fontFamily: "'Origin', sans-serif", fontWeight: 900, fontSize: 'clamp(32px, 4vw, 52px)', color: '#000', lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: 8 },
    sub: { fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: '#666' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 },
    card: { background: '#f5f5f5', borderRadius: 20, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 16 },
    stars: { display: 'flex', gap: 3 },
    star: { color: '#F12400', fontSize: 16 },
    quote: { fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: '#333', lineHeight: 1.75, flex: 1 },
    footer: { borderTop: '1px solid #e8e8e8', paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 },
    avatarWrap: { display: 'flex', alignItems: 'center', gap: 12 },
    avatar: { width: 48, height: 48, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid #e0e0e0' },
    name: { fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 14, color: '#000' },
    location: { fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: '#888', marginTop: 2 },
    planTag: { background: '#e6e9ff', color: '#0119FE', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 10, padding: '4px 10px', borderRadius: 6, letterSpacing: '0.04em', textTransform: 'uppercase', flexShrink: 0 },
    quoteIcon: { fontFamily: "'Origin', sans-serif", fontWeight: 900, fontSize: 48, color: '#e6e9ff', lineHeight: 0.8 },
  };

  return (
    <section style={s.section}>
      <div style={s.header}>
        <div style={s.eyebrow}>Testimonials</div>
        <h2 style={s.h2}>What our customers say.</h2>
        <p style={s.sub}>Real people. Real speeds. Real satisfaction.</p>
      </div>
      <div style={s.grid}>
        {testimonials.map(t => (
          <div key={t.name} style={s.card}>
            <div style={s.quoteIcon}>"</div>
            <div style={s.stars}>
              {[...Array(t.rating)].map((_, i) => <span key={i} style={s.star}>★</span>)}
            </div>
            <p style={s.quote}>{t.text}</p>
            <div style={s.footer}>
              <div style={s.avatarWrap}>
                <div style={s.avatar}>
                  <img src={t.avatar} alt={t.name} style={{ width: '100%', height: '100%', display: 'block' }} />
                </div>
                <div>
                  <div style={s.name}>{t.name}</div>
                  <div style={s.location}>{t.location}</div>
                </div>
              </div>
              <div style={s.planTag}>{t.plan}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Testimonials });
