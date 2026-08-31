import { certifications } from '../data.js'

const s = {
  section: { padding:'56px', borderTop:'0.5px solid #1a1a1a' },
  heading: { fontSize:11, color:'#444', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:40 },
  issuerBlock: { marginBottom:32 },
  issuerHeader: { display:'flex', alignItems:'center', gap:10, marginBottom:12, paddingBottom:10, borderBottom:'0.5px solid #141414' },
  issuerName: { fontSize:14, fontWeight:500, color:'#c0c0c0' },
  countBadge: { fontSize:10, color:'#6ee7b7', background:'rgba(110,231,183,0.08)', border:'0.5px solid rgba(110,231,183,0.15)', borderRadius:12, padding:'2px 8px' },
  certItem: { display:'flex', alignItems:'baseline', gap:12, padding:'8px 0', borderBottom:'0.5px solid #0e0e0e' },
  certCode: { fontSize:10, color:'#6ee7b7', fontFamily:'monospace', minWidth:48, flexShrink:0 },
  certName: { fontSize:13, color:'#4a4a4a', flex:1 },
  certDate: { fontSize:11, color:'#2a2a2a', flexShrink:0 },
}

export default function Certifications() {
  return (
    <section id="certifications" style={s.section}>
      <div style={s.heading}>Certifications &amp; Recognition</div>
      {certifications.map(issuer => (
        <div key={issuer.issuer} style={s.issuerBlock}>
          <div style={s.issuerHeader}>
            <span style={s.issuerName}>{issuer.issuer}</span>
            <span style={s.countBadge}>{issuer.count}</span>
          </div>
          {issuer.items.map(cert => (
            <div key={cert.name} style={s.certItem}>
              <span style={s.certCode}>{cert.code}</span>
              <span style={s.certName}>{cert.name}</span>
              <span style={s.certDate}>{cert.date}</span>
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}
