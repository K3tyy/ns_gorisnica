import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-display font-bold uppercase italic tracking-tighter mb-4">
              ŠN <span className="text-blue-600">Gorišnica</span>
            </h2>
            <p className="text-gray-400 max-w-sm">
              Uradna spletna stran Športnega nogometnega kluba Gorišnica. Spremljajte nas na družbenih omrežjih za najnovejše novice in rezultate.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-bold uppercase mb-4 text-gray-200">Povezave</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Domov</Link></li>
              <li><Link to="/novice" className="hover:text-blue-500 transition-colors">Novice</Link></li>
              <li><a href="/#matches" className="hover:text-blue-500 transition-colors">Rezultati</a></li>
              <li><Link to="/ekipa" className="hover:text-blue-500 transition-colors">Ekipa</Link></li>
              <li><Link to="/izdelki" className="hover:text-blue-500 transition-colors">Izdelki</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-bold uppercase mb-4 text-gray-200">Dokumenti</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Statut kluba</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Pristopna izjava</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Pravilnik</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ŠN Gorišnica. Vse pravice pridržane.
          </p>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
             <span className="hidden md:inline text-slate-700">|</span>
             <span>Designed by</span>
             <a href="#" className="hover:opacity-80 transition-opacity">
               <img src="https://placehold.co/20x20/3b82f6/ffffff?text=D" alt="logo" className="h-5 w-5 rounded-full" />
             </a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
