import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import KnowledgePage from './pages/KnowledgePage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import AdminPortal from './pages/AdminPortal';

function App() {
  return (
    <div className="font-inter text-slate-900 bg-slate-50 min-h-screen w-full max-w-[100vw] overflow-x-hidden selection:bg-amber-500/30 selection:text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
