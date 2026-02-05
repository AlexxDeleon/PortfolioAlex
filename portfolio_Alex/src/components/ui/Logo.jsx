import React from 'react';

export default function Logo({ size = 40, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Fondo con gradiente */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      
      {/* Círculo de fondo */}
      <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />
      
      {/* Letra E */}
      <path 
        d="M 30 30 L 55 30 M 30 30 L 30 70 M 30 50 L 50 50 M 30 70 L 55 70" 
        stroke="white" 
        strokeWidth="6" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Letra M */}
      <path 
        d="M 60 70 L 60 30 L 70 45 L 80 30 L 80 70" 
        stroke="white" 
        strokeWidth="6" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
