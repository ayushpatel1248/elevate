import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, FileCheck, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  },
};

export default function Hero() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll Parallax Effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const rotateXText = useTransform(scrollYProgress, [0, 0.5], [0, 20]);
  
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const rotateImage = useTransform(scrollYProgress, [0, 1], [5, -15]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityImage = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);

  // Smooth mouse movement for floating cards
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const mouseXStart = useSpring(0, springConfig);
  const mouseYStart = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Only process mouse movements on non-touch devices
      if (window.matchMedia("(pointer: coarse)").matches) return;
      
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40; 
      const y = (e.clientY / innerHeight - 0.5) * 40;
      setMousePosition({ x, y });
      mouseXStart.set(x);
      mouseYStart.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseXStart, mouseYStart]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-20 overflow-hidden bg-slate-50"
    >
      {/* Animated Abstract Blobs Background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Text Content */}
          <motion.div 
            className="lg:col-span-6 xl:col-span-5 pt-10 lg:pt-0 z-20 origin-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{ 
              opacity: opacityText,
              scale: scaleText,
              rotateX: rotateXText,
              y: useTransform(scrollYProgress, [0, 1], ["0%", "-40%"])
            }}
          >
            <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/50 mb-8 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-700 tracking-wider uppercase">Property Legal Services</span>
            </motion.div>
            
            <div className="overflow-hidden mb-6">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-outfit font-extrabold text-slate-900 leading-[1.05] tracking-tight"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                Zero Stress.<br />
                <span className="text-gradient">Total Trust.</span>
              </motion.h1>
            </div>

            <motion.p variants={fadeUpVariant} className="text-lg sm:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed mix-blend-multiply">
              Get your property documentation, E-Khata, and due diligence done with absolute legal certainty. Fast, transparent, and completely verified.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link to="/services" className="group relative overflow-hidden flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/40 w-full sm:w-auto">
                <span className="relative z-10 flex items-center gap-2">
                  Request Service
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              </Link>
              
              <Link to="/contact" className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/50 backdrop-blur-md text-slate-900 rounded-full font-bold border-2 border-slate-900/10 hover:border-slate-900 hover:bg-slate-900/5 transition-all duration-300 w-full sm:w-auto">
                Talk to an Expert
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={fadeUpVariant} className="mt-12 pt-8 border-t border-slate-900/10 flex flex-wrap gap-8 items-center">
              <div className="flex flex-col">
                <span className="text-3xl font-outfit font-black text-slate-900">100%</span>
                <span className="text-sm font-semibold text-slate-500">Verified Titles</span>
              </div>
              <div className="w-1 h-8 bg-slate-200 rounded-full hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-outfit font-black text-slate-900">10K+</span>
                <span className="text-sm font-semibold text-slate-500">Docs Handled</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Content (Right side) Desktop & Mobile optimized */}
          <div className="lg:col-span-6 xl:col-span-7 relative h-[400px] lg:h-[700px] w-full flex justify-center items-center mt-8 lg:mt-0">
            {/* Main Image Mask with Parallax */}
            <motion.div 
              className="absolute right-0 lg:right-0 top-1/2 -translate-y-1/2 w-full max-w-[450px] lg:max-w-[600px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/40"
              initial={{ scale: 0.8, opacity: 0, rotate: 15, y: 100 }}
              animate={{ scale: 1, opacity: 1, rotate: 5, y: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              style={{ 
                scale: scaleImage,
                rotate: rotateImage,
                y: yImage,
                opacity: opacityImage
               }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent z-10 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop" 
                alt="Legal Property Documents" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Card 1: Verified (visible on md+) */}
            <motion.div 
              style={{ x: useTransform(mouseXStart, x => x * -1.5), y: useTransform(mouseYStart, y => y * -1.5) }}
              className="absolute top-4 lg:top-20 -left-4 sm:left-10 lg:left-0 xl:right-[85%] z-30 hidden sm:block"
            >
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card p-4 lg:p-5 rounded-2xl flex items-center gap-4 border border-white/50 w-56 lg:w-64"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="text-xs lg:text-sm font-bold text-slate-900">Legal Verification</div>
                  <div className="text-[10px] lg:text-xs text-emerald-600 font-bold mt-0.5">Approved & Clear</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Card 2: Fast Track */}
            <motion.div 
              style={{ x: useTransform(mouseXStart, x => x * 1.2), y: useTransform(mouseYStart, y => y * 1.2) }}
              className="absolute bottom-10 lg:bottom-32 -right-4 sm:right-10 lg:-right-4 xl:-right-10 z-30"
            >
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="glass-card p-4 lg:p-5 rounded-2xl border border-white/50 w-64 lg:w-72 shadow-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                      <Zap size={18} />
                    </div>
                    <div>
                      <div className="text-xs lg:text-sm font-bold text-slate-900">E-Khata Transfer</div>
                      <div className="text-[10px] lg:text-xs text-slate-500 font-medium">In Progress...</div>
                    </div>
                  </div>
                  <span className="text-xs lg:text-sm font-black text-amber-600">75%</span>
                </div>
                <div className="h-1.5 lg:h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Card 3: Document Uploads (Desktop only) */}
            <motion.div 
              style={{ x: useTransform(mouseXStart, x => x * 0.8), y: useTransform(mouseYStart, y => y * 0.8) }}
              className="absolute bottom-4 left-20 z-10 hidden xl:block"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="glass-card p-3 lg:p-4 rounded-xl border border-white/50 flex items-center gap-3 shadow-lg"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <FileCheck size={18} />
                </div>
                <div className="pr-2 lg:pr-4">
                  <div className="text-[10px] lg:text-xs font-bold text-slate-900">Sale Deed</div>
                  <div className="text-[8px] lg:text-[10px] text-slate-500 font-medium">Drafting Complete</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Infinite Marquee Banner */}
      <div className="absolute bottom-0 left-0 w-full bg-slate-900 py-3 border-y border-slate-800 overflow-hidden z-20 flex">
        <div className="flex w-[200%] md:w-[150%] xl:w-full animate-marquee items-center text-white/70 whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8 lg:gap-16 px-4 lg:px-8 items-center text-xs lg:text-sm font-semibold tracking-wide uppercase shrink-0">
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-amber-500" /> BDA Approved Experts</span>
              <span className="flex items-center gap-2"><FileCheck size={16} className="text-amber-500" /> RERA Compliance</span>
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-amber-500" /> Verified Property Lawyers</span>
              <span className="flex items-center gap-2"><Zap size={16} className="text-amber-500" /> Fast-Track Processing</span>
              <span className="flex items-center gap-2"><FileCheck size={16} className="text-amber-500" /> Secure Document Handling</span>
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-amber-500" /> BBMP E-Khata Transfer</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
