import { motion } from 'motion/react';
import { Shield, Users, Heart } from 'lucide-react';

export default function ClubInfo() {
  return (
    <section id="club" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-black uppercase italic tracking-tighter mb-6">
              Več kot le <span className="text-blue-600">Klub</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              ŠNK Gorišnica je srce naše lokalne skupnosti. Od leta 1946 združujemo generacije ljubiteljev nogometa, spodbujamo športni duh in gradimo prijateljstva, ki trajajo vse življenje.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Naša vizija je ustvariti okolje, kjer se mladi talenti lahko razvijajo, kjer se spoštujejo vrednote fair playa in kjer je vsak član pomemben del naše velike družine.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <Shield className="w-8 h-8 text-blue-500 mb-3" />
                <h4 className="font-display font-bold text-lg mb-1">Tradicija</h4>
                <p className="text-sm text-gray-400">Ponosni na našo zgodovino od 1946.</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <Users className="w-8 h-8 text-blue-500 mb-3" />
                <h4 className="font-display font-bold text-lg mb-1">Skupnost</h4>
                <p className="text-sm text-gray-400">Povezujemo ljudi skozi šport.</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <Heart className="w-8 h-8 text-blue-500 mb-3" />
                <h4 className="font-display font-bold text-lg mb-1">Strast</h4>
                <p className="text-sm text-gray-400">Ljubezen do nogometa in kluba.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2568&auto=format&fit=crop" 
              alt="Club History" 
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
