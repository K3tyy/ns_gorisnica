import { useState } from 'react';
import { motion } from 'motion/react';
import { Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import Lightbox from './Lightbox';

const images = [
  "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2542&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2542&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2670&auto=format&fit=crop"
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-display font-black text-white uppercase italic tracking-tighter">
            Galerija <span className="text-blue-600">Utrinkov</span>
          </h2>
          <Link to="/galerija" className="hidden sm:flex items-center gap-2 text-white font-bold uppercase tracking-wider hover:text-blue-600 transition-colors">
            <Camera className="w-5 h-5" /> Vse galerije
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-video group overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
           <Link to="/galerija" className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wider hover:text-blue-600 transition-colors">
            <Camera className="w-5 h-5" /> Vse galerije
          </Link>
        </div>
      </div>

      <Lightbox 
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
}
