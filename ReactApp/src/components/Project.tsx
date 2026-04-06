import { ExternalLinkIcon, Github } from 'lucide-react';
import { useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Music Sharing Platform',
    description: 'Full-stack copy-right free music sharing web app with user auth, music catalog, and social features.',
    image: '/MusicApp.png',
    technologies: ['React + vite', 'Express.js', 'PostgreSQL', 'TailwindCSS'],
    github: 'https://karthik-2592.github.io/DART-v6.1/',
  },
  {
    title: 'Benchmarking',
    description: 'Benchmarking of multipattern matching algorithms and approximate matching with Rabin-Karp and Bloom Filter integration.',
    image: '/Benchmark.png',
    technologies: ['C++', 'Powershell', 'Python'],
    github: '#',
    code: '#'
  },
  {
    title: 'Browser Game',
    description: 'Browser game with real-time collaboration, project creation, and progress tracking.',
    image: '/WebGame.png',
    technologies: ['React + vite', 'TailwindCSS', 'TypeScript', 'JavaScript'],
    github: 'https://karthik-2592.github.io/GridLock/',
  },

  {
    title: 'Portfolio Website',
    description: 'Modern portfolio with GSAP animations, glassmorphism, and smooth scroll-triggered transitions.',
    image: '/PortfolioPage.png',
    technologies: ['React + vite', 'GSAP', 'TailwindCSS'],
    github: '#',
  },
];

