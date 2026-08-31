import { useState, useEffect } from 'react'
import { meta, projects, certifications } from '../data.js'

// ── Shared heading ────────────────────────────────────────────
function SectionHeading({ children }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:20, marginBottom:48 }}>
      <h2 style={{ fontSize:32, fontWeight:700, color:'var(--text)', letterSpacing:'-0.5px', whiteSpace:'nowrap' }}>{children}</h2>
      <div style={{ flex:1, height:'0.5px', background:'var(--border2)' }}/>
    </div>
  )
}

// ── Splash ────────────────────────────────────────────────────
const SRC_COLOR  = '#22d3ee'
const PROC_COLOR = '#818cf8'
const DEST_COLOR = '#f472b6'

const CLOUDS = [
  { name:'AWS',        color:'#f59e0b' },
  { name:'GCP',        color:'#10b981' },
  { name:'Claude API', color:'#38bdf8' },
]
const SOURCES = [
  { title:'IRS / Gov Records',   sub:'Python · Alteryx · SQL' },
  { title:'Video / Social APIs', sub:'TikTok · YouTube · Whisper' },
  { title:'Legal Docs / Forms',  sub:'BeautifulSoup · PostgreSQL' },
  { title:'GPS / APC Sensors',   sub:'Transit · Validation' },
]
const PROCESSING = [
  { title:'Python ETL',         sub:'Pandas · DuckDB · Airflow' },
  { title:'RAG Pipelines',      sub:'LangChain · Milvus · FAISS' },
  { title:'ML / Deep Learning', sub:'PyTorch · Scikit-learn · CNN' },
]
const DESTINATIONS = [
  { title:'Dashboards',      sub:'Tableau · Power BI · Looker' },
  { title:'AI Interfaces',   sub:'Streamlit · FastAPI · React' },
  { title:'Data Warehouses', sub:'PostgreSQL · Snowflake · BQ' },
  { title:'ML Endpoints',    sub:'Docker · AWS EC2 · GCP' },
]
const SRC_TO_PROC  = [[0,0],[0,1],[1,1],[1,2],[2,0],[3,0],[3,2]]
const PROC_TO_DEST = [[0,0],[0,2],[1,1],[1,3],[2,0],[2,3]]

const VW=1200, VH=360, BW=200, BH=68, BG=14
const COL1=0, COL2=(VW-BW)/2, COL3=VW-BW
const colCY=(i,n)=>{ const t=n*BH+(n-1)*BG; return (VH-t)/2+i*(BH+BG)+BH/2 }
const srcCY=i=>colCY(i,SOURCES.length)
const procCY=i=>colCY(i,PROCESSING.length)
const destCY=i=>colCY(i,DESTINATIONS.length)

