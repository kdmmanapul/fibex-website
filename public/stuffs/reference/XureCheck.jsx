// XureCheck.jsx — Plan matching quiz

function XureCheckPage({ onApply }) {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [selected, setSelected] = React.useState(null);

  const questions = [
    {
      id: 'usage',
      label: 'What do you mainly use the internet for?',
      options: ['Streaming & social media', 'Remote work & video calls', 'Gaming & heavy downloads', 'All of the above'],
    },
    {
      id: 'devices',
      label: 'How many devices connect at once?',
      options: ['1–2 devices', '3–5 devices', '6–10 devices', '10+ devices'],
    },
    {
      id: 'budget',
      label: "What's your monthly budget?",
      options: ['Under ₱1,000', '₱1,000–₱1,500', '₱1,500–₱2,000', '₱2,500 and up'],
    },
    {
      id: 'type',
      label: 'Who is this connection for?',
      options: ['Home & family', 'Work from home', 'Small business / SME', 'Gaming household'],
    },
  ];

  function getResult(ans) {
    const b = ans.budget;
    const d = ans.devices;
    const u = ans.usage;
    if (b === 'Under ₱1,000') return { name: 'FIBEX ELITE', price: '999', speed: '200 Mbps', desc: 'Everyday internet that just works. Perfect for households starting their fiber journey.' };
    if (b === '₱1,000–₱1,500') return { name: 'FIBEX RUSH', price: '1,499', speed: '300 Mbps', desc: 'Faster speeds for multitaskers and remote workers. Handles video calls with ease.' };
    if (b === '₱1,500–₱2,000') return { name: 'FIBEX BLAZE', price: '1,999', speed: '400 Mbps', desc: 'Blazing fast for gaming households, heavy streamers, and power users.' };
    if (d === '10+ devices' || u === 'All of the above') return { name: 'FIBEX PREMIUM TURBO', price: '7,999', speed: '1 Gbps', desc: 'Gigabit fiber for businesses and power households. The fastest we offer.' };
    return { name: 'FIBEX TURBO', price: '2,499', speed: '500 Mbps', desc: 'Maximum speed for serious streamers, heavy downloaders, and SMEs.' };
  }

  const handleSelect = (opt) => {
    setSelected(opt);
    setTimeout(() => {
      const newAnswers = { ...answers, [questions[step].id]: opt };
      setAnswers(newAnswers);
      setSelected(null);
      setStep(s => s + 1);
    }, 320);
  };

  const restart = () => { setStep(0); setAnswers({}); setSelected(null); };

  const s = {
    page: { background: '#0119FE', minHeight: '100vh', paddingTop: 68 },
    inner: {
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '80px 24px',
    },
    card: {
      background: '#fff', borderRadius: 28,
      padding: '56px 64px', width: '100%', maxWidth: 620,
    },
    eyebrow: {
      fontFamily: "'Baufra', sans-serif", fontWeight: 700,
      fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase',
      color: '#0119FE', marginBottom: 12,
    },
    h2: {
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 38, color: '#000', lineHeight: 1.05, marginBottom: 8,
    },
    sub: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 14,
      color: '#888', lineHeight: 1.65, marginBottom: 36,
    },
    progress: { display: 'flex', gap: 6, marginBottom: 36 },
    progressDot: (active, done) => ({
      height: 4, flex: 1, borderRadius: 4,
      background: done ? '#0119FE' : active ? '#0119FE' : '#e8e8e8',
      opacity: active ? 0.5 : 1,
      transition: 'all 0.2s',
    }),
    qLabel: {
      fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
      fontSize: 17, color: '#000', marginBottom: 24,
    },
    stepCounter: {
      fontFamily: "'Baufra', sans-serif", fontWeight: 700,
      fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase',
      color: '#bbb', marginBottom: 10,
    },
    optBtn: (active) => ({
      width: '100%', padding: '15px 20px', borderRadius: 14,
      border: `2px solid ${active ? '#0119FE' : '#e8e8e8'}`,
      background: active ? '#e6e9ff' : '#fff',
      cursor: 'pointer', textAlign: 'left', marginBottom: 10,
      fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 14,
      color: active ? '#0119FE' : '#333', transition: 'all 0.15s',
    }),
    resultEyebrow: {
      fontFamily: "'Baufra', sans-serif", fontWeight: 700,
      fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase',
      color: '#0119FE', marginBottom: 12,
    },
    resultTag: {
      display: 'inline-block',
      background: '#F12400', color: '#fff',
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 12, padding: '8px 20px', borderRadius: 9999, marginBottom: 20,
    },
    resultName: {
      fontFamily: "'Origin', sans-serif", fontWeight: 900,
      fontSize: 48, color: '#0119FE', lineHeight: 1, marginBottom: 4,
    },
    resultPrice: {
      fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
      fontSize: 28, color: '#000', marginBottom: 6,
    },
    resultSpeed: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 14,
      color: '#888', marginBottom: 16,
    },
    resultDesc: {
      fontFamily: "'Montserrat', sans-serif", fontSize: 14,
      color: '#555', lineHeight: 1.65, marginBottom: 28,
    },
    btnRow: { display: 'flex', gap: 12 },
    sideNote: {
      marginTop: 32, textAlign: 'center',
      fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.6)',
    },
  };

  if (step >= questions.length) {
    const r = getResult(answers);
    return (
      <div style={s.page}>
        <div style={s.inner}>
          <div style={s.card}>
            <div style={s.resultEyebrow}>XureCheck — Your result</div>
            <div style={s.resultTag}>#TransparencyIsKey</div>
            <div style={s.resultName}>{r.name.replace('FIBEX ', '')}</div>
            <div style={{ fontFamily: "'Origin', sans-serif", fontWeight: 900, fontSize: 18, color: '#000', marginBottom: 12 }}>{r.name}</div>
            <div style={s.resultPrice}>₱{r.price}<span style={{ fontWeight: 400, fontSize: 16 }}>/month</span></div>
            <div style={s.resultSpeed}>{r.speed} · Unlimited data · No lock-in · No hidden fees</div>
            <p style={s.resultDesc}>{r.desc}</p>
            <div style={s.btnRow}>
              <FibexBtn variant="primary" size="lg" onClick={() => onApply(r.name)}>Apply Now</FibexBtn>
              <FibexBtn variant="outline" size="lg" onClick={restart}>Retake Quiz</FibexBtn>
            </div>
          </div>
          <p style={s.sideNote}>Change your plan anytime. No penalties, no fine print.</p>
        </div>
      </div>
    );
  }

  const q = questions[step];

  return (
    <div style={s.page}>
      <div style={s.inner}>
        <div style={s.card}>
          <div style={s.eyebrow}>XureCheck — Be xure you're on the right plan</div>
          <h2 style={s.h2}>Find your plan.</h2>
          <p style={s.sub}>Answer {questions.length} quick questions. We'll match you to the speed you actually need — no upselling, no surprises.</p>
          <div style={s.progress}>
            {questions.map((_, i) => <div key={i} style={s.progressDot(i === step, i < step)} />)}
          </div>
          <div style={s.stepCounter}>Question {step + 1} of {questions.length}</div>
          <div style={s.qLabel}>{q.label}</div>
          <div>
            {q.options.map(opt => (
              <button key={opt} style={s.optBtn(selected === opt)}
                onClick={() => handleSelect(opt)}>
                {opt}
              </button>
            ))}
          </div>
        </div>
        <p style={s.sideNote}>No personal data collected. Just helping you find the right speed.</p>
      </div>
    </div>
  );
}

Object.assign(window, { XureCheckPage });