const COLS = [
  { indices: [0, 3], flex: [3, 2] },
  { indices: [1, 2], flex: [2, 3] },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const colRefs = useRef<(HTMLDivElement | null)[]>([null, null]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null]);
  const expandRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null]);

  useGSAP(() => {
    gsap.fromTo('.projects-heading',
      { y: 30, opacity: 0 },
      {
        scrollTrigger: { trigger: '.projects-heading', start: 'top 90%', toggleActions: 'play none none none' },
        y: 0, opacity: 1, duration: 0.4, ease: 'power3.out',
      }
    );
    gsap.fromTo('.masonry-card',
      { scale: 0.92, opacity: 0 },
      {
        scrollTrigger: { trigger: '.masonry-container', start: 'top 85%', toggleActions: 'play none none none' },
        scale: 1, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power3.out',
      }
    );
    // Hide expanded panels initially
    expandRefs.current.forEach(el => { if (el) gsap.set(el, { height: 0, autoAlpha: 0, overflow: 'hidden' }); });
  }, { scope: sectionRef });

  const handleEnter = useCallback((idx: number) => {
    // Kill running tweens for layout properties only so entrance animations aren't interrupted
    cardRefs.current.forEach(r => r && gsap.killTweensOf(r, "flexGrow"));
    colRefs.current.forEach(r => r && gsap.killTweensOf(r, "flexGrow"));
    expandRefs.current.forEach(r => r && gsap.killTweensOf(r));

    COLS.forEach((col, ci) => {
      const pos = col.indices.indexOf(idx);
      if (pos !== -1) {
        const sibPos = pos === 0 ? 1 : 0;
        const sibIdx = col.indices[sibPos];
        // Expand hovered card, contract sibling
        gsap.to(cardRefs.current[idx], { flexGrow: col.flex[pos] * 1.7, duration: 0.5, ease: 'power2.out' });
        gsap.to(cardRefs.current[sibIdx], { flexGrow: col.flex[sibPos] * 0.45, duration: 0.5, ease: 'power2.out' });
        // Widen this column
        gsap.to(colRefs.current[ci], { flexGrow: 1.5, duration: 0.5, ease: 'power2.out' });
      } else {
        // Shrink other column + its cards
        col.indices.forEach((pi, p) => {
          gsap.to(cardRefs.current[pi], { flexGrow: col.flex[p] * 0.8, duration: 0.5, ease: 'power2.out' });
        });
        gsap.to(colRefs.current[ci], { flexGrow: 0.65, duration: 0.5, ease: 'power2.out' });
      }
    });

    // Reveal expanded content for hovered card
    const el = expandRefs.current[idx];
    if (el) gsap.to(el, { height: 'auto', autoAlpha: 1, duration: 0.4, ease: 'power2.out', delay: 0.1 });
    // Hide others
    expandRefs.current.forEach((e, i) => { if (i !== idx && e) gsap.to(e, { height: 0, autoAlpha: 0, duration: 0.3, ease: 'power2.in' }); });
  }, []);

  const handleLeave = useCallback(() => {
    cardRefs.current.forEach(r => r && gsap.killTweensOf(r, "flexGrow"));
    colRefs.current.forEach(r => r && gsap.killTweensOf(r, "flexGrow"));
    expandRefs.current.forEach(r => r && gsap.killTweensOf(r));

    COLS.forEach((col, ci) => {
      col.indices.forEach((pi, p) => {
        gsap.to(cardRefs.current[pi], { flexGrow: col.flex[p], duration: 0.5, ease: 'power2.out' });
      });
      gsap.to(colRefs.current[ci], { flexGrow: 1, duration: 0.5, ease: 'power2.out' });
    });
    expandRefs.current.forEach(e => { if (e) gsap.to(e, { height: 0, autoAlpha: 0, duration: 0.3, ease: 'power2.in' }); });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 section-margins">
      <div className="max-w-7xl mx-auto">
        <h2 className="projects-heading text-5xl font-bold text-center mb-14">
          <span className="gradient-text">Projects</span>
        </h2>

        <div className="masonry-container flex gap-4" style={{ height: '720px' }}
          onMouseLeave={handleLeave}>
          {COLS.map((col, ci) => (
            <div key={ci} ref={el => { colRefs.current[ci] = el; }}
              className="flex flex-col gap-4 min-w-0" style={{ flex: 1 }}>
              {col.indices.map((pi, posInCol) => {
                const p = projects[pi];
                return (
                  <div key={pi}
                    ref={el => { cardRefs.current[pi] = el; }}
                    className="masonry-card relative rounded-xl overflow-hidden border border-white/5
                      bg-card cursor-pointer group transition-[border-color] duration-300
                      hover:border-primary/25 glow-teal-hover min-h-0"
                    style={{ flex: col.flex[posInCol] }}
                    onMouseEnter={() => handleEnter(pi)}>

                    {/* BG image */}
                    <img src={p.image} alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60
                        group-hover:opacity-40 transition-opacity duration-500" />
                    {/* Content */} 
                    <div className="relative z-10 flex flex-col h-full  justify-end items-center text-center">
                      <div className="w-full p-4 glass shadow-lg shadow-black/20 rounded-b-xl border border-white/10 ">
                        <h3 className="text-lg font-bold text-white group-hover:text-primary
                          transition-colors duration-300">{p.title}</h3>
  
                        {/* Expanded detail — GSAP controlled */}
                        <div ref={el => { expandRefs.current[pi] = el; }}>
                          <p className="text-xs text-slate-200 mt-3 leading-relaxed font-medium">{p.description}</p>
                          <div className="flex flex-wrap justify-center gap-2 mt-4">
                            {p.technologies.map((t, i) => (
                              <span key={i} className="px-2.5 py-1 bg-primary/10 text-primary rounded-full
                                text-[10px] font-bold border border-primary/20 uppercase tracking-wider">{t}</span>
                            ))}
                          </div>
                          <a href={p.github} target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-2 mt-4 text-xs font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest">
                            <ExternalLinkIcon className="h-3.5 w-3.5" /> View Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* View More Code Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 md:p-12 rounded-3xl glass border border-white/10 glow-teal hover:border-primary/30 transition-all duration-500 max-w-2xl">
            <h3 className="text-3xl font-bold mb-4">View More Code</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Explore more projects, algorithm implementations, and open-source contributions on my GitHub.
            </p>
            <a 
              href="https://github.com/Karthik-2592" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <Github className="h-6 w-6" /> Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
