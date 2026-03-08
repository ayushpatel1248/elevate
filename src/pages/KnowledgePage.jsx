import { useEffect } from 'react';
import Knowledge from '../components/sections/Knowledge';

export default function KnowledgePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-white">
      <Knowledge />
    </div>
  );
}
