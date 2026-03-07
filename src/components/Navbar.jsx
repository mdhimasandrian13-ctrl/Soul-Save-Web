import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '16px 40px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(253,246,237,0.95)' : 'rgba(253,246,237,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(46,196,160,0.15)',
      transition: 'all 0.3s'
    }}>
      <a href="#" style={{
        display: 'flex', alignItems: 'center', gap: 10,
        fontFamily: 'Clash Display', fontSize: 22, fontWeight: 700,
        color: 'var(--dark)', textDecoration: 'none'
      }}>
        🐷 Soul<span style={{ color: 'var(--teal)' }}>Save</span>
      </a>

      <ul style={{ display: 'flex', gap: 32, listStyle: 'none' }}>
        {[['#fitur', 'Fitur'], ['#screenshot', 'Screenshot'], ['#faq', 'FAQ']].map(([href, label]) => (
          <li key={href}>
            <a href={href} style={{
              textDecoration: 'none', color: 'var(--mid)',
              fontSize: 14, fontWeight: 500, transition: 'color 0.2s'
            }}
              onMouseEnter={e => e.target.style.color = 'var(--teal)'}
              onMouseLeave={e => e.target.style.color = 'var(--mid)'}
            >{label}</a>
          </li>
        ))}
        <li>
          <a href="#download" style={{
            background: 'var(--teal)', color: 'white',
            padding: '10px 24px', borderRadius: 50,
            fontWeight: 600, fontSize: 14, textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(46,196,160,0.3)',
            transition: 'all 0.2s'
          }}
            onMouseEnter={e => { e.target.style.background = 'var(--teal-dark)'; e.target.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.target.style.background = 'var(--teal)'; e.target.style.transform = 'translateY(0)' }}
          >Download APK</a>
        </li>
      </ul>
    </nav>
  )
}