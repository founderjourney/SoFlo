import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-black/30 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="shrink-0 group">
            <picture>
              <source srcSet="/images/SoFlo-Lenders-logo-design-long-clear.webp" type="image/webp" />
              <img
                src="/images/SoFlo-Lenders-logo-design-long-clear.png"
                alt="SoFlo Lenders"
                width={200}
                height={36}
                className="h-9 transition-transform duration-300 group-hover:scale-105"
              />
            </picture>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-soflo-cream/80 text-sm font-medium tracking-wide hover:text-white transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-soflo-cyan to-soflo-gold transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-soflo-gold to-soflo-orange text-soflo-dark hover:shadow-lg hover:shadow-soflo-gold/20 transition-all duration-300 hover:scale-105"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-soflo-cream p-2 hover:text-soflo-cyan transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-strong mx-4 mt-3 rounded-2xl px-6 py-5 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-soflo-cream/80 text-sm py-2.5 hover:text-soflo-cyan hover:pl-2 transition-all duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-5 py-2.5 text-sm font-bold rounded-full bg-gradient-to-r from-soflo-gold to-soflo-orange text-soflo-dark"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  )
}
