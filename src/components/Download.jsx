import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Download() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="download" style={{
      padding: '100px 40px',
      background: 'linear-gradient(135deg, var(--dark) 0%, #2A2A4E 100%)',
      textAlign: 'center', position: 'relative', overflow: 'hidden'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: -200, left: '50%',
        transform: 'translateX(-50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(46,196,160,0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 600, margin: '0 auto', position: 'relative' }}
      >
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: 72, display: 'block', marginBottom: 24 }}
        >🐷</motion.span>

        <h2 style={{
          fontFamily: 'Clash Display',
          fontSize: 'clamp(32px,4vw,48px)',
          fontWeight: 700, color: 'white', marginBottom: 16
        }}>
          Mulai Menabung Sekarang!
        </h2>

        <p style={{
          fontSize: 17, color: 'rgba(255,255,255,0.6)',
          marginBottom: 40, lineHeight: 1.7
        }}>
          Download Soul Save gratis dan mulai perjalanan menabungmu hari ini.
          Tidak perlu akun, tidak perlu internet.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.a
            href="https://github.com/mdhimasandrian13-ctrl/Soul-Save/releases"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, boxShadow: '0 12px 35px rgba(46,196,160,0.5)' }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'var(--teal)', color: 'white',
              padding: '18px 36px', borderRadius: 50,
              fontSize: 16, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 8px 25px rgba(46,196,160,0.4)',
              transition: 'all 0.2s'
            }}
          >
            📱 Download APK
          </motion.a>

          <motion.a
            href="https://github.com/mdhimasandrian13-ctrl/Soul-Save"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, background: 'rgba(255,255,255,0.15)' }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(255,255,255,0.1)', color: 'white',
              padding: '18px 36px', borderRadius: 50,
              fontSize: 16, fontWeight: 600, textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.2)',
              transition: 'all 0.2s'
            }}
          >
            💻 GitHub
          </motion.a>
        </div>

        <div style={{
          display: 'inline-block',
          background: 'rgba(46,196,160,0.2)', color: 'var(--teal)',
          padding: '6px 14px', borderRadius: 50,
          fontSize: 12, fontWeight: 600, marginTop: 24
        }}>
          v1.0.0 • Android
        </div>
      </motion.div>
    </section>
  )
}