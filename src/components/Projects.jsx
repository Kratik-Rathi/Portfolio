import { projects } from '../data.js'

const s = {
  section: { padding:'56px', borderTop:'0.5px solid #1a1a1a' },
  heading: { fontSize:11, color:'#444', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:40 },
  grid: { display:'flex', flexDirection:'column', gap:1 },
  card: { padding:'28px 0', borderBottom:'0.5px solid #141414', transition:'padding 0.2s' },
  top: { display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:16, marginBottom:10 },
  name: { fontSize:16, fontWeight:500, color:'#e0e0e0', lineHeight:1.3 },
  date: { fontSize:11, color:'#333', flexShrink:0, marginTop:3 },
  desc: { fontSize:13, color:'#e0e0e0', lineHeight:1.65, marginBottom:14, maxWidth:560 },
  tags: { display:'flex', flexWrap:'wrap', gap:5, marginBottom:12 },
  tag: { fontSize:10, color:'#3a3a3a', background:'#111', border:'0.5px solid #1c1c1c', borderRadius:3, padding:'2px 8px' },
  links: { display:'flex', gap:12 },
  link: { fontSize:12, color:'#6ee7b7', display:'flex', alignItems:'center', gap:4, transition:'opacity 0.2s' },
}

export default function Projects() {
  return (
    <section id="projects" style={s.section}>
      <div style={s.heading}>Projects</div>
      <div style={s.grid}>
        {projects.map((p, i) => (
          <div
            key={i}
            style={s.card}
            onMouseEnter={e => { e.currentTarget.querySelector('[data-name]').style.color = '#6ee7b7' }}
            onMouseLeave={e => { e.currentTarget.querySelector('[data-name]').style.color = '#e0e0e0' }}
          >
            <div style={s.top}>
              <div data-name style={s.name}>{p.name}</div>
              <div style={s.date}>{p.date}</div>
            </div>
            <div style={s.desc}>{p.desc}</div>
            <div style={s.tags}>
              {p.tags.map(t => <span key={t} style={s.tag}>{t}</span>)}
            </div>
            {p.links.length > 0 && (
              <div style={s.links}>
                {p.links.map(l => (
                  <a key={l.label} href={l.url} target="_blank" rel="noreferrer" style={s.link}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
