import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import useWindowSize from '../hooks/useWindowSize'

const screenshots = [
  { icon: '🏠', title: 'Beranda', desc: 'Total tabungan & daftar celengan', bg: 'linear-gradient(135deg, #2EC4A0, #1FA085)' },
  { icon: '🐷', title: 'Daftar Celengan', desc: 'Kelola semua celenganmu', bg: 'linear-gradient(135deg, #6C63FF, #4A42DD)' },
  { icon: '📊', title: 'Detail & Progress', desc: 'Pantau progress setiap celengan', bg: 'linear-gradient(135deg, #FF8C42, #E07030)' },
  { icon: '💰', title: 'Setor & Tarik', desc: 'Catat transaksi dengan mudah', bg: 'linear-gradient(135deg, #F4C542, #D4A520)' },
  { icon: '🌙', title: 'Dark Mode', desc: 'Tampilan gelap yang elegan', bg: 'linear-gradient(135deg, #1A1A2E, #2A2A4E)' },
  { icon: '🔔', title: 'Pengingat', desc: 'Atur waktu pengingat menabung', bg: 'linear-gradient(135deg, #FF6B6B, #DD4A4A)' },
]

export default function Screenshots() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const { isMobile } = useWindowSize()

  return (
    <section id="screenshot" style={{ padding: isMobile ? '60px 20px' : '100px 40px', background: 'var(--cream)', overflow: 'hidden' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 40 }}
      >
        <div style={{
          display: 'inline-block', background: 'var(--teal-light)', color: 'var(--teal-dark)',
          padding: '6px 16px', borderRadius: 50, fontSize: 12, fontWeight: 700,
          marginBottom: 16, letterSpacing: 1, textTransform: 'uppercase'
        }}>📱 Screenshot</div>
        <h2 style={{ fontFamily: 'Clash Display', fontSize: isMobile ? 28 : 'clamp(32px,4vw,48px)', fontWeight: 700, marginBottom: 16 }}>
          Tampilan Aplikasi
        </h2>
        <p style={{ fontSize: isMobile ? 14 : 17, color: 'var(--mid)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
          Desain yang bersih, modern, dan mudah digunakan oleh siapa saja.
        </p>
      </motion.div>

      {isMobile ? (
        // Mobile: grid 2 kolom
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16, maxWidth: 500, margin: '0 auto'
        }}>
          {screenshots.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'white', borderRadius: 20,
                padding: 16, boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
              }}
            >
              <div style={{
                width: '100%', height: 140, borderRadius: 14,
                background: s.bg, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                fontSize: 36, marginBottom: 12
              }}>{s.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{s.title}</div>
              <div style={{ fontSize: 11, color: 'var(--soft)' }}>{s.desc}</div>
            </motion.div>
          ))}
        </div>
      ) : (
        // Desktop: horizontal scroll
        <div style={{
          display: 'flex', gap: 24, overflowX: 'auto',
          padding: '20px 0 40px', scrollbarWidth: 'none',
          maxWidth: 1200, margin: '0 auto'
        }}>
          {screenshots.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(46,196,160,0.15)' }}
              style={{
                flexShrink: 0, background: 'white', borderRadius: 24,
                padding: 20, width: 200,
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                cursor: 'default'
              }}
            >
              <div style={{
                width: '100%', height: 300, borderRadius: 16,
                background: s.bg, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                fontSize: 48, marginBottom: 14
              }}>{s.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{s.title}</div>
              <div style={{ fontSize: 12, color: 'var(--soft)' }}>{s.desc}</div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}