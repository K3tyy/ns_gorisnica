import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';
import MatchCenter from '../components/MatchCenter';
import Squad from '../components/Squad';
import ClubInfo from '../components/ClubInfo';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Sponsors from '../components/Sponsors';

export default function Home() {
  return (
    <>
      <Hero />
      <NewsSection />
      <MatchCenter />
      <Squad />
      <ClubInfo />
      <Gallery />
      <Sponsors />
    </>
  );
}
