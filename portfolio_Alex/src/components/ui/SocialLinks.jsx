import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function SocialLinks() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/AlexxDeleon',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/eduardo-dele%C3%B3n-529353324/',
      icon: Linkedin
    }
  ];

  return (
    <div className="flex justify-center gap-4">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a 
            key={social.name}
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-800 hover:bg-slate-700 p-4 rounded-full transition-all hover:scale-110 border border-slate-600 hover:border-slate-500"
            aria-label={social.name}
          >
            <Icon size={24} className="text-slate-300" />
          </a>
        );
      })}
    </div>
  );
}
