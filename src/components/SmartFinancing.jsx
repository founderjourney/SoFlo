export default function SmartFinancing() {
  return (
    <section className="relative py-24 bg-soflo-dark-alt overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-soflo-cyan/4 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="reveal">
          <picture>
            <source srcSet="/images/SoFlo-Lenders-logo-design-long-clear.webp" type="image/webp" />
            <img
              src="/images/SoFlo-Lenders-logo-design-long-clear.png"
              alt="SoFlo Lenders"
              width={200}
              height={36}
              loading="lazy"
              className="h-10 sm:h-12 mx-auto mb-8 drop-shadow-[0_0_20px_rgba(10,220,228,0.15)]"
            />
          </picture>
        </div>

        <div className="reveal reveal-delay-1">
          <p className="text-soflo-cream/80 text-lg sm:text-xl mb-2 font-light">
            Where size <em className="underline decoration-soflo-cyan underline-offset-4">doesn&apos;t</em> matter
          </p>
          <p className="text-soflo-cream font-bold text-xl sm:text-2xl mb-10 tracking-wide">
            &mdash; We get the job done! &mdash;
          </p>
        </div>

        <div className="reveal reveal-delay-2">
          <h3 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">SMARTER </span>
            <span className="gradient-text-cyan text-glow-cyan">FINANCING</span>
          </h3>
        </div>

        <div className="reveal reveal-delay-3">
          <div className="divider-gradient w-24 mx-auto mb-10" />

          <div className="glass rounded-2xl p-8 sm:p-10 max-w-2xl mx-auto glow-cyan">
            <p className="text-soflo-gray text-base sm:text-lg leading-relaxed">
              <strong className="text-white font-heading">SoFlo Lenders</strong>{' '}
              specializes in commercial and investment real estate financing. We
              help developers, investors, and business owners secure optimal
              funding for acquisitions, new developments, and refinancing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
