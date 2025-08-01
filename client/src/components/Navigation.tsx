import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Awards" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // For bottom navigation, keep it visible most of the time
      // Only hide when scrolling down quickly or at the very top
      if (scrollTop < 50) {
        setIsVisible(false); // Hide at the very top to not interfere with hero content
      } else {
        setIsVisible(true);
      }
      
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 floating-nav rounded-full px-8 py-4 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center space-x-6 md:space-x-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-sm md:text-base"
          >
            {item.label}
          </a>
        ))}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full glass hover:bg-white/20 transition-all duration-300"
          aria-label="Toggle theme"
        >
          <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`} />
        </button>
      </div>
    </nav>
  );
}
