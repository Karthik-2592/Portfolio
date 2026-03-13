import { Card } from './UI_Elements';
import { Button } from './UI_Elements';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce web application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
    image: 'null',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Task Management App',
    description: 'A mobile-first task management application with real-time collaboration features. Users can create projects, assign tasks, and track progress with an intuitive interface.',
    image: 'null',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'An interactive analytics dashboard for visualizing large datasets. Includes various chart types, filtering options, and export functionality for business intelligence.',
    image: 'null',
    technologies: ['Python', 'Django', 'SQL'],
    github: 'https://github.com',
    demo: 'https://example.com'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="lg" onClick={()=>{}}>
                    <a href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" onClick={()=>{}}>
                    <a href={project.demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
