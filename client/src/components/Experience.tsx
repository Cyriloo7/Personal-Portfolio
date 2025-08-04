import { useState } from "react";
import { useIntersectionObserver } from "../hooks/use-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Junior Python Developer",
    company: "Webfolks, Mannarkkad, India",
    period: "Feb 2025 - Present",
    description: "Developed pipelines to preprocess, validate, and transform large-scale AI/ML datasets for object detection, segmentation, and keypoint labeling; built automation tools and lightweight AI models to accelerate annotation review and correction; integrated custom pretrained models into CVAT and Label-Studio; and deployed Dockerized utilities to boost labeling speed, accuracy, and consistency.",
    color: "primary",
    side: "left"
  },
  {
    id: 2,
    title: "Research Intern",
    company: "National University of Singapore (NUS), Singapore",
    period: "Feb 2024 - Aug 2024",
    description: "Developed VR therapy using music and immersive environments, enhancing stress reduction by 20%. Achieved a 30% relaxation rate for patients using AI-driven approaches with multimodal sensor data.",
    color: "secondary",
    side: "right"
  },
  {
    id: 3,
    title: "Big Data Analysis Using Deep Learning Intern",
    company: "National University of Singapore (NUS), Singapore",
    period: "Dec 2023 - Jan 2024",
    description: "Utilized T5-small and Pegasus models to generate legal verdicts efficiently. Focused on data processing, feature engineering, and machine learning algorithms.",
    color: "primary",
    side: "left"
  },
  {
    id: 4,
    title: "Artificial Intelligence Extern",
    company: "Smart Bridge, Chennai, India",
    period: "Feb 2024 - Aug 2024",
    description: "Built a ship classification model using VGG16 with transfer learning techniques. Achieved 78.1% accuracy on the training set and 76.67% on the test set.",
    color: "secondary",
    side: "right"
  },
  {
    id: 5,
    title: "BTech Computer Science",
    company: "Vellore Institute of Technology",
    period: "2020 - 2024",
    description: "BTech CSE Core with strong interest in AI/ML which focuses on deep learning, computer vision, and natural language processing.",
    color: "primary",
    side: "left"
  }
];

