export default function NestCat() {
  return (
    <div className="animate-float animate-glow">
      <svg
        viewBox="0 0 400 500"
        xmlns="http://www.w3.org/2000/svg"
        width="340"
        height="425"
        aria-label="NestCat - gato vermelho estilo NestJS"
      >
        <defs>
          <radialGradient id="bodyGrad" cx="38%" cy="28%" r="70%">
            <stop offset="0%" stopColor="#F03560" />
            <stop offset="100%" stopColor="#B8173B" />
          </radialGradient>
          <radialGradient id="chestGrad" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#F5496A" />
            <stop offset="100%" stopColor="#E0234E" />
          </radialGradient>
          <radialGradient id="tailGrad" cx="20%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#F03560" />
            <stop offset="100%" stopColor="#C01A40" />
          </radialGradient>
          <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#80001F" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* ── Tail (behind body) ── */}
        <path
          className="animate-tail"
          d="M 272,345 C 332,312 368,225 350,152 C 335,97 295,88 276,122"
          fill="none"
          stroke="url(#tailGrad)"
          strokeWidth="26"
          strokeLinecap="round"
          filter="url(#soft-shadow)"
        />

        {/* ── Body ── */}
        <ellipse cx="200" cy="368" rx="90" ry="95" fill="url(#bodyGrad)" filter="url(#soft-shadow)" />

        {/* ── Chest lighter area ── */}
        <ellipse cx="200" cy="350" rx="54" ry="67" fill="url(#chestGrad)" />

        {/* ── NestJS emblem on chest (two overlapping wing shapes = "N") ── */}
        {/* Left wing */}
        <polygon
          points="182,318 194,292 206,318 194,340"
          fill="rgba(255,255,255,0.22)"
        />
        {/* Right wing — overlaps left creating N silhouette */}
        <polygon
          points="194,318 206,292 218,318 206,340"
          fill="rgba(255,255,255,0.18)"
        />
        {/* Center overlap highlight */}
        <polygon
          points="194,292 206,292 206,340 194,340"
          fill="rgba(255,255,255,0.05)"
        />

        {/* ── Front paws ── */}
        <ellipse cx="150" cy="453" rx="36" ry="21" fill="url(#bodyGrad)" filter="url(#soft-shadow)" />
        <ellipse cx="250" cy="453" rx="36" ry="21" fill="url(#bodyGrad)" filter="url(#soft-shadow)" />

        {/* Left paw claws */}
        <line x1="137" y1="460" x2="135" y2="469" stroke="#A0103A" strokeWidth="2" strokeLinecap="round" />
        <line x1="150" y1="462" x2="150" y2="471" stroke="#A0103A" strokeWidth="2" strokeLinecap="round" />
        <line x1="163" y1="460" x2="165" y2="469" stroke="#A0103A" strokeWidth="2" strokeLinecap="round" />

        {/* Right paw claws */}
        <line x1="237" y1="460" x2="235" y2="469" stroke="#A0103A" strokeWidth="2" strokeLinecap="round" />
        <line x1="250" y1="462" x2="250" y2="471" stroke="#A0103A" strokeWidth="2" strokeLinecap="round" />
        <line x1="263" y1="460" x2="265" y2="469" stroke="#A0103A" strokeWidth="2" strokeLinecap="round" />

        {/* ── Head ── */}
        <circle cx="200" cy="188" r="91" fill="url(#bodyGrad)" filter="url(#soft-shadow)" />

        {/* ── Ears — angular NestJS-style peaks ── */}
        {/* Left ear outer */}
        <polygon points="110,174 150,60 196,162" fill="#C01A3C" />
        {/* Left ear inner */}
        <polygon points="128,163 154,90 184,156" fill="#E8446A" />

        {/* Right ear outer */}
        <polygon points="204,162 250,60 290,174" fill="#C01A3C" />
        {/* Right ear inner */}
        <polygon points="216,156 246,90 272,163" fill="#E8446A" />

        {/* ── Forehead subtle highlight ── */}
        <ellipse cx="196" cy="153" rx="30" ry="20" fill="#F5496A" opacity="0.35" />

        {/* ── Eyes ── */}
        {/* Left eye - amber */}
        <g className="animate-blink-left">
          <ellipse cx="170" cy="182" rx="23" ry="19" fill="#FFC107" />
          <ellipse cx="170" cy="182" rx="8" ry="14" fill="#1C0800" />
          <ellipse cx="164" cy="175" rx="5" ry="6" fill="white" opacity="0.88" />
        </g>

        {/* Right eye - amber */}
        <g className="animate-blink-right">
          <ellipse cx="230" cy="182" rx="23" ry="19" fill="#FFC107" />
          <ellipse cx="230" cy="182" rx="8" ry="14" fill="#1C0800" />
          <ellipse cx="224" cy="175" rx="5" ry="6" fill="white" opacity="0.88" />
        </g>

        {/* ── Nose ── */}
        <polygon points="200,210 192,220 208,220" fill="#9E1030" />

        {/* ── Mouth ── */}
        <path
          d="M 192,220 Q 200,228 208,220"
          fill="none"
          stroke="#8A0E2A"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* ── Whiskers ── */}
        {/* Left whiskers */}
        <line x1="103" y1="207" x2="173" y2="211" stroke="rgba(255,220,220,0.75)" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="100" y1="219" x2="173" y2="219" stroke="rgba(255,220,220,0.75)" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="103" y1="231" x2="173" y2="227" stroke="rgba(255,220,220,0.75)" strokeWidth="1.6" strokeLinecap="round" />

        {/* Right whiskers */}
        <line x1="227" y1="211" x2="297" y2="207" stroke="rgba(255,220,220,0.75)" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="227" y1="219" x2="300" y2="219" stroke="rgba(255,220,220,0.75)" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="227" y1="227" x2="297" y2="231" stroke="rgba(255,220,220,0.75)" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </div>
  )
}
