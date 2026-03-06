import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/news';

export default function NewsPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-4">
            Vse <span className="text-blue-600">Novice</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Spremljajte aktualno dogajanje v klubu, poročila s tekem in obvestila.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Link to={`/novice/${item.id}`} className="block h-full">
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3 font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {item.summary}
                  </p>
                  <span className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase text-sm tracking-wider hover:text-blue-800 transition-colors">
                    Preberi več <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
