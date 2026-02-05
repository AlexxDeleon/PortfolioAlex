import React, { useState } from 'react';
import { X, Github, ExternalLink, ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !project) return null;

  const hasImages = project.images && project.images.length > 0;
  const hasVideo = project.video || project.youtubeVideo;

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 p-6 flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold text-blue-400 mb-2">{project.title}</h2>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">
              {project.category}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition p-2 hover:bg-slate-800 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Video Section */}
          {hasVideo && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Play size={20} className="text-blue-400" />
                Project Demo
              </h3>
              
              {project.youtubeVideo ? (
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={project.youtubeVideo}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              ) : project.video && (
                <video 
                  controls 
                  className="w-full rounded-xl border border-slate-700"
                  poster={project.images?.[0]}
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}

          {/* Image Gallery */}
          {hasImages && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Screenshots</h3>
              
              <div className="relative">
                {/* Main Image */}
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full rounded-xl border border-slate-700 object-cover"
                  style={{ maxHeight: '500px' }}
                />
                
                {/* Navigation Buttons */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
                    >
                      <ChevronRight size={24} />
                    </button>
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {project.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {project.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-20 rounded-lg cursor-pointer border-2 transition ${
                        idx === currentImageIndex 
                          ? 'border-blue-500 opacity-100' 
                          : 'border-slate-700 opacity-60 hover:opacity-100'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">About this project</h3>
            <p className="text-slate-300 text-lg leading-relaxed">{project.description}</p>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-lg border border-blue-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Key Highlights</h3>
            <ul className="space-y-3">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="text-slate-300 flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-1">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          {(project.githubLink || project.liveLink) && (
            <div className="flex gap-4 pt-4 border-t border-slate-700">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition"
                >
                  <Github size={20} />
                  View Code
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
