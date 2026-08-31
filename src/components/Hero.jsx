import { meta } from '../data.js'

const ROLES = [
  { label: 'Data Engineer',      color: '#34d399', bg: 'rgba(52,211,153,0.1)',  border: 'rgba(52,211,153,0.3)'  },
  { label: 'Data Analyst',       color: '#38bdf8', bg: 'rgba(56,189,248,0.1)',  border: 'rgba(56,189,248,0.3)'  },
  { label: 'AI Systems Builder', color: '#f472b6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.3)' },
]


export default function Hero() {
  const [n1, n2] = meta.name.split(' ')
  const base = import.meta.env.BASE_URL
  const LINKS = [
    { label: 'LinkedIn', href: meta.links.linkedin },
    { label: 'GitHub',   href: meta.links.github },
    { label: 'Tableau',  href: meta.links.tableau },
    { label: 'Resume ↗', href: `${base}${meta.links.resume}`, download: true },
  ]

  function lHov(e, on) {
    e.currentTarget.style.color       = on ? 'var(--accent)' : 'var(--text2)'
    e.currentTarget.style.borderColor = on ? 'var(--accent-border)' : 'var(--border2)'
    e.currentTarget.style.background  = on ? 'var(--accent-dim)' : 'transparent'
  }

  return (
    <section style={{ padding: '72px 48px 64px', animation: 'fadeUp 0.7s ease forwards' }}>

      {/* Supertitle — from data.js roles */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
        <div style={{ width: 36, height: 2.5, background: 'var(--accent)', borderRadius: 2 }} />
        <span style={{ fontSize: 12, color: 'var(--accent)', letterSpacing: '0.2em', fontWeight: 700, textTransform: 'uppercase' }}>
          {meta.roles.join(' · ')}
        </span>
      </div>

      {/* Two column layout */}
      <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start' }}>

        {/* LEFT — name + role pills */}
        <div style={{ flex: '0 0 auto' }}>
          {/* Name — from data.js */}
          <div style={{ lineHeight: 0.88, marginBottom: 32 }}>
            <div style={{ fontSize: 'clamp(80px, 12vw, 200px)', fontWeight: 900, letterSpacing: '-3px', color: 'var(--text)' }}>
              {n1}
            </div>
            <div style={{ fontSize: 'clamp(80px, 12vw, 200px)', fontWeight: 900, letterSpacing: '-3px', color: 'var(--accent)' }}>
              {n2}
            </div>
          </div>

          {/* Role pills */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {ROLES.map(r => (
              <span key={r.label} style={{ fontSize: 13, fontWeight: 500, color: r.color, background: r.bg, border: `1px solid ${r.border}`, borderRadius: 24, padding: '7px 16px' }}>
                {r.label}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — tagline, bio, links, meta */}
        <div style={{ flex: 1, paddingTop: 8 }}>

          {/* Tagline — driven entirely from data.js */}
          <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', lineHeight: 1.4, maxWidth: 520, marginBottom: 16 }}>
            {meta.tagline.parts.map((part, i) => (
              part.color
                ? <em key={i} style={{ color: part.color, fontStyle: 'italic' }}>{part.text}</em>
                : <span key={i}>{part.text}</span>
            ))}
          </div>

          {/* Bio — from data.js */}
          <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 520, marginBottom: 32 }}>
            {meta.bio}
          </div>

          {/* Social links — from data.js */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
            {LINKS.map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                download={l.download ? 'Kratik_Rathi_Resume.pdf' : undefined}
                style={{ fontSize: 13, fontWeight: 500, color: 'var(--text2)', border: '1px solid var(--border2)', borderRadius: 8, padding: '9px 20px', transition: 'all 0.2s' }}
                onMouseEnter={e => lHov(e, true)}
                onMouseLeave={e => lHov(e, false)}
              >{l.label}</a>
            ))}
          </div>

          {/* Meta pills — from data.js */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[meta.location, meta.degree].map((item, i) => (
              <span key={i} style={{ fontSize: 12, color: 'var(--muted)', border: '0.5px solid var(--border2)', borderRadius: 20, padding: '4px 14px', background: 'var(--bg2)' }}>
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
