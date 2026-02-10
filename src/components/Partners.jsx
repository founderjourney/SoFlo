const logos = [
  '/images/logo-one.png',
  '/images/logo-two.png',
  '/images/logo-three.png',
  '/images/logo-four.png',
  '/images/logo-five.png',
  '/images/logo-six.png',
]

export default function Partners() {
  return (
    <section className="relative py-20 bg-soflo-dark overflow-hidden">
      {/* Subtle top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 divider-gradient" />
      <div className="absolute bottom-0 left-0 right-0 divider-gradient" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <p className="text-soflo-gray text-sm tracking-[0.3em] uppercase font-medium">
            Trusted By Industry Leaders
          </p>
        </div>

        <div className="reveal reveal-delay-1 flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {logos.map((src, i) => (
            <div key={i} className="group">
              <img
                src={src}
                alt={`Partner ${i + 1}`}
                className="h-10 sm:h-14 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
