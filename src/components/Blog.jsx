const posts = [
  {
    image: '/images/post-three.jpg',
    title: 'New Home Buyers',
    date: 'February 1, 2026',
    categories: ['Bridge Loans', 'Fix & Flip'],
    excerpt:
      'Discover the latest insights for new home buyers entering the market. Learn about financing options and strategies for your first investment property.',
  },
  {
    image: '/images/post-one.jpg',
    title: 'Job Site Zoning',
    date: 'December 15, 2015',
    categories: ['Construction'],
    excerpt:
      'Understanding zoning regulations is critical for any construction project. Here\'s what you need to know before breaking ground on your next development.',
  },
  {
    image: '/images/post-twp.jpg',
    title: 'Home Inspection Check',
    date: 'December 15, 2015',
    categories: ['Due Diligence'],
    excerpt:
      'A thorough home inspection can save you thousands. Learn what to look for and how to ensure your investment property is structurally sound.',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="relative py-24 bg-soflo-dark overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-soflo-gold/3 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-soflo-cyan text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            What&apos;s Happening
          </p>
          <h3 className="font-heading text-4xl sm:text-5xl text-white font-bold mb-6">
            LATEST <span className="gradient-text-cyan text-glow-cyan">POSTS</span>
          </h3>
          <div className="divider-gradient w-24 mx-auto" />
        </div>

        {/* Post cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className={`reveal reveal-delay-${i + 1} group glass rounded-2xl overflow-hidden gradient-border hover:-translate-y-2 transition-all duration-500`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <picture>
                  <source srcSet={post.image.replace('.jpg', '.webp')} type="image/webp" />
                  <img
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={534}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-soflo-card via-soflo-card/30 to-transparent" />

                {/* Categories overlay */}
                <div className="absolute bottom-3 left-4 flex gap-2">
                  {post.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-soflo-cyan/20 backdrop-blur-sm text-soflo-cyan rounded-full border border-soflo-cyan/20"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <p className="text-soflo-gray/60 text-xs mb-2 tracking-wide">
                  {post.date}
                </p>
                <h4 className="text-white font-heading text-xl mb-3 group-hover:text-soflo-cyan transition-colors duration-300">
                  {post.title}
                </h4>
                <p className="text-soflo-gray text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-soflo-gold to-soflo-orange text-soflo-dark text-sm font-bold rounded-full hover:shadow-lg hover:shadow-soflo-gold/20 transition-all duration-300 hover:scale-105"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
