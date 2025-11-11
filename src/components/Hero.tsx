import { ArrowDown, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "figma:asset/5225d5c9c4bc644dbf96305472725304a50e0deb.png";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img
                src={profileImage}
                alt="김대호 프로필"
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-3xl object-cover border-4 border-white shadow-2xl"
              />
            </div>

            {/* Profile Info */}
            <div className="text-center md:text-left space-y-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  <span>Developer & Entrepreneur</span>
                </div>
                <h1 className="text-gray-900">김대호</h1>
                <p className="text-gray-600">2000.11.16</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <a
                  href="mailto:k001116@naver.com"
                  className="flex items-center gap-2 justify-center md:justify-start text-gray-700 hover:text-indigo-600 transition-colors group"
                >
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                    <Mail className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span>k001116@naver.com</span>
                </a>
                <a
                  href="tel:010-4523-9812"
                  className="flex items-center gap-2 justify-center md:justify-start text-gray-700 hover:text-indigo-600 transition-colors group"
                >
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Phone className="w-4 h-4 text-purple-600" />
                  </div>
                  <span>010-4523-9812</span>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-gray-900">
              문제를 발견하고,
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                기술로 해결하는
              </span>
              <br />
              창업형 개발자
            </h2>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            AI, IoT부터 비즈니스 기획까지. 기술적 전문성과 창업가 정신으로 
            혁신적인 솔루션을 만들어냅니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            >
              프로젝트 보기
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("education")}
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              학력 보기
            </Button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-indigo-600" />
        </button>
      </div>
    </section>
  );
}