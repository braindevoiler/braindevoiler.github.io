import FloatingNav from '@/components/navigation/FloatingNav';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Achievements from '@/components/sections/Achievements';
import Community from '@/components/sections/Community';
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
        <Testimonials />
        <Education />
        <Achievements />
        <Community />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