export function Splash({ onEnter }) {
  const [opacity, setOpacity] = useState(1)
  const [gone, setGone] = useState(false)

  function exit() { setOpacity(0); setTimeout(()=>{ setGone(true); onEnter() }, 500) }
  useEffect(()=>{ const t=setTimeout(exit,12000); return ()=>clearTimeout(t) },[])
  if (gone) return null

  const SRX=COL1+BW, PLX=COL2, PRX=COL2+BW, DLX=COL3

  return (
    <div onClick={exit} style={{
      position:'fixed', inset:0, zIndex:100,
      background:'radial-gradient(ellipse at 50% 30%, #0d1f3c 0%, #060c1a 65%, #030810 100%)',
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
      cursor:'pointer', userSelect:'none',
      opacity, transition:'opacity 0.5s ease', overflow:'hidden',
      padding:'20px',
    }}>
      <style>{`
        .sl{fill:none;stroke-width:1.3;stroke-dasharray:5 6;opacity:0.6;animation:da 2.2s linear infinite}
        .dl{fill:none;stroke-width:1.3;stroke-dasharray:5 6;opacity:0.6;animation:da 2.4s linear infinite}
        @keyframes da{from{stroke-dashoffset:200}to{stroke-dashoffset:-200}}
        @keyframes pu{0%,100%{opacity:0.5}50%{opacity:1}}
        .dot{animation:pu 2s ease-in-out infinite}
      `}</style>

      {/* Cloud pills */}
      <div style={{ display:'flex', gap:12, marginBottom:24 }}>
        {CLOUDS.map(c=>(
          <div key={c.name} style={{
            fontSize:12, fontFamily:'monospace', fontWeight:700,
            color:c.color, border:`1.5px solid ${c.color}55`,
            borderRadius:20, padding:'6px 18px', background:`${c.color}15`,
          }}>☁ {c.name}</div>
        ))}
      </div>

      {/* Column headers */}
      <div style={{ width:'100%', maxWidth:1400, display:'flex', marginBottom:10, padding:'0 10px' }}>
        {[['DATA SOURCES',SRC_COLOR],['PROCESSING LAYER',PROC_COLOR],['DESTINATIONS',DEST_COLOR]].map(([l,c])=>(
          <div key={l} style={{ flex:1, textAlign:'center', fontSize:9, color:c, letterSpacing:'0.18em', fontFamily:'monospace', fontWeight:700 }}>{l}</div>
        ))}
      </div>

      {/* SVG pipeline */}
      <svg viewBox={`0 0 ${VW} ${VH}`} width="100%" style={{ maxWidth:1400, display:'block' }} preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="gs" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="gp" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="gd" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Source → Processing lines */}
        {SRC_TO_PROC.map(([si,pi],i)=>{
          const mx=(SRX+PLX)/2
          return <path key={`sp${i}`} className="sl" stroke={SRC_COLOR}
            d={`M${SRX},${srcCY(si)} C${mx},${srcCY(si)} ${mx},${procCY(pi)} ${PLX},${procCY(pi)}`}
            style={{animationDelay:`${i*0.3}s`}}/>
        })}

        {/* Processing → Destination lines */}
        {PROC_TO_DEST.map(([pi,di],i)=>{
          const mx=(PRX+DLX)/2
          return <path key={`pd${i}`} className="dl" stroke={DEST_COLOR}
            d={`M${PRX},${procCY(pi)} C${mx},${procCY(pi)} ${mx},${destCY(di)} ${DLX},${destCY(di)}`}
            style={{animationDelay:`${i*0.35}s`}}/>
        })}

        {/* Source boxes */}
        {SOURCES.map((b,i)=>{
          const cx=COL1+BW/2, cy=srcCY(i)
          return <g key={`s${i}`} filter="url(#gs)">
            <rect x={COL1} y={cy-BH/2} width={BW} height={BH} rx={10} fill="#081a2e" stroke={SRC_COLOR} strokeWidth={1.5}/>
            <text x={cx} y={cy-10} textAnchor="middle" fill="#e2e8f0" fontSize={13} fontFamily="monospace" fontWeight={700}>{b.title}</text>
            <text x={cx} y={cy+12} textAnchor="middle" fill={SRC_COLOR} fillOpacity={0.8} fontSize={10} fontFamily="monospace">{b.sub}</text>
          </g>
        })}

        {/* Processing boxes */}
        {PROCESSING.map((b,i)=>{
          const cx=COL2+BW/2, cy=procCY(i)
          return <g key={`p${i}`} filter="url(#gp)">
            <rect x={COL2} y={cy-BH/2} width={BW} height={BH} rx={10} fill="#0d1040" stroke={PROC_COLOR} strokeWidth={1.5}/>
            <text x={cx} y={cy-10} textAnchor="middle" fill="#e2e8f0" fontSize={13} fontFamily="monospace" fontWeight={700}>{b.title}</text>
            <text x={cx} y={cy+12} textAnchor="middle" fill={PROC_COLOR} fillOpacity={0.8} fontSize={10} fontFamily="monospace">{b.sub}</text>
          </g>
        })}

        {/* Destination boxes */}
        {DESTINATIONS.map((b,i)=>{
          const cx=COL3+BW/2, cy=destCY(i)
          return <g key={`d${i}`} filter="url(#gd)">
            <rect x={COL3} y={cy-BH/2} width={BW} height={BH} rx={10} fill="#200818" stroke={DEST_COLOR} strokeWidth={1.5}/>
            <text x={cx} y={cy-10} textAnchor="middle" fill="#e2e8f0" fontSize={13} fontFamily="monospace" fontWeight={700}>{b.title}</text>
            <text x={cx} y={cy+12} textAnchor="middle" fill={DEST_COLOR} fillOpacity={0.8} fontSize={10} fontFamily="monospace">{b.sub}</text>
          </g>
        })}

        {/* Dots */}
        {[...new Set(SRC_TO_PROC.map(([si])=>si))].map(si=>(
          <circle key={`sd${si}`} className="dot" cx={SRX} cy={srcCY(si)} r={4.5} fill={SRC_COLOR}/>
        ))}
        {[...new Set(PROC_TO_DEST.map(([,di])=>di))].map(di=>(
          <circle key={`dd${di}`} className="dot" cx={DLX} cy={destCY(di)} r={4.5} fill={DEST_COLOR}/>
        ))}
      </svg>

      {/* Name */}
      <div style={{
        fontSize:56, fontWeight:900, letterSpacing:'-1.5px',
        color:'#ffffff', fontFamily:'monospace',
        marginTop:28, textAlign:'center',
        textShadow:`0 0 40px ${SRC_COLOR}, 0 0 80px ${SRC_COLOR}66`,
      }}>
        Kratik Rathi
      </div>

      {/* Subtitle */}
      <div style={{
        fontSize:11, color:'rgba(56,189,248,0.7)',
        letterSpacing:'0.22em', fontFamily:'monospace',
        marginTop:10, marginBottom:20, textTransform:'uppercase',
      }}>
        Data Engineer · Data Analyst · AI Systems
      </div>

      {/* CTA */}
      <div style={{
        fontSize:12, color:'rgba(56,189,248,0.6)',
        fontFamily:'monospace',
        border:'0.5px solid rgba(56,189,248,0.3)',
        borderRadius:20, padding:'6px 22px', letterSpacing:'0.05em',
      }}>
        click anywhere to continue →
      </div>
    </div>
  )
}

