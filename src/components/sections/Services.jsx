import { FadeIn } from '../ui/FadeIn';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, Home, Search, FileSignature, Landmark, Zap, Users } from 'lucide-react';

const services = [
  {
    id: 'e-khata',
    icon: <FileText size={32} className="text-amber-500" />,
    title: 'E-Khata & Khata Transfer',
    description: 'Seamless registration, transfer, and procurement of E-Khata to establish your property\'s legal validity.',
  },
  {
    id: 'property-due-diligence',
    icon: <Search size={32} className="text-amber-500" />,
    title: 'Property Due Diligence',
    description: 'Comprehensive property verification and legal background checks to prevent hidden loans or encumbrances.',
  },
  {
    id: 'legal-consultation',
    icon: <ShieldCheck size={32} className="text-amber-500" />,
    title: 'Legal Consultation',
    description: 'Get verified legal support from trusted property lawyers equipped with local expertise and reliable counsel.',
  },
  {
    id: 'deed-drafting-modt',
    icon: <FileSignature size={32} className="text-amber-500" />,
    title: 'Deed Drafting & MODT',
    description: 'Professional drafting of Sale Deeds, Lease Agreements, MOUs, and MODT Cancellations.',
  },
  {
    id: 'utility-name-changes',
    icon: <Zap size={32} className="text-amber-500" />,
    title: 'Utility Name Changes',
    description: 'Hassle-free BESCOM name change, Tax name change, and Gruh Jyoti registration support.',
  },
  {
    id: 'encumbrance-certificate',
    icon: <Landmark size={32} className="text-amber-500" />,
    title: 'Encumbrance Certificate (EC)',
    description: 'Procure official EC forms ensuring your property is free from legal or monetary liabilities.',
  },
  {
    id: 'property-registration',
    icon: <Home size={32} className="text-amber-500" />,
    title: 'Property Registration',
    description: 'End-to-end support for the Registry of Property and smooth Property Conveyancing.',
  },
  {
    id: 'family-tree-verification',
    icon: <Users size={32} className="text-amber-500" />,
    title: 'Family Tree Verification',
    description: 'Official generation and certification of Family Tree documents for inheritance and succession.',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-xl">
            <FadeIn>
              <h2 className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-4">Our Services</h2>
              <div className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 leading-tight">
                All Property Services <br /> You Need, In One Place.
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={0.05 * index} direction="up" fullWidth>
              <Link to={`/services/${service.id}`} className="group bg-slate-50 rounded-3xl p-6 lg:p-8 hover:bg-slate-900 transition-colors duration-500 h-full border border-slate-100 hover:border-slate-800 flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-white group-hover:bg-slate-800 flex items-center justify-center mb-6 shadow-sm transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-outfit font-bold text-slate-900 group-hover:text-white mb-3 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-400 mb-6 flex-grow leading-relaxed transition-colors duration-500 text-sm">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-amber-500 transform group-hover:translate-x-2 transition-all duration-500 mt-auto">
                  Request Service &rarr;
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
