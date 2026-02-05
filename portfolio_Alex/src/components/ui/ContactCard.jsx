import React from 'react';

export default function ContactCard({ 
  href, 
  icon: Icon, 
  title, 
  subtitle, 
  value,
  gradient,
  hoverColor 
}) {
  return (
    <a 
      href={href}
      className={`${gradient} p-8 rounded-2xl border ${hoverColor} transition-all hover:scale-105 hover:shadow-xl group`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="bg-opacity-20 p-4 rounded-full mb-4 group-hover:bg-opacity-30 transition">
          <Icon size={32} />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-slate-300 text-sm mb-3">{subtitle}</p>
        <p className="font-medium break-all">{value}</p>
      </div>
    </a>
  );
}
