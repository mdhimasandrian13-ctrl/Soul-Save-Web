import { motion } from 'framer-motion'
import useWindowSize from '../hooks/useWindowSize'

const APK_URL = "https://www.mediafire.com/file/yq7ercl28k6ytrd/Soul+Save.apk/file"
const fadeDown = (delay = 0) => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay }
})

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.2 }
}

export default function Hero() {
  const { isMobile } = useWindowSize()

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: isMobile ? '80px 20px 40px' : '100px 40px 60px',
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', top: -200, right: -200,
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(46,196,160,0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? 40 : 80,
        alignItems: 'center', width: '100%'
      }}>
        {/* Left */}
        <div style={{ textAlign: isMobile ? 'center' : 'left', order: isMobile ? 2 : 1 }}>
          <motion.div {...fadeDown(0)} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--teal-light)', color: 'var(--teal-dark)',
            padding: '8px 16px', borderRadius: 50,
            fontSize: 13, fontWeight: 600, marginBottom: 24
          }}>
            🎉 Gratis & Offline
          </motion.div>

          <motion.h1 {...fadeDown(0.1)} style={{
            fontFamily: 'Clash Display',
            fontSize: isMobile ? 38 : 'clamp(42px,5vw,68px)',
            fontWeight: 700, lineHeight: 1.1, marginBottom: 20
          }}>
            Celengan Digital<br />
            untuk{' '}
            <span style={{ color: 'var(--teal)', position: 'relative' }}>
              Impianmu
              <span style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: 6, background: 'var(--gold)',
                borderRadius: 3, opacity: 0.6
              }} />
            </span>
          </motion.h1>

          <motion.p {...fadeDown(0.2)} style={{
            fontSize: isMobile ? 15 : 18,
            color: 'var(--mid)', lineHeight: 1.7, marginBottom: 36
          }}>
            Soul Save membantu kamu menabung dengan cara yang menyenangkan.
            Buat banyak celengan, pantau progress, dan raih target impianmu!
          </motion.p>

          <motion.div {...fadeDown(0.3)} style={{
            display: 'flex', gap: 16, flexWrap: 'wrap',
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}>
            <a href={APK_URL} download="SoulSave.apk" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--teal)', color: 'white',
              padding: isMobile ? '14px 24px' : '16px 32px',
              borderRadius: 50, fontSize: isMobile ? 14 : 16,
              fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 8px 25px rgba(46,196,160,0.35)',
              transition: 'all 0.2s'
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal-dark)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--teal)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >📱 Download APK</a>

            <a href="#fitur" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'white', color: 'var(--dark)',
              padding: isMobile ? '14px 24px' : '16px 32px',
              borderRadius: 50, fontSize: isMobile ? 14 : 16,
              fontWeight: 600, textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              border: '2px solid transparent', transition: 'all 0.2s'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.color = 'var(--dark)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >✨ Lihat Fitur</a>
          </motion.div>

          <motion.div {...fadeDown(0.4)} style={{
            display: 'flex', gap: 32, marginTop: 40,
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}>
            {[['100%', 'Offline'], ['∞', 'Celengan'], ['0 Rp', 'Gratis']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Clash Display', fontSize: 28, fontWeight: 700, color: 'var(--teal)' }}>{num}</div>
                <div style={{ fontSize: 12, color: 'var(--soft)', marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Phone Mockup */}
        <motion.div {...fadeUp} style={{
          display: 'flex', justifyContent: 'center',
          order: isMobile ? 1 : 2
        }}>
          <div style={{ position: 'relative' }}>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: isMobile ? 220 : 280,
                height: isMobile ? 440 : 560,
                background: 'var(--dark)', borderRadius: 40, padding: 12,
                boxShadow: '0 40px 80px rgba(26,26,46,0.3), 0 0 0 1px rgba(255,255,255,0.1)'
              }}
            >
              <div style={{ width: '100%', height: '100%', background: 'var(--cream)', borderRadius: 30, overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 80, height: 24, background: 'var(--dark)', borderRadius: '0 0 16px 16px', zIndex: 10 }} />
                <div style={{ padding: '36px 16px 16px', height: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: 10, color: 'var(--soft)' }}>Selamat Malam 👋</div>
                      <div style={{ fontFamily: 'Clash Display', fontSize: 16, fontWeight: 700 }}>Soul Save</div>
                    </div>
                    <span style={{ fontSize: 24 }}>🐷</span>
                  </div>
                  <div style={{ background: 'linear-gradient(135deg, var(--teal), var(--teal-dark))', borderRadius: 16, padding: 14, color: 'white' }}>
                    <div style={{ fontSize: 9, opacity: 0.8 }}>Total Tabunganmu</div>
                    <div style={{ fontFamily: 'Clash Display', fontSize: 20, fontWeight: 700, margin: '4px 0' }}>Rp 2.500.000</div>
                    <div style={{ fontSize: 9, opacity: 0.7 }}>3 celengan aktif</div>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700 }}>Celenganku</div>
                  {[
                    { emoji: '✈️', name: 'Liburan Bali', amount: 'Rp 1.200.000', pct: '60%', color: 'var(--teal)', w: '60%' },
                    { emoji: '💻', name: 'Laptop Baru', amount: 'Rp 800.000', pct: '32%', color: 'var(--purple)', w: '32%' },
                    { emoji: '🎓', name: 'Dana Pendidikan', amount: 'Rp 500.000', pct: '20%', color: 'var(--orange)', w: '20%' },
                  ].map(item => (
                    <div key={item.name} style={{ background: 'white', borderRadius: 12, padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                      <span style={{ fontSize: 18 }}>{item.emoji}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 9, fontWeight: 700 }}>{item.name}</div>
                        <div style={{ fontSize: 8, color: item.color, fontWeight: 600 }}>{item.amount}</div>
                        <div style={{ height: 4, background: 'rgba(0,0,0,0.06)', borderRadius: 2, marginTop: 3, overflow: 'hidden' }}>
                          <div style={{ height: '100%', background: item.color, width: item.w, borderRadius: 2 }} />
                        </div>
                      </div>
                      <div style={{ fontSize: 9, fontWeight: 700, color: item.color }}>{item.pct}</div>
                    </div>
                  ))}
                  <div style={{ display: 'flex', background: 'white', borderRadius: 16, padding: 8, gap: 4, marginTop: 'auto' }}>
                    {[['🏠', 'Beranda', true], ['🐷', 'Celengan', false]].map(([icon, label, active]) => (
                      <div key={label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, padding: 6, borderRadius: 10, fontSize: 7, background: active ? 'var(--teal-light)' : 'transparent', color: active ? 'var(--teal)' : 'var(--soft)' }}>
                        <span style={{ fontSize: 14 }}>{icon}</span>
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {!isMobile && [
              { text: '🎉 Target Tercapai!', style: { top: 60, right: -60, color: 'var(--teal-dark)' }, delay: 0.5 },
              { text: '📅 32 hari lagi', style: { bottom: 100, left: -70, color: 'var(--orange)' }, delay: 1 },
              { text: '🌙 Dark Mode', style: { bottom: 40, right: -50, color: 'var(--purple)' }, delay: 1.5 },
            ].map(({ text, style, delay }) => (
              <motion.div
                key={text}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', background: 'white', borderRadius: 16,
                  padding: '10px 14px', boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                  fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap', ...style
                }}
              >{text}</motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
