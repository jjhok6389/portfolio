import { useState } from "react";
import { GraduationCap, X } from "lucide-react";
import cert1 from "figma:asset/9d640f46744dbb07fc297c9e69b803784815b18e.png";
import cert2 from "figma:asset/063e39c46cf92a7920badc18b40d67e22d5b4242.png";
import cert3 from "figma:asset/0ca507e69f09e45d71c9cd6a26b86d9c683f9ab7.png";

export function Education() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const degrees = [
    {
      title: "전자공학과 전문학사",
      school: "명지전문대학",
      year: "2024",
      description: "3년제 전문학사 학위",
      image: cert1,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "컴퓨터공학과 학사",
      school: "명지전문대학",
      year: "2025",
      description: "학사학위과정",
      image: cert2,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "경영 전문학사",
      school: "국가평생교육진흥원",
      year: "2023",
      description: "경영 전공",
      image: cert3,
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <>
      <section id="education" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-gray-900">학력</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                기술과 비즈니스의 융합, 다양한 학문적 배경
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {degrees.map((degree, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => setSelectedCert(degree.image)}
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-indigo-50 border border-gray-100 hover:border-indigo-200 hover:shadow-2xl transition-all duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-r ${degree.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-2">{degree.title}</h3>
                    <p className="text-gray-600 mb-2">{degree.school}</p>
                    <p className="text-gray-500 mb-4">{degree.description}</p>
                    <div className="text-indigo-600 mb-4">{degree.year}</div>
                    
                    {/* Certificate preview */}
                    <div className="relative overflow-hidden rounded-lg border-2 border-gray-200 group-hover:border-indigo-400 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                      <img
                        src={degree.image}
                        alt={`${degree.title} 증명서`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="text-white">클릭하여 확대</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for enlarged certificate */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 text-white hover:text-indigo-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedCert}
              alt="학위 증명서"
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
