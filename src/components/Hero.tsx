
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Sri Kashyap Dongari
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            <span className="text-blue-400">Data Scientist</span> • 
            <span className="text-purple-400"> Cloud Enthusiast</span> • 
            <span className="text-green-400"> AI/ML Developer</span>
          </div>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Masters student at Blekinge Institute of Technology, passionate about leveraging 
            AI/ML and cloud technologies to solve real-world problems. Currently seeking opportunities 
            for my Master's thesis and beyond.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/srikashyap24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/in/dongari-sri-kashyap-549760249/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
            </a>
            <a 
              href="mailto:srikashyap2107@gmail.com"
              className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-green-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
