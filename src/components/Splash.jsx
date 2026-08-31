import { useState, useEffect } from 'react'

const SRC_COLOR  = '#22d3ee'
const PROC_COLOR = '#818cf8'
const DEST_COLOR = '#f472b6'

const CLOUDS = [
  { name: 'AWS',        color: '#f59e0b' },
  { name: 'GCP',        color: '#10b981' },
  { name: 'Claude API', color: '#38bdf8' },
]

const SOURCES = [
  { title: 'IRS / Gov Records',   sub: 'Python · Alteryx · SQL' },
  { title: 'Video / Social APIs', sub: 'TikTok · YouTube · Whisper' },
  { title: 'Legal Docs / Forms',  sub: 'BeautifulSoup · PostgreSQL' },
  { title: 'GPS / APC Sensors',   sub: 'Transit · Validation' },
]

const PROCESSING = [
  { title: 'Python ETL',         sub: 'Pandas · DuckDB · Airflow' },
  { title: 'RAG Pipelines',      sub: 'LangChain · Milvus · FAISS' },
  { title: 'ML / Deep Learning', sub: 'PyTorch · Scikit-learn · CNN' },
]

const DESTINATIONS = [
  { title: 'Dashboards',      sub: 'Tableau · Power BI · Looker' },
  { title: 'AI Interfaces',   sub: 'Streamlit · FastAPI · React' },
  { title: 'Data Warehouses', sub: 'PostgreSQL · Snowflake · BQ' },
  { title: 'ML Endpoints',    sub: 'Docker · AWS EC2 · GCP' },
]

const SRC_TO_PROC  = [[0,0],[0,1],[1,1],[1,2],[2,0],[3,0],[3,2]]
const PROC_TO_DEST = [[0,0],[0,2],[1,1],[1,3],[2,0],[2,3]]

const VW = 1200
const VH = 360
const BW = 200
const BH = 68
const BG = 14

const COL1 = 0
const COL2 = (VW - BW) / 2
const COL3 = VW - BW

function colCY(i, count) {
  const total = count * BH + (count - 1) * BG
  const start = (VH - total) / 2
  return start + i * (BH + BG) + BH / 2
}

const srcCY  = i => colCY(i, SOURCES.length)
const procCY = i => colCY(i, PROCESSING.length)
const destCY = i => colCY(i, DESTINATIONS.length)

const SRC_RX  = COL1 + BW
const PROC_LX = COL2
const PROC_RX = COL2 + BW
const DEST_LX = COL3

