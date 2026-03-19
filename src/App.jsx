import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SaasSection from './components/SaasSection'
import MobileSection from './components/MobileSection'
import SolutionsSection from './components/SolutionsSection'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <div className="bg-grid" aria-hidden="true" />
      <Navbar />
      <Hero />
      <SaasSection />
      <MobileSection />
      <SolutionsSection />
      <Footer />
    </div>
  )
}
