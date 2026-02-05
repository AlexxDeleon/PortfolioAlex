import React from 'react';

export default function Navbar() {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          EM
        </h1>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="hover:text-blue-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}