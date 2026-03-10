import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to get an E-Khata or Khata Transfer?",
    answer: "Typically, an E-Khata transfer process takes anywhere from 4 to 6 weeks, provided all legal documents and property tax receipts are up-to-date. We fast-track this by handling the government liaisoning for you."
  },
  {
    question: "Do I need to be physically present for the property registration?",
    answer: "Yes, standard property registrations in India require the buyer and seller (or their registered power of attorney) to be physically present at the Sub-Registrar's office, along with two witnesses."
  },
  {
    question: "What documents are required for an Encumbrance Certificate (EC)?",
    answer: "You generally need the property detail (Survey Number, Khata Number), a copy of the Sale Deed, address proof of the applicant, and the defined search period (usually 15-30 years). We handle the application form drafting."
  },
  {
    question: "How does property Due Diligence protect me from fraud?",
    answer: "Our expert lawyers verify the entire chain of title, check for pending bank loans, ongoing litigation, and valid municipal approvals so you do not invest in a disputed or illegally constructed property."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <FadeIn>
              <h2 className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-4">FAQs</h2>
              <div className="text-4xl font-outfit font-bold text-slate-900 leading-tight mb-6">
                Frequently Asked <br /> Questions.
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Navigating property laws can be complex. Here are straightforward answers to common queries regarding property documentation.
              </p>
              <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-amber-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Ask a Question
              </button>
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={0.1 * index} direction="up" fullWidth>
                  <div 
                    className={`border rounded-2xl overflow-hidden transition-all duration-500 ${
                      openIndex === index ? 'bg-white border-amber-500/30 shadow-lg shadow-amber-500/5' : 'bg-transparent border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <button
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                      onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    >
                      <span className={`font-outfit font-bold text-lg transition-colors duration-300 ${
                        openIndex === index ? 'text-amber-600' : 'text-slate-900 group-hover:text-amber-500'
                      }`}>
                        {faq.question}
                      </span>
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center ml-4">
                        {openIndex === index ? 
                          <Minus size={16} className="text-amber-500" /> : 
                          <Plus size={16} className="text-slate-500" />
                        }
                      </span>
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
