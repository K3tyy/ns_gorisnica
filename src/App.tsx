import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import TeamPage from './pages/TeamPage';
import GalleryPage from './pages/GalleryPage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router basename="/ns_gorisnica">
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-600 selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novice" element={<NewsPage />} />
          <Route path="/novice/:id" element={<NewsDetailPage />} />
          <Route path="/ekipa" element={<TeamPage />} />
          <Route path="/galerija" element={<GalleryPage />} />
          <Route path="/izdelki" element={<ShopPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
