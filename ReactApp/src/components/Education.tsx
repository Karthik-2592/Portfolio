import { GraduationCap, Award } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const timelineItems = [
  {
    icon: GraduationCap,
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    dotColor: 'bg-primary',
    title: 'Bachelor of Computer Science and Engineering',
    subtitle: 'Vellore Institute of Technology',
    date: 'July-2024 – Expected August-2028',
    details: [
      'CGPA: 9.6/10.0',
      'Relevant Coursework: Data Structures & Algorithms, Database Systems, Web Development, Machine Learning, Software Engineering',
    ],
  },
  {
    icon: Award,
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
    dotColor: 'bg-secondary',
    title: 'Certifications & Achievements',
    subtitle: '',
    date: '',
    details: [
      'Certificate of Excellence in ML & AI (2026)',
      'Member of Computer Science Student Association',
      'Rank 1 in Computer Science Department (Core) (2026)'
    ],
  },
];

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.education-heading', {
      scrollTrigger: {
        trigger: '.education-heading',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      y: 30,
      opacity: 0,
      duration: 0.4,
      ease: 'power3.out',
    });

    gsap.from('.edu-item', {
      scrollTrigger: {
        trigger: '.edu-timeline',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      x: -40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.5,
      ease: 'power3.out',
    });

    // Animate the timeline line drawing
    gsap.from('.timeline-line', {
      scrollTrigger: {
        trigger: '.edu-timeline',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      scaleY: 0,
      transformOrigin: 'top',
      duration: 0.7,
      ease: 'power2.out',
    });
  }, { scope: sectionRef });

  return (
    <section id="education" ref={sectionRef} className="py-24 section-margins">
      <div className="max-w-4xl mx-auto">
        <h2 className="education-heading text-4xl font-bold text-left mb-14">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="edu-timeline relative">
          {/* Vertical timeline line */}
          <div className="timeline-line absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-secondary/30 to-transparent" />

          <div className="space-y-10 ml-6">
            {timelineItems.map((item, index) => (
              <div key={index} className="edu-item relative flex gap-6 pl-2">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-14 h-14 ${item.iconBg} rounded-xl flex items-center justify-center
                    border border-white/5 glow-teal-hover transition-all duration-300`}>
                    <item.icon className={`h-7 w-7 ${item.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <h3 className="text-xl font-semibold text-left text-foreground mb-1">{item.title}</h3>
                  {item.subtitle && (
                    <p className="text-base text-primary/70 mb-1">{item.subtitle}</p>
                  )}
                  {item.date && (
                    <p className="text-sm text-muted-foreground mb-3">{item.date}</p>
                  )}
                  <ul className="space-y-1.5">
                    {item.details.map((detail, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} mt-1.5 flex-shrink-0`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
