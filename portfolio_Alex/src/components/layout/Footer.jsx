import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t border-slate-700 text-center text-slate-400">
      <p>© {currentYear} Eduardo Alexander Menéndez Deleón. All rights reserved.</p>
    </footer>
  );
}
