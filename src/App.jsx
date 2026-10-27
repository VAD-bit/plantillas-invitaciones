import React, { useState, useEffect } from 'react';

function AppIcon({ children, className = '', title = '' }) {
  return (
    <svg
      className={`icon-svg ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      aria-label={title || undefined}
    >
      {children}
    </svg>
  );
}

function CalendarIcon() {
  return (
    <AppIcon title="Fecha y hora">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 9.5h18" />
      <path d="M8 13h3v3H8z" />
    </AppIcon>
  );
}

function ChurchIcon() {
  return (
    <AppIcon title="Ceremonia religiosa">
      <path d="M3 9.5 12 3l9 6.5" />
      <path d="M5 9.5V20h14V9.5" />
      <path d="M9 20v-6h6v6M12 9.5V5.5M10 7.5h4" />
    </AppIcon>
  );
}

function CheersIcon() {
  return (
    <AppIcon title="Recepción">
      <path d="M4 9.5h16M7 9.5V7.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M8 12.5h8l-.8 6.5H8.8L8 12.5Z" />
      <path d="M10.5 15.5h3" />
    </AppIcon>
  );
}

function CheckIcon() {
  return (
    <AppIcon title="Aceptar">
      <path d="M5 12.5 9.5 17 19 7.5" />
    </AppIcon>
  );
}

function CloseIcon() {
  return (
    <AppIcon title="Rechazar">
      <path d="M7 7l10 10M17 7 7 17" />
    </AppIcon>
  );
}

function WhatsAppIcon() {
  return (
    <AppIcon title="WhatsApp">
      <path d="M20.2 11.3A8.2 8.2 0 1 1 8.8 4.8a8.2 8.2 0 0 1 11.4 6.5Z" />
      <path d="M13.6 15.6l1.4-3.9c.2-.7-.2-1.5-.9-1.8a5.1 5.1 0 0 0-2.6-.3 1.7 1.7 0 0 0-1.3 1l-.5.8c-.3.5.1 1.1.6 1.3l.8.4c.2.1.4.2.5.4l.6 1.4c.2.4.7.5 1.1.3l.3-.2c.4-.3.9-.7 1.2-1.1Z" />
    </AppIcon>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [isOpeningEnvelope, setIsOpeningEnvelope] = useState(false);
  const [responseState, setResponseState] = useState(null); // 'accepted' | 'declined' | null

  // WhatsApp phone number for notification
  const parentWhatsAppNumber = "+58 4145623930";

  const collageItems = [
    {
      type: 'image',
      src: '/ethan 6.jpeg',
      alt: 'Ethan en un retrato',
      className: 'wide',
    },
    {
      type: 'image',
      src: '/ethan 5.jpeg',
      alt: 'Ethan sonriendo',
      className: 'wide',
    },
    {
      type: 'video',
      src: '/ethan 2.mp4',
      poster: '/ethan 1.jpg',
      alt: 'Video de Ethan',
      className: 'video',
    },
    {
      type: 'image',
      src: '/ethan 1.jpg',
      alt: 'Ethan jugando',
      className: 'wide',
    },
    {
      type: 'image',
      src: '/ethan 2.jpg',
      alt: 'Ethan con su familia',
      className: 'large',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenEnvelope = () => {
    if (envelopeOpened || isOpeningEnvelope) return;
    setIsOpeningEnvelope(true);
    window.setTimeout(() => {
      setEnvelopeOpened(true);
      setIsOpeningEnvelope(false);
    }, 700);
  };

  const handleAccept = () => {
    setResponseState('accepted');
    if (window.confetti) {
      window.confetti({
        particleCount: 150,
        spread: 150,
        startVelocity: 50,
        origin: { x: 0.5, y: 0.72 },
        colors: ['#174f87', '#2589c5', '#63c5ed', '#d9f3ff', '#ffffff'],
        zIndex: 10000,
      });
      window.setTimeout(() => {
        window.confetti({
          particleCount: 90,
          spread: 120,
          startVelocity: 42,
          origin: { x: 0.12, y: 0.78 },
          colors: ['#174f87', '#2589c5', '#63c5ed', '#d9f3ff', '#ffffff'],
          zIndex: 10000,
        });
        window.confetti({
          particleCount: 90,
          spread: 120,
          startVelocity: 42,
          origin: { x: 0.88, y: 0.78 },
          colors: ['#174f87', '#2589c5', '#63c5ed', '#d9f3ff', '#ffffff'],
          zIndex: 10000,
        });
      }, 220);
    }
  };

  const handleDecline = () => {
    setResponseState('declined');
  };

  const confirmAttendanceWhatsApp = () => {
    const message = encodeURIComponent(
      '¡Hola! Confirmo con muchísima alegría que HE ACEPTADO SER EL PADRINO DE ETHAN 🤍 y sí asistiré al bautizo. ¡Nos vemos en la celebración!'
    );
    const whatsappUrl = `https://wa.me/${parentWhatsAppNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="painted-page min-h-screen flex flex-col justify-between relative selection:bg-sky-500/30 selection:text-sky-200 overflow-x-hidden font-sans">
      {responseState === 'accepted' && (
        <div className="celebration-balloons" aria-hidden="true">
          {Array.from({ length: 10 }, (_, index) => (
            <span
              className={`celebration-balloon celebration-balloon-${index + 1}`}
              key={index}
            >
              <span className="balloon-string" />
            </span>
          ))}
        </div>
      )}

      <div className="watercolor-flower watercolor-flower-left" aria-hidden="true">
        <svg viewBox="0 0 220 1000" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="stem-blue-left" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#365f83" />
              <stop offset="1" stopColor="#8bb2c3" />
            </linearGradient>
            <radialGradient id="petal-blue-left">
              <stop stopColor="#f7fbfa" />
              <stop offset=".6" stopColor="#9dbdcc" />
              <stop offset="1" stopColor="#557d9e" />
            </radialGradient>
            <filter id="soft-paint-left" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.8" />
            </filter>
          </defs>
          <g fill="none" stroke="url(#stem-blue-left)" strokeWidth="4" strokeLinecap="round" opacity=".78">
            <path d="M26 0C84 151 52 257 111 373S161 589 95 734 109 900 156 1000" />
            <path d="M62 180C95 171 125 151 145 120M94 321C60 307 42 281 32 252M134 518C168 492 179 463 185 429M103 693C68 679 47 655 35 623M112 842C148 817 166 791 174 758" />
          </g>
          <g fill="#7197a7" opacity=".55">
            <path d="M90 166C65 124 75 98 109 83C119 116 113 145 90 166Z" />
            <path d="M94 299C122 261 151 260 174 286C150 311 122 320 94 299Z" />
            <path d="M135 497C108 458 115 429 149 412C163 444 158 474 135 497Z" />
            <path d="M83 670C108 632 137 630 161 655C139 681 111 691 83 670Z" />
            <path d="M132 819C107 781 114 752 148 735C162 766 157 796 132 819Z" />
          </g>
          <g filter="url(#soft-paint-left)" opacity=".82">
            <g transform="translate(150 119)">
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(60)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(120)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(180)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(240)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(300)" />
              <circle r="9" fill="#d8bd87" />
            </g>
            <g transform="translate(32 252) scale(.8)">
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(60)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(120)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(180)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(240)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(300)" />
              <circle r="9" fill="#d8bd87" />
            </g>
            <g transform="translate(185 429) scale(1.1)">
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(60)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(120)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(180)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(240)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(300)" />
              <circle r="9" fill="#d8bd87" />
            </g>
            <g transform="translate(35 623) scale(.9)">
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(60)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(120)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(180)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(240)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(300)" />
              <circle r="9" fill="#d8bd87" />
            </g>
            <g transform="translate(174 758)">
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(60)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(120)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(180)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(240)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-left)" transform="rotate(300)" />
              <circle r="9" fill="#d8bd87" />
            </g>
          </g>
        </svg>
      </div>
      <div className="watercolor-flower watercolor-flower-right" aria-hidden="true">
        <svg viewBox="0 0 220 1000" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="stem-blue-right" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#365f83" />
              <stop offset="1" stopColor="#8bb2c3" />
            </linearGradient>
            <radialGradient id="petal-blue-right">
              <stop stopColor="#f7fbfa" />
              <stop offset=".6" stopColor="#9dbdcc" />
              <stop offset="1" stopColor="#557d9e" />
            </radialGradient>
            <filter id="soft-paint-right" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.8" />
            </filter>
          </defs>
          <g fill="none" stroke="url(#stem-blue-right)" strokeWidth="4" strokeLinecap="round" opacity=".78">
            <path d="M194 0C136 151 168 257 109 373S59 589 125 734 111 900 64 1000" />
            <path d="M158 180C125 171 95 151 75 120M126 321C160 307 178 281 188 252M86 518C52 492 41 463 35 429M117 693C152 679 173 655 185 623M108 842C72 817 54 791 46 758" />
          </g>
          <g fill="#7197a7" opacity=".55">
            <path d="M130 166C155 124 145 98 111 83C101 116 107 145 130 166Z" />
            <path d="M126 299C98 261 69 260 46 286C70 311 98 320 126 299Z" />
            <path d="M85 497C112 458 105 429 71 412C57 444 62 474 85 497Z" />
            <path d="M137 670C112 632 83 630 59 655C81 681 109 691 137 670Z" />
            <path d="M88 819C113 781 106 752 72 735C58 766 63 796 88 819Z" />
          </g>
          <g filter="url(#soft-paint-right)" opacity=".82">
            <g transform="translate(70 119)">
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(60)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(120)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(180)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(240)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(300)" />
              <circle r="9" fill="#d8bd87" />
            </g>
            <g transform="translate(188 252) scale(.8)">
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(60)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(120)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(180)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(240)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(300)" />
              <circle r="9" fill="#d8bd87" />
            </g>
            <g transform="translate(35 429) scale(1.1)">
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(60)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(120)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(180)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(240)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(300)" />
              <circle r="9" fill="#d8bd87" />
            </g>
            <g transform="translate(185 623) scale(.9)">
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(60)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(120)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(180)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(240)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(300)" />
              <circle r="9" fill="#d8bd87" />
            </g>
            <g transform="translate(46 758)">
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(60)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(120)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(180)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(240)" />
              <ellipse cy="-22" rx="12" ry="23" fill="url(#petal-blue-right)" transform="rotate(300)" />
              <circle r="9" fill="#d8bd87" />
            </g>
          </g>
        </svg>
      </div>

      {/* AMBIENT GLOW & LUXURY BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-sky-600/20 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* MAIN CONTAINER */}
      <main className="relative z-10 max-w-2xl mx-auto px-4 py-12 sm:py-20 w-full flex-grow flex flex-col items-center">

        {/* HEADER / BADGE */}
        <div className={`text-center mb-8 transition-all duration-1000 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-sky-500/10 text-sky-400 border border-sky-500/30 shadow-lg shadow-sky-500/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            Bautizo & Consagración · 2026
          </div>
          <h1 className="painted-title font-serif text-5xl sm:text-7xl font-black tracking-tight bg-gradient-to-r from-white via-sky-100 to-sky-300 bg-clip-text text-transparent">
            Ethan
          </h1>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mt-2 font-medium">Una invitación sagrada y eterna</p>
        </div>

        <section className="collage-section w-full mb-8">
          <div className="collage-header text-center mb-4">
            <span className="collage-kicker">Mi pequeño Ethan</span>
            <h2 className="collage-title">Momentos que llenan el corazón</h2>
          </div>

          <div className="collage-grid">
            {collageItems.map((item, index) => (
              <div key={`${item.type}-${index}`} className={`collage-item ${item.className}`}>
                {item.type === 'video' ? (
                  <video
                    className="collage-media"
                    src={item.src}
                    poster={item.poster}
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                ) : (
                  <img className="collage-media" src={item.src} alt={item.alt} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* MAIN LUXURY GLASS CARD */}
        <div className={`painted-card w-full rounded-3xl p-6 sm:p-10 bg-slate-900/80 backdrop-blur-2xl border border-slate-800/80 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] text-center relative overflow-hidden transition-all duration-1000 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

          {/* ==================================================== */}
          {/* IMAGEN DE MI HIJO ETHAN:                              */}
          {/* Reemplaza el 'src' con la ruta de tu foto            */}
          {/* ==================================================== */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 to-amber-400 blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative w-full h-full rounded-full p-1 bg-slate-950 border border-slate-700/80 overflow-hidden shadow-2xl">
              <img
                id="ethan-img"
                src="/ethan 7.jpeg"
                alt="Ethan"
                className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* PERSONALIZED GREETING */}
          <div className="mb-8 space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100">
              Querido <span className="font-cursive text-4xl sm:text-5xl text-sky-400 font-normal">[Nombre del Padrino]</span>,
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-light tracking-wide">
              quería hacerte una pregunta muy importante...
            </p>
          </div>

          {/* ENVELOPE BUTTON */}
          {!envelopeOpened && responseState !== 'declined' && (
            <div className="my-6">
              <button
                type="button"
                onClick={handleOpenEnvelope}
                className={`letter-button ${isOpeningEnvelope ? 'is-opening' : ''}`}
                aria-label="Abrir carta especial"
              >
                <span className="envelope-body" aria-hidden="true" />
                <span className="envelope-letter" aria-hidden="true" />
                <span className="envelope-fold envelope-fold-left" aria-hidden="true" />
                <span className="envelope-fold envelope-fold-right" aria-hidden="true" />
                <span className="envelope-flap" aria-hidden="true" />
                <span className="envelope-seal" aria-hidden="true">✿</span>
                <span className="letter-button__text">
                  <span className="letter-button__name">Ethan</span>
                  <span className="letter-button__label">Abrir carta especial</span>
                </span>
              </button>
            </div>
          )}

          {/* INVITATION MESSAGE REVEALED ON ENVELOPE CLICK */}
          {envelopeOpened && responseState !== 'declined' && responseState !== 'accepted' && (
            <div className="message-panel is-visible space-y-6 pt-6 border-t border-slate-800 animate-fadeIn">
              <div className="watercolor-note p-6 bg-slate-950/60 rounded-2xl border border-sky-500/20 shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />
                <p className="font-serif italic text-lg sm:text-xl text-slate-200 leading-relaxed">
                  "Eres una persona muy importante para mí y quería preguntarte si quisieras ser mi padrino y así compartir conmigo en familia momentos únicos y especiales juntos."
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400 mt-4">
                  — Con todo el amor de Ethan y su familia
                </p>
              </div>

              {/* RSVP BUTTONS */}
              <div className="pt-2">
                <h3 className="font-serif font-bold text-slate-100 text-lg mb-4">
                  ¿Aceptas ser el padrino de Ethan?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={handleAccept}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-3 border border-emerald-400/30 cursor-pointer"
                  >
                    <CheckIcon className="text-lg" />
                    <span>Sí, acepto con orgullo 🤍</span>
                  </button>
                  <button
                    onClick={handleDecline}
                    className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold transition-all flex items-center justify-center gap-2 border border-slate-700 cursor-pointer"
                  >
                    <CloseIcon className="text-lg" />
                    <span>No Acepto</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* DECLINED VIEW */}
          {responseState === 'declined' && (
            <div className="mt-6 text-center py-8 animate-fadeIn space-y-3">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-400 text-2xl border border-slate-700 shadow-inner">
                <i className="fa-solid fa-dove"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-100">
                Agradecemos tu sincera respuesta
              </h3>
              <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed font-light">
                Muchas gracias por considerarlo. ¡Entendemos perfectamente y sabemos que nos acompañas con el corazón! 🤍
              </p>
             </div>
          )}

        </div>

        {/* ACCEPTED SCREEN / INVITATION DETAILS */}
        {responseState === 'accepted' && (
          <div className="w-full space-y-6 animate-fadeIn">
            <div className="painted-details w-full rounded-3xl p-6 sm:p-10 bg-slate-900/90 backdrop-blur-2xl border border-slate-800 shadow-2xl relative overflow-hidden">

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500" />

              <div className="text-center mb-8 space-y-2">
                <h3 className="font-serif text-3xl font-bold text-white">
                  Detalles del Sagrado Bautizo
                </h3>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                  ¡Estás cordialmente invitado a celebrar este momento único!
                </p>
              </div>

              {/* EDITABLE MANUAL FIELDS FOR INVITATION DETAILS */}
              <div className="watercolor-details-list space-y-4 bg-slate-950/70 p-6 rounded-2xl border border-slate-800 mb-8 text-left">

                {/* Date & Time */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <div className="detail-icon-badge w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                    <CalendarIcon />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-200 text-sm">Fecha y Hora</h4>
                    <p className="text-sm text-slate-300 font-medium">[ Escribe aquí la fecha, ej: Sábado 15 de Noviembre de 2026 ]</p>
                    <p className="text-xs text-sky-400 font-medium">[ Escribe aquí la hora, ej: 12:00 PM ]</p>
                  </div>
                </div>

                {/* Church / Ceremony */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <div className="detail-icon-badge w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                    <ChurchIcon />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-200 text-sm">Ceremonia Religiosa</h4>
                    <p className="text-sm text-slate-300 font-medium">[ Escribe aquí el nombre de la Parroquia / Iglesia ]</p>
                    <p className="text-xs text-slate-400">[ Escribe aquí la dirección exacta ]</p>
                  </div>
                </div>

                {/* Reception */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <div className="detail-icon-badge w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                    <CheersIcon />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-200 text-sm">Recepción / Celebración</h4>
                    <p className="text-sm text-slate-300 font-medium">[ Escribe aquí el nombre del Salón o lugar de festejo ]</p>
                    <p className="text-xs text-slate-400">[ Escribe aquí la dirección del salón ]</p>
                  </div>
                </div>

              </div>

              {/* CONFIRM ATTENDANCE BUTTON (WHATSAPP REDIRECT) */}
              <div className="text-center">
                <button
                  onClick={confirmAttendanceWhatsApp}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl shadow-emerald-600/30 transform hover:-translate-y-0.5 transition-all border border-emerald-400/30 cursor-pointer"
                >
                  <WhatsAppIcon className="text-2xl" />
                  <span>Confirmar Asistencia por WhatsApp</span>
                </button>
                <p className="text-xs text-slate-400 mt-3 font-light italic">
                  Al hacer clic, se abrirá WhatsApp para enviarnos tu confirmación.
                </p>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-xs text-slate-400 border-t border-slate-800/80 mt-12 bg-slate-950/50">
        <p className="font-serif italic text-slate-300">Con todo el amor del mundo — Familia de Ethan 🤍</p>
      </footer>

    </div>
  );
}
