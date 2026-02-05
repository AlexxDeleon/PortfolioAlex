import React from 'react';
import { Code2, Database, Globe, Server } from 'lucide-react';
import SkillBar from '../ui/SkillBar';
import { skills } from '../../data/skills';

export default function Skills() {
  const skillIcons = {
    "Programming Languages": Code2,
    "Web Development": Globe,
    "Databases": Database,
    "Tools": Server
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {Object.entries(skills).map(([category, skillList]) => {
            const Icon = skillIcons[category];
            return (
              <div 
                key={category} 
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  {Icon && <Icon className="text-blue-400" size={24} />}
                  <h3 className="text-xl font-semibold text-blue-400">{category}</h3>
                </div>
                <div>
                  {skillList.map((skill, idx) => (
                    <SkillBar key={idx} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
          <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">Languages</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-8 rounded-xl border border-blue-700/50 hover:border-blue-500 transition">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-white">Spanish</h4>
                <span className="px-4 py-2 bg-blue-600/30 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/50">
                  Native
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full" style={{ width: "100%" }} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-8 rounded-xl border border-purple-700/50 hover:border-purple-500 transition">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-white">English</h4>
                <span className="px-4 py-2 bg-purple-600/30 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/50">
                  Intermediate
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-3 rounded-full" style={{ width: "65%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
