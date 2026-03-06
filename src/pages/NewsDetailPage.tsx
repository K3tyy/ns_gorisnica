import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, User, ArrowLeft, Share2, ArrowRight } from 'lucide-react';
import { newsData } from '../data/news';

export default function NewsDetailPage() {
  const { id } = useParams();
  const newsItem = newsData.find(item => item.id === Number(id));
  const otherNews = newsData.filter(item => item.id !== Number(id)).slice(0, 3);

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Novica ni najdena</h1>
        <Link to="/novice" className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Nazaj na novice
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-slate-50 min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link 
          to="/novice" 
          className="inline-flex items-center gap-2 text-slate-500 font-medium text-sm hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Nazaj na vse novice
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100"
          >
            {/* Header Content */}
            <div className="p-8 md:p-12 pb-0">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {newsItem.category}
                </span>
                <span className="text-slate-400 text-sm font-medium">
                  {newsItem.date}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight mb-8">
                {newsItem.title}
              </h1>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm font-medium mb-8 pb-8 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-500" />
                  <span>{newsItem.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>{newsItem.time}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="px-8 md:px-12 mb-10">
              <div className="aspect-video w-full overflow-hidden rounded-2xl">
                <img 
                  src={newsItem.image} 
                  alt={newsItem.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Article Content */}
            <div className="px-8 md:px-12 pb-12">
              <div 
                className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: newsItem.content }}
              />

              {/* Footer Actions */}
              <div className="flex justify-between items-center pt-10 mt-10 border-t border-slate-100">
                <div className="flex gap-2">
                  <span className="text-slate-400 text-sm font-medium">Deli novico:</span>
                  <button className="text-slate-600 hover:text-blue-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sticky top-32">
              <h3 className="text-xl font-display font-bold text-slate-900 mb-6 uppercase italic">
                Ostale <span className="text-blue-600">Novice</span>
              </h3>
              <div className="space-y-6">
                {otherNews.map((item) => (
                  <Link key={item.id} to={`/novice/${item.id}`} className="group block">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-blue-600 uppercase mb-1 block">
                          {item.category}
                        </span>
                        <h4 className="font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                          {item.title}
                        </h4>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {item.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                <Link to="/novice" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider">
                  Vse novice <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
