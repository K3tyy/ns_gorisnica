import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2568&auto=format&fit=crop"
          alt="Football Match"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-blue-400 font-display font-bold tracking-widest uppercase text-sm md:text-base mb-4">
            Ponos in strast od leta 1946
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black text-white uppercase italic tracking-tighter mb-6">
            ŠNK <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Gorišnica</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light px-4">
            Srce na igrišču, duša na tribuni. Pridružite se nam na poti do novih zmag.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0">
            <a 
              href="/#matches" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('matches')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider rounded-none transform skew-x-[-10deg] transition-all hover:scale-105 flex items-center justify-center gap-2 group"
            >
              <span className="skew-x-[10deg]">Naslednja tekma</span>
              <Calendar className="skew-x-[10deg] w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/#news" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold uppercase tracking-wider rounded-none transform skew-x-[-10deg] transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <span className="skew-x-[10deg]">Zadnje novice</span>
              <ArrowRight className="skew-x-[10deg] w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
}
