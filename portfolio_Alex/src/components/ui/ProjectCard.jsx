import React from 'react';
import { ArrowRight, Image } from 'lucide-react';

export default function ProjectCard({ project, onClick }) {
  const hasImage = project.images && project.images.length > 0;

  return (
    <div
      onClick={onClick}
      className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden hover:border-blue-500 transition group cursor-pointer"
    >
      {/* Preview Image */}
      {hasImage ? (
        <div className="relative overflow-hidden h-48 bg-slate-800">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            View Details <ArrowRight size={16} />
          </div>
        </div>
      ) : (
        /* Placeholder si no hay imagen — no falla, solo muestra un ícono */
        <div className="h-48 bg-slate-800 flex items-center justify-center border-b border-slate-700">
          <div className="text-center text-slate-600">
            <Image size={40} className="mx-auto mb-2" />
            <p className="text-sm">No image yet</p>
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition">
            {project.title}
          </h3>
          <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300 whitespace-nowrap">
            {project.category}
          </span>
        </div>

        <p className="text-slate-300 mb-4 line-clamp-2">{project.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-400 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-lg text-sm border border-blue-700"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-3 py-1 bg-slate-700 text-slate-400 rounded-lg text-sm">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700">
          <span className="text-sm text-slate-400">
            {project.highlights.length} key features
          </span>
          <span className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Learn more <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </div>
  );
}
