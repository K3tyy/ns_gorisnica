import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, User } from 'lucide-react';

const categories = [
  { id: 'u7', name: 'U7', type: 'youth' },
  { id: 'u9', name: 'U9', type: 'youth' },
  { id: 'u11', name: 'U11', type: 'youth' },
  { id: 'u13', name: 'U13', type: 'youth' },
  { id: 'u15', name: 'U15', type: 'senior' },
  { id: 'u17', name: 'U17', type: 'senior' },
  { id: 'clani', name: 'Člani', type: 'senior' },
];

type Player = {
  name: string;
  position: string;
  number: number;
  image?: string;
};

type TeamCategory = {
  image: string;
  description: string;
  coach: string;
  players?: Player[];
};

const teamData: Record<string, TeamCategory> = {
  u7: {
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=2629&auto=format&fit=crop",
    description: "Naši najmlajši upi, ki se šele spoznavajo z nogometno žogo.",
    coach: "Marko Novak"
  },
  u9: {
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2568&auto=format&fit=crop",
    description: "Selekcija U9, kjer se že učimo prvih nogometnih veščin.",
    coach: "Janez Horvat"
  },
  u11: {
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2670&auto=format&fit=crop",
    description: "U11 ekipa, ki že tekmuje v medobčinski ligi.",
    coach: "Peter Zorman"
  },
  u13: {
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2670&auto=format&fit=crop",
    description: "Zadnja stopnja pred prehodom na veliko igrišče.",
    coach: "Tomaž Kovač"
  },
  u15: {
    image: "https://images.unsplash.com/photo-1579952363873-27f3bde9be2e?q=80&w=2670&auto=format&fit=crop",
    description: "Starejši dečki, ki se borijo za vsako žogo.",
    coach: "Andrej Hribar",
    players: [
      { name: "Luka P.", position: "Vratar", number: 1 },
      { name: "Jan K.", position: "Branilec", number: 4 },
      { name: "Miha Z.", position: "Vezist", number: 8 },
      { name: "Rok T.", position: "Napadalec", number: 9 },
      { name: "Žan L.", position: "Branilec", number: 3 },
      { name: "Vid M.", position: "Vezist", number: 6 },
    ]
  },
  u17: {
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2542&auto=format&fit=crop",
    description: "Kadetska ekipa, prihodnost našega članskega moštva.",
    coach: "Simon Golob",
    players: [
      { name: "Matej B.", position: "Vratar", number: 12 },
      { name: "David S.", position: "Branilec", number: 5 },
      { name: "Alen K.", position: "Vezist", number: 10 },
      { name: "Timotej R.", position: "Napadalec", number: 11 },
      { name: "Nejc V.", position: "Branilec", number: 2 },
      { name: "Blaž P.", position: "Vezist", number: 7 },
    ]
  },
  clani: {
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2670&auto=format&fit=crop",
    description: "Ponos kluba, naša članska ekipa, ki nastopa v 1. MNZ Ptuj.",
    coach: "Borut Šket",
    players: [
      { name: "Jan Novak", position: "Vratar", number: 1, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2549&auto=format&fit=crop" },
      { name: "Marko Kovač", position: "Branilec", number: 4, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2535&auto=format&fit=crop" },
      { name: "Luka Zorman", position: "Vezist", number: 10, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2680&auto=format&fit=crop" },
      { name: "Tine Horvat", position: "Napadalec", number: 9, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2680&auto=format&fit=crop" },
      { name: "Aleš Vidmar", position: "Branilec", number: 5, image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2574&auto=format&fit=crop" },
      { name: "Dejan Krajnc", position: "Vezist", number: 8, image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=2574&auto=format&fit=crop" },
      { name: "Mitja Kos", position: "Napadalec", number: 11, image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=2574&auto=format&fit=crop" },
      { name: "Rok Potočnik", position: "Vratar", number: 12, image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2574&auto=format&fit=crop" },
    ]
  }
};

export default function TeamPage() {
  const [activeCategory, setActiveCategory] = useState('clani');
  const currentData = teamData[activeCategory as keyof typeof teamData];
  const isSenior = categories.find(c => c.id === activeCategory)?.type === 'senior';

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-4">
            Naša <span className="text-blue-600">Ekipa</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Od najmlajših do članov - vsi smo eno srce, en klub.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-500 hover:bg-slate-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Group Photo & Info */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12">
              <div className="relative h-64 md:h-96">
                <img 
                  src={currentData.image} 
                  alt={`${activeCategory} ekipa`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h2 className="text-4xl font-display font-black uppercase italic mb-2">{categories.find(c => c.id === activeCategory)?.name}</h2>
                  <p className="text-lg text-gray-200 max-w-xl">{currentData.description}</p>
                </div>
              </div>
              <div className="p-6 bg-slate-900 text-white flex justify-between items-center">
                <div>
                  <span className="text-blue-500 font-bold uppercase text-xs tracking-widest block mb-1">Trener</span>
                  <span className="font-display font-bold text-xl">{currentData.coach}</span>
                </div>
                <div className="bg-blue-600 p-3 rounded-full">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Player Grid (Only for Senior categories) */}
            {isSenior && currentData.players && (
              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 uppercase mb-8 flex items-center gap-2">
                  <User className="w-6 h-6 text-blue-600" /> Igralski kader
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentData.players.map((player, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
                    >
                      <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden">
                        {player.image ? (
                          <img 
                            src={player.image} 
                            alt={player.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                            <User className="w-16 h-16" />
                          </div>
                        )}
                        <div className="absolute top-2 right-2 bg-slate-900 text-white w-10 h-10 flex items-center justify-center font-display font-black rounded-full shadow-lg">
                          {player.number}
                        </div>
                      </div>
                      <div className="p-4 text-center">
                        <h4 className="font-display font-bold text-lg text-slate-900 uppercase italic">{player.name}</h4>
                        <p className="text-blue-600 text-xs font-bold uppercase tracking-wider">{player.position}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
