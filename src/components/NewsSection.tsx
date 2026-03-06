import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/news';

export default function NewsSection() {
  const recentNews = newsData.slice(0, 3);

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-display font-black text-slate-900 uppercase italic tracking-tighter">
              Zadnje <span className="text-blue-600">Novice</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 mt-2"></div>
          </div>
          <Link to="/novice" className="hidden sm:flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wider hover:text-blue-600 transition-colors">
            Vse novice <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {recentNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <Link to={`/novice/${item.id}`} className="block h-full">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2 font-medium">
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {item.summary}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center sm:hidden">
          <Link to="/novice" className="inline-flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wider hover:text-blue-600 transition-colors">
            Vse novice <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
