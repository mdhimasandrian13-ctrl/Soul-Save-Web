import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import Download from './components/Download'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <Download />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App