const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L4 9v12h5v-7h6v7h5V9l-8-6z" />
      </svg>
    ),
    title: 'SINGLE FAMILY',
    highlight: 'RESIDENTIAL',
    description:
      'Build wealth through long-term real estate with our financing options for Single Family Residential (SFR) rental properties. Our DSCR refinancing programs qualify borrowers based on property cash flow rather than personal income.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 11V3H7v4H2v14h20V11h-5zM7 19H4v-2h3v2zm0-4H4v-2h3v2zm0-4H4V9h3v2zm6 8H9v-2h4v2zm0-4H9v-2h4v2zm0-4H9V9h4v2zm0-4H9V5h4v2zm6 12h-3v-2h3v2zm0-4h-3v-2h3v2z" />
      </svg>
    ),
    title: 'MULTIFAMILY',
    highlight: 'RESIDENTIAL',
    subtitle: 'ONE TO FOUR UNITS',
    description:
      'Expand your portfolio with robust financing for multifamily properties. Acquire, refinance, reposition, or construct new apartment buildings using agency, asset-based, and revenue-based options.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
      </svg>
    ),
    title: 'FIX',
    highlight: '& FLIP',
    subtitle: 'SHORT TERM FINANCING',
    description:
      'Capitalize on distressed property opportunities with rapid short-term fix-and-flip loans. We provide capital for acquisition and renovation to move swiftly from purchase to resale.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm12-3h-2V3H3v14h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h1V9l-3-2zM8 19c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1zm10 0c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1zm1-3H5V5h12v8h2v3z" />
      </svg>
    ),
    title: 'SHORT-TERM RENTAL',
    highlight: 'DSCR',
    subtitle: 'PERSONALIZED FIXED RATE',
    description:
      'Maximize revenue from travel markets with tailored financing for vacation rentals and Airbnb properties. Flexible DSCR financing assesses rental income to qualify your investment seamlessly.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z" />
      </svg>
    ),
    title: 'GROUND UP',
    highlight: 'CONSTRUCTION',
    description:
      'Flexible financing to bring construction and development projects to life. Private money, agency, asset-based, and structured financing for acquisition, bridge loans, and renovations.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z" />
      </svg>
    ),
    title: 'MIXED USE',
    highlight: '',
    subtitle: 'COMMERCIAL LENDING',
    description:
      'Secure capital for retail investments. We finance regional malls, grocery-anchored centers, power centers, strip plazas, and single-tenant properties through CMBS and bank options.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-soflo-dark-alt overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-soflo-cyan/3 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-soflo-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            We Have You Covered With
          </p>
          <h3 className="font-heading text-4xl sm:text-5xl text-white font-bold mb-6">
            OUR <span className="gradient-text-cyan text-glow-cyan">SERVICES</span>
          </h3>
          <div className="divider-gradient w-24 mx-auto mb-8" />
          <p className="text-soflo-gray text-base max-w-3xl mx-auto leading-relaxed">
            At <strong className="text-white">SoFlo Lenders</strong> we value
            the power of relationships. We&apos;ve built our products around
            helping thousands of real estate investors get to the next level.
            Fix and flips, rentals, and new construction &mdash; whatever your
            investment strategy, we&apos;ve got the programs and people to make it happen.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title + (s.highlight || '')}
              className={`reveal reveal-delay-${(i % 3) + 1} glass rounded-2xl p-7 gradient-border group hover:-translate-y-2 transition-all duration-500`}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-soflo-cyan/10 text-soflo-cyan mb-5 group-hover:bg-soflo-cyan/20 group-hover:glow-cyan transition-all duration-300">
                {s.icon}
              </div>

              {/* Title */}
              <h4 className="text-white font-heading text-base mb-1">
                {s.title}{' '}
                {s.highlight && (
                  <span className="gradient-text-cyan">{s.highlight}</span>
                )}
              </h4>
              {s.subtitle && (
                <p className="text-soflo-gold/80 text-xs tracking-[0.2em] mb-3 font-medium">
                  {s.subtitle}
                </p>
              )}

              {/* Description */}
              <p className="text-soflo-gray text-sm leading-relaxed mt-3">
                {s.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-5 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-soflo-cyan to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
