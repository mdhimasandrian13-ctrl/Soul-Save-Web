import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  { icon: '🐷', title: 'Multi Celengan', desc: 'Buat banyak celengan sekaligus untuk berbagai tujuan — liburan, gadget, pendidikan, dan lainnya.' },
  { icon: '📊', title: 'Progress Visual', desc: 'Pantau kemajuan tabunganmu dengan progress bar berwarna yang memotivasi kamu untuk terus menabung.' },
  { icon: '🎉', title: 'Animasi Confetti', desc: 'Rayakan setiap pencapaian! Animasi confetti meriah muncul saat target celenganmu berhasil tercapai.' },
  { icon: '🌙', title: 'Dark Mode', desc: 'Tampilan gelap yang elegan untuk kenyamanan mata saat menggunakan aplikasi di malam hari.' },
  { icon: '🔔', title: 'Pengingat Harian', desc: 'Atur pengingat otomatis agar kamu tidak lupa untuk menyisihkan uang setiap harinya.' },
  { icon: '📅', title: 'Countdown Target', desc: 'Lihat berapa hari lagi menuju target tanggal celenganmu. Tetap fokus dan semangat!' },
  { icon: '💬', title: 'Motivasi Harian', desc: 'Kata-kata motivasi yang berganti setiap hari untuk menyemangati perjalanan menabungmu.' },
  { icon: '📋', title: 'Riwayat Transaksi', desc: 'Catat setiap setoran dan penarikan lengkap dengan tanggal dan catatan pribadi.' },
  { icon: '🔒', title: '100% Offline', desc: 'Data tersimpan aman di HP kamu. Tidak perlu internet, tidak ada akun, privasi terjaga sepenuhnya.' },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(46,196,160,0.12)' }}
      style={{
        background: 'var(--cream)', borderRadius: 24, padding: 32,
        border: '2px solid transparent', transition: 'border-color 0.3s',
        cursor: 'default'
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--teal-light)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
    >
      <span style={{ fontSize: 40, marginBottom: 16, display: 'block' }}>{feature.icon}</span>
      <div style={{ fontFamily: 'Clash Display', fontSize: 20, fontWeight: 600, marginBottom: 10 }}>{feature.title}</div>
      <p style={{ fontSize: 14, color: 'var(--mid)', lineHeight: 1.7 }}>{feature.desc}</p>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="fitur" style={{ padding: '100px 40px', background: 'white' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 60 }}
      >
        <div style={{
          display: 'inline-block', background: 'var(--teal-light)', color: 'var(--teal-dark)',
          padding: '6px 16px', borderRadius: 50, fontSize: 12, fontWeight: 700,
          marginBottom: 16, letterSpacing: 1, textTransform: 'uppercase'
        }}>✨ Fitur</div>
        <h2 style={{ fontFamily: 'Clash Display', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, marginBottom: 16 }}>
          Semua yang Kamu Butuhkan
        </h2>
        <p style={{ fontSize: 17, color: 'var(--mid)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
          Soul Save dirancang untuk memudahkan kamu menabung dengan cara yang menyenangkan dan efektif.
        </p>
      </motion.div>

      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24
      }}>
        {features.map((f, i) => <FeatureCard key={f.title} feature={f} index={i} />)}
      </div>
    </section>
  )
}