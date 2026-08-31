import { useState } from 'react'
import { techStack } from '../data.js'

function SectionHeading({ children }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:20, marginBottom:40 }}>
      <h2 style={{ fontSize:32, fontWeight:700, color:'var(--text)', letterSpacing:'-0.5px', whiteSpace:'nowrap' }}>{children}</h2>
      <div style={{ flex:1, height:'0.5px', background:'var(--border2)' }}/>
    </div>
  )
}

export default function TechStack() {
  const [hoveredTag, setHoveredTag] = useState(null)

  return (
    <section id="stack" style={{ padding:'72px 48px', borderTop:'0.5px solid var(--border)' }}>
      <SectionHeading>Tech Stack</SectionHeading>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(240px, 1fr))', gap:14 }}>
        {techStack.map(group => (
          <div key={group.category} style={{ background:'var(--card)', border:'0.5px solid var(--border2)', borderRadius:14, padding:'22px' }}>
            <div style={{ fontSize:15, fontWeight:700, color:'var(--text)', marginBottom:16 }}>
              {group.category}
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
              {group.tags.map(tag => {
                const id = group.category + tag
                const isHov = hoveredTag === id
                return (
                  <span key={tag}
                    onMouseEnter={() => setHoveredTag(id)}
                    onMouseLeave={() => setHoveredTag(null)}
                    style={{
                      fontSize:12, fontFamily:'monospace',
                      color: isHov ? 'var(--accent)' : 'var(--text2)',
                      background: isHov ? 'var(--accent-dim)' : 'var(--bg)',
                      border:`0.5px solid ${isHov ? 'var(--accent-border)' : 'var(--border2)'}`,
                      borderRadius:6, padding:'4px 10px',
                      transition:'all 0.15s', cursor:'default', whiteSpace:'nowrap',
                    }}
                  >{tag}</span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
