import { FadeIn } from '../ui/FadeIn';

const steps = [
  {
    num: '01',
    title: 'Request A Service',
    desc: 'Select from our wide range of property and legal services. Get clear, upfront pricing and requirements before you begin.'
  },
  {
    num: '02',
    title: 'Send Your Documents',
    desc: 'Securely upload your existing property records. Our platform ensures your sensitive legal documents are protected.'
  },
  {
    num: '03',
    title: 'We Handle The Rest',
    desc: 'Our team of property experts and legal advocates take over. We process everything with relevant government or local authorities.'
  },
  {
    num: '04',
    title: 'Receive Final Docs',
    desc: 'Get your verified legal documentation, registered KHATAs, or property certificates delivered directly to you.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-amber-500 font-semibold tracking-widest uppercase text-sm mb-4">The Vault Advantage</h2>
          <div className="text-4xl md:text-5xl font-outfit font-bold mb-6">Simple Steps, Trusted Process, Verified Results.</div>
          <p className="text-slate-400 text-lg">We remove the legal complexities and long queues. Experience fast, reliable property documentation today.</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={0.15 * index} direction="up" fullWidth>
              <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full group">
                <div className="text-5xl font-outfit font-bold text-white/10 mb-6 group-hover:text-amber-500/20 transition-colors">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold font-outfit text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {step.desc}
                </p>

                {/* Arrow Connector (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-[1px] bg-white/20"></div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
