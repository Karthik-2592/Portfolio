import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++/C', 'SQL', 'HTML/CSS', 'Bash/Shell'],
    accent: 'primary',
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'GSAP'],
    accent: 'secondary',
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
    accent: 'primary',
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'Docker', 'Supabase', '.NET'],
    accent: 'secondary',
  }
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo('.skills-heading',
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.skills-heading',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.skill-category',
      { y: 40, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.4,
        ease: 'power3.out',
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="skills" ref={sectionRef} className="py-24 section-margins">
      <div className="max-w-5xl mx-auto">
        <h2 className="skills-heading text-4xl font-bold text-center mb-14">
          <span className="gradient-text">Skills</span>
        </h2>

        <div className="skills-grid grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`skill-category p-6 rounded-xl border border-white/5
                bg-gradient-to-br ${category.accent === 'primary' ? 'from-primary/5 to-transparent' : 'from-secondary/5 to-transparent'}
                transition-all duration-500 hover:border-${category.accent}/20 glow-teal-hover`}
            >
              <h3 className="text-xl font-semibold text-foreground mb-5 flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${category.accent === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-lg text-sm font-medium
                      bg-white/5 border border-white/5
                      ${category.accent === 'primary' ? 'text-primary/80 hover:bg-primary/10 hover:border-primary/20' : 'text-secondary/80 hover:bg-secondary/10 hover:border-secondary/20'}
                      transition-all duration-300 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
