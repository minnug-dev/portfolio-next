import { NavProvider } from '@/contexts/NavContext';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import About from '@/components/About';
import Work from '@/components/Work';
import Project from '@/components/Project';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <NavProvider>
      <Header />
      <main id="main" className="main">
        <Intro />
        <About />
        <Work />
        <Project />
        <Contact />
      </main>
      <Footer />
    </NavProvider>
  );
}
