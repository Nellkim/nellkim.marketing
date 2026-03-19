import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'SaaS', href: '#saas' },
    { label: 'Mobile', href: '#mobile' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a href="#" className="navbar-brand">
          <span className="navbar-logo">N</span>
          <span className="navbar-wordmark">NELLKIM</span>
        </a>

        <button
          className={`navbar-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar-links${menuOpen ? ' navbar-links--open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
