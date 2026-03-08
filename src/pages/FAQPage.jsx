import { useEffect } from 'react';
import FAQ from '../components/sections/FAQ';

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-slate-50">
      <FAQ />
    </div>
  );
}
