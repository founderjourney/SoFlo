export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-soflo-dark"
    >
      {/* ═══════════════════════ BACKGROUND LAYERS ═══════════════════════ */}

      {/* Mesh gradient - the soul of the bg */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] bg-[radial-gradient(ellipse,rgba(10,220,228,0.08)_0%,transparent_70%)]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-[radial-gradient(ellipse,rgba(249,174,0,0.06)_0%,transparent_70%)]" />
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-[radial-gradient(ellipse,rgba(10,220,228,0.04)_0%,transparent_70%)]" />
      </div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(rgba(10,220,228,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: '15%', left: '10%', size: 3, delay: '0s', dur: '8s', variant: 1 },
          { top: '25%', left: '85%', size: 2, delay: '2s', dur: '10s', variant: 2 },
          { top: '60%', left: '15%', size: 2, delay: '1s', dur: '9s', variant: 2 },
          { top: '70%', left: '75%', size: 3, delay: '3s', dur: '7s', variant: 1 },
          { top: '40%', left: '50%', size: 2, delay: '4s', dur: '11s', variant: 2 },
          { top: '80%', left: '40%', size: 1.5, delay: '0.5s', dur: '12s', variant: 1 },
          { top: '10%', left: '60%', size: 2, delay: '1.5s', dur: '9s', variant: 1 },
          { top: '55%', left: '90%', size: 1.5, delay: '2.5s', dur: '10s', variant: 2 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-soflo-cyan"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `particle-float-${p.variant} ${p.dur} ease-in-out infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-soflo-cyan/10 to-transparent translate-x-[-40vw] rotate-[15deg] origin-top" />

      {/* ═══════════════════════ MAIN CONTENT ═══════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-20 lg:pt-24 lg:pb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[80vh]">

          {/* ─── LEFT COLUMN (7 cols) ─── */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Logo isotipo */}
            <div className="hero-fade-up hero-fade-up-d1 mb-6">
              <img
                src="/images/logo-only-clear-full.png"
                alt="SoFlo Lenders Logo"
                className="w-28 sm:w-36 mx-auto lg:mx-0 drop-shadow-[0_0_40px_rgba(10,220,228,0.25)] float"
              />
            </div>

            {/* Welcome label */}
            <div className="hero-fade-up hero-fade-up-d2 mb-5">
              <span className="inline-flex items-center gap-3 text-soflo-cream/50 text-xs sm:text-sm tracking-[0.4em] uppercase font-medium">
                <span className="inline-block w-8 h-px bg-gradient-to-r from-transparent to-soflo-cyan/60" />
                Welcome To
                <span className="inline-block w-8 h-px bg-gradient-to-l from-transparent to-soflo-cyan/60" />
              </span>
            </div>

            {/* Main heading */}
            <div className="hero-fade-up hero-fade-up-d3">
              <h1 className="font-heading font-bold leading-[0.85] tracking-tight">
                <span className="block text-7xl sm:text-8xl lg:text-[7rem] xl:text-[8rem] text-white">
                  SoFLo
                </span>
                <span className="block text-7xl sm:text-8xl lg:text-[7rem] xl:text-[8rem] gradient-text-cyan text-glow-cyan">
                  LENDERS
                </span>
              </h1>
            </div>

            {/* Subtitle with animated line */}
            <div className="hero-fade-up hero-fade-up-d4 mt-6 flex items-center gap-4 justify-center lg:justify-start">
              <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-soflo-gold/50" />
              <p className="text-soflo-cream/60 text-sm sm:text-base font-heading tracking-[0.15em]">
                A Commercial Lending Company
              </p>
              <div className="h-px flex-1 max-w-12 bg-gradient-to-l from-transparent to-soflo-gold/50" />
            </div>

            {/* Description */}
            <p className="hero-fade-up hero-fade-up-d5 mt-6 text-soflo-gray text-sm sm:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Connecting real estate investors with 250+ lenders across 45 states.
              Fix & flip, DSCR, multifamily, construction &mdash; we fund your vision.
            </p>

            {/* CTAs */}
            <div className="hero-fade-up hero-fade-up-d6 mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative px-8 py-3.5 bg-gradient-to-r from-soflo-gold to-soflo-orange text-soflo-dark font-bold rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(249,174,0,0.3)]"
              >
                <span className="relative z-10">Get Started Today</span>
                {/* Shimmer sweep */}
                <span className="absolute inset-0 rounded-full overflow-hidden">
                  <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700" />
                </span>
              </a>
              <a
                href="#services"
                className="px-8 py-3.5 border border-soflo-cyan/25 text-soflo-cyan font-medium rounded-full hover:bg-soflo-cyan/8 hover:border-soflo-cyan/50 hover:shadow-[0_0_30px_rgba(10,220,228,0.1)] transition-all duration-300"
              >
                Explore Services
              </a>
            </div>

            {/* Trust bar - mini stats */}
            <div className="hero-fade-up hero-fade-up-d6 mt-12 flex flex-wrap items-center gap-6 sm:gap-8 justify-center lg:justify-start">
              {[
                { value: '250+', label: 'Lenders' },
                { value: '45', label: 'States' },
                { value: '$12.5B+', label: 'Funded' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  {i > 0 && <div className="hidden sm:block w-px h-8 bg-soflo-gray/20" />}
                  <div className={i > 0 ? 'sm:pl-3' : ''}>
                    <span className="block text-lg sm:text-xl font-heading font-bold text-white">
                      {stat.value}
                    </span>
                    <span className="block text-[10px] sm:text-xs text-soflo-gray tracking-wider uppercase">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── RIGHT COLUMN (5 cols) — Partner photo with orbital rings ─── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end hero-scale-in lg:-mr-20 xl:-mr-28">
            <div className="relative w-[22rem] sm:w-[32rem] md:w-[38rem] lg:w-[44rem] xl:w-[50rem] aspect-square flex items-center justify-center">

              {/* Outer orbital ring */}
              <div
                className="absolute inset-0 rounded-full border border-soflo-cyan/10"
                style={{ animation: 'orbit 25s linear infinite' }}
              >
                {/* Orbital dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-soflo-cyan shadow-[0_0_12px_rgba(10,220,228,0.6)]" />
              </div>

              {/* Middle orbital ring */}
              <div
                className="absolute inset-[10%] rounded-full border border-soflo-gold/8"
                style={{ animation: 'orbit-reverse 20s linear infinite' }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-soflo-gold shadow-[0_0_10px_rgba(249,174,0,0.5)]" />
              </div>

              {/* Inner pulsing ring */}
              <div
                className="absolute inset-[18%] rounded-full border border-soflo-cyan/15"
                style={{ animation: 'hero-pulse-ring 4s ease-in-out infinite' }}
              />

              {/* Glow behind the person */}
              <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-soflo-cyan/15 via-transparent to-soflo-gold/10 blur-[60px]" />

              {/* Arc accents (decorative partial borders) */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" style={{ animation: 'orbit 30s linear infinite' }}>
                <circle cx="200" cy="200" r="190" fill="none" stroke="url(#arcGrad)" strokeWidth="1.5" strokeDasharray="80 240" strokeLinecap="round" />
                <defs>
                  <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0adce4" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f9ae00" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Partner photo */}
              <img
                src="/images/049-MqMGf9ZbdXg-removebg-preview.png"
                alt="SoFlo Lenders Partner"
                className="relative z-10 w-[88%] max-w-[620px] drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)] float-delayed"
              />

              {/* Floating glass badges */}
              <div className="absolute top-[8%] -left-2 sm:left-[2%] glass rounded-xl px-4 py-2.5 text-center hero-fade-right z-20" style={{ animationDelay: '1.5s' }}>
                <span className="block text-base font-heading font-bold text-white">+30K</span>
                <span className="block text-[10px] text-soflo-cyan tracking-wider">LOANS CLOSED</span>
              </div>
              <div className="absolute bottom-[12%] -right-2 sm:right-[2%] glass rounded-xl px-4 py-2.5 text-center hero-fade-right z-20" style={{ animationDelay: '2s' }}>
                <span className="block text-base font-heading font-bold text-white">45</span>
                <span className="block text-[10px] text-soflo-gold tracking-wider">STATES</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════ BOTTOM ELEMENTS ═══════════════════════ */}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 hero-fade-up" style={{ animationDelay: '1.8s' }}>
        <span className="text-soflo-gray/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-soflo-gray/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-soflo-cyan/60 animate-bounce" />
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-soflo-dark to-transparent pointer-events-none" />
    </section>
  )
}
