import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MatchCenter() {
  const upcomingMatch = {
    date: "15. Marec 2026",
    time: "15:00",
    homeTeam: "ŠN Gorišnica",
    awayTeam: "NK Rudar",
    location: "Športni park Gorišnica",
    competition: "1. MNZ Ptuj"
  };

  const lastResults = [
    { home: "ŠN Gorišnica", away: "NK Podvinci", score: "2 - 1", date: "08.03.26" },
    { home: "NK Drava", away: "ŠN Gorišnica", score: "1 - 1", date: "01.03.26" },
    { home: "ŠN Gorišnica", away: "NK Aluminij", score: "0 - 2", date: "22.02.26" },
    { home: "NK Zavrč", away: "ŠN Gorišnica", score: "1 - 3", date: "15.02.26" },
  ];

  return (
    <section id="matches" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Upcoming Match & Recent Results */}
          <div className="space-y-12">
            {/* Upcoming Match */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 border border-slate-700 p-4 sm:p-8 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-blue-500 font-display font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Naslednja tekma
              </h3>
              
              <div className="flex flex-col items-center justify-center py-4">
                <div className="flex items-center justify-between w-full mb-8">
                  <div className="text-center w-1/3">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center p-2 sm:p-4">
                       {/* Placeholder Logo */}
                       <span className="text-xl sm:text-2xl font-bold text-blue-900">ŠN</span>
                    </div>
                    <h4 className="font-display font-bold text-base sm:text-lg md:text-xl">{upcomingMatch.homeTeam}</h4>
                  </div>
                  
                  <div className="text-center w-1/3">
                    <div className="text-2xl sm:text-4xl font-display font-black text-slate-500 italic">VS</div>
                  </div>
                  
                  <div className="text-center w-1/3">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center p-2 sm:p-4">
                       {/* Placeholder Logo */}
                       <span className="text-xl sm:text-2xl font-bold text-slate-900">RUD</span>
                    </div>
                    <h4 className="font-display font-bold text-base sm:text-lg md:text-xl">{upcomingMatch.awayTeam}</h4>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-3 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{upcomingMatch.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>{upcomingMatch.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>{upcomingMatch.location}</span>
                  </div>
                  <div className="mt-4 px-4 py-1 bg-blue-600/20 text-blue-400 text-sm font-semibold rounded-full border border-blue-600/30">
                    {upcomingMatch.competition}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recent Results */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-blue-500 font-display font-bold uppercase tracking-wider mb-6">Zadnji rezultati</h3>
              <div className="space-y-4">
                {lastResults.map((match, index) => (
                  <div key={index} className="bg-slate-800 p-4 rounded-xl flex items-center justify-between border-l-4 border-blue-600 hover:bg-slate-700 transition-colors">
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-xs text-gray-500 font-mono">{match.date}</span>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 w-full">
                        <span className={`font-semibold ${match.home === "ŠN Gorišnica" ? "text-white" : "text-gray-400"}`}>{match.home}</span>
                        <span className="bg-slate-900 px-3 py-1 rounded font-mono font-bold text-blue-500 whitespace-nowrap">{match.score}</span>
                        <span className={`font-semibold ${match.away === "ŠN Gorišnica" ? "text-white" : "text-gray-400"}`}>{match.away}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sofascore Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-full flex flex-col"
          >
            <h3 className="text-blue-500 font-display font-bold uppercase tracking-wider mb-6">Lestvica - Super Liga MNZ Ptuj</h3>
            <div className="w-full bg-white rounded-xl overflow-hidden shadow-lg flex-grow">
              <iframe 
                id="sofa-standings-embed-129756-81003" 
                src="https://widgets.sofascore.com/sl/embed/tournament/129756/season/81003/standings/Super%20Liga%20MNZ%20Ptuj%2025%2F26?widgetTitle=Super%20Liga%20MNZ%20Ptuj%2025%2F26&showCompetitionLogo=true" 
                style={{height: '803px', width: '100%', border: 0}} 
                scrolling="no"
                title="Sofascore Standings"
              ></iframe>
            </div>
            <div style={{fontSize: '12px', fontFamily: 'Arial, sans-serif', textAlign: 'left', marginTop: '10px', color: '#94a3b8'}}>
              Lestvico zagotavlja <a target="_blank" href="https://www.sofascore.com/sl/football/tournament/slovenia-amateur/super-liga-mnz-ptuj/22381#id:81003" rel="noreferrer" className="text-blue-400 hover:text-blue-300">Sofascore</a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
