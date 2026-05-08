// Fibex Shared Components

function FibexEmblem({ size = 40, color = '#000' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.71 110.76" width={size} height={size} fill={color} style={{display:'block',flexShrink:0}}>
      <path d="M94.76,83.09l-10.29,10.25c-3.83,3.81-10.01,3.81-13.82-.01l-10.05-10.09c-3.81-3.83-3.81-10.01.02-13.83l6-5.97c3.83-3.81,3.83-10,.03-13.82l-9.67-9.69c-3.81-3.82-3.79-10.01.03-13.82L80.11,3.1c3.82-3.81,10-3.8,13.81.01l9.68,9.68c3.82,3.82,3.82,10.02-.01,13.83l-18.82,18.75c-3.83,3.81-3.83,10-.02,13.83l10.04,10.08c3.81,3.82,3.8,10-.02,13.81Z"/>
      <path d="M11.95,27.67l10.29-10.25c3.83-3.81,10.01-3.81,13.82.01l10.05,10.09c3.81,3.83,3.81,10.01-.02,13.83l-6,5.97c-3.83,3.81-3.83,10-.03,13.82l9.67,9.69c3.81,3.82,3.79,10.01-.03,13.82l-23.09,23.02c-3.82,3.81-10,3.8-13.81-.01l-9.68-9.68c-3.82-3.82-3.82-10.02.01-13.83l18.82-18.75c3.83-3.81,3.83-10,.02-13.83l-10.04-10.08c-3.81-3.82-3.8-10,.02-13.81Z"/>
    </svg>
  );
}

function FibexWordmark({ height = 28, color = '#000' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 626.15 122.12" height={height} fill={color} style={{display:'block'}}>
      <path d="M85.43.3H4.91C2.2.3,0,2.5,0,5.21v112c0,2.71,2.2,4.91,4.91,4.91h11.56c2.71,0,4.91-2.2,4.91-4.91v-39.28c0-2.71,2.2-4.91,4.91-4.91h51.6c2.71,0,4.91-2.2,4.91-4.91v-11.22c0-2.71-2.2-4.91-4.91-4.91H26.3c-2.71,0-4.91-2.2-4.91-4.91v-20.97c0-2.71,2.2-4.91,4.91-4.91h59.13c2.71,0,4.91-2.2,4.91-4.91V5.21c0-2.71-2.2-4.91-4.91-4.91Z"/>
      <rect x="145.21" y=".3" width="21.39" height="121.82" rx="4.91" ry="4.91"/>
      <path d="M310.61,62.12c-2.1-1.7-2.36-4.79-.65-6.88,4.04-4.95,6.62-11.85,6.62-21.02,0-15.91-10.78-34.22-40.04-34.22h-50.18c-2.71,0-4.91,2.2-4.91,4.91v112c0,2.71,2.2,4.91,4.91,4.91h53.09c27.38,0,42.94-14.03,42.94-34.05,0-12.19-5.28-20.36-11.79-25.65ZM242.85,25.62c0-2.71,2.2-4.91,4.91-4.91h30.16c13.17,0,17.28,7.36,17.28,14.54,0,10.44-8.04,15.4-18.65,15.4h-28.79c-2.71,0-4.91-2.2-4.91-4.91v-20.12ZM280.83,101.12h-33.07c-2.71,0-4.91-2.2-4.91-4.91v-20.46c0-2.71,2.2-4.91,4.91-4.91h31.7c16.08,0,21.56,8.21,21.56,15.91,0,8.39-5.82,14.37-20.19,14.37Z"/>
      <path d="M456.16.3h-82.06c-2.71,0-4.91,2.2-4.91,4.91v112c0,2.71,2.2,4.91,4.91,4.91h82.06c2.71,0,4.91-2.2,4.91-4.91v-11.05c0-2.71-2.2-4.91-4.91-4.91h-60.67c-2.71,0-4.91-2.2-4.91-4.91v-19.78c0-2.71,2.2-4.91,4.91-4.91h53.14c2.71,0,4.91-2.2,4.91-4.91v-11.22c0-2.71-2.2-4.91-4.91-4.91h-53.14c-2.71,0-4.91-2.2-4.91-4.91v-19.6c0-2.71,2.2-4.91,4.91-4.91h60.67c2.71,0,4.91-2.2,4.91-4.91V5.21c0-2.71-2.2-4.91-4.91-4.91Z"/>
      <path d="M625.12,114.21l-40.01-51.89c-1.36-1.76-1.36-4.22,0-5.99l36.97-48.13c2.48-3.23.18-7.9-3.9-7.9h-14.63c-1.54,0-2.99.72-3.91,1.94l-26.25,34.63c-1.97,2.6-5.87,2.59-7.84-.01l-26.1-34.61c-.93-1.23-2.38-1.95-3.92-1.95h-14.62c-4.07,0-6.38,4.67-3.9,7.9l36.97,48.13c1.36,1.77,1.35,4.23,0,5.99l-40.01,51.89c-2.49,3.23-.19,7.91,3.89,7.91h14.59c1.54,0,2.99-.72,3.92-1.96l29.18-38.71c1.96-2.6,5.87-2.61,7.84,0l29.33,38.73c.93,1.23,2.38,1.95,3.92,1.95h14.6c4.08,0,6.38-4.68,3.89-7.91Z"/>
    </svg>
  );
}

function FibexBtn({ children, variant = 'primary', size = 'md', onClick, style = {} }) {
  const [hovered, setHovered] = React.useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
    borderRadius: 9999, border: 'none', cursor: 'pointer',
    transition: 'all 0.15s', whiteSpace: 'nowrap', ...style,
  };
  const sizes = { sm: { fontSize: 12, padding: '8px 20px' }, md: { fontSize: 14, padding: '12px 28px' }, lg: { fontSize: 16, padding: '16px 36px' } };
  const variants = {
    primary:      { background: hovered ? '#0010cc' : '#0119FE', color: '#fff' },
    dark:         { background: hovered ? '#333' : '#000', color: '#fff' },
    red:          { background: hovered ? '#c01d00' : '#F12400', color: '#fff' },
    outline:      { background: 'transparent', color: '#000', border: '2px solid #000', ...(hovered ? { background: '#000', color: '#fff' } : {}) },
    outlineWhite: { background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.6)', ...(hovered ? { background: 'rgba(255,255,255,0.1)' } : {}) },
    whiteBlue:    { background: '#fff', color: hovered ? '#0010cc' : '#0119FE' },
  };
  return (
    <button
      style={{ ...base, ...sizes[size], ...variants[variant] }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >{children}</button>
  );
}

Object.assign(window, { FibexEmblem, FibexWordmark, FibexBtn });
