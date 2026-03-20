import Reveal from './Reveal'

export default function CtaBanner() {
  return (
    <section className="cta-banner" aria-label="Call to action">
      <div className="cta-banner-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <div className="cta-banner-inner">
            <h2 className="cta-banner-title">
              Ready to transform your business with AI?
            </h2>
            <p className="cta-banner-sub">
              Join the select group of companies that trust Nellkim to build what others can't.
            </p>
            <a href="#contact" className="btn btn--primary cta-banner-btn">
              Get Started
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