// ── Projects ──────────────────────────────────────────────────
export function Projects() {
  return (
    <section id="projects" style={{ padding:'72px 48px', borderTop:'0.5px solid var(--border)' }}>
      <SectionHeading>Projects</SectionHeading>
      <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
        {projects.map((p,i) => <ProjectCard key={i} project={p}/>)}
      </div>
    </section>
  )
}

function ProjectCard({ project:p }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{
        background: hov ? 'var(--card-hover)' : 'var(--card)',
        border:`0.5px solid ${hov ? 'var(--border2)' : 'var(--border)'}`,
        borderRadius:14, padding:'28px 32px', transition:'all 0.2s',
      }}
    >
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:16, marginBottom:10 }}>
        <div style={{ fontSize:18, fontWeight:700, color:'var(--text)', lineHeight:1.3 }}>{p.name}</div>
        <div style={{ fontSize:12, color:'var(--muted)', whiteSpace:'nowrap', paddingTop:3, flexShrink:0 }}>{p.date}</div>
      </div>
      <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:14 }}>
        {p.tags.map(t=>(
          <span key={t} style={{ fontSize:11, color:'var(--accent)', background:'var(--accent-dim)', border:'0.5px solid var(--accent-border)', borderRadius:4, padding:'2px 8px', fontFamily:'monospace' }}>{t}</span>
        ))}
      </div>
      <div style={{ fontSize:14, color:'var(--text2)', lineHeight:1.7, marginBottom: p.links.length ? 16 : 0 }}>{p.desc}</div>
      {p.links.length > 0 && (
        <div style={{ display:'flex', gap:16 }}>
          {p.links.map(l=>(
            <a key={l.label} href={l.url} target="_blank" rel="noreferrer"
              style={{ fontSize:13, color:'var(--accent)', fontWeight:500, transition:'opacity 0.15s' }}
              onMouseEnter={e=>e.currentTarget.style.opacity='0.7'}
              onMouseLeave={e=>e.currentTarget.style.opacity='1'}
            >{l.label} ↗</a>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Certifications ────────────────────────────────────────────
export function Certifications() {
  return (
    <section id="certifications" style={{ padding:'72px 48px', borderTop:'0.5px solid var(--border)' }}>
      <SectionHeading>Certifications &amp; Recognition</SectionHeading>
      {certifications.map(issuer=>(
        <div key={issuer.issuer} style={{ marginBottom:40 }}>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
            <span style={{ fontSize:16, fontWeight:600, color:'var(--text2)', textTransform:'uppercase', letterSpacing:'0.06em' }}>{issuer.issuer}</span>
            <span style={{ fontSize:11, color:'var(--accent)', background:'var(--accent-dim)', border:'0.5px solid var(--accent-border)', borderRadius:12, padding:'2px 10px', fontWeight:600 }}>{issuer.count}</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:14 }}>
            {issuer.items.map(cert=>(
              <div key={cert.name} style={{
                background:'var(--card)', border:'0.5px solid var(--border2)',
                borderTop:`2px solid var(--accent)`,
                borderRadius:10, padding:'20px 22px',
              }}>
                <div style={{ fontSize:11, color:'var(--accent)', fontFamily:'monospace', fontWeight:700, marginBottom:10 }}>{cert.code}</div>
                <div style={{ fontSize:15, fontWeight:600, color:'var(--text)', lineHeight:1.4, marginBottom:10 }}>{cert.name}</div>
                <div style={{ fontSize:11, color:'var(--muted)' }}>{cert.date}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer style={{ padding:'80px 48px', borderTop:'0.5px solid var(--border)', textAlign:'center' }}>
      <div style={{ fontSize:36, fontWeight:700, color:'var(--text)', letterSpacing:'-1px', marginBottom:14 }}>
        Let's build something together.
      </div>
      <div style={{ fontSize:15, color:'var(--muted)', lineHeight:1.7, maxWidth:440, margin:'0 auto 36px' }}>
        Open to data engineering, analytics, and AI systems roles — consulting engagements and technical collaborations welcome. My inbox is always open.
      </div>
      <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
        <a href={`mailto:${meta.email}`}
          style={{ fontSize:14, color:'#0f172a', background:'var(--accent)', borderRadius:8, padding:'12px 32px', fontWeight:700, transition:'opacity 0.2s' }}
          onMouseEnter={e=>e.currentTarget.style.opacity='0.85'}
          onMouseLeave={e=>e.currentTarget.style.opacity='1'}
        >Say Hello</a>
        <a href={meta.links.linkedin} target="_blank" rel="noreferrer"
          style={{ fontSize:14, color:'var(--muted)', border:'1px solid var(--border2)', borderRadius:8, padding:'12px 32px', transition:'all 0.2s', fontWeight:500 }}
          onMouseEnter={e=>{ e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.borderColor='var(--accent-border)' }}
          onMouseLeave={e=>{ e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.borderColor='var(--border2)' }}
        >LinkedIn</a>
      </div>
      <div style={{ fontSize:12, color:'var(--muted2)', marginTop:52 }}>© 2026 {meta.name}</div>
    </footer>
  )
}
