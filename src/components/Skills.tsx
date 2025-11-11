import {
  Code2,
  Palette,
  Database,
  Lightbulb,
  MessageSquare,
  TrendingUp,
  Cpu,
  Briefcase,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      category: "AI & IoT 개발",
      icon: Cpu,
      gradient: "from-indigo-500 to-purple-500",
      skills: [
        { name: "AI/머신러닝" },
        { name: "IoT 시스템" },
        { name: "임베디드 개발" },
      ],
    },
    {
      category: "소프트웨어 개발",
      icon: Code2,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "웹/앱 개발" },
        { name: "풀스택 개발" },
        { name: "데이터베이스" },
      ],
    },
    {
      category: "창업 & 기획",
      icon: Briefcase,
      gradient: "from-pink-500 to-rose-500",
      skills: [
        { name: "사업 기획" },
        { name: "프로젝트 관리" },
        { name: "IR 피칭" },
      ],
    },
  ];

  const softSkills = [
    {
      icon: Lightbulb,
      title: "혁신적 사고",
      description: "창의적인 아이디어 도출과 문제 해결",
    },
    {
      icon: TrendingUp,
      title: "리더십",
      description: "창업 동아리 대표로서 팀을 이끈 경험",
    },
    {
      icon: MessageSquare,
      title: "프레젠테이션",
      description: "효과적인 의사소통과 IR 피칭 능력",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">강점 & 스킬</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              다양한 분야의 전문성과 실무 경험을 보유하고
              있습니다.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center shadow-md`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-gray-900">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex items-center gap-3 group-hover:translate-x-1 transition-transform"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full`}
                      ></div>
                      <span className="text-gray-700">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-gray-900 text-center mb-8">
              소프트 스킬
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {softSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <skill.icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h4 className="text-gray-900 mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-gray-600">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}