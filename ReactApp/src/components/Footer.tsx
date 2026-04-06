import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Karthik. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Karthik-2592"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/karthik-b-28bb77331/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:karthik@email.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="text-muted-foreground/50 text-xs">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
