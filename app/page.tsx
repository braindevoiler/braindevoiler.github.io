import FloatingNav from '@/components/navigation/FloatingNav';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Volunteer from '@/components/sections/Volunteer';
import Achievements from '@/components/sections/Achievements';
import GateNotesTeaser from '@/components/sections/GateNotesTeaser';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <FloatingNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Volunteer />
        <Achievements />
        <GateNotesTeaser />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
