
import React from 'react';
import { Code, Cloud, Database, BarChart3, Brain, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "C", "R", "HTML", "CSS", "SQL", "JavaScript"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="w-6 h-6" />,
      skills: ["NumPy", "Pandas", "Scikit-Learn", "TensorFlow", "Keras", "YOLO", "LSTM"],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Docker", "CodePipeline", "S3", "GitHub Actions", "CI/CD"],
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      title: "Data Visualization",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Tableau", "Matplotlib", "Seaborn", "Power BI", "D3.js"],
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30"
    },
    {
      title: "Development Tools",
      icon: <Database className="w-6 h-6" />,
      skills: ["Git", "GitHub", "VS Code", "PyCharm", "Jupyter", "Google Colab"],
      color: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      title: "Platforms & OS",
      icon: <Globe className="w-6 h-6" />,
      skills: ["Windows", "macOS", "Linux", "AWS Console", "Docker Desktop"],
      color: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, cloud technologies, data science, 
            and software development, built through hands-on projects and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${category.color} backdrop-blur-sm p-6 rounded-2xl border ${category.borderColor} hover:border-opacity-60 transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-gray-800/50 text-gray-300 text-sm rounded-lg border border-gray-600 hover:border-gray-500 hover:bg-gray-700/50 transition-all duration-200 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", date: "April 2025" },
              { name: "Introduction to Statistics", org: "Stanford University", date: "Oct 2024" },
              { name: "SQL (Advanced) Certificate", org: "HackerRank", date: "Oct 2023" },
              { name: "Data Analyst Bootcamp", org: "Udemy", date: "July 2023" }
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-center">
                  <h4 className="font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {cert.name}
                  </h4>
                  <p className="text-blue-400 text-sm mb-1">{cert.org}</p>
                  <p className="text-gray-500 text-xs">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
