// Header.jsx — Fibex Site Header

function Header({ page, onNav }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = ['Home', 'Plans', 'About', 'Contact'];

  const s = {
    header: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
      boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.08)' : 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', height: 68,
      transition: 'box-shadow 0.2s',
    },
    logo: { display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' },
    nav: { display: 'flex', gap: 40, alignItems: 'center' },
    navLink: (active) => ({
      fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: 13,
      color: active ? '#0119FE' : '#000',
      cursor: 'pointer', letterSpacing: '0.05em', textTransform: 'uppercase',
      opacity: active ? 1 : 0.55, transition: 'opacity 0.15s, color 0.15s',
      paddingBottom: 2,
      borderBottom: active ? '2px solid #0119FE' : '2px solid transparent',
    }),
    cta: {
      background: '#0119FE', color: '#fff',
      fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 13,
      padding: '10px 24px', borderRadius: 9999, border: 'none', cursor: 'pointer',
      letterSpacing: '0.04em',
    },
  };

  return (
    <header style={s.header}>
      <div style={s.logo} onClick={() => onNav('Home')}>
        <FibexEmblem size={30} color="#0119FE" />
        <FibexWordmark height={18} color="#000" />
      </div>
      <nav style={s.nav}>
        {links.map(l => (
          <span key={l} style={s.navLink(page === l)} onClick={() => onNav(l)}>{l}</span>
        ))}
      </nav>
      <button style={s.cta} onClick={() => onNav('Contact')}>Apply Now</button>
    </header>
  );
}

Object.assign(window, { Header });
