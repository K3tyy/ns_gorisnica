import { motion } from 'motion/react';

export default function Sponsors() {
  return (
    <section className="py-12 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-gray-400 font-display font-bold uppercase tracking-widest text-sm mb-8">
          Ponosni sponzorji in partnerji
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05, filter: "grayscale(0%)", opacity: 1 }}
              className="h-12 w-32 bg-gray-100 rounded flex items-center justify-center text-gray-400 font-bold opacity-60 grayscale transition-all duration-300 cursor-pointer"
            >
              LOGO {i}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
