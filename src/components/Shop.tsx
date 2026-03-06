import { motion } from 'motion/react';
import { ShoppingBag, Tag, Phone, Mail } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Domači Dres 2025/26",
    price: "45,00 €",
    image: "https://images.unsplash.com/photo-1577212017184-80cc0da11373?q=80&w=2575&auto=format&fit=crop",
    category: "Dresi",
    description: "Uradni domači dres ŠN Gorišnica za sezono 2025/26. Modra barva s ponosom."
  },
  {
    id: 2,
    name: "Gostujoči Dres 2025/26",
    price: "45,00 €",
    image: "https://images.unsplash.com/photo-1529310095874-539414008463?q=80&w=2574&auto=format&fit=crop",
    category: "Dresi",
    description: "Uradni gostujoči dres v beli barvi. Eleganca na vsakem koraku."
  },
  {
    id: 3,
    name: "Navijaški Šal",
    price: "15,00 €",
    image: "https://images.unsplash.com/photo-1565158842722-1d2279769363?q=80&w=2670&auto=format&fit=crop",
    category: "Dodatki",
    description: "Klasičen pleten šal z grbom kluba. Obvezen del opreme vsakega navijača."
  },
  {
    id: 4,
    name: "Zimska Kapa",
    price: "12,00 €",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=2574&auto=format&fit=crop",
    category: "Dodatki",
    description: "Topla zimska kapa z vezenim logotipom. Za hladne dni na tribuni."
  },
  {
    id: 5,
    name: "Trening Majica",
    price: "25,00 €",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=2671&auto=format&fit=crop",
    category: "Oprema",
    description: "Funkcionalna majica za trening ali prosti čas. Zračna in udobna."
  },
  {
    id: 6,
    name: "Navijaška Zastava",
    price: "20,00 €",
    image: "https://images.unsplash.com/photo-1532509854226-a2d9d8e66f8e?q=80&w=2670&auto=format&fit=crop",
    category: "Dodatki",
    description: "Velika zastava za prave navijače. Pokaži svojo pripadnost!"
  }
];

export default function Shop() {
  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 pt-10">
          <h2 className="text-4xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-4">
            Klubski <span className="text-blue-600">Izdelki</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Podprite svoj klub z nakupom uradnih izdelkov. Vsi prihodki gredo za razvoj mlajših selekcij.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-display font-bold text-slate-900 uppercase italic leading-tight">
                    {product.name}
                  </h3>
                  <span className="text-lg font-bold text-blue-600 font-mono">
                    {product.price}
                  </span>
                </div>
                
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100 text-center">
          <Tag className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-display font-bold text-slate-900 uppercase mb-4">
            Kako do izdelkov?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Izdelke si lahko ogledate in naročite osebno v prostorih kluba ali pri trenerjih posameznih selekcij.
            Za več informacij nas lahko kontaktirate ali obiščete v času uradnih ur.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/ns_gorisnica/kontakt" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold uppercase tracking-wider rounded hover:bg-blue-700 transition-colors">
              Kontaktni podatki
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
