// Contact.jsx — Fibex Contact Page

function ContactPage() {
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', plan: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim() || !form.email.includes('@')) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Required';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  const s = {
    page: { background: '#fff' },

    hero: {
      background: '#0119FE', padding: '120px 56px 80px',
      position: 'relative', overflow: 'hidden',
    },
    heroEyebrow: {
      fontFamily: "'Baufra', sans-serif", fontWeight: 700,
      fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.45)', marginBottom: 20,
    },
    heroH1: {
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 'clamp(44px, 5.5vw, 72px)', color: '#fff',
      lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: 20,
      maxWidth: 600,
    },
    heroSub: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 16,
      color: 'rgba(255,255,255,0.65)', maxWidth: 500, lineHeight: 1.7,
    },

    main: {
      display: 'grid', gridTemplateColumns: '1fr 1.2fr',
      gap: 0, maxWidth: '100%',
    },

    // Left info panel
    infoPanel: {
      background: '#0119FE', padding: '72px 56px',
    },
    infoH2: {
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 32, color: '#fff', marginBottom: 40, lineHeight: 1.1,
    },
    infoItems: { display: 'flex', flexDirection: 'column', gap: 36 },
    infoItem: { display: 'flex', gap: 20, alignItems: 'flex-start' },
    infoIcon: {
      width: 44, height: 44, borderRadius: 12,
      background: 'rgba(255,255,255,0.15)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    },
    infoLabel: {
      fontFamily: "'Baufra', sans-serif", fontWeight: 700,
      fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.35)', marginBottom: 6,
    },
    infoValue: {
      fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
      fontSize: 14, color: '#fff', lineHeight: 1.6,
    },
    infoNote: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 12,
      color: 'rgba(255,255,255,0.4)', marginTop: 3, lineHeight: 1.5,
    },

    hoursTable: {
      marginTop: 40, borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 32,
    },
    hoursTitle: {
      fontFamily: "'Baufra', sans-serif", fontWeight: 700,
      fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.35)', marginBottom: 16,
    },
    hourRow: {
      display: 'flex', justifyContent: 'space-between',
      fontFamily: "'Montserrat', sans-serif", fontSize: 13,
      color: 'rgba(255,255,255,0.6)', marginBottom: 8,
    },
    hourDay: { fontWeight: 600, color: '#fff' },

    // Right form panel
    formPanel: {
      background: '#f5f5f5', padding: '72px 56px',
    },
    formH2: {
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 32, color: '#000', marginBottom: 8,
    },
    formSub: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 14,
      color: '#888', marginBottom: 36, lineHeight: 1.6,
    },
    formGroup: { marginBottom: 20 },
    label: {
      display: 'block',
      fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
      fontSize: 12, color: '#000', marginBottom: 8,
      letterSpacing: '0.03em',
    },
    input: (err) => ({
      width: '100%', padding: '14px 18px', borderRadius: 12,
      border: `1.5px solid ${err ? '#F12400' : '#e0e0e0'}`,
      background: '#fff', fontSize: 14,
      fontFamily: "'Montserrat', sans-serif", color: '#000',
      outline: 'none', boxSizing: 'border-box',
      transition: 'border-color 0.15s',
    }),
    select: (err) => ({
      width: '100%', padding: '14px 18px', borderRadius: 12,
      border: `1.5px solid ${err ? '#F12400' : '#e0e0e0'}`,
      background: '#fff', fontSize: 14,
      fontFamily: "'Montserrat', sans-serif", color: '#000',
      outline: 'none', boxSizing: 'border-box', appearance: 'none',
    }),
    textarea: (err) => ({
      width: '100%', padding: '14px 18px', borderRadius: 12,
      border: `1.5px solid ${err ? '#F12400' : '#e0e0e0'}`,
      background: '#fff', fontSize: 14,
      fontFamily: "'Montserrat', sans-serif", color: '#000',
      outline: 'none', resize: 'vertical', minHeight: 120,
      boxSizing: 'border-box',
    }),
    errMsg: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 11,
      color: '#F12400', marginTop: 4,
    },
    row2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },

    // Success
    success: {
      background: '#f5f5f5', padding: '72px 56px',
      display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center',
    },
    successBadge: {
      display: 'inline-block',
      background: '#0119FE', color: '#fff',
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 13, padding: '10px 24px', borderRadius: 9999, marginBottom: 28,
    },
    successH2: {
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 40, color: '#000', lineHeight: 1.05, marginBottom: 16,
    },
    successSub: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 15,
      color: '#555', lineHeight: 1.75, maxWidth: 420,
    },
  };

  const contacts = [
    {
      label: 'Email', value: 'sales@fibexph.com',
      note: 'For plan inquiries & applications',
      icon: <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
    },
    {
      label: 'Mobile', value: '0967-348-2428',
      note: 'Call or text anytime',
      icon: <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg>,
    },
    {
      label: 'Landline', value: '(044) 305-8173',
      note: 'Office line — Mon to Fri',
      icon: <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg>,
    },
    {
      label: 'Main Office', value: 'Panipuan, San Fernando, Pampanga',
      note: 'Head office location',
      icon: <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
    },
    {
      label: 'Branch Office', value: 'Batasan, Macabebe, Pampanga',
      note: 'Serving Macabebe & Masantol',
      icon: <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    },
    {
      label: 'Website', value: 'www.fibexph.com',
      note: 'Visit us online',
      icon: <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    },
  ];

  const hours = [
    { day: 'Monday – Friday', time: '9:00 AM – 5:00 PM' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' },
  ];

  const plans = ['FIBEX ELITE (₱999 / 200 Mbps)', 'FIBEX RUSH (₱1,499 / 300 Mbps)', 'FIBEX BLAZE (₱1,999 / 400 Mbps)', 'FIBEX TURBO (₱2,499 / 500 Mbps)', 'FIBEX PREMIUM TURBO (₱7,999 / 1 Gbps)', 'Not sure — need help choosing'];

  return (
    <div style={s.page}>
      {/* Hero */}
      <div style={s.hero}>
        <div style={s.heroEyebrow}>Contact Fibex</div>
        <h1 style={s.heroH1}>We're here.<br/>Let's connect.</h1>
        <p style={s.heroSub}>The world of tech can be fast-paced and scary. That's why our goal is to provide an experience tailored to your needs. We guarantee you will be satisfied with our work.</p>
      </div>

      {/* Main 2-col layout */}
      <div style={s.main}>
        {/* Info panel */}
        <div style={s.infoPanel}>
          <h2 style={s.infoH2}>Get in touch.</h2>
          <div style={s.infoItems}>
            {contacts.map(c => (
              <div key={c.label} style={s.infoItem}>
                <div style={s.infoIcon}>{c.icon}</div>
                <div>
                  <div style={s.infoLabel}>{c.label}</div>
                  <div style={s.infoValue}>{c.value}</div>
                  <div style={s.infoNote}>{c.note}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={s.hoursTable}>
            <div style={s.hoursTitle}>Office Hours</div>
            {hours.map(h => (
              <div key={h.day} style={s.hourRow}>
                <span style={s.hourDay}>{h.day}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form panel */}
        {submitted ? (
          <div style={s.success}>
            <div style={s.successBadge}>Message received.</div>
            <h2 style={s.successH2}>We'll be in touch soon.</h2>
            <p style={s.successSub}>
              Thanks for reaching out! Our team will get back to you within 1–2 business days. In the meantime, feel free to call us at <strong>0967-348-2428</strong>.
            </p>
            <div style={{ marginTop: 32 }}>
              <FibexBtn variant="primary" onClick={() => setSubmitted(false)}>Send Another Message</FibexBtn>
            </div>
          </div>
        ) : (
          <div style={s.formPanel}>
            <h2 style={s.formH2}>Apply or inquire.</h2>
            <p style={s.formSub}>Fill out the form and our team will get back to you within 1–2 business days.</p>
            <form onSubmit={handleSubmit}>
              <div style={s.row2}>
                <div style={s.formGroup}>
                  <label style={s.label}>Full Name *</label>
                  <input
                    style={s.input(errors.name)}
                    placeholder="Juan dela Cruz"
                    value={form.name}
                    onChange={e => { setForm(f => ({...f, name: e.target.value})); setErrors(er => ({...er, name: ''})); }}
                  />
                  {errors.name && <div style={s.errMsg}>{errors.name}</div>}
                </div>
                <div style={s.formGroup}>
                  <label style={s.label}>Phone Number</label>
                  <input
                    style={s.input(false)}
                    placeholder="09XX-XXX-XXXX"
                    value={form.phone}
                    onChange={e => setForm(f => ({...f, phone: e.target.value}))}
                  />
                </div>
              </div>
              <div style={s.formGroup}>
                <label style={s.label}>Email Address *</label>
                <input
                  style={s.input(errors.email)}
                  placeholder="juan@email.com"
                  type="email"
                  value={form.email}
                  onChange={e => { setForm(f => ({...f, email: e.target.value})); setErrors(er => ({...er, email: ''})); }}
                />
                {errors.email && <div style={s.errMsg}>{errors.email}</div>}
              </div>
              <div style={s.formGroup}>
                <label style={s.label}>Interested Plan</label>
                <select
                  style={s.select(false)}
                  value={form.plan}
                  onChange={e => setForm(f => ({...f, plan: e.target.value}))}
                >
                  <option value="">Select a plan...</option>
                  {plans.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div style={s.formGroup}>
                <label style={s.label}>Message *</label>
                <textarea
                  style={s.textarea(errors.message)}
                  placeholder="Tell us your address, questions, or how we can help..."
                  value={form.message}
                  onChange={e => { setForm(f => ({...f, message: e.target.value})); setErrors(er => ({...er, message: ''})); }}
                />
                {errors.message && <div style={s.errMsg}>{errors.message}</div>}
              </div>
              <FibexBtn variant="primary" size="lg" style={{ width: '100%', marginTop: 8 }}>
                Send Message
              </FibexBtn>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { ContactPage });
