import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Eduardo Alexander Menéndez Deleón
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 mb-4">
            Software Development Engineering Student
          </p>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Passionate about technology with focus on problem-solving, continuous learning, 
            and developing efficient business-oriented solutions
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              href="mailto:alexxdeleon01@gmail.com" 
              variant="primary" 
              icon={Mail}
            >
              Email Me
            </Button>
            <Button 
              href="tel:+50371800658" 
              variant="secondary" 
              icon={Phone}
            >
              Call
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mt-8 text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>San Salvador, El Salvador</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
