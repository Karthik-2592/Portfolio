import { Code, Lightbulb, Users } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable and efficient code following best practices',
    gradient: 'from-primary/20 to-primary/5',
    iconColor: 'text-primary',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Analyzing complex problems and developing efficient solutions',
    gradient: 'from-secondary/20 to-secondary/5',
    iconColor: 'text-secondary',
  },
  {
    icon: Users,
    title: 'Planning',
    description: 'Masterful planning and execution of projects',
    gradient: 'from-primary/15 to-secondary/10',
    iconColor: 'text-primary',
  },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Section heading
    gsap.fromTo('.about-heading',
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.about-heading',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out',
      }
    );

    // Cards stagger in
    gsap.fromTo('.about-card',
      { y: 40, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.about-cards',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.4,
        ease: 'power3.out',
      }
    );

    // Description paragraphs
    gsap.fromTo('.about-text',
      { y: 20, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.about-text-container',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.4,
        ease: 'power2.out',
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className="py-24 section-margins">
      <div className="max-w-5xl mx-auto">
        <h2 className="about-heading text-4xl font-bold text-center mb-14">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="about-cards grid md:grid-cols-3 gap-6 mb-14">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`about-card group p-6 rounded-xl bg-gradient-to-br ${item.gradient}
                border border-white/5 transition-all duration-500 hover:border-primary/20
                glow-teal-hover cursor-default`}
            >
              <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center mb-4
                group-hover:bg-white/10 transition-colors duration-300">
                <item.icon className={`h-7 w-7 ${item.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="about-text-container max-w-3xl mx-auto text-center space-y-4">
          <p className="about-text text-lg text-muted-foreground leading-relaxed">
            I'm a Computer Science student at Vellore Institute of Technology with a CGPA of 9.6. 
            My journey in programming began in high school, and since then, I've been captivated 
            by the endless possibilities that technology offers.
          </p>
          <p className="about-text text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, you can find me contributing to open-source projects, creating 
            applications , or exploring the latest tech trends. I'm always 
            eager to learn new technologies and tools without being afraid to
            take on challenging projects.
          </p>
        </div>
      </div>
    </section>
  );
}
