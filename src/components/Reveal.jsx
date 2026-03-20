import { useEffect, useRef, useState } from 'react'

function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

/**
 * direction: 'up' (default), 'left', 'right', 'scale'
 */
export default function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, inView] = useInView()
  const dirClass = direction !== 'up' ? ` reveal--${direction}` : ''

  return (
    <div
      ref={ref}
      className={`reveal${dirClass}${inView ? ' reveal--visible' : ''}${className ? ' ' + className : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
