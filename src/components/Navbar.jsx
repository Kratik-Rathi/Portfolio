import { useState, useEffect } from 'react'
import { useTheme } from '../ThemeContext.jsx'
import { meta } from '../data.js'

const navLinks = [
  { label: 'EXPERIENCE',     href: '#experience' },
  { label: 'TECH STACK',     href: '#stack' },
  { label: 'PROJECTS',       href: '#projects' },
  { label: 'CERTIFICATIONS', href: '#certifications' },
]

export default function Navbar() {
  const { isDark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const bar = {
    position:'fixed', top:0, left:0, right:0, zIndex:50, height:60,
    background: scrolled ? (isDark ? 'rgba(15,22,41,0.95)' : 'rgba(240,244,248,0.95)') : 'transparent',
    backdropFilter: scrolled ? 'blur(14px)' : 'none',
    borderBottom: `0.5px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
    transition: 'all 0.3s ease',
    display: 'flex', alignItems: 'center', padding: '0 28px', gap: 8,
  }

  const linkStyle = (href) => ({
    fontSize: 12, padding: '5px 13px', borderRadius: 6,
    letterSpacing: '0.08em', fontWeight: 600,
    color: active === href ? 'var(--accent)' : 'var(--muted)',
    background: active === href ? 'var(--accent-dim)' : 'transparent',
    transition: 'all 0.15s', textDecoration: 'none',
  })

  function lHov(e, href, on) {
    if (active !== href) {
      e.currentTarget.style.color = on ? 'var(--accent)' : 'var(--muted)'
      e.currentTarget.style.background = on ? 'var(--accent-dim)' : 'transparent'
    }
  }

  return (
    <nav style={bar}>
      <div style={{ fontFamily:'monospace', fontSize:16, fontWeight:800, color:'var(--text)', whiteSpace:'nowrap', letterSpacing:'0.02em' }}>
        <span style={{ color:'var(--accent)' }}>&lt;</span>
        {meta.initials}
        <span style={{ color:'var(--muted)' }}> /&gt;</span>
      </div>

      <div style={{ display:'flex', gap:4, flex:1, justifyContent:'center' }}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} style={linkStyle(l.href)}
            onClick={() => setActive(l.href)}
            onMouseEnter={e => lHov(e, l.href, true)}
            onMouseLeave={e => lHov(e, l.href, false)}
          >{l.label}</a>
        ))}
      </div>

      <button onClick={toggle} style={{
        width:36, height:36, borderRadius:8,
        border:'0.5px solid var(--border2)', background:'var(--bg2)',
        color:'var(--muted)', cursor:'pointer',
        display:'flex', alignItems:'center', justifyContent:'center',
        fontSize:16, transition:'all 0.2s', flexShrink:0,
      }}
        onMouseEnter={e => { e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.borderColor='var(--accent-border)' }}
        onMouseLeave={e => { e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.borderColor='var(--border2)' }}
      >{isDark ? '☀' : '🌙'}</button>

      <a href={`mailto:${meta.email}`} style={{
        fontSize:13, padding:'8px 20px', borderRadius:8,
        border:'1px solid var(--accent-border)', color:'var(--accent)',
        background:'transparent', transition:'all 0.2s',
        textDecoration:'none', whiteSpace:'nowrap', flexShrink:0, fontWeight:500,
      }}
        onMouseEnter={e => e.currentTarget.style.background='var(--accent-dim)'}
        onMouseLeave={e => e.currentTarget.style.background='transparent'}
      >Contact</a>
    </nav>
  )
}
