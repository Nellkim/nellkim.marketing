import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow--blue" aria-hidden="true" />
      <div className="hero-glow hero-glow--orange" aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-badge">AI-Powered Software</div>
        <h1 className="hero-title">NELLKIM</h1>
        <p className="hero-tagline">
          AI Business Solutions<span className="hero-sep">/</span>
          SaaS<span className="hero-sep">/</span>
          Startups
        </p>
        <p className="hero-desc">
          Nellkim is an AI powered custom software company with three divisions:
          client based custom software business solutions, SaaS and consumer
          facing mobile apps created to exploit market inefficiencies.
        </p>
        <div className="hero-actions">
          <a href="#saas" className="btn btn--primary">Explore Our Products</a>
          <a href="#solutions" className="btn btn--outline">Business Solutions</a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
