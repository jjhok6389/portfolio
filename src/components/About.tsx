import { Award, Target, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Target,
      title: "복합적인 문제 해결 능력",
      description: "다양한 관점에서 문제를 분석하고 창의적인 솔루션을 도출합니다.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Zap,
      title: "자율적 사고력",
      description: "주도적으로 학습하고 판단하며, 능동적으로 과제를 수행합니다.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "실행 중심의 마인드셋",
      description: "아이디어를 실제 결과물로 만들어내는 강력한 실행력을 보유하고 있습니다.",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">소개</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              열정과 전문성으로 무장한 창의적 문제 해결사입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="max-w-3xl relative z-10">
              <h3 className="text-white mb-4">나의 이야기</h3>
              <div className="space-y-4 text-indigo-100">
                <p>
                  <span className="text-white">전자공학과 전문학사</span>, <span className="text-white">경영 전문학사</span>, 
                  그리고 <span className="text-white">컴퓨터공학과 학사학위</span>를 취득하며 
                  기술과 비즈니스에 대한 폭넓은 이해를 쌓아왔습니다.
                </p>
                <p>
                  <span className="text-white">두 번의 캡스톤 디자인 프로젝트</span>를 성공적으로 완수하며 
                  실무 중심의 문제 해결 경험을 축적했고, 
                  <span className="text-white"> 창업 동아리 대표학생</span>으로 활동하며 
                  리더십과 기획력을 발휘했습니다.
                </p>
                <p>
                  다양한 학문적 배경과 실전 경험을 바탕으로 복합적인 문제를 해결하고, 
                  혁신적인 아이디어를 실현하는 데 강점을 가지고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}