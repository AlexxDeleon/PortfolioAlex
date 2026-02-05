import React, { useState } from 'react';
import { Award, ExternalLink, X, Image } from 'lucide-react';

export default function CertificateCard({ certificate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasImage = certificate.image && certificate.image !== "";

  return (
    <>
      <div
        onClick={() => hasImage && setIsModalOpen(true)}
        className={`bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden transition group ${
          hasImage ? "hover:border-purple-500 cursor-pointer" : ""
        }`}
      >
        {/* Certificate Image */}
        {hasImage ? (
          <div className="relative overflow-hidden bg-slate-800">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
            <div className="absolute top-4 right-4 bg-purple-600 text-white p-2 rounded-full">
              <Award size={24} />
            </div>
          </div>
        ) : (
          <div className="h-64 bg-slate-800 flex items-center justify-center border-b border-slate-700">
            <div className="text-center text-slate-600">
              <Award size={48} className="mx-auto mb-2 text-purple-800" />
              <p className="text-sm">Certificate image coming soon</p>
            </div>
          </div>
        )}

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-purple-400 group-hover:text-purple-300 transition">
              {certificate.title}
            </h3>
            <span className="px-3 py-1 bg-purple-900/30 rounded-full text-sm text-purple-300 border border-purple-700">
              {certificate.platform}
            </span>
          </div>

          <p className="text-slate-400 text-sm mb-4">
            {certificate.issuer} • {certificate.date}
          </p>
          <p className="text-slate-300 mb-4">{certificate.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {certificate.skills.map((skill, i) => (
              <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-700">
            <span className="text-sm text-slate-400">
              {hasImage ? "Click to view certificate" : "Image not uploaded yet"}
            </span>
            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-purple-400 hover:text-purple-300 transition flex items-center gap-1 text-sm"
              >
                Verify <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal para ver certificado completo */}
      {isModalOpen && hasImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-purple-400 transition flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg"
            >
              <X size={20} /> Close
            </button>

            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full rounded-xl shadow-2xl border-2 border-purple-500"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{certificate.title}</h3>
              <p className="text-slate-300">
                {certificate.issuer} • {certificate.date}
              </p>
              {certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
                >
                  <ExternalLink size={18} />
                  Verify Credential
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
