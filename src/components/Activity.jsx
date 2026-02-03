import React, { useEffect, useState } from "react";
import star from "../assets/star.svg";
import act1 from "../assets/activites/active1.svg";
import act2 from "../assets/activites/active2.svg";
import act3 from "../assets/activites/active3.svg";
import act4 from "../assets/activites/active4.svg";
import act5 from "../assets/activites/active5.svg";
import act6 from "../assets/activites/active6.svg";
import act7 from "../assets/activites/active7.svg";
import act8 from "../assets/activites/active8.svg";
import act9 from "../assets/activites/active9.svg";

const ActivityList = () => {
  const [clickedId, setClickedId] = useState(1);

  const activities = [
    {
      id: 1,
      title: "OT",
      description1: "멋쟁이사자처럼의 시작을 여는 첫 만남입니다.",
      description2:
        "동아리 소개와 활동 일정, 커리큘럼 안내를 통해 앞으로 어떤 활동을 하게 될지 함께 알아갑니다.\n또한 운영진과 아기사자들이 처음으로 인사를 나누며 14기를 함께할 준비를 하는 시간입니다.",
      img: act1,
    },
    {
      id: 2,
      title: "공통세션",
      description1: "모든 파트가 함께 참여하는 전체 교육 세션입니다.",
      description2:
        "아이데이션, 기획 흐름, 협업 방식 등 모든 파트에 공통으로 필요한 내용을 중심으로 진행됩니다.\n공통세션 이후 각 파트별 교육이 본격적으로 시작됩니다.",
      img: act2,
    },
    {
      id: 3,
      title: "친해지길 바래",
      description1: "멋사에서의 첫 팀워크를 만들어가는 시간입니다.",
      description2:
        "해커톤과 아이디어톤 등 협업 활동에 앞서 팀원들과 편안하게 어울리며 서로를 알아갑니다.\n팀워크 형성과 소통을 목표로 진행되는 시간입니다.",
      img: act3,
    },
    {
      id: 4,
      title: "파트별 세션",
      description1: "각 분야에 맞춰 진행되는 심화 교육 세션입니다.",
      description2:
        "기획·디자인(P&D), 프론트엔드(FE), 백엔드(BE)로 나뉘어 각 파트에 필요한 기술과 개념을 집중적으로 학습합니다.\n이후 해커톤과 아이디어톤의 기반이 되는 세션입니다.",
      img: act4,
    },
    {
      id: 5,
      title: "아이디어톤",
      description1: "정해진 주제에 맞춰 서비스 아이디어를 제안하는 대회입니다.",
      description2:
        "1차 예선은 각 학교 단위로 진행되며, 2차 예선은 권역별 아이디어톤을 통해 심사가 이루어집니다.\n이후 최종 선발된 팀은 중앙 아이디어톤 본선에 진출하게 됩니다.",
      img: act5,
    },
    {
      id: 6,
      title: "기획 특강",
      description1: "서비스 기획의 기초를 배우는 수업입니다.",
      description2:
        "모든 파트가 함께 참여해 서비스 기획의 전체 흐름을 이해하고, ‘좋은 문제’를 정의하는 방법을 중심으로 수업이 진행됩니다. 기획자뿐 아니라 개발자와 디자이너 모두가 AI 시대에 필요한 기획 역량을 기를 수 있도록 설계된 특강입니다.",
      img: act6,
    },
    {
      id: 7,
      title: "AI 특강",
      description1:
        "빠르게 변화하는 AI 기술을 이해하고, 이를 도구로 활용하는 법을 배우는 특별 세션입니다.",
      description2:
        "현업에서 주목받는 AI 기술 사례를 분석하고 직접 다뤄보며 막막했던 AI 분야에 첫발을 내딛고, 더 넓은 시야를 가진 아기사자로 거듭날 수 있습니다.",
      img: act7,
    },
    {
      id: 8,
      title: "중앙 해커톤",
      description1:
        "전국의 멋사대학이 참여하는 멋쟁이사자처럼 대학의 꽃, 국내 최대 규모의 무박 2일 해커톤 행사입니다.",
      description2:
        "기획부터 개발, 발표까지 전 과정을 팀 단위로 수행하며 짧은 시간 안에 완성도 있는 하나의 서비스를 만들어냅니다. 전국의 아기사자들과 함께 성장과 도전을 경험할 수 있습니다.",
      img: act8,
    },
    {
      id: 9,
      title: "연합 / 기업 해커톤",
      description1: "2학기에 다양한 해커톤을 경험해보세요!",
      description2:
        "연합 해커톤 : 학교의 울타리를 넘어, 권역별 해커톤을 스스로 기획하고 참여합니다.\n기업 해커톤 : 기업의 문제를 해결하는 솔루션을 개발하고 협업합니다.",
      img: act9,
    },
  ];

  const activeIndex = activities.findIndex((act) => act.id === clickedId);

  return (
    <div className="flex flex-row items-start gap-[64px]">
      {/* 활동 목록 */}
      <div className="flex flex-col gap-[25px] relative">
        <div
          className="absolute left-0 w-[386px] h-[40px] rounded-[30px] p-[0.5px] backdrop-blur-2xl transition-all duration-600 ease-[cubic-bezier(0.34,1.4,0.5,1.02)] z-0
                     bg-[linear-gradient(160deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.3)_17%,rgba(255,255,255,0.2)_28%,rgba(255,255,255,0.15)_36%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.25)_100%)]"
          style={{ transform: `translateY(${activeIndex * (40 + 25)}px)` }}
        >
          <div className="w-full h-full rounded-[30px] bg-[linear-gradient(160deg,#261F19_0%,#2B251C_17%,#27221C_38%,#27211B_56%,#27221C_86%,#2B251C_100%)]"></div>
        </div>

        {activities.map((act) => (
          <div
            key={act.id}
            onClick={() => setClickedId(act.id)}
            className="relatiive z-10 w-[386px] h-[40px] flex items-center pl-5 cursor-pointer transition-transform duration-300"
          >
            <div className="flex flex-row items-center gap-[62px]">
              <div
                className={`text-[20px] select-none text-right transition-colors duration-300
                            ${
                              clickedId === act.id
                                ? "text-[#B0701C]"
                                : "text-[#B4A69E]"
                            }
                `}
              >
                0{act.id}
              </div>
              <div
                className={`text-[30px] select-none transition-colors duration-300
                            ${
                              clickedId === act.id
                                ? "font-black bg-gradient-to-r from-[#FF9000] to-[#FF5E00] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(255,255,255,0.145)]"
                                : "text-white"
                            }
                `}
              >
                {act.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 활동 상세 */}
      <div className="flex flex-col relative min-h-[580px] w-[596px]">
        {activities.map((act) => {
          const isActive = clickedId === act.id;

          return (
            <div
              key={act.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform
                          ${
                            isActive
                              ? "opacity-100 z-10 scale-100 pointer-events-auto"
                              : "opacity-0 z-0 scale-95 pointer-events-none"
                          }
                    `}
            >
              {/* 이미지 컴포넌트 */}
              <div className="overflow-hidden rounded-[30px]">
                <img
                  src={act.img}
                  alt={act.title}
                  className={`max-w-full h-auto rounded-[20px] transition-all ease-in-out duration-700`}
                />
              </div>

              {/* 상세 컴포넌트 */}
              <div
                className={`absolute w-[532px] h-[288px] top-73 left-15 rounded-[30px] p-[0.5px] backdrop-blur-[3px] transition-all ease-in-out duration-700
                              ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
                              bg-[linear-gradient(160deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.3)_17%,rgba(255,255,255,0.2)_28%,rgba(255,255,255,0.15)_36%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.25)_100%)]`}
              >
                <div className="w-full h-full px-[30px] pt-[59px] pb-[10px] whitespace-pre-line bg-[linear-gradient(160deg,rgba(76,49,3,0.7)_0%,rgba(68,43,6,0.5)_17%,rgba(78,49,6,0.8)_38%,rgba(64,40,5,0.4)_56%,rgba(77,41,6,0.7)_86%,rgba(80,40,6,0.6)_100%)] rounded-[30px] self-stretch">
                  <p className="text-[20px] font-bold text-white mb-2">
                    {act.description1}
                  </p>
                  <p className="flex items-center w-[472px] h-[140px] text-[20px] font-normal text-white leading-relaxed">
                    {act.description2}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Activity = () => {
  return (
    <div className="min-h-screen w-full bg-transparent flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col items-start mb-[62.53px]">
        <div className="flex flex-row items-center justify-center gap-4.75">
          <img src={star} alt="star" className="w-[19.7] h-[19.7]" />
          <p
            className="font-normal text-[20px] bg-linear-to-r from-[#FF9000] to-[#FF5E00] 
                              bg-clip-text text-transparent
                              [-webkit-text-stroke:0.2px_#FFAE00]
                              [text-shadow:0_1.5px_1px_rgba(124,66,5,0.9)]
                              select-none
                    "
          >
            Activity
          </p>
        </div>
        <p className="text-[#C56908] text-[40px] font-semibold">
          멋사는 이런 활동을 해요
        </p>
      </div>
      <div className="w-[1046px] h-auto">
        <ActivityList />
      </div>
    </div>
  );
};

export default Activity;
