import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-indigo-100" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            Portfolio
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              소개
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              강점
            </button>
            <button
              onClick={() => scrollToSection("awards")}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              수상
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              프로젝트
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-indigo-600" />
            ) : (
              <Menu className="w-6 h-6 text-indigo-600" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-700 hover:text-indigo-600 transition-colors"
            >
              소개
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left text-gray-700 hover:text-indigo-600 transition-colors"
            >
              강점
            </button>
            <button
              onClick={() => scrollToSection("awards")}
              className="block w-full text-left text-gray-700 hover:text-indigo-600 transition-colors"
            >
              수상
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-gray-700 hover:text-indigo-600 transition-colors"
            >
              프로젝트
            </button>
          </div>
        )}
      </div>
    </header>
  );
}