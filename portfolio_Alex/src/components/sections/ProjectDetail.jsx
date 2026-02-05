import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Play, X } from 'lucide-react';
import { getProjectBySlug } from '../../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition mb-4"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
          
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-xl text-slate-300">{project.description}</p>
            </div>
            <span className="px-4 py-2 bg-slate-700 rounded-full text-slate-300">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, i) => (
              <span 
                key={i} 
                className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-lg border border-blue-700 font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Video Section */}
        {project.videoUrl && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Play size={24} className="text-blue-400" />
              Project Demo
            </h2>
            <div className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700">
              <div className="aspect-video">
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.map((image, i) => (
                <div 
                  key={i}
                  onClick={() => setSelectedImage(image)}
                  className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition cursor-pointer group"
                >
                  <div className="aspect-video bg-slate-800 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="text-slate-500 text-center p-8">Image preview<br/><span class="text-sm">(Add your screenshots here)</span></div>';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="text-white font-semibold">Click to enlarge</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Full Description */}
        <div className="mb-12 bg-slate-900/50 p-8 rounded-xl border border-slate-700">
          <h2 className="text-2xl font-bold mb-4">About This Project</h2>
          <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
            {project.fullDescription}
          </p>
        </div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((feature, i) => (
                <div 
                  key={i}
                  className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition"
                >
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Highlights */}
        <div className="mb-12 bg-slate-900/50 p-8 rounded-xl border border-slate-700">
          <h2 className="text-2xl font-bold mb-4">Development Highlights</h2>
          <ul className="space-y-3">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="text-slate-300 flex items-start gap-3">
                <span className="text-blue-400 text-xl mt-1">•</span>
                <span className="text-lg">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition font-semibold"
            >
              <ExternalLink size={20} />
              View Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition font-semibold"
            >
              <Github size={20} />
              View on GitHub
            </a>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 p-3 rounded-full transition"
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full size preview"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