export function Experience() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [viewMode, setViewMode] = useState<'timeline' | 'focus'>('timeline');

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 section-enter ${isIntersecting ? "visible" : ""}`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            My journey in AI and Machine Learning
          </p>
          
          {/* View Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 rounded-2xl p-2 backdrop-blur-sm border border-white/20">
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'timeline' 
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <i className="fas fa-project-diagram mr-2"></i>
                Timeline View
              </button>
              <button
                onClick={() => setViewMode('focus')}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'focus' 
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <i className="fas fa-eye mr-2"></i>
                Focus View
              </button>
            </div>
          </div>
        </div>

        {viewMode === 'timeline' ? <TimelineView /> : <FocusView />}
      </div>
    </section>
  );
}

function TimelineView() {
  return (
    <div className="relative">
      {/* Central Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-secondary to-primary h-full rounded-full shadow-lg"></div>
      
      {/* Experience Cards */}
      <div className="space-y-16">
        {experiences.map((experience, index) => (
          <div key={experience.id} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Card */}
            <div className="w-1/2 px-8">
              <div className={`relative glass rounded-3xl p-8 transition-all duration-500 hover:scale-105 border border-white/20 shadow-2xl ${
                index % 2 === 0 ? 'ml-auto' : 'mr-auto'
              }`}>
                {/* Timeline Badge */}
                <div className={`absolute ${index % 2 === 0 ? '-right-6' : '-left-6'} top-8 w-12 h-12 rounded-full bg-gradient-to-br ${
                  experience.color === 'primary' 
                    ? 'from-primary via-blue-500 to-cyan-500' 
                    : 'from-secondary via-purple-500 to-pink-500'
                } flex items-center justify-center shadow-2xl ring-4 ring-white/20 z-10`}>
                  <i className={`fas ${
                    experience.title.includes('Developer') ? 'fa-code' :
                    experience.title.includes('Research') || experience.title.includes('Intern') ? 'fa-flask' :
                    experience.title.includes('BTech') ? 'fa-graduation-cap' :
                    'fa-briefcase'
                  } text-white text-lg`} />
                </div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="mb-4">
                    <span className="text-sm text-gray-400 font-medium bg-white/10 px-3 py-1 rounded-full">
                      {experience.period}
                    </span>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${
                    experience.color === 'primary' 
                      ? 'from-primary to-blue-400' 
                      : 'from-secondary to-purple-400'
                  } bg-clip-text text-transparent`}>
                    {experience.title}
                  </h3>
                  
                  <p className="text-lg text-gray-200 mb-4 font-medium">
                    {experience.company}
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  {/* Role Badge */}
                  <div className={`mt-6 ${index % 2 === 0 ? 'flex justify-end' : 'flex justify-start'}`}>
                    <span className={`px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r ${
                      experience.color === 'primary' 
                        ? 'from-primary/20 to-blue-600/20 text-primary border border-primary/30' 
                        : 'from-secondary/20 to-purple-600/20 text-secondary border border-secondary/30'
                    } backdrop-blur-sm`}>
                      {experience.title.includes('Developer') ? 'Development' :
                       experience.title.includes('Research') || experience.title.includes('Intern') ? 'Research' :
                       experience.title.includes('BTech') ? 'Education' :
                       'Professional'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Spacer for opposite side */}
            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FocusView() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Current Experience - Enhanced Prominent Design */}
      <div className="flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="relative">
            {/* Background Glow Effect */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${
              experiences[currentIndex].color === 'primary' 
                ? 'from-primary/20 via-blue-500/20 to-cyan-500/20' 
                : 'from-secondary/20 via-purple-500/20 to-pink-500/20'
            } blur-xl scale-105 opacity-60`}></div>
            
            {/* Main Experience Card */}
            <div className="relative glass rounded-3xl p-12 hover-tilt hover:scale-105 transition-all duration-500 border border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl">
              {/* Header Section */}
              <div className="text-center mb-8">
                {/* Enhanced Icon */}
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${
                  experiences[currentIndex].color === 'primary' 
                    ? 'from-primary via-blue-500 to-cyan-500' 
                    : 'from-secondary via-purple-500 to-pink-500'
                } mb-6 shadow-2xl ring-4 ring-white/20 hover:scale-110 transition-transform duration-300`}>
                  <i className={`fas ${
                    experiences[currentIndex].title.includes('Developer') ? 'fa-code' :
                    experiences[currentIndex].title.includes('Research') || experiences[currentIndex].title.includes('Intern') ? 'fa-flask' :
                    experiences[currentIndex].title.includes('BTech') ? 'fa-graduation-cap' :
                    'fa-briefcase'
                  } text-3xl text-white drop-shadow-lg`} />
                </div>
                
                {/* Enhanced Title */}
                <h3 className={`text-4xl font-bold mb-4 bg-gradient-to-r ${
                  experiences[currentIndex].color === 'primary' 
                    ? 'from-primary via-blue-400 to-cyan-400' 
                    : 'from-secondary via-purple-400 to-pink-400'
                } bg-clip-text text-transparent leading-tight`}>
                  {experiences[currentIndex].title}
                </h3>
                
                {/* Enhanced Company */}
                <p className="text-2xl text-gray-100 mb-3 font-medium">
                  {experiences[currentIndex].company}
                </p>
                
                {/* Enhanced Period with Icon */}
                <div className="flex items-center justify-center space-x-2 mb-8">
                  <i className="fas fa-calendar-alt text-gray-400"></i>
                  <p className="text-lg text-gray-400 font-medium">{experiences[currentIndex].period}</p>
                </div>
              </div>
              
              {/* Enhanced Description Section */}
              <div className="text-center max-w-4xl mx-auto">
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <p className="text-gray-200 leading-relaxed text-xl font-light tracking-wide">
                    {experiences[currentIndex].description}
                  </p>
                </div>
              </div>

              {/* Enhanced Role Badge */}
              <div className="flex justify-center mt-8">
                <span className={`px-8 py-4 rounded-2xl text-lg font-semibold bg-gradient-to-r ${
                  experiences[currentIndex].color === 'primary' 
                    ? 'from-primary/30 to-blue-600/30 text-primary border-2 border-primary/50 shadow-lg shadow-primary/25' 
                    : 'from-secondary/30 to-purple-600/30 text-secondary border-2 border-secondary/50 shadow-lg shadow-secondary/25'
                } backdrop-blur-sm hover:scale-105 transition-transform duration-300`}>
                  <i className={`fas ${
                    experiences[currentIndex].title.includes('Developer') ? 'fa-laptop-code' :
                    experiences[currentIndex].title.includes('Research') || experiences[currentIndex].title.includes('Intern') ? 'fa-lightbulb' :
                    experiences[currentIndex].title.includes('BTech') ? 'fa-medal' :
                    'fa-star'
                  } mr-3`}></i>
                  {experiences[currentIndex].title.includes('Developer') ? 'Development Excellence' :
                   experiences[currentIndex].title.includes('Research') || experiences[currentIndex].title.includes('Intern') ? 'Research & Innovation' :
                   experiences[currentIndex].title.includes('BTech') ? 'Academic Achievement' :
                   'Professional Experience'}
                </span>
              </div>
              
              {/* Progress Indicator */}
              <div className="flex justify-center mt-8">
                <div className="bg-white/10 rounded-full px-6 py-2 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <span className="text-gray-300 text-sm font-medium">
                    {currentIndex + 1} of {experiences.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Controls */}
      {experiences.length > 1 && (
        <div className="flex justify-center items-center mt-16 space-x-6">
          <button
            onClick={() => setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : experiences.length - 1)}
            className="p-4 glass rounded-2xl hover:bg-white/20 transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-110 border border-white/20"
            data-testid="button-experience-previous"
          >
            <ChevronLeft className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
          </button>
          
          <div className="flex space-x-3 bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/20">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-primary to-secondary shadow-lg' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                data-testid={`button-experience-dot-${index}`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setCurrentIndex(currentIndex < experiences.length - 1 ? currentIndex + 1 : 0)}
            className="p-4 glass rounded-2xl hover:bg-white/20 transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-110 border border-white/20"
            data-testid="button-experience-next"
          >
            <ChevronRight className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
          </button>
        </div>
      )}
    </div>
  );
}