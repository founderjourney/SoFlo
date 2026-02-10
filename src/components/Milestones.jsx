import { useEffect, useRef, useState } from 'react'

const counters = [
  {
    value: 250,
    suffix: '+',
    prefix: '',
    label: 'LENDERS',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
  },
  {
    value: 45,
    suffix: '',
    prefix: '',
    label: 'STATES',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
      </svg>
    ),
  },
  {
    value: 30,
    suffix: 'K',
    prefix: '+',
    label: 'LOANS CLOSED',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    ),
  },
  {
    value: 12.5,
    suffix: 'B',
    prefix: '+$',
    label: 'FUNDED LOANS',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
      </svg>
    ),
  },
]

function AnimatedCounter({ value, prefix = '', suffix = '', label, icon }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const interval = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(interval)
            } else {
              setCount(
                Number.isInteger(value)
                  ? Math.floor(current)
                  : parseFloat(current.toFixed(1))
              )
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center group">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass glow-cyan mb-4 text-soflo-cyan group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-4xl sm:text-5xl font-heading font-bold text-white text-glow-cyan">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-soflo-cyan/80 text-xs font-bold mt-2 tracking-[0.25em]">
        {label}
      </div>
    </div>
  )
}

export default function Milestones() {
  return (
    <section className="relative py-24 overflow-hidden bg-soflo-dark noise">
      {/* Ambient orbs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-soflo-cyan/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-soflo-gold/4 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-soflo-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            One Achievement at a Time
          </p>
          <h3 className="font-heading text-4xl sm:text-5xl text-white font-bold mb-6">
            AMAZING <span className="gradient-text-cyan text-glow-cyan">MILESTONES</span>
          </h3>
          <div className="divider-gradient w-24 mx-auto mb-6" />
          <p className="text-soflo-gray max-w-xl mx-auto text-base">
            With deep market expertise and a relationship-driven approach, we
            deliver financing solutions that align with your long-term goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: counters */}
          <div className="grid grid-cols-2 gap-10 reveal reveal-delay-1">
            {counters.map((c) => (
              <AnimatedCounter key={c.label} {...c} />
            ))}
          </div>

          {/* Right: tagline */}
          <div className="text-center lg:text-right reveal reveal-delay-2">
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-white">DREAM IT</span>
              <span className="gradient-text-cyan">.</span>
              <br />
              <span className="text-white">FUND IT</span>
              <span className="gradient-text-gold">.</span>
              <br />
              <span className="text-white">BUILD IT</span>
              <span className="gradient-text-cyan">.</span>
            </h2>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block px-8 py-3.5 bg-gradient-to-r from-soflo-gold to-soflo-orange text-soflo-dark font-bold rounded-full hover:shadow-xl hover:shadow-soflo-gold/25 transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
