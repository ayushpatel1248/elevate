import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import Knowledge from '../components/sections/Knowledge';
import FAQ from '../components/sections/FAQ';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Knowledge />
      <FAQ />
    </div>
  );
}
