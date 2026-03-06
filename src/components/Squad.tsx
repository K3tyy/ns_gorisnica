import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const players = [
  { name: "Jan Novak", position: "Vratar", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2549&auto=format&fit=crop" },
  { name: "Marko Kovač", position: "Branilec", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2535&auto=format&fit=crop" },
  { name: "Luka Zorman", position: "Vezist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2680&auto=format&fit=crop" },
  { name: "Tine Horvat", position: "Napadalec", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2680&auto=format&fit=crop" },
];

export default function Squad() {
  return (
    <section id="squad" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-4">
            Prva <span className="text-blue-600">Ekipa</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Spoznajte fante, ki s ponosom nosijo dres ŠN Gorišnica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {players.map((player, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                <img 
                  src={player.image} 
                  alt={player.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-6 pt-20">
                <h3 className="text-white font-display font-bold text-xl uppercase italic">{player.name}</h3>
                <p className="text-gray-300 text-sm font-medium uppercase tracking-wider">{player.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/ekipa" className="inline-block px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold uppercase tracking-wider hover:bg-slate-900 hover:text-white transition-colors">
            Poglej celotno ekipo
          </Link>
        </div>
      </div>
    </section>
  );
}
