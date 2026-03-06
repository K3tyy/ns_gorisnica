import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Sponsors from '../components/Sponsors';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-4">
            Kontakt & <span className="text-blue-600">Lokacija</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Imate vprašanje? Stopite v stik z nami ali nas obiščite na stadionu.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group flex flex-col items-center text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Naš Naslov</h3>
            <p className="text-gray-600 mb-6 flex-grow">Placerovci 31<br/>2272 Gorišnica<br/>Slovenija</p>
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
              Navodila za pot <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          <a href="mailto:vodja@sngorisnica.si" className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group flex flex-col items-center text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Email Naslov</h3>
            <p className="text-gray-600 mb-6 flex-grow">Pošljite nam sporočilo kadarkoli. Odgovorimo v najkrajšem možnem času.</p>
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
              vodja@sngorisnica.si
            </span>
          </a>

          <a href="tel:+38641515254" className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group flex flex-col items-center text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Telefon</h3>
            <p className="text-gray-600 mb-6 flex-grow">Pokličite nas med uradnimi urami za hitre informacije.</p>
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
              041 515 254
            </span>
          </a>
        </div>

        {/* Map & Hours Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Opening Hours */}
          <div className="lg:col-span-4 bg-slate-900 p-10 rounded-3xl text-white shadow-xl flex flex-col justify-center h-full min-h-[400px]">
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-500" /> Uradne ure
            </h3>
            <ul className="space-y-6">
              <li className="flex justify-between items-center border-b border-slate-800 pb-4">
                <span className="text-gray-400 font-medium">Ponedeljek - Petek</span>
                <span className="font-bold text-lg">16:00 - 20:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-800 pb-4">
                <span className="text-gray-400 font-medium">Sobota</span>
                <span className="font-bold text-lg">09:00 - 13:00</span>
              </li>
              <li className="flex justify-between items-center pt-2">
                <span className="text-gray-400 font-medium">Nedelja</span>
                <span className="font-bold text-blue-500">Zaprto (Tekme)</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="lg:col-span-8 h-[400px] lg:h-auto bg-slate-200 rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2770.857674488356!2d16.0123456!3d46.4123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDI0JzQ0LjQiTiAxNsKwMDAnNDQuNCJF!5e0!3m2!1sen!2ssi!4v1620000000000!5m2!1sen!2ssi" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
        
        <Sponsors />
      </div>
    </div>
  );
}
