import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./UI_Elements.tsx";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function HeroBanner() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate gradient orbs
    tl.from(".hero-orb", {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
    });

    // Name — split each letter
    tl.from(".hero-name", {
      y: 40,
      opacity: 0,
      duration: 0.4,
    }, "-=0.3");

    // Subtitle
    tl.from(".hero-subtitle", {
      y: 20,
      opacity: 0,
      duration: 0.3,
    }, "-=0.2");

    // Description
    tl.from(".hero-desc", {
      y: 20,
      opacity: 0,
      duration: 0.3,
    }, "-=0.15");

    // Buttons stagger
    tl.from(".hero-btn", {
      y: 15,
      opacity: 0,
      stagger: 0.05,
      duration: 0.3,
    }, "-=0.15");

    // Floating orb animation (infinite)
    gsap.to(".hero-orb-1", {
      x: 30,
      y: -20,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(".hero-orb-2", {
      x: -25,
      y: 30,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(".hero-orb-3", {
      x: 20,
      y: 25,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="hero-orb hero-orb-1 absolute top-[15%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="hero-orb hero-orb-2 absolute bottom-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-secondary/15 blur-[100px] pointer-events-none" />
      <div className="hero-orb hero-orb-3 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl w-full text-center px-6">
        {/* Name */}
        <h1 className="hero-name text-7xl md:text-8xl font-bold mb-4 tracking-tight">
          <span className="gradient-text">Karthik</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-3xl md:text-4xl text-muted-foreground mb-6 font-light">
          Computer Science Student
        </p>

        {/* Description */}
        <p className="hero-desc text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Passionate about creating innovative solutions through code. 
          Currently pursuing a Bachelor's degree in Computer Science with a focus on 
          full-stack development and machine learning.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#contact" className="hero-btn">
            <Button variant="default" size="xl" onClick={() => {}}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </a>
          <a href={import.meta.env.VITE_GITHUB_URL || "https://github.com/Karthik-2592"} target="_blank" rel="noopener noreferrer" className="hero-btn">
            <Button variant="outline" size="xl" onClick={() => {}}>
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </a>
          <a href={import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/karthik-b-28bb77331/"} target="_blank" rel="noopener noreferrer" className="hero-btn">
            <Button variant="outline" size="xl" onClick={() => {}}>
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}