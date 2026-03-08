import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1 border-r border-slate-800/50 pr-8">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-9 h-9 rounded-[10px] bg-[#1a2130] border border-slate-700 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-outfit font-extrabold text-2xl leading-none">E</span>
              </div>
              <span className="font-outfit font-extrabold text-3xl tracking-tight text-white">Elevate<span className="text-amber-400">.</span></span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-xs">
              Trusted legal expertise and fast, reliable property documentation services in Bangalore.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold font-outfit mb-6 uppercase tracking-wider text-sm">Property Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">E-Khata & Khata Transfer</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Property Registration</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Due Diligence</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Deed Drafting</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Encumbrance Certificate</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-bold font-outfit mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/process" className="hover:text-amber-500 transition-colors">Our Process</Link></li>
              <li><Link to="/knowledge" className="hover:text-amber-500 transition-colors">Legal Guides</Link></li>
              <li><Link to="/faq" className="hover:text-amber-500 transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-white font-bold font-outfit mb-6 uppercase tracking-wider text-sm">Need Help?</h4>
            <p className="text-sm mb-4">Talk to our property legal experts today.</p>
            <div className="text-amber-500 font-bold text-xl mb-2">+91 98765 43210</div>
            <div className="text-sm">support@elevatecapital.in</div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; {currentYear} Elevate Capital. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
