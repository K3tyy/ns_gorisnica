import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ChevronRight } from 'lucide-react';
import Lightbox from '../components/Lightbox';

const seasons = [
  { id: '2025-26', name: 'Sezona 2025/26' },
  { id: '2024-25', name: 'Sezona 2024/25' },
  { id: '2023-24', name: 'Sezona 2023/24' },
];

const galleryData = {
  '2025-26': [
    "https://images.unsplash.com/photo-1522778119026-d647f0565c6a?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1575361204480-aadea25d46f3?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2542&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2670&auto=format&fit=crop"
  ],
  '2024-25': [
    "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2568&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2693&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2629&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=2500&auto=format&fit=crop",
  ],
  '2023-24': [
    "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=2549&auto=format&fit=crop",
  ]
};

export default function GalleryPage() {
  const [activeSeason, setActiveSeason] = useState('2025-26');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const currentImages = galleryData[activeSeason as keyof typeof galleryData];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-display font-black text-white uppercase italic tracking-tighter mb-4">
            Galerija <span className="text-blue-600">Utrinkov</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Arhiv fotografij po sezonah.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Season Selector */}
          <div className="lg:w-1/4">
            <div className="bg-slate-800 rounded-xl p-4 sticky top-24">
              <h3 className="text-xl font-display font-bold uppercase mb-4 text-blue-500 px-2">Sezone</h3>
              <div className="space-y-2">
                {seasons.map((season) => (
                  <button
                    key={season.id}
                    onClick={() => setActiveSeason(season.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-between group ${
                      activeSeason === season.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {season.name}
                    {activeSeason === season.id && <ChevronRight className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSeason}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Camera className="w-6 h-6 text-blue-500" />
                  <h2 className="text-2xl font-bold">{seasons.find(s => s.id === activeSeason)?.name}</h2>
                  <span className="text-gray-500 text-sm ml-2">({currentImages.length} slik)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentImages.map((src, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="group relative aspect-video overflow-hidden rounded-xl bg-slate-800 cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <img 
                        src={src} 
                        alt={`Gallery image ${index + 1}`} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/10 p-3 rounded-full border border-white/30 text-white backdrop-blur-sm">
                          <Camera className="w-6 h-6" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <Lightbox 
        images={currentImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
