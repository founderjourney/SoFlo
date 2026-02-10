export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-soflo-dark-alt overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-soflo-cyan/4 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-soflo-gold/3 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-soflo-gold text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            How To Get In Touch
          </p>
          <h3 className="font-heading text-4xl sm:text-5xl text-white font-bold mb-6">
            CONTACT <span className="gradient-text-cyan text-glow-cyan">US</span>
          </h3>
          <div className="divider-gradient w-24 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: contact info (2 cols) */}
          <div className="lg:col-span-2 space-y-6 reveal reveal-delay-1">
            {/* Hours */}
            <div className="glass rounded-2xl p-6 group hover:glow-cyan transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-soflo-cyan/10 flex items-center justify-center text-soflo-cyan group-hover:bg-soflo-cyan/20 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-heading text-base mb-1">Hours</h4>
                  <p className="text-soflo-gray text-sm leading-relaxed">
                    Mon-Fri: 12am – 12am
                    <br />
                    Sat-Sun: 12am – 12am
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass rounded-2xl p-6 group hover:glow-cyan transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-soflo-cyan/10 flex items-center justify-center text-soflo-cyan group-hover:bg-soflo-cyan/20 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-heading text-base mb-1">Phone</h4>
                  <p className="text-soflo-gray text-sm leading-relaxed">
                    1+(999)-323-0202
                    <br />
                    1+(777)-444-6565 FAX
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="glass rounded-2xl p-6 group hover:glow-cyan transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-soflo-cyan/10 flex items-center justify-center text-soflo-cyan group-hover:bg-soflo-cyan/20 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-heading text-base mb-1">Address</h4>
                  <p className="text-soflo-gray text-sm leading-relaxed">
                    1232 Westley Ave Street
                    <br />
                    907 WP Theme, Webcreations907
                    <br />
                    99201-34 887-33
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form (3 cols) */}
          <div className="lg:col-span-3 reveal reveal-delay-2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass rounded-2xl p-8 sm:p-10 glow-cyan"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-soflo-cream/80 text-sm mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-soflo-dark/50 border border-soflo-gray/20 rounded-xl px-4 py-3 text-white text-sm focus:border-soflo-cyan focus:shadow-[0_0_15px_rgba(10,220,228,0.15)] focus:outline-none transition-all duration-300 placeholder:text-soflo-gray/40"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-soflo-cream/80 text-sm mb-2 font-medium">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-soflo-dark/50 border border-soflo-gray/20 rounded-xl px-4 py-3 text-white text-sm focus:border-soflo-cyan focus:shadow-[0_0_15px_rgba(10,220,228,0.15)] focus:outline-none transition-all duration-300 placeholder:text-soflo-gray/40"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-soflo-cream/80 text-sm mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-soflo-dark/50 border border-soflo-gray/20 rounded-xl px-4 py-3 text-white text-sm focus:border-soflo-cyan focus:shadow-[0_0_15px_rgba(10,220,228,0.15)] focus:outline-none transition-all duration-300 placeholder:text-soflo-gray/40"
                  placeholder="How can we help?"
                />
              </div>
              <div className="mb-6">
                <label className="block text-soflo-cream/80 text-sm mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-soflo-dark/50 border border-soflo-gray/20 rounded-xl px-4 py-3 text-white text-sm focus:border-soflo-cyan focus:shadow-[0_0_15px_rgba(10,220,228,0.15)] focus:outline-none transition-all duration-300 resize-none placeholder:text-soflo-gray/40"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="shimmer w-full sm:w-auto px-10 py-3.5 bg-gradient-to-r from-soflo-gold to-soflo-orange text-soflo-dark font-bold rounded-full hover:shadow-xl hover:shadow-soflo-gold/25 transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
