import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            I'm a Software Development Engineering student at ITCA-FEPADE with solid academic 
            background and hands-on experience in developing web and desktop applications using 
            modern technologies such as React, Vue, SQL Server, and .NET.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            My passion for technology drives me to continuously learn and improve my skills. 
            I focus on creating efficient, business-oriented solutions that solve real-world problems.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Education</h3>
              <p className="text-slate-300">Software Development Engineering</p>
              <p className="text-slate-400 text-sm">ITCA-FEPADE | 4th Year Student</p>
              <p className="text-slate-400 text-sm">2023 - 2027</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Focus Areas</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Full-Stack Web Development</li>
                <li>• Database Management</li>
                <li>• Desktop Applications</li>
                <li>• Business Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
