import { useEffect, useRef } from 'react'

const TRUSTED = ['Fortune 500', 'Celebrity Startups', 'CPG Leaders', 'Tech Innovators']

function ConstellationCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animId
    let W, H

    const DOT_COUNT = 48
    const dots = []

    function resize() {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    function initDots() {
      dots.length = 0
      for (let i = 0; i < DOT_COUNT; i++) {
        dots.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.5 + 0.5,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // Update positions
      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0) d.x = W
        if (d.x > W) d.x = 0
        if (d.y < 0) d.y = H
        if (d.y > H) d.y = 0
      }

      // Draw connecting lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.12
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(42, 82, 196, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Draw dots
      for (const d of dots) {
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(42, 82, 196, 0.35)'
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    initDots()
    draw()

    const ro = new ResizeObserver(() => {
      resize()
      initDots()
    })
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-constellation" aria-hidden="true" />
}

export default function Hero() {
  return (
    <section className="hero">
      <ConstellationCanvas />
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

        <div className="hero-trusted" aria-label="Trusted by">
          {TRUSTED.map((label, i) => (
            <span key={label} className="hero-trusted-item">
              {i > 0 && <span className="hero-trusted-sep" aria-hidden="true" />}
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
