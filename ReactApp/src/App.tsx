import './App.css'
import { NavigationBar } from './components/NavigationBar.tsx'
import { HeroBanner } from './components/HeroBanner.tsx'
import { Projects } from './components/Project.tsx'
import { About } from './components/About.tsx'
import { Skills } from './components/Skills.tsx'
import { Experience } from './components/Experience.tsx'
import { Education } from './components/Education.tsx'
import { Contact } from './components/Contact.tsx'
import { Footer } from './components/Footer.tsx'
import { BackgroundBlobs } from './components/BackgroundBlobs.tsx'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function App() {
  const container = useRef<HTMLDivElement>(null);

  // Re-evaluate all ScrollTriggers after all child components have mounted
  // to fix zero-opacity elements already in viewport on initial load
  useEffect(() => {
    const timer = setTimeout(() => ScrollTrigger.refresh(), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden" ref={container}>
      {/* Site Background Layer */}
      <div className="fixed inset-0 bg-background -z-[10]" aria-hidden="true" />
      <BackgroundBlobs />
      <NavigationBar />
      <main>
        <HeroBanner />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
