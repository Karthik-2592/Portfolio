import { Briefcase } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'DART v6.1',
    period: 'March 2026 – Present',
    description: 'Developed responsive web applications using React and TypeScript. Established a percect connection between backend servers and database/storage',
    technologies: ['React', 'TypeScript', 'REST APIs', 'Express.js', 'PostgreSQL'],
    type: 'Open Source',
  },
  {
    role: 'Open Source Contributor',
    company: 'Various Projects',
    period: 'February 2025 - Present',
    description: 'Actively contributing to open source projects. Fixed critical bugs, improved documentation, and implemented new features for community-driven tools and libraries.',
    technologies: ['C++', 'Python' ],
    type: 'Open Source',
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.exp-heading', {
      scrollTrigger: {
        trigger: '.exp-heading',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      y: 30,
      opacity: 0,
      duration: 0.4,
      ease: 'power3.out',
    });

    gsap.from('.exp-card', {
      scrollTrigger: {
        trigger: '.exp-timeline',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      x: -40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.5,
      ease: 'power3.out',
    });

    gsap.from('.exp-timeline-line', {
      scrollTrigger: {
        trigger: '.exp-timeline',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      scaleY: 0,
      transformOrigin: 'top',
      duration: 1.2,
      ease: 'power2.out',
    });
  }, { scope: sectionRef });

  return (
    <section id="experience" ref={sectionRef} className="py-24 section-margins">
      <div className="max-w-4xl mx-auto">
        <h2 className="exp-heading text-4xl font-bold text-center mb-14">
          <span className="gradient-text">Experience</span>
        </h2>

        <div className="exp-timeline relative">
          {/* Vertical timeline line */}
          <div className="exp-timeline-line absolute left-0 top-0 bottom-0 w-[2px] mr-2 bg-gradient-to-b from-secondary/70 via-primary/50 to-transparent" />

          <div className="space-y-8 ml-6">
            {experiences.map((exp, index) => (
              <div key={index} className="exp-card relative flex gap-6 pl-2 group">
                {/* Timeline icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center
                    border border-white/5 group-hover:border-secondary/20 transition-all duration-300 glow-teal-hover">
                    <Briefcase className="h-6 w-6 text-secondary" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 p-5 rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent
                  group-hover:border-secondary/15 transition-all duration-500">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-sm text-primary/70 mb-1">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 text-muted-foreground rounded-full text-xs
                          border border-white/5 hover:border-secondary/20 hover:text-secondary
                          transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
