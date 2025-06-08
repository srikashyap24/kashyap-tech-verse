
import React from 'react';
import { MapPin, GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate technologist currently pursuing my Masters in Computer Science at 
                Blekinge Institute of Technology in Sweden, where I was awarded a 50% merit scholarship 
                for academic excellence.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a strong foundation in AI/ML, cloud technologies, and web development, I've led 
                multiple projects ranging from industrial safety systems using YOLO to anomaly detection 
                with LSTM autoencoders. I also founded and led a Data Science Club, organizing workshops 
                and expert talks to foster collaboration in the tech community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/80 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <MapPin className="w-8 h-8 text-purple-400 mb-3" />
                <h4 className="font-semibold text-white mb-2">Location</h4>
                <p className="text-gray-400">Karlskrona, Sweden</p>
                <p className="text-sm text-gray-500">Originally from Hyderabad, India</p>
              </div>
              
              <div className="bg-gray-800/80 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <Award className="w-8 h-8 text-green-400 mb-3" />
                <h4 className="font-semibold text-white mb-2">Focus Areas</h4>
                <p className="text-gray-400">AI/ML, Data Science</p>
                <p className="text-sm text-gray-500">Cloud Computing, Web Dev</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-8 rounded-2xl border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">AWS Certified Cloud Practitioner</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Founded & Led Data Science Club</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Tech Fest Coordinator (100+ colleges)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">Multiple ML/AI project implementations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300">Seeking Master's thesis opportunities</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h4 className="font-semibold text-white mb-3">Current Status</h4>
              <p className="text-gray-300 text-sm">
                Actively seeking opportunities to apply my skills in a Master's thesis project, 
                particularly in AI/ML, data science, or cloud computing domains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
