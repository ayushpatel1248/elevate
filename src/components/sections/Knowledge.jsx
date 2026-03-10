import { FadeIn } from '../ui/FadeIn';

const articles = [
  {
    category: 'Legal Procedures',
    title: 'Cancellation of Lease Deed and Rental Agreement in India',
    date: 'Oct 12, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?q=80&w=2670&auto=format&fit=crop'
  },
  {
    category: 'Property Guidelines',
    title: 'Encumbrance Certificate Forms in Karnataka - Complete Guide',
    date: 'Sep 28, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop'
  },
  {
    category: 'Due Diligence',
    title: 'Property Verification: Hidden Loan Found in ₹2.5 crore Property',
    date: 'Sep 15, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop'
  }
];

export default function Knowledge() {
  return (
    <section id="knowledge" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-xl">
            <FadeIn>
              <h2 className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-4">Knowledge Hub</h2>
              <div className="text-4xl font-outfit font-bold text-slate-900 leading-tight">
                Your Trusted Guide to <br /> Property & Legal Compliance.
              </div>
            </FadeIn>
          </div>
          <div className="mt-6 md:mt-0">
            <FadeIn delay={0.2} direction="left">
              <a href="#all-insights" className="px-6 py-2.5 rounded-full border border-slate-200 text-slate-900 font-medium hover:border-amber-500 hover:text-amber-600 transition-colors inline-block">
                View All Guides
              </a>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <FadeIn key={index} delay={0.1 * index} direction="up" fullWidth>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/3]">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-slate-900 shadow-sm uppercase tracking-wider">
                    {article.category}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3 font-medium">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-outfit font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="text-sm font-semibold text-slate-900 group-hover:text-amber-600 flex items-center gap-2">
                    Read Guide <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
