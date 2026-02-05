import React from 'react';
import { Award } from 'lucide-react';
import CertificateCard from '../ui/CertificateCard';
import { certificates } from '../../data/certificates';

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-full mb-4">
            <Award className="text-purple-400" size={32} />
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-slate-300">
            Professional certifications and completed courses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
