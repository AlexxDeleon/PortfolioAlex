import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code2, Database, Globe, Server } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "V-Market Store Management System",
      description: "Web application for sales management and revenue control, featuring real-time data synchronization and modern responsive interface.",
      tech: ["Vue.js", "Firebase", "TailwindCSS", "JavaScript"],
      highlights: [
        "Developed complete frontend with Vue.js and TailwindCSS",
        "Integrated Google Firebase for real-time data management",
        "Implemented version control with Git and GitHub",
        "Focused on commercial management and financial control"
      ],
      category: "Full Stack"
    },
    {
      title: "Tienda Belén Inventory System",
      description: "Full-stack web application for comprehensive inventory control, designed for small businesses with focus on automation.",
      tech: ["React", "JavaScript", "Node.js", "Express.js", "SQL Server"],
      highlights: [
        "Built REST API with Node.js and Express for inventory management",
        "Developed frontend with React and JavaScript for efficient UX",
        "Integrated SQL Server for data storage and management",
        "Focused on automation and control for small businesses"
      ],
      category: "Full Stack"
    },
    {
      title: "Informative Website with Contact Form",
      description: "Full-stack web application demonstrating client-server communication with complete form processing pipeline.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "Express.js", "MySQL"],
      highlights: [
        "Built responsive frontend with HTML, CSS and Bootstrap",
        "Created REST API with Node.js and Express for form processing",
        "Integrated MySQL for persistent data storage",
        "Implemented effective HTTP communication between frontend and backend"
      ],
      category: "Full Stack"
    },
    {
      title: "Restaurant Management System",
      description: "Desktop application designed for waiters and cashiers with modules for sales management, products, and inventory.",
      tech: [".NET Framework", "WinForms", "XAML", "Entity Framework", "Azure SQL Database"],
      highlights: [
        "Developed desktop application oriented to waiters and cashiers",
        "Implemented cloud database connection using Azure SQL Database and Entity Framework",
        "Designed user interfaces with WinForms and XAML",
        "Prioritized usability, fluidity, and intuitive user experience"
      ],
      category: "Desktop"
    }
  ];

  const skills = {
    "Programming Languages": [
      { name: "C#", level: "Advanced" },
      { name: "Java", level: "Intermediate" },
      { name: "Python", level: "Basic" },
      { name: "Swift", level: "Basic" }
    ],
    "Web Development": [
      { name: "HTML/CSS/Bootstrap", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "React", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Vue.js", level: "Basic" }
    ],
    "Databases": [
      { name: "SQL Server", level: "Advanced" },
      { name: "Azure SQL", level: "Intermediate" },
      { name: "MySQL", level: "Basic" },
      { name: "Firebase", level: "Basic" }
    ],
    "Tools": [
      { name: "Git/GitHub", level: "Intermediate" }
    ]
  };

  const getLevelColor = (level) => {
    if (level === "Advanced") return "bg-green-500";
    if (level === "Intermediate") return "bg-blue-500";
    return "bg-gray-400";
  };

  const getLevelWidth = (level) => {
    if (level === "Advanced") return "90%";
    if (level === "Intermediate") return "65%";
    return "40%";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            EM
          </h1>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Eduardo Alexander Menéndez Deleón
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-4">Software Development Engineering Student</p>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Passionate about technology with focus on problem-solving, continuous learning, and developing efficient business-oriented solutions
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="mailto:alexxdeleon01@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition">
                <Mail size={20} /> Email Me
              </a>
              <a href="tel:+50371800658" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition">
                <Phone size={20} /> Call
              </a>
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

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I'm a Software Development Engineering student at ITCA-FEPADE with solid academic background and hands-on experience in developing web and desktop applications using modern technologies such as React, Vue, SQL Server, and .NET.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              My passion for technology drives me to continuously learn and improve my skills. I focus on creating efficient, business-oriented solutions that solve real-world problems.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Education</h3>
                <p className="text-slate-300">Software Development Engineering</p>
                <p className="text-slate-400 text-sm">ITCA-FEPADE | 4th Year Student</p>
                <p className="text-slate-400 text-sm">2023 - 2027</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Certifications</h3>
                <p className="text-slate-300">Git & GitHub | C# .NET</p>
                <p className="text-slate-400 text-sm">Udemy | 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition">
                <div className="flex items-center gap-2 mb-4">
                  {category === "Programming Languages" && <Code2 className="text-blue-400" />}
                  {category === "Web Development" && <Globe className="text-green-400" />}
                  {category === "Databases" && <Database className="text-purple-400" />}
                  {category === "Tools" && <Server className="text-orange-400" />}
                  <h3 className="font-semibold text-lg">{category}</h3>
                </div>
                <div className="space-y-3">
                  {items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-slate-400">{skill.level}</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className={`${getLevelColor(skill.level)} h-2 rounded-full transition-all duration-500`}
                          style={{ width: getLevelWidth(skill.level) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Languages Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Languages</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden hover:border-blue-500 transition group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-lg text-sm border border-blue-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-slate-300">Feel free to reach out for opportunities or just to say hi!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="mailto:alexxdeleon01@gmail.com"
              className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-8 rounded-2xl border border-blue-700/50 hover:border-blue-500 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-600/20 p-4 rounded-full mb-4 group-hover:bg-blue-600/30 transition">
                  <Mail size={32} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-slate-300 text-sm mb-3">Send me a message</p>
                <p className="text-blue-400 font-medium break-all">alexxdeleon01@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+50371800658"
              className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-8 rounded-2xl border border-purple-700/50 hover:border-purple-500 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-600/20 p-4 rounded-full mb-4 group-hover:bg-purple-600/30 transition">
                  <Phone size={32} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-slate-300 text-sm mb-3">Give me a call</p>
                <p className="text-purple-400 font-medium">+503 7180-0658</p>
              </div>
            </a>

            <div className="bg-gradient-to-br from-pink-900/40 to-pink-800/20 p-8 rounded-2xl border border-pink-700/50 hover:border-pink-500 transition-all hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-pink-600/20 p-4 rounded-full mb-4 group-hover:bg-pink-600/30 transition">
                  <MapPin size={32} className="text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-slate-300 text-sm mb-3">Based in</p>
                <p className="text-pink-400 font-medium">San Salvador, El Salvador</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-6">Or connect with me on social media</p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/AlexxDeleon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 p-4 rounded-full transition-all hover:scale-110 border border-slate-600 hover:border-slate-500"
              >
                <Github size={24} className="text-slate-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/eduardo-dele%C3%B3n-529353324/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 p-4 rounded-full transition-all hover:scale-110 border border-slate-600 hover:border-slate-500"
              >
                <Linkedin size={24} className="text-slate-300" />
              </a>
            </div>
            <p className="text-slate-500 text-sm mt-6">
              Available for freelance projects and full-time opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700 text-center text-slate-400">
        <p>© 2026 Eduardo Alexander Menéndez Deleón. All rights reserved.</p>
      </footer>
    </div>
  );
}