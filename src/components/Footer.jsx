import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <footer style={{
      background: 'var(--dark)', padding: '48px 40px',
      textAlign: 'center'
    }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div style={{
          fontFamily: 'Clash Display', fontSize: 24,
          fontWeight: 700, color: 'white', marginBottom: 8
        }}>
          🐷 Soul<span style={{ color: 'var(--teal)' }}>Save</span>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginBottom: 16 }}>
          Celengan digital untuk semua impianmu
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 24 }}>
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