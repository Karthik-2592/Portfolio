import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from './UI_Elements';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'karthik210806@gmail.com',
    href: 'mailto:karthik210806@gmail.com',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 6381235302',
    href: 'tel:+916381235302',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Katpadi, TN',
    href: '',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo('.contact-heading',
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.contact-heading',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.contact-subtitle',
      { y: 20, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.contact-subtitle',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      }
    );

    gsap.fromTo('.contact-card',
      { y: 40, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.contact-cards',
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

    gsap.fromTo('.contact-btn',
      { y: 20, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.contact-buttons',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        stagger: 0.06,
        duration: 0.3,
        ease: 'power2.out',
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="contact" ref={sectionRef} className="py-24 section-margins">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="contact-heading text-4xl font-bold mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="contact-subtitle text-lg text-muted-foreground mb-14 max-w-xl mx-auto">
          I'm currently looking for internship opportunities and would love to hear about 
          potential projects or collaborations.
        </p>

        <div className="contact-cards grid md:grid-cols-3 gap-5 mb-14">
          {contactMethods.map((method, index) => {
            const content = (
              <div
                key={index}
                className={`contact-card group p-6 rounded-xl border border-white/5
                  bg-gradient-to-br from-white/[0.03] to-transparent
                  transition-all duration-500 hover:border-primary/20 glow-teal-hover`}
              >
                <div className={`w-12 h-12 ${method.bg} rounded-lg flex items-center justify-center mx-auto mb-3
                  group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className={`h-6 w-6 ${method.color}`} />
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">{method.title}</h3>
                <p className="text-foreground font-medium">{method.value}</p>
              </div>
            );

            return method.href ? (
              <a key={index} href={method.href} className="block">
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>

        <div className="contact-buttons flex gap-4 justify-center flex-wrap">
          <div className="contact-btn">
            <Button onClick={() => { window.location.href = 'mailto:karthik210806@gmail.com'; }} size="lg">
              Send Email
            </Button>
          </div>
          <div className="contact-btn">
            <Button variant="outline" size="lg" onClick={() => { window.open('https://github.com/Karthik-2592', '_blank'); }}
              customClass="border-white/10 hover:border-primary/30">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
          <div className="contact-btn">
            <Button variant="outline" size="lg" onClick={() => { window.open('https://www.linkedin.com/in/karthik-b-28bb77331/', '_blank'); }}
              customClass="border-white/10 hover:border-primary/30">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
