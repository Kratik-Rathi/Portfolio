import { useState } from 'react'
import { experience } from '../data.js'

function SectionHeading({ children }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:20, marginBottom:48 }}>
      <h2 style={{ fontSize:32, fontWeight:700, color:'var(--text)', letterSpacing:'-0.5px', whiteSpace:'nowrap' }}>{children}</h2>
      <div style={{ flex:1, height:'0.5px', background:'var(--border2)' }}/>
    </div>
  )
}

function CompanyLogo({ logo, fallback, color }) {
  const [err, setErr] = useState(false)
  const base = import.meta.env.BASE_URL
  const logoSrc = logo ? `${base}${logo}` : null

  if (!logoSrc || err) {
    return (
      <div style={{ width:44, height:44, borderRadius:10, flexShrink:0, background:`${color}20`, border:`1px solid ${color}50`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:700, color, letterSpacing:'-0.5px' }}>{fallback}</div>
    )
  }
  return (
    <img src={logoSrc} alt="" onError={() => setErr(true)} style={{ width:44, height:44, borderRadius:10, flexShrink:0, objectFit:'contain', background:'var(--logo-bg)', padding:6, border:'0.5px solid var(--border2)' }}/>
  )
}

export default function Experience() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="experience" style={{ padding:'72px 48px', borderTop:'0.5px solid var(--border)' }}>
      <SectionHeading>Professional Journey</SectionHeading>

      <div style={{ position:'relative', paddingLeft:28 }}>
        <div style={{ position:'absolute', left:7, top:12, bottom:12, width:1.5, background:`linear-gradient(to bottom, var(--accent), var(--border2) 80%)`, opacity:0.4 }}/>

        {experience.map((job, i) => (
          <div key={i} style={{ position:'relative', marginBottom:14 }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{
              position:'absolute', left:-28, top:22,
              width:14, height:14, borderRadius:'50%',
              background: hovered===i ? 'var(--accent)' : 'var(--bg2)',
              border:`2px solid ${hovered===i ? 'var(--accent)' : 'var(--border2)'}`,
              boxShadow: hovered===i ? '0 0 12px var(--accent)' : 'none',
              transition:'all 0.2s',
            }}/>

            <div style={{
              background: hovered===i ? 'var(--card-hover)' : 'var(--card)',
              border:`0.5px solid ${hovered===i ? 'var(--border2)' : 'var(--border)'}`,
              borderRadius:14, padding:'20px 24px', transition:'all 0.2s',
            }}>
              <div style={{ display:'flex', gap:14, alignItems:'flex-start', marginBottom:14 }}>
                <CompanyLogo logo={job.logo} fallback={job.logoFallback} color={job.logoColor}/>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:8, flexWrap:'wrap' }}>
                    <div style={{ fontSize:16, fontWeight:700, color:'var(--text)' }}>{job.company}</div>
                    <div style={{ fontSize:11, color:'var(--muted)', whiteSpace:'nowrap', paddingTop:2 }}>{job.date}</div>
                  </div>
                  <div style={{ marginTop:4 }}>
                    <span style={{ fontSize:13, color:'var(--accent)', fontFamily:'monospace' }}>{job.role}</span>
                    <span style={{ fontSize:12, color:'var(--muted2)', marginLeft:8 }}>· {job.type}</span>
                  </div>
                </div>
              </div>
              <div style={{ paddingLeft:58 }}>
                {job.bullets.map((b, j) => (
                  <div key={j} style={{ display:'flex', gap:10, marginBottom:7, alignItems:'flex-start' }}>
                    <span style={{ color:'var(--accent)', fontSize:10, marginTop:4, flexShrink:0 }}>▹</span>
                    <span style={{ fontSize:13, color:'var(--text2)', lineHeight:1.65 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
