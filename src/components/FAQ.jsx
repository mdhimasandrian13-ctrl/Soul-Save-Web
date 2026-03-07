import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const faqs = [
  { q: 'Apakah Soul Save gratis?', a: 'Ya! Soul Save 100% gratis tanpa biaya apapun. Tidak ada iklan, tidak ada pembelian dalam aplikasi, dan tidak ada langganan.' },
  { q: 'Apakah data saya aman?', a: 'Sangat aman! Semua data tersimpan hanya di HP kamu secara lokal. Kami tidak mengumpulkan data apapun dan tidak membutuhkan koneksi internet.' },
  { q: 'Berapa banyak celengan yang bisa dibuat?', a: 'Tidak ada batasan! Kamu bisa membuat celengan sebanyak yang kamu mau untuk berbagai tujuan tabungan yang berbeda.' },
  { q: 'Apakah bisa digunakan tanpa internet?', a: 'Ya! Soul Save dirancang untuk bekerja sepenuhnya offline. Kamu bisa menggunakannya kapan saja dan di mana saja tanpa internet.' },
  { q: 'HP apa saja yang didukung?', a: 'Soul Save mendukung Android 5.0 (Lollipop) ke atas. Hampir semua HP Android modern bisa menjalankan aplikasi ini dengan lancar.' },
  { q: 'Bagaimana cara update ke versi terbaru?', a: 'Download APK terbaru dari halaman GitHub Releases kami dan install di HP kamu. Data tabunganmu akan tetap tersimpan saat update.' },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        background: 'var(--cream)', borderRadius: 16, overflow: 'hidden',
        border: `2px solid ${open ? 'var(--teal-light)' : 'transparent'}`,
        transition: 'border-color 0.2s'
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', background: 'none', border: 'none',
          padding: '20px 24px', textAlign: 'left',
          fontFamily: 'Plus Jakarta Sans', fontSize: 15, fontWeight: 600,
          color: 'var(--dark)', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16
        }}
      >
        {faq.q}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: 'var(--teal)', fontSize: 18, flexShrink: 0 }}
        >▼</motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '0 24px 20px',
              fontSize: 14, color: 'var(--mid)', lineHeight: 1.7
            }}>
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="faq" style={{ padding: '100px 40px', background: 'white' }}>
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
        }}>❓ FAQ</div>
        <h2 style={{ fontFamily: 'Clash Display', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700 }}>
          Pertanyaan Umum
        </h2>
      </motion.div>

      <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {faqs.map((faq, i) => <FAQItem key={faq.q} faq={faq} index={i} />)}
      </div>
    </section>
  )
}