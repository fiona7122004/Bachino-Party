import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { 
  Menu, X, Instagram, ArrowUp, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

import Home from './pages/Home';
import RoomDetail from './pages/RoomDetail';
import Pricing from './pages/Pricing';

// --- Global Components ---

const SidebarNav = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { name: 'Home', id: 'home', link: '/' },
    { name: 'Our Party Room', id: 'spaces', link: '/#spaces' },
    { name: 'Price list', id: 'pricing', link: '/pricing' },
    { name: 'Review', id: 'reviews', link: '/#reviews' },
    { name: 'Reserve NOW', id: 'contact', link: '/#contact' },
  ];

  const handleNavClick = (id: string, link: string) => {
    if (isHome && link.includes('#')) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 p-2 bg-[var(--color-terracotta)] text-white rounded-full lg:hidden shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[35] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Desktop */}
      <aside className={`
        fixed left-0 top-0 h-screen bg-[var(--color-espresso)] text-[var(--color-sand)] 
        transition-all duration-500 ease-in-out z-40
        ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0 lg:w-20 xl:w-64'}
      `}>
        <div className="flex flex-col h-full p-8">
          <div className="mb-12 overflow-hidden whitespace-nowrap">
            <div className={`mb-6 transition-all duration-500 ${isOpen ? 'w-48 h-48 opacity-100' : 'lg:w-0 lg:h-0 lg:opacity-0 xl:w-48 xl:h-48 xl:opacity-100'}`}>
              <img 
                src="https://lh3.googleusercontent.com/sitesv/AA5AbUAg7O1c38yexpmNsnp1Rq6jGInYtxXGA6pLPxJ_x9ocscyCdfNHApRMqVbpZ0DESB8SobfnCyjogECCWy-2VMtK5FN61LLXM2AUaLxajA1LR8KivlU21_Tci-uAf4BZROLtljMG9LsGF19gKbTtsr4-0sG40jsCNn6t6fHaVOuOzHLsbV8iaDaMCSw=w16383" 
                alt="Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-3xl font-serif italic tracking-wider">BACHINO</h1>
            <p className={`text-[10px] uppercase tracking-[0.3em] mt-2 transition-opacity duration-300 ${isOpen ? 'opacity-70' : 'lg:opacity-0 xl:opacity-70'}`}>
              Party Room Collective
            </p>
          </div>

          <nav className="flex-1 space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                onClick={() => {
                  setIsOpen(false);
                  if (isHome && item.link.includes('#')) {
                    const id = item.link.split('#')[1];
                    const element = document.getElementById(id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="group flex items-center gap-4 text-left w-full hover:text-white transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-terracotta)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className={`text-sm uppercase tracking-widest transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'lg:opacity-0 xl:opacity-100'}`}>
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          <div className="pt-8 border-t border-[rgba(232,222,209,0.1)] space-y-6">
            <div className={`flex gap-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'lg:opacity-0 xl:opacity-100'}`}>
              <Instagram size={18} className="cursor-pointer hover:text-[var(--color-terracotta)]" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

const Footer = () => (
  <footer className="bg-[var(--color-espresso)] text-[var(--color-sand)] pt-24 pb-12 px-6 lg:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-white/10">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif italic tracking-widest text-white">BACHINO</h2>
          <p className="text-xs opacity-60 leading-relaxed font-light uppercase tracking-wider">
            位於香港地段的 8 個都市避風港。我們相信每一次聚會都值得擁有一個能啟發聯繫和創意的空間。
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[var(--color-terracotta)] hover:border-[var(--color-terracotta)] hover:text-white transition-all">
              <Instagram size={18} />
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-[var(--color-terracotta)]">網站導航</h4>
          <ul className="space-y-4 text-[10px] opacity-70">
            <li><Link to="/" className="hover:text-[var(--color-terracotta)] transition-colors uppercase tracking-[0.2em]">Home</Link></li>
            <li><Link to="/#spaces" className="hover:text-[var(--color-terracotta)] transition-colors uppercase tracking-[0.2em]">Our Party Room</Link></li>
            <li><Link to="/pricing" className="hover:text-[var(--color-terracotta)] transition-colors uppercase tracking-[0.2em]">Price list</Link></li>
            <li><Link to="/#reviews" className="hover:text-[var(--color-terracotta)] transition-colors uppercase tracking-[0.2em]">Review</Link></li>
            <li><Link to="/#contact" className="hover:text-[var(--color-terracotta)] transition-colors uppercase tracking-[0.2em]">Reserve NOW</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-[var(--color-terracotta)]">空間與工作室</h4>
          <ul className="space-y-4 text-[10px] opacity-70">
            {['會員計劃', '合作夥伴', '媒體資料', '預約政策', '使用條款'].map(l => (
              <li key={l}><button className="hover:text-[var(--color-terracotta)] transition-colors uppercase tracking-[0.2em]">{l}</button></li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-[var(--color-terracotta)]">訂閱通訊</h4>
            <p className="text-[10px] opacity-60 mb-6 font-light uppercase tracking-wider">加入我們的集體名單，獲取每月關於聚會與創意生活的啟發。</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="hello@escape.hk" 
                className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-full text-[10px] focus:outline-none focus:border-[var(--color-terracotta)] placeholder:opacity-30" 
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--color-terracotta)] p-2 rounded-full hover:scale-105 transition-transform text-white">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold">
        <p>© 2026 BACHINO | PARTY ROOM COLLECTIVE. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <span>HONG KONG, SAR</span>
          <span>CURATED WITH INTENTION</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    // Handle hash scroll on load/location change
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen selection:bg-[var(--color-terracotta)] selection:text-white bg-[var(--color-sand)]">
      {/* Progress Bar */}
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-terracotta)] z-[60] origin-left" style={{ scaleX }} />

        <SidebarNav isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        <main className={`transition-all duration-500 ${isSidebarOpen ? 'lg:pl-64' : 'lg:pl-20 xl:pl-64'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/room/:id" element={<RoomDetail />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>

          <Footer />

          {/* Back to Top */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 z-[100] w-12 h-12 bg-[var(--color-terracotta)] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[var(--color-espresso)] transition-colors group border-2 border-white/20"
              >
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            )}
          </AnimatePresence>
        </main>
    </div>
  );
}
