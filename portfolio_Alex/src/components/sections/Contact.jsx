import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactCard from '../ui/ContactCard';
import SocialLinks from '../ui/SocialLinks';

export default function Contact() {
  const contactInfo = [
    {
      href: "mailto:alexxdeleon01@gmail.com",
      icon: Mail,
      title: "Email",
      subtitle: "Send me a message",
      value: "alexxdeleon01@gmail.com",
      gradient: "bg-gradient-to-br from-blue-900/40 to-blue-800/20",
      hoverColor: "border-blue-700/50 hover:border-blue-500 hover:shadow-blue-500/20",
      iconColor: "text-blue-400"
    },
    {
      href: "tel:+50371800658",
      icon: Phone,
      title: "Phone",
      subtitle: "Give me a call",
      value: "+503 7180-0658",
      gradient: "bg-gradient-to-br from-purple-900/40 to-purple-800/20",
      hoverColor: "border-purple-700/50 hover:border-purple-500 hover:shadow-purple-500/20",
      iconColor: "text-purple-400"
    },
    {
      href: "#",
      icon: MapPin,
      title: "Location",
      subtitle: "Based in",
      value: "San Salvador, El Salvador",
      gradient: "bg-gradient-to-br from-pink-900/40 to-pink-800/20",
      hoverColor: "border-pink-700/50 hover:border-pink-500 hover:shadow-pink-500/20",
      iconColor: "text-pink-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-300">
            Feel free to reach out for opportunities or just to say hi!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((contact, idx) => (
            <ContactCard 
              key={idx}
              {...contact}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-6">Or connect with me on social media</p>
          <SocialLinks />
          <p className="text-slate-500 text-sm mt-6">
            Available for freelance projects and full-time opportunities
          </p>
        </div>
      </div>
    </section>
  );
}
