export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img src="/logo.svg" alt="Nellkim" className="navbar-logo-img" />
              <span className="footer-wordmark">NELLKIM</span>
            </div>
            <p className="footer-tagline">AI Business Solutions / SaaS / Startups</p>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Get in Touch</h3>
            <p className="footer-desc">
              Interested in learning more about becoming a client or partnering with us?
            </p>
            <div className="footer-links">
              <a href="mailto:hello@nellkim.com" className="footer-link">
                <span className="footer-link-icon">✉</span>
                hello@nellkim.com
              </a>
              <a href="tel:+18887782766" className="footer-link">
                <span className="footer-link-icon">☏</span>
                888-778-2766
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <h3 className="footer-heading">Navigate</h3>
            <ul>
              <li><a href="#saas">SaaS Products</a></li>
              <li><a href="#mobile">Mobile Platforms</a></li>
              <li><a href="#solutions">Business Solutions</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-nav">
            <h3 className="footer-heading">Legal</h3>
            <ul>
              <li><a href="#/terms">Terms of Service</a></li>
              <li><a href="#/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            <span className="footer-pulse-dot" aria-hidden="true" />
            &copy; {new Date().getFullYear()} Nellkim LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
