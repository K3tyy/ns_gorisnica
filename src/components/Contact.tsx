import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-4">
            Kontakt & <span className="text-blue-600">Lokacija</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Stopite v stik</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Naslov</h4>
                    <p className="text-gray-600">Placerovci 31<br />2272 Gorišnica<br />Slovenija</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <a href="mailto:vodja@sngorisnica.si" className="text-gray-600 hover:text-blue-600 transition-colors">vodja@sngorisnica.si</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Telefon</h4>
                    <a href="tel:+38641515254" className="text-gray-600 hover:text-blue-600 transition-colors">041 515 254</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-blue-500" /> Uradne ure
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex justify-between">
                  <span>Ponedeljek - Petek</span>
                  <span>16:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sobota</span>
                  <span>09:00 - 13:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Nedelja</span>
                  <span>Zaprto (Tekme)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2770.857674488356!2d16.0123456!3d46.4123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDI0JzQ0LjQiTiAxNsKwMDAnNDQuNCJF!5e0!3m2!1sen!2ssi!4v1620000000000!5m2!1sen!2ssi" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
