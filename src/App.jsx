import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SaasSection from './components/sections/SaasSection'
import MobileSection from './components/sections/MobileSection'
import SolutionsSection from './components/sections/SolutionsSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/Footer'
import TermsOfService from './components/legal/TermsOfService'
import PrivacyPolicy from './components/legal/PrivacyPolicy'
import './App.css'

function getPage() {
  const hash = window.location.hash
  if (hash === '#/terms') return 'terms'
  if (hash === '#/privacy') return 'privacy'
  return 'home'
}

export default function App() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    function onHashChange() {
      setPage(getPage())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  function goHome() {
    window.location.hash = ''
    setPage('home')
    window.scrollTo(0, 0)
  }

  if (page === 'terms') {
    return (
      <div className="app">
        <div className="bg-grid" aria-hidden="true" />
        <Navbar />
        <TermsOfService onBack={goHome} />
        <Footer />
      </div>
    )
  }

  if (page === 'privacy') {
    return (
      <div className="app">
        <div className="bg-grid" aria-hidden="true" />
        <Navbar />
        <PrivacyPolicy onBack={goHome} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="app">
      <div className="bg-grid" aria-hidden="true" />
      <Navbar />
      <Hero />
      <SaasSection />
      <MobileSection />
      <SolutionsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
