import { useTypewriter } from "../hooks/use-typewriter";
import heroimg from "../assets/my-profile-img-2.jpg";

export function Hero() {
  const typewriterText = useTypewriter({
    texts: ["AI Engineer", "ML Engineer", "Data Scientist", "AI/ML Enthusiast"],
    typeSpeed: 100,
    deleteSpeed: 50,
    delayBetweenTexts: 2000,
  });

  const handleScrollDown = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full Background Image */}
      <img
        src={heroimg}
        alt="Cyril Jose - AI/ML Engineer"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Dark Overlay for text readability */}
      <div
        className="absolute inset-0 bg-black/60"
        style={{ zIndex: 1 }}
      />

      {/* Content positioned strategically over the background */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="backdrop-blur-sm bg-black/20 rounded-3xl p-8 md:p-12 animate-float border border-white/10">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up text-white drop-shadow-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cyril Jose
            </span>
          </h1>

          <div
            className="text-xl md:text-2xl mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-white/90 drop-shadow-lg">I'm a </span>
            <span className="typewriter text-blue-400 font-semibold drop-shadow-lg">
              {typewriterText}
            </span>
          </div>

          <p
            className="text-lg md:text-xl text-white/80 mb-12 animate-fade-in-up drop-shadow-lg leading-relaxed"
            style={{ animationDelay: "0.6s" }}
          >
            Passionate about leveraging machine learning to solve real-world
            problems with experience in deep learning, NLP, and data analytics.
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-6 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#contact"
              className="glow-button backdrop-blur-sm bg-blue-600/30 border border-blue-400/50 rounded-full px-8 py-4 text-white hover:bg-blue-600/50 transition-all ripple shadow-lg"
            >
              <i className="fas fa-envelope mr-2" />
              Get In Touch
            </a>
            <a
              href="#projects"
              className="glow-button backdrop-blur-sm bg-purple-600/30 border border-purple-400/50 rounded-full px-8 py-4 text-white hover:bg-purple-600/50 transition-all ripple shadow-lg"
            >
              <i className="fas fa-code mr-2" />
              View Work
            </a>
          </div>

          <div
            className="flex justify-center space-x-8 mt-12 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="https://github.com/Cyriloo7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white/80 hover:text-blue-400 transition-all hover:scale-125 drop-shadow-lg"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://linkedin.com/in/cyril07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white/80 hover:text-blue-400 transition-all hover:scale-125 drop-shadow-lg"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </button>
    </section>
  );
}
