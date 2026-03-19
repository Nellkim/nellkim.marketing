import { useState, useEffect } from 'react'

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return
    // Load reCAPTCHA v3 script
    if (!document.getElementById('recaptcha-script')) {
      const script = document.createElement('script')
      script.id = 'recaptcha-script'
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setSending(true)

    const form = e.target
    const data = new FormData(form)
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      company: data.get('company'),
      message: data.get('message'),
    }

    try {
      // Get reCAPTCHA token
      if (RECAPTCHA_SITE_KEY && window.grecaptcha) {
        const token = await new Promise((resolve, reject) => {
          window.grecaptcha.ready(() => {
            window.grecaptcha
              .execute(RECAPTCHA_SITE_KEY, { action: 'contact' })
              .then(resolve)
              .catch(reject)
          })
        })
        payload.recaptchaToken = token
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Failed to send message')
      }

      setSubmitted(true)
      form.reset()
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="section section--contact" id="contact">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-info">
            <div className="section-label">Contact</div>
            <h2 className="section-title">Become a Client</h2>
            <p className="contact-desc">
              Interested in learning more about how Nellkim can solve your business
              challenges with AI-driven custom software? Reach out and tell us about
              your project.
            </p>
            <div className="contact-details">
              <a href="mailto:hello@nellkim.com" className="contact-detail">
                <span className="contact-detail-icon">✉</span>
                hello@nellkim.com
              </a>
              <a href="tel:+18887782766" className="contact-detail">
                <span className="contact-detail-icon">☏</span>
                888-778-2766
              </a>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">✓</div>
                <h3>Thank you!</h3>
                <p>Your message has been sent. We'll get back to you shortly.</p>
                <button className="btn btn--outline" onClick={() => setSubmitted(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" required placeholder="John Smith" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required placeholder="john@company.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="Company name" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">How can we help? *</label>
                  <textarea id="message" name="message" required rows="5" placeholder="Tell us about your project or business challenge..." />
                </div>
                {error && <p className="contact-error">{error}</p>}
                <button type="submit" className="btn btn--primary contact-submit" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
