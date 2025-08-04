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
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 section-enter ${isIntersecting ? "visible" : ""}`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            My journey in AI and Machine Learning
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Current Experience - Centered */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="glass rounded-3xl p-8 hover-tilt transition-all duration-300">
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${
                    experiences[currentIndex].color === 'primary' 
                      ? 'from-primary to-blue-600' 
                      : 'from-secondary to-purple-600'
                  } mb-4`}>
                    <i className={`fas ${
                      experiences[currentIndex].title.includes('Developer') ? 'fa-code' :
                      experiences[currentIndex].title.includes('Research') || experiences[currentIndex].title.includes('Intern') ? 'fa-flask' :
                      experiences[currentIndex].title.includes('BTech') ? 'fa-graduation-cap' :
                      'fa-briefcase'
                    } text-2xl text-white`} />
                  </div>
                  <h3 className={`text-2xl font-bold text-${experiences[currentIndex].color} mb-3`}>
                    {experiences[currentIndex].title}
                  </h3>
                  <p className="text-xl text-gray-200 mb-2">
                    {experiences[currentIndex].company}
                  </p>
                  <p className="text-sm text-gray-400 mb-6">{experiences[currentIndex].period}</p>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {experiences[currentIndex].description}
                  </p>
                </div>

                {/* Role Badge */}
                <div className="flex justify-center mt-6">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${
                    experiences[currentIndex].color === 'primary' 
                      ? 'from-primary/20 to-blue-600/20 text-primary border border-primary/30' 
                      : 'from-secondary/20 to-purple-600/20 text-secondary border border-secondary/30'
                  }`}>
                    {experiences[currentIndex].title.includes('Developer') ? 'Development Role' :
                     experiences[currentIndex].title.includes('Research') || experiences[currentIndex].title.includes('Intern') ? 'Research & Innovation' :
                     experiences[currentIndex].title.includes('BTech') ? 'Academic Achievement' :
                     'Professional Experience'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          {experiences.length > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-4">
              <button
                onClick={() => setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : experiences.length - 1)}
                className="p-3 glass rounded-full hover:bg-white/10 transition-all group"
                data-testid="button-experience-previous"
              >
                <ChevronLeft className="w-6 h-6 text-primary group-hover:text-white" />
              </button>
              
              <div className="flex space-x-2">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? 'bg-primary' : 'bg-white/30'
                    }`}
                    data-testid={`button-experience-dot-${index}`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setCurrentIndex(currentIndex < experiences.length - 1 ? currentIndex + 1 : 0)}
                className="p-3 glass rounded-full hover:bg-white/10 transition-all group"
                data-testid="button-experience-next"
              >
                <ChevronRight className="w-6 h-6 text-primary group-hover:text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
