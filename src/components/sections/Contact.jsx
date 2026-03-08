import { useState } from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', interest: 'E-Khata & Khata Transfer' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('http://localhost:5001/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          serviceId: 'general-contact',
          serviceName: formData.interest
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit request');
      }

      setSubmitStatus({ type: 'success', message: 'Request submitted successfully! Our experts will contact you soon.' });
      setFormData({ name: '', phone: '', interest: 'E-Khata & Khata Transfer' });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute center-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-amber-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 min-h-[600px]">
          
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-center">
            <FadeIn>
              <h2 className="text-amber-500 font-semibold tracking-widest uppercase text-sm mb-4">Get in Touch</h2>
              <div className="text-4xl md:text-5xl font-outfit font-bold mb-6">
                Secure your property documents today.
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-md">
                Fast processing, reliable legal expertise, and smooth document delivery. Let's get started on your property registration or due diligence.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors duration-500 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Office Location</h4>
                    <p className="text-lg font-medium text-white group-hover:text-amber-400 transition-colors">
                      Elevate Towers, 2nd Floor<br />
                      Jayanagar, Bengaluru 560011
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors duration-500 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Direct Line</h4>
                    <p className="text-lg font-medium text-white group-hover:text-amber-400 transition-colors">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors duration-500 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-lg font-medium text-white group-hover:text-amber-400 transition-colors">
                      support@elevatecapital.in
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Form */}
          <div className="flex items-center justify-center">
            <FadeIn delay={0.2} direction="left" fullWidth>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm w-full max-w-md ml-auto">
                <h3 className="text-2xl font-outfit font-bold text-white mb-6">Request A Service</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="+91"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-slate-400 mb-2">Select Service</label>
                    <select 
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors appearance-none"
                    >
                      <option value="E-Khata & Khata Transfer">E-Khata & Khata Transfer</option>
                      <option value="Due Diligence">Due Diligence</option>
                      <option value="Deed Drafting">Deed Drafting</option>
                      <option value="Property Registration">Property Registration</option>
                      <option value="Other Legal Service">Other Legal Service</option>
                    </select>
                  </div>

                  {submitStatus && (
                    <div className={`p-3 rounded-lg text-sm font-medium flex items-center gap-2 ${submitStatus.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                      {submitStatus.type === 'success' && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                      {submitStatus.message}
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold transition-all duration-300 group ${isSubmitting ? 'bg-amber-500/50 text-slate-900 cursor-not-allowed' : 'bg-amber-500 text-slate-900 hover:bg-amber-400 hover:shadow-lg'}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    {!isSubmitting && <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />}
                  </button>
                  <p className="text-xs text-center text-slate-500 mt-4">
                    Our team will get back to you within 24 hours.
                  </p>
                </form>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
