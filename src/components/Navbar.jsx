import { useState, useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { isMobile } = useWindowSize()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: isMobile ? '14px 20px' : '16px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
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

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 24, color: 'var(--dark)', padding: 4
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        ) : (
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
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: 56, left: 0, right: 0, zIndex: 99,
          background: 'rgba(253,246,237,0.98)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(46,196,160,0.15)',
          padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 4
        }}>
          {[['#fitur', 'Fitur'], ['#screenshot', 'Screenshot'], ['#faq', 'FAQ'], ['#download', 'Download APK']].map(([href, label]) => (
            <a key={href} href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none', color: href === '#download' ? 'var(--teal)' : 'var(--dark)',
                fontSize: 15, fontWeight: href === '#download' ? 700 : 500,
                padding: '12px 8px', borderBottom: '1px solid rgba(0,0,0,0.05)'
              }}
            >{label}</a>
          ))}
        </div>
      )}
    </>
  )
}