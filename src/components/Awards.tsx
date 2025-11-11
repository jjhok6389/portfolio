import { Trophy, Calendar, Award as AwardIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import awardImage1 from "figma:asset/a2bd7891dac09e4d80488d490685f7618a019498.png";
import awardImage2 from "figma:asset/4bba24f85492683bbaaa58da4778dcb4897592d8.png";
import awardImage3 from "figma:asset/565822e679752a7e4aefd6a0f3cea9aca9327cb2.png";

export function Awards() {
  const awards = [
    {
      title: "한국공학인증원장상",
      organization: "한국공학교육인증원",
      date: "2025년 10월",
      description: "제19회 학생포트폴리오 경진대회에서 우수한 성적으로 한국공학인증원장상을 수상하였습니다. 다학제적 접근과 창의적 문제해결 능력을 인정받았습니다.",
      image: awardImage1,
      category: "한국공학인증원장상",
    },
    {
      title: "금상",
      organization: "영남이공대학교 공학기술교육혁신센터",
      date: "2025년 7월",
      description: "IOT 스마트홈 구축 프로젝트를 통해 금상을 수상하였습니다. 사물인터넷 기술을 활용한 스마트홈 시스템 설계 및 구현 능력을 인정받았습니다.",
      image: awardImage2,
      category: "금상",
    },
    {
      title: "동상",
      organization: "명지전문대학교 창업아이디어 경진대회",
      date: "2024년 12월 13일",
      description: "창업아이디어 경진대회에서 동상을 수상하였습니다. 혁신적인 사업 아이디어와 실행 가능성을 인정받았으며, 창업가 정신과 기획 역량을 발휘했습니다.",
      image: awardImage3,
      category: "동상",
    },
  ];

  return (
    <section id="awards" className="py-24 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-4 shadow-lg">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-gray-900 mb-4">수상 경력</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              다양한 대회와 프로젝트에서 인정받은 성과들입니다.
            </p>
          </div>

          <div className="space-y-8">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-indigo-200 transition-all duration-300"
              >
                <div className="grid md:grid-cols-5 gap-6 p-6 md:p-8">
                  {/* Award Image */}
                  <div className="md:col-span-2">
                    <div className="relative h-64 md:h-full min-h-[200px] rounded-xl overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                      <ImageWithFallback
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg shadow-lg">
                          {award.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Award Details */}
                  <div className="md:col-span-3 flex flex-col justify-center space-y-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                          <AwardIcon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-gray-900">{award.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-1">{award.organization}</p>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{award.date}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-indigo-100 hover:shadow-lg transition-shadow">
              <div className="text-gray-900 mb-2">5+</div>
              <p className="text-gray-600">수상 경력</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-purple-100 hover:shadow-lg transition-shadow">
              <div className="text-gray-900 mb-2">2회</div>
              <p className="text-gray-600">캡스톤 디자인</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-pink-100 hover:shadow-lg transition-shadow">
              <div className="text-gray-900 mb-2">3개</div>
              <p className="text-gray-600">학위</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-rose-100 hover:shadow-lg transition-shadow">
              <div className="text-gray-900 mb-2">1회</div>
              <p className="text-gray-600">창업 동아리 대표</p>
            </div>
          </div>

          {/* Additional Awards */}
          <div className="mt-12 bg-white rounded-2xl border border-indigo-100 p-8 shadow-lg">
            <h3 className="text-gray-900 mb-6">기타 수상 경력</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">IR피칭 경진대회 동상</h4>
                  <p className="text-gray-600">효과적인 프레젠테이션과 비즈니스 기획 능력을 인정받았습니다.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">캡스톤 경진대회 장려상</h4>
                  <p className="text-gray-600">실무 중심의 프로젝트 수행 능력과 기술적 역량을 발휘했습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}