import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Domov', href: '/' },
    { name: 'Novice', href: '/novice' },
    { name: 'Ekipa', href: '/ekipa' },
    { name: 'Galerija', href: '/galerija' },
    { name: 'Izdelki', href: '/izdelki' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-500 transition-colors">
                <Shield className="w-6 h-6 text-white fill-current" />
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tighter uppercase italic">
                ŠNK <span className="text-blue-500 group-hover:text-blue-400 transition-colors">Gorišnica</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-blue-500 transition-colors text-sm font-medium uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors ${location.pathname === link.href ? 'text-blue-500' : 'text-gray-300 hover:text-blue-500'}`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-800"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 sm:px-3">
              {navLinks.map((link) => (
                 link.href.startsWith('/#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                 ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-lg font-medium rounded-md uppercase tracking-wider ${location.pathname === link.href ? 'text-blue-500 bg-slate-800' : 'text-gray-300 hover:text-white hover:bg-slate-800'}`}
                  >
                    {link.name}
                  </Link>
                 )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
