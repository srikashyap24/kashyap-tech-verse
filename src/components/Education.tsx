
import React from 'react';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Masters in Computer Science",
      institution: "Blekinge Institute of Technology",
      location: "Karlskrona, Sweden",
      period: "2025 – 2026",
      status: "Current",
      achievement: "Awarded 50% merit scholarship for academic excellence",
      description: "Actively seeking opportunities to apply skills in Master thesis",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Jawaharlal Nehru Technological University",
      location: "Hyderabad, India",
      period: "2021 – 2024",
      status: "Completed",
      achievement: "Strong foundation in computer science fundamentals",
      description: "Comprehensive curriculum covering programming, algorithms, and software engineering",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey from India to Sweden, building a strong foundation 
            in computer science and pursuing advanced studies in emerging technologies.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${edu.color} backdrop-blur-sm p-8 rounded-2xl border ${edu.borderColor} hover:border-opacity-60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-800/50 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          edu.status === 'Current' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-lg text-blue-400 font-medium mb-3">
                        {edu.institution}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-xl border border-gray-700">
                      <Award className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Achievement</h4>
                        <p className="text-gray-300 text-sm">{edu.achievement}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
