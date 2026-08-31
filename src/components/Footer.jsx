import { meta } from '../data.js'

const s = {
  footer: { padding:'72px 56px', borderTop:'0.5px solid #1a1a1a', textAlign:'center' },
  cta: { fontSize:32, fontWeight:700, color:'#f0f0f0', letterSpacing:'-1px', marginBottom:10 },
  sub: { fontSize:14, color:'#444', lineHeight:1.6, maxWidth:440, margin:'0 auto 32px' },
  btns: { display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' },
  btnPrimary: { fontSize:13, color:'#0a0a0a', background:'#6ee7b7', borderRadius:6, padding:'10px 24px', fontWeight:600, transition:'opacity 0.2s', textDecoration:'none' },
  btnSecondary: { fontSize:13, color:'#888', border:'0.5px solid #2a2a2a', borderRadius:6, padding:'10px 24px', transition:'all 0.2s', textDecoration:'none' },
  credit: { fontSize:11, color:'#222', marginTop:40 },
}

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.cta}>Let's build something together.</div>
      <div style={s.sub}>
        Open to data science and AI engineering roles, consulting engagements, and technical collaborations. My inbox is always open.
      </div>
      <div style={s.btns}>
        <a href={`mailto:${meta.email}`} style={s.btnPrimary}
          onMouseEnter={e => e.currentTarget.style.opacity='0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity='1'}
        >
          Say Hello
        </a>
        <a href={meta.links.linkedin} target="_blank" rel="noreferrer" style={s.btnSecondary}
          onMouseEnter={e => { e.currentTarget.style.color='#6ee7b7'; e.currentTarget.style.borderColor='rgba(110,231,183,0.3)' }}
          onMouseLeave={e => { e.currentTarget.style.color='#888'; e.currentTarget.style.borderColor='#2a2a2a' }}
        >
          LinkedIn
        </a>
      </div>
      <div style={s.credit}>© 2026 {meta.name}</div>
    </footer>
  )
}