export default function Splash({ onEnter }) {
  const [opacity, setOpacity] = useState(1)
  const [gone, setGone]       = useState(false)

  function exit() {
    setOpacity(0)
    setTimeout(() => { setGone(true); onEnter() }, 500)
  }

  useEffect(() => {
    const t = setTimeout(exit, 12000)
    return () => clearTimeout(t)
  }, [])

  if (gone) return null

  return (
    <div
      onClick={exit}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'radial-gradient(ellipse at 50% 30%, #0d1f3c 0%, #060c1a 65%, #030810 100%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', userSelect: 'none',
        opacity, transition: 'opacity 0.5s ease',
        overflow: 'hidden', padding: '20px',
      }}
    >
      <style>{`
        .src-line  { fill:none; stroke:${SRC_COLOR};  stroke-width:1.3; stroke-dasharray:5 6; opacity:0.6; animation:dash 2.2s linear infinite; }
        .dest-line { fill:none; stroke:${DEST_COLOR}; stroke-width:1.3; stroke-dasharray:5 6; opacity:0.6; animation:dash 2.4s linear infinite; }
        @keyframes dash  { from{stroke-dashoffset:200} to{stroke-dashoffset:-200} }
        @keyframes pulse { 0%,100%{opacity:0.5} 50%{opacity:1} }
        .dot { animation: pulse 2s ease-in-out infinite; }
      `}</style>

      {/* Cloud pills */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
        {CLOUDS.map(c => (
          <div key={c.name} style={{
            fontSize: 12, fontFamily: 'monospace', fontWeight: 700,
            color: c.color, border: `1.5px solid ${c.color}55`,
            borderRadius: 20, padding: '6px 18px', background: `${c.color}15`,
          }}>
            ☁ {c.name}
          </div>
        ))}
      </div>

      {/* Column headers */}
      <div style={{ width: '100%', maxWidth: 1400, display: 'flex', marginBottom: 10, padding: '0 10px' }}>
        <div style={{ flex:1, textAlign:'center', fontSize:9, color:SRC_COLOR,  letterSpacing:'0.18em', fontFamily:'monospace', fontWeight:700 }}>DATA SOURCES</div>
        <div style={{ flex:1, textAlign:'center', fontSize:9, color:PROC_COLOR, letterSpacing:'0.18em', fontFamily:'monospace', fontWeight:700 }}>PROCESSING LAYER</div>
        <div style={{ flex:1, textAlign:'center', fontSize:9, color:DEST_COLOR, letterSpacing:'0.18em', fontFamily:'monospace', fontWeight:700 }}>DESTINATIONS</div>
      </div>

      {/* SVG pipeline */}
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        width="100%"
        style={{ maxWidth: 1400, display: 'block' }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow-src" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glow-proc" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glow-dest" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {SRC_TO_PROC.map(([si, pi], i) => {
          const mx = (SRC_RX + PROC_LX) / 2
          return (
            <path key={`sp${i}`} className="src-line"
              d={`M${SRC_RX},${srcCY(si)} C${mx},${srcCY(si)} ${mx},${procCY(pi)} ${PROC_LX},${procCY(pi)}`}
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          )
        })}

        {PROC_TO_DEST.map(([pi, di], i) => {
          const mx = (PROC_RX + DEST_LX) / 2
          return (
            <path key={`pd${i}`} className="dest-line"
              d={`M${PROC_RX},${procCY(pi)} C${mx},${procCY(pi)} ${mx},${destCY(di)} ${DEST_LX},${destCY(di)}`}
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          )
        })}

        {SOURCES.map((b, i) => {
          const cx = COL1 + BW / 2, cy = srcCY(i)
          return (
            <g key={`s${i}`} filter="url(#glow-src)">
              <rect x={COL1} y={cy-BH/2} width={BW} height={BH} rx={10} fill="#081a2e" stroke={SRC_COLOR} strokeWidth={1.5}/>
              <text x={cx} y={cy-10} textAnchor="middle" fill="#e2e8f0" fontSize={13} fontFamily="monospace" fontWeight={700}>{b.title}</text>
              <text x={cx} y={cy+12} textAnchor="middle" fill={SRC_COLOR} fillOpacity={0.8} fontSize={10} fontFamily="monospace">{b.sub}</text>
            </g>
          )
        })}

        {PROCESSING.map((b, i) => {
          const cx = COL2 + BW / 2, cy = procCY(i)
          return (
            <g key={`p${i}`} filter="url(#glow-proc)">
              <rect x={COL2} y={cy-BH/2} width={BW} height={BH} rx={10} fill="#0d1040" stroke={PROC_COLOR} strokeWidth={1.5}/>
              <text x={cx} y={cy-10} textAnchor="middle" fill="#e2e8f0" fontSize={13} fontFamily="monospace" fontWeight={700}>{b.title}</text>
              <text x={cx} y={cy+12} textAnchor="middle" fill={PROC_COLOR} fillOpacity={0.8} fontSize={10} fontFamily="monospace">{b.sub}</text>
            </g>
          )
        })}

        {DESTINATIONS.map((b, i) => {
          const cx = COL3 + BW / 2, cy = destCY(i)
          return (
            <g key={`d${i}`} filter="url(#glow-dest)">
              <rect x={COL3} y={cy-BH/2} width={BW} height={BH} rx={10} fill="#200818" stroke={DEST_COLOR} strokeWidth={1.5}/>
              <text x={cx} y={cy-10} textAnchor="middle" fill="#e2e8f0" fontSize={13} fontFamily="monospace" fontWeight={700}>{b.title}</text>
              <text x={cx} y={cy+12} textAnchor="middle" fill={DEST_COLOR} fillOpacity={0.8} fontSize={10} fontFamily="monospace">{b.sub}</text>
            </g>
          )
        })}

        {[...new Set(SRC_TO_PROC.map(([si]) => si))].map(si => (
          <circle key={`sdot${si}`} className="dot" cx={SRC_RX} cy={srcCY(si)} r={4.5} fill={SRC_COLOR}/>
        ))}
        {[...new Set(PROC_TO_DEST.map(([,di]) => di))].map(di => (
          <circle key={`ddot${di}`} className="dot" cx={DEST_LX} cy={destCY(di)} r={4.5} fill={DEST_COLOR}/>
        ))}
      </svg>

      {/* Name */}
      <div style={{
        fontSize: 56, fontWeight: 900, letterSpacing: '-1.5px',
        color: '#ffffff', fontFamily: 'monospace',
        marginTop: 28, textAlign: 'center',
        textShadow: `0 0 40px ${SRC_COLOR}, 0 0 80px ${SRC_COLOR}66`,
      }}>
        Kratik Rathi
      </div>

      {/* Subtitle */}
      <div style={{
        fontSize: 11, color: 'rgba(56,189,248,0.7)',
        letterSpacing: '0.22em', fontFamily: 'monospace',
        marginTop: 10, marginBottom: 20, textTransform: 'uppercase',
      }}>
        Data Engineer · Data Analyst · AI Systems
      </div>

      {/* CTA */}
      <div style={{
        fontSize: 12, color: 'rgba(56,189,248,0.6)',
        fontFamily: 'monospace',
        border: '0.5px solid rgba(56,189,248,0.3)',
        borderRadius: 20, padding: '6px 22px', letterSpacing: '0.05em',
      }}>
        click anywhere to continue →
      </div>
    </div>
  )
}
