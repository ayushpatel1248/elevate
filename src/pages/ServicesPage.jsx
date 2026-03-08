import { useEffect } from 'react';
import Services from '../components/sections/Services';
import Contact from '../components/sections/Contact';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <Services />
      <Contact />
    </div>
  );
}
