import { useEffect } from 'react';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';

export default function ProcessPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-slate-900">
      <Process />
      <Testimonials />
    </div>
  );
}
