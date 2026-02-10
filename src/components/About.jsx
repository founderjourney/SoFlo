const cards = [
  {
    image: '/images/multifamily-duplex-triplex-fourplex-financing.png',
    title: 'DSCR "Cash Out" Multifamily',
    highlight: 'ReFi',
    description:
      'Financing options for multifamily properties including duplexes, triplexes, and fourplexes. Leverage DSCR programs to refinance and pull equity from stabilized rental properties.',
  },
  {
    image: '/images/single-family-rental-loans.png',
    title: 'Single Family Rental',
    highlight: 'ReFi',
    description:
      'Build wealth through long-term real estate with our financing options for single family rental properties. Utilize DSCR refinancing programs based on property cash flow.',
  },
  {
    image: '/images/fix-and-flip-financing.png',
    title: 'Fix & Flip',
    highlight: 'Loan',
    description:
      'Capitalize on opportunities in the distressed property market with rapid short-term fix-and-flip loans designed for investors who buy, renovate, and sell quickly.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-soflo-dark overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-soflo-cyan/3 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16 reveal">
          <p className="text-soflo-cyan text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            What We Offer
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-white font-bold mb-6">
            Investment <span className="gradient-text-cyan">Solutions</span>
          </h2>
          <div className="divider-gradient w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`reveal reveal-delay-${i + 1} group glass rounded-2xl overflow-hidden gradient-border hover:glow-cyan transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soflo-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <h4 className="text-white font-heading text-lg mb-3 group-hover:text-soflo-cream transition-colors">
                  {card.title}{' '}
                  <span className="gradient-text-cyan">{card.highlight}</span>
                </h4>
                <p className="text-soflo-gray text-sm leading-relaxed mb-5">
                  {card.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-soflo-cyan text-sm font-medium hover:text-soflo-gold transition-colors duration-300 group/link"
                >
                  Learn More
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
