
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Brain, Shield, BarChart3, Zap, Eye, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Unified Object Detection System for Industrial Safety",
      description: "YOLOv8-based deep learning model detecting PPE, mobile phone usage, and smoking behavior with 91.2% mAP50 accuracy.",
      tags: ["Python", "YOLOv8", "MakeSenseAI", "Computer Vision"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30"
    },
    {
      title: "Anomaly Detection Using LSTM Autoencoders",
      description: "Advanced network intrusion detection system combining Isolation Forest and Stacked LSTM Autoencoders achieving 93% accuracy.",
      tags: ["Python", "TensorFlow", "Scikit-learn", "LSTM"],
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Custom CNN for CIFAR-100 Classification",
      description: "Lightweight 6-layer CNN outperforming VGG19 and achieving competitive accuracy with modern architectures on CIFAR-100.",
      tags: ["Python", "TensorFlow", "Keras", "CNN"],
      icon: <Eye className="w-8 h-8" />,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Time Series Modeling of EU Energy Market",
      description: "Comprehensive framework using LSTM, XGBoost, and SARIMA to analyze negative prices in EU energy markets.",
      tags: ["Python", "Pandas", "Scikit-Learn", "Time Series"],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      title: "Campus Track – Student Tracking System",
      description: "Face recognition system with gesture-based emergency alerts and web interface for tracking student movements.",
      tags: ["Python", "OpenCV", "MediaPipe", "Facial Recognition"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      title: "AWS-Powered Game Deploy",
      description: "CI/CD pipeline using AWS CodePipeline and S3 for automated deployment of browser-based programming game.",
      tags: ["AWS", "CodePipeline", "S3", "JavaScript"],
      icon: <Globe className="w-8 h-8" />,
      color: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my work in AI/ML, computer vision, and cloud technologies, 
            demonstrating practical applications and technical expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${project.color} backdrop-blur-sm p-6 rounded-2xl border ${project.borderColor} hover:border-opacity-60 transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button
                  size="sm"
                  className="bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 transition-all duration-300"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
