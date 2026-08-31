import { useState } from 'react'
import { meta } from '../data.js'

const connectItems = [
  { label: 'LinkedIn', href: meta.links.linkedin, icon: 'in' },
  { label: 'GitHub',   href: meta.links.github,   icon: '<>' },
  { label: 'Tableau',  href: meta.links.tableau,  icon: '▦'  },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [hovered,   setHovered]   = useState(null)

  const sidebar = {
    width: collapsed ? 0 : 256, minWidth: collapsed ? 0 : 256,
    transition: 'all 0.3s ease', overflow: 'hidden', flexShrink: 0,
    position: 'sticky', top: 60, height: 'calc(100vh - 60px)',
    padding: collapsed ? 0 : '20px 14px',
    display: 'flex', flexDirection: 'column',
  }

  const card = {
    background: 'var(--card)', border: '0.5px solid var(--border2)',
    borderRadius: 20, flex: 1, display: 'flex', flexDirection: 'column',
    overflow: 'hidden', position: 'relative', boxShadow: 'var(--shadow)',
    transition: 'background 0.3s ease',
  }

  const sectionLabel = {
    fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase',
    letterSpacing: '0.14em', padding: '14px 16px 6px', fontWeight: 700,
  }

  const item = (key, isActive) => ({
    display: 'flex', alignItems: 'center', gap: 10, fontSize: 14,
    color: isActive || hovered === key ? 'var(--accent)' : 'var(--text2)',
    background: isActive || hovered === key ? 'var(--accent-dim)' : 'transparent',
    padding: '9px 14px', borderRadius: 10, margin: '1px 8px',
    transition: 'all 0.15s', textDecoration: 'none', cursor: 'pointer',
    border: isActive ? '0.5px solid var(--accent-border)' : '0.5px solid transparent',
    fontWeight: isActive ? 600 : 400,
  })

  const iconBadge = (icon) => ({
    fontSize: 10, fontFamily: 'monospace', fontWeight: 700,
    color: 'var(--accent)', background: 'var(--accent-dim)',
    border: '0.5px solid var(--accent-border)',
    borderRadius: 4, padding: '1px 5px', flexShrink: 0,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    minWidth: 20,
  })

  return (
    <>
      {collapsed && (
        <button
          onClick={() => setCollapsed(false)}
          style={{
            position: 'fixed', top: 76, left: 12, zIndex: 40,
            width: 30, height: 30, borderRadius: '50%',
            background: 'var(--card)', border: '0.5px solid var(--border2)',
            color: 'var(--text2)', cursor: 'pointer', fontSize: 14,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: 'var(--shadow)',
          }}
        >›</button>
      )}

      <aside style={sidebar}>
        {!collapsed && (
          <div style={card}>

            {/* Collapse button */}
            <button
              onClick={() => setCollapsed(true)}
              style={{
                position: 'absolute', top: 16, right: -14,
                width: 28, height: 28, borderRadius: '50%',
                background: 'var(--bg2)', border: '0.5px solid var(--border2)',
                color: 'var(--text2)', cursor: 'pointer', fontSize: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 10, transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent)'
                e.currentTarget.style.borderColor = 'var(--accent-border)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text2)'
                e.currentTarget.style.borderColor = 'var(--border2)'
              }}
            >‹</button>

            {/* Avatar */}
            <div style={{ padding: '24px 16px 12px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 46, height: 46, borderRadius: '50%',
                background: 'var(--accent-dim)', border: '2px solid var(--accent-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 15, fontWeight: 800, color: 'var(--accent)',
              }}>
                {meta.initials}
              </div>
            </div>

            {/* WORK */}
            <div style={sectionLabel}>Work</div>
            <div
              style={item('portfolio', true)}
              onMouseEnter={() => setHovered('portfolio')}
              onMouseLeave={() => setHovered(null)}
            >
              <span style={{ fontSize: 15 }}>⊞</span>
              <span>Portfolio</span>
            </div>

            <div style={{ height: '0.5px', background: 'var(--border)', margin: '12px 16px' }} />

            {/* CONNECT */}
            <div style={sectionLabel}>Connect</div>
            {connectItems.map(ci => (
              <a
                key={ci.label}
                href={ci.href}
                target="_blank"
                rel="noreferrer"
                style={item(ci.label, false)}
                onMouseEnter={() => setHovered(ci.label)}
                onMouseLeave={() => setHovered(null)}
              >
                <span style={iconBadge(ci.icon)}>{ci.icon}</span>
                <span>{ci.label}</span>
                <span style={{ marginLeft: 'auto', fontSize: 11, opacity: 0.4 }}>↗</span>
              </a>
            ))}

            {/* Bottom */}
            <div style={{
              marginTop: 'auto', padding: '16px',
              borderTop: '0.5px solid var(--border)',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ fontSize: 18 }}>✉</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: 13, fontWeight: 700, color: 'var(--text)',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                  {meta.name}
                </div>
                <a
                  href={`mailto:${meta.email}`}
                  style={{ fontSize: 11, color: 'var(--accent)' }}
                >
                  Get in touch
                </a>
              </div>
            </div>

          </div>
        )}
      </aside>
    </>
  )
}
