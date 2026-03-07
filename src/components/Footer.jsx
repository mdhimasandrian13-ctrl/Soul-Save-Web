import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import useWindowSize from '../hooks/useWindowSize'

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const { isMobile } = useWindowSize()

  return (
    <footer style={{
      background: 'var(--dark)',
      padding: isMobile ? '36px 20px' : '48px 40px',
      textAlign: 'center'
    }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div style={{
          fontFamily: 'Clash Display', fontSize: isMobile ? 20 : 24,
          fontWeight: 700, color: 'white', marginBottom: 8
        }}>
          🐷 Soul<span style={{ color: 'var(--teal)' }}>Save</span>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginBottom: 24 }}>
          Celengan digital untuk semua impianmu
        </p>

        <div style={{
          display: 'flex', justifyContent: 'center',
          flexWrap: 'wrap', gap: isMobile ? 16 : 24,
          marginBottom: 24
        }}>
          {[
            { label: 'Fitur', href: '#fitur' },
            { label: 'Screenshot', href: '#screenshot' },
            { label: 'Download', href: '#download' },
            { label: 'FAQ', href: '#faq' },
          ].map(({ label, href }) => (
            <a key={label} href={href} style={{
              color: 'rgba(255,255,255,0.4)', fontSize: 13,
              textDecoration: 'none', transition: 'color 0.2s'
            }}
              onMouseEnter={e => e.target.style.color = 'var(--teal)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
            >{label}</a>
          ))}
        </div>

        <div style={{
          width: 60, height: 1,
          background: 'rgba(255,255,255,0.1)',
          margin: '0 auto 24px'
        }} />

        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>
          © 2026 Soul Save. Dibuat dengan ❤️ menggunakan Flutter & React
        </p>
      </motion.div>
    </footer>
  )
}