import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { useState } from "react";
import aiMatchingImage from "figma:asset/258f545cf3d0538a27fcd508420c81104bf5674b.png";
import drinkingAppImage from "figma:asset/aac7583ee77a9edcc444afd68114d9968bb39e80.png";
import aiMoodLampImage from "figma:asset/9864afb338966fe74c92083e5a858decfb898ab3.png";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "AI 채용 매칭 플랫폼",
      description:
        "인공지능 기반 이력서 분석 및 구직자-기업 매칭 시스템을 구축하여 채용 효율성을 획기적으로 개선한 플랫폼",
      image: aiMatchingImage,
      tags: ["AI/ML", "백엔드", "데이터 분석"],
      impact: "매칭 정확도 85% 달성",
      period: "2025.09 ~ 2025.12",
      techStacks: {
        "클라우드 & 인프라 (AWS)": [
          "Amazon EC2",
          "Amazon S3",
          "AWS Lambda",
          "Amazon DynamoDB",
          "Amazon IAM",
        ],
        "AI (Generative AI)": [
          "Amazon Bedrock",
          "Anthropic Claude 3 Sonnet",
          "프롬프트 엔지니어링",
        ],
        "백엔드 (Backend)": [
          "Python",
          "Flask",
          "Boto3 (AWS SDK for Python)",
        ],
        "프론트엔드 (Mobile App)": [
          "React Native",
          "Expo",
          "TypeScript",
          "Expo Router",
          "AsyncStorage",
        ],
      },
      features: [
        {
          title: "지원자 기능",
          items: [
            "다단계 이력서 작성, 수정 및 S3 자동 저장",
            "실시간 채용 공고 목록 조회",
            "공고별 개인 면접 점수 확인 (이전 점수보다 높을 경우 갱신)",
            "AI 면접 진행 (공통 질문 + 공고 맞춤형 질문 + 이력서 기반 질문)",
            "AI '꼬리물기'를 통한 자연스러운 대화형 면접",
            "면접 종료 직후, 앱 내에서 즉시 채점 결과 및 피드백 확인",
          ],
        },
        {
          title: "채용 담당자 기능",
          items: [
            "모바일 앱을 통한 채용 공고 생성 및 S3 자동 저장",
            "공고별 실시간 면접 순위(랭킹) 확인 (DynamoDB 연동)",
            "랭킹 화면에서 지원자 선택 시, S3에 저장된 이력서 상세 내용 조회",
          ],
        },
        {
          title: "백엔드 및 AI (시스템 기능)",
          items: [
            "이벤트 기반 자동화 (S3 이벤트가 Lambda를 트리거)",
            "(Lambda) S3 공고 업로드 시, Bedrock을 호출하여 '공고 맞춤 질문' 자동 생성",
            "(EC2) 면접 시작 시, Bedrock을 호출하여 '이력서 기반 질문' 실시간 생성",
            "(Lambda) 면접 종료 시, Bedrock을 호출하여 'AI 종합 채점' 자동 수행",
            "채점 결과를 final_report.json (S3) 및 DynamoDB (랭킹용)에 동시 저장",
          ],
        },
      ],
    },
    {
      title: "음주운전 예방 어플",
      description:
        "실시간 알코올 측정 및 대리운전 연동 서비스를 제공하여 음주운전을 사전에 방지하는 모바일 애플리케이션",
      image: drinkingAppImage,
      tags: ["모바일 앱", "IoT", "사회공헌"],
      impact: "사용자 안전 의식 향상",
      period: "2024.09 ~ 2024.12",
      techStacks: {
        "모바일 애플리케이션 (App Development)": [
          "Android Studio (Java)",
          "Material Design Components",
          "Bluetooth 통신 (HC-05 모듈)",
        ],
        "백엔드 / 데이터 관리 (Backend & Cloud)": [
          "Firebase Authentication",
          "Firebase Realtime Database",
        ],
        "하드웨어 제어 (Embedded System)": [
          "Arduino IDE (C/C++)",
          "Arduino UNO 보드",
          "MQ-3 알코올 센서",
          "HC-05 Bluetooth 모듈",
          "SZH-ME001 음주 측정 키트",
        ],
        "위치 기반 서비스 (Location Service)": [
          "Kakao Map API",
        ],
      },
      features: [
        {
          title: "사용자 관리 기능",
          items: [
            "Firebase 기반 회원가입, 로그인, ID/PW 찾기 기능 구현",
            "회원가입 시 입력한 몸무게, 성별, 나이 정보를 기반으로 음주 측정 및 계산 기능 제공",
            "앱 내에서 개인정보(몸무게, 나이, 전화번호 등) 수정 가능",
            "이메일을 통한 비밀번호 재설정 기능 제공",
          ],
        },
        {
          title: "음주 측정 기능",
          items: [
            "MQ-3 알코올 센서로 사용자의 호흡 중 알코올 농도 감지",
            "측정값을 HC-05 Bluetooth를 통해 앱으로 전송",
            "앱 화면에서 실시간 혈중 알코올 농도(BAC) 표시",
          ],
        },
        {
          title: "음주량 계산 및 운전 가능 시간 안내",
          items: [
            "사용자가 입력한 음주 종료 시간과 운전 예정 시간을 바탕으로 권장 음주량을 계산하고 운전 가능 시간 자동 안내",
            "사용자 신체 정보를 활용한 맞춤형 음주 권장 알고리즘 적용",
          ],
        },
        {
          title: "음주 기록 관리 기능",
          items: [
            "매 측정 시 혈중 알코올 농도, 예상 분해 시간, 음주량 자동 저장",
            "'나의 음주 이력' 화면을 통해 과거 측정 기록 및 분석 결과 조회 가능",
            "Firebase Database를 통한 데이터 백업 및 지속 관리",
          ],
        },
        {
          title: "교통수단 안내 기능",
          items: [
            "Kakao Map API를 활용하여 근처 지하철 정보를 안내",
            "향후 설치형 하드웨어(술집·주차장 비치형)으로 확장하여 음주 후 안전 귀가를 유도하고 사회적 음주운전 예방 시스템으로 발전 가능",
          ],
        },
      ],
    },
    {
      title: "AI 무드등",
      description:
        "사용자의 감정 상태를 인식하여 최적의 조명 색상과 밝기를 자동으로 조절하는 스마트 무드등 시스템",
      image: aiMoodLampImage,
      tags: ["AI", "IoT", "하드웨어"],
      impact: "사용자 만족도 90% 이상",
      period: "2025.04 ~ 2025.08",
      techStacks: {
        "소프트웨어 (프론트엔드)": [
          "HTML / CSS / JavaScript",
          "React 기반 감성적 UI 및 UX 개선",
        ],
        "소프트웨어 (백엔드)": [
          "Python (Flask)",
          "Google Colab (AI 모델 학습 및 실험)",
          "Firebase (데이터 관리 및 사용자 인증)",
        ],
        "AI / 데이터 분석": [
          "OpenCV (이미지 인식, 감정 인식 기능 구현)",
          "TensorFlow / Keras (AI 모델 학습 및 감정 분석)",
          "NumPy, Pandas (데이터 처리)",
        ],
        "하드웨어 연동": [
          "Arduino",
          "Raspberry Pi",
          "Bluetooth Module",
          "LED 조명 모듈",
        ],
        "인공지능 모델": [
          "감정 인식(AI Emotion Recognition) 모델 - 사용자의 표정 데이터를 인식하여 감정 상태 분류",
        ],
      },
      features: [
        {
          title: "AI 감정 인식 시스템",
          items: [
            "카메라를 통해 사용자의 얼굴 표정을 분석",
            "AI 모델이 감정 상태(예: 행복, 슬픔, 분노 등)를 자동 분류",
          ],
        },
        {
          title: "감성 조명 제어",
          items: [
            "인식된 감정에 따라 LED 색상 자동 변경",
            "예: 슬플 때는 파란색, 기쁠 때는 노란색 조명",
          ],
        },
        {
          title: "블루투스 연동",
          items: [
            "블루투스를 통해 하드웨어 모듈 제어",
            "스마트폰 또는 PC에서 감정 데이터 전송 가능",
          ],
        },
        {
          title: "웹 기반 사용자 인터페이스(UI)",
          items: [
            "감정 상태를 실시간으로 시각화",
            "UI/UX를 개선하여 사용자 만족도 향상",
          ],
        },
        {
          title: "AI 학습 및 개선 기능",
          items: [
            "Google Colab 환경에서 지속적인 모델 학습",
            "사용자 데이터 기반 감정 인식 정확도 향상",
          ],
        },
        {
          title: "하드웨어 환경 구성",
          items: [
            "실제 '나만의 방'을 재현한 공간 구현",
            "조명, 감정 인식, 음악 등을 종합한 감성 환경",
          ],
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-100 to-indigo-200">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">주요 프로젝트</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              실제 비즈니스 임팩트를 만들어낸 대표 프로젝트들입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-indigo-200 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full border border-indigo-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-indigo-600">
                      <TrendingUp className="w-4 h-4" />
                      <span>{project.impact}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                      onClick={() => setSelectedProject(idx)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      보기
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject !== null && (
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {projects[selectedProject].title}
              </DialogTitle>
              <DialogDescription>
                {projects[selectedProject].description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <ImageWithFallback
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {projects[selectedProject].tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full border border-indigo-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-indigo-600">
                <TrendingUp className="w-4 h-4" />
                <span>{projects[selectedProject].impact}</span>
              </div>

              {(projects[selectedProject] as any).period && (
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-4 h-4" />
                    <span>{(projects[selectedProject] as any).period}</span>
                  </div>
                </div>
              )}

              {(projects[selectedProject] as any).techStacks && (
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-gray-900 mb-4">기술 스택</h4>
                  <div className="space-y-4">
                    {Object.entries((projects[selectedProject] as any).techStacks).map(
                      ([category, tools]: [string, any]) => (
                        <div key={category}>
                          <h5 className="text-indigo-600 mb-2">
                            {category}
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {tools.map((tool: string, toolIdx: number) => (
                              <span
                                key={toolIdx}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {(projects[selectedProject] as any).features && (
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-gray-900 mb-4">주요 기능</h4>
                  <div className="space-y-6">
                    {(projects[selectedProject] as any).features.map((feature: any, featureIdx: number) => (
                      <div key={featureIdx}>
                        <h5 className="text-indigo-600 mb-3">
                          {feature.title}
                        </h5>
                        <ul className="space-y-2">
                          {feature.items.map((item: string, itemIdx: number) => (
                            <li key={itemIdx} className="flex items-start gap-2">
                              <span className="text-indigo-500 mt-1">•</span>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}

function TrendingUp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      strokeWidth="2"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function Calendar({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      strokeWidth="2"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}