import { FadeIn } from '../ui/FadeIn';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The team at Elevate managed my Khata transfer flawlessly. They navigated the entire government process so I didn't have to miss a day of work.",
    author: "Ravi Kumar",
    role: "Property Owner",
    company: "Bangalore"
  },
  {
    quote: "Their due diligence saved me from buying a disputed property. The legal report was incredibly detailed and easy to understand.",
    author: "Deepa Reddy",
    role: "Real Estate Investor",
    company: "Mysore"
  },
  {
    quote: "Registering our family partition deed was a breeze. They drafted the deed, organized the witnesses, and made the sub-registrar visit completely painless.",
    author: "Vishal Sharma",
    role: "Homebuyer",
    company: "Hyderabad"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-4">Client Success</h2>
            <div className="text-4xl font-outfit font-bold text-slate-900 leading-tight">
              Trusted by 500+ Property Owners.
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={0.2 * index} direction="up" fullWidth>
              <div className="glass-card p-8 rounded-3xl relative h-full flex flex-col justify-between group hover:border-amber-500/30">
                <div className="absolute top-6 right-6 text-slate-200 group-hover:text-amber-100 transition-colors duration-500">
                  <Quote size={48} fill="currentColor" />
                </div>
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed font-medium italic mb-8 z-10 relative">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 uppercase tracking-wider text-sm">
                    {testimonial.author.charAt(0)}{testimonial.author.split(' ')[1]?.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
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
