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

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-96 bg-gradient-to-b from-primary to-secondary rounded-full" />

          {/* Current Experience */}
          <div className="space-y-12">
            <div className="relative flex items-center justify-between">
              {experiences[currentIndex].side === "left" ? (
                <>
                  <div className="w-5/12 text-right animate-slide-in-left">
                    <div className="glass rounded-2xl p-6 hover-tilt">
                      <h3 className={`text-xl font-bold text-${experiences[currentIndex].color} mb-2`}>
                        {experiences[currentIndex].title}
                      </h3>
                      <p className="text-gray-300 mb-2">
                        {experiences[currentIndex].company}
                      </p>
                      <p className="text-sm text-gray-400">{experiences[currentIndex].period}</p>
                      <p className="text-gray-300 mt-3">
                        {experiences[currentIndex].description}
                      </p>
                    </div>
                  </div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-${experiences[currentIndex].color} rounded-full border-4 border-white shadow-lg`} />
                  <div className="w-5/12" />
                </>
              ) : (
                <>
                  <div className="w-5/12" />
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-${experiences[currentIndex].color} rounded-full border-4 border-white shadow-lg`} />
                  <div className="w-5/12 animate-slide-in-right">
                    <div className="glass rounded-2xl p-6 hover-tilt">
                      <h3 className={`text-xl font-bold text-${experiences[currentIndex].color} mb-2`}>
                        {experiences[currentIndex].title}
                      </h3>
                      <p className="text-gray-300 mb-2">
                        {experiences[currentIndex].company}
                      </p>
                      <p className="text-sm text-gray-400">{experiences[currentIndex].period}</p>
                      <p className="text-gray-300 mt-3">
                        {experiences[currentIndex].description}
                      </p>
                    </div>
                  </div>
                </>
              )}
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
