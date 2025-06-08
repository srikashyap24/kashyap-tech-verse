
import React from 'react';
import { Calendar, Users, Trophy, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Club Founder and Club Lead",
      organization: "Student-led Initiative",
      location: "Hyderabad, India",
      period: "Nov 2023 – Dec 2024",
      type: "Leadership",
      icon: <Users className="w-5 h-5" />,
      description: [
        "Founded a student-led club to promote collaboration and skill-building in data science",
        "Organized expert talks and hands-on ML/data analytics workshops",
        "Built a community of data science enthusiasts and facilitated knowledge sharing"
      ],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Tech Fest Coordinator",
      organization: "JNTUH College of Engineering",
      location: "Hyderabad, India",
      period: "Jan 2024 – May 2024",
      type: "Event Management",
      icon: <Trophy className="w-5 h-5" />,
      description: [
        "Led QUEST Fest with participation from 100+ colleges",
        "Coordinated coding contests, hackathons & technical workshops",
        "Secured sponsorships, significantly boosting event outreach and impact"
      ],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Masters in Computer Science Student",
      organization: "Blekinge Institute of Technology",
      location: "Karlskrona, Sweden",
      period: "2025 – 2026",
      type: "Education",
      icon: <Briefcase className="w-5 h-5" />,
      description: [
        "Awarded 50% merit scholarship for academic excellence",
        "Actively seeking opportunities to apply skills in Master thesis",
        "Focusing on advanced AI/ML and cloud computing technologies"
      ],
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey in leadership, education, and community building, showcasing 
            my ability to organize, collaborate, and drive impactful initiatives.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${exp.color} backdrop-blur-sm p-8 rounded-2xl border ${exp.borderColor} hover:border-opacity-60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-800/50 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {exp.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-400 font-medium">
                        {exp.organization}
                      </p>
                    </div>
                    
                    <div className="flex flex-col lg:items-end mt-2 lg:mt-0">
                      <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <span className="inline-block px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-600">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{exp.location}</p>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
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
  );
};

export default Experience;
