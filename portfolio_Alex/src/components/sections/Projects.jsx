import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
