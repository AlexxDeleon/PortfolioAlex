import React from 'react';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  icon: Icon,
  className = '' 
}) {
  const baseClasses = "flex items-center gap-2 px-6 py-3 rounded-lg transition";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-slate-700 hover:bg-slate-600"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <a href={href} className={classes}>
      {Icon && <Icon size={20} />}
      {children}
    </a>
  );
}
