import React from "react";
import bgLogo from "../assets/BE.svg";
import feLogo from "../assets/FE.svg";
import pndLogo from "../assets/P&D.svg";
import light from "../assets/light.svg";

const Card = ({ data }) => {
  return (
    <div className="group w-110 h-109 max-w-sm [perspective:1000px] cursor-pointer">
      <div className="relative w-full h-full transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-]">
        {/* 앞면 */}
        <div
          className={`absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[2.5rem] 
               bg-[linear-gradient(140deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.1)_5%,rgba(255,255,255,0.05)_10%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.04)_90%,rgba(255,255,255,0.09)_95%,rgba(255,255,255,0.6)_100%)]
               p-[1.5px] backdrop-blur-2xl shadow-lg overflow-hidden`}
        >
          <div
            className="relative w-full h-full rounded-[2.5rem] overflow-hidden
            bg-[linear-gradient(140deg,#261F19_0%,#2B251C_17%,#27221C_38%,#27211B_56%,#27221C_86%,#2B251C_100%)]
            backdrop-blur-2xl flex flex-col items-center justify-center
          "
          >
            {/* 세션별 이미지 */}
            <img
              src={data.image}
              alt={data.title}
              className="relative bottom-3 w-full h-full scale-125 pointer-events-none brightness-100 select-none"
            />
            <p className="w-full pr-6 text-right text-3xl font-bold mb-8 text-white select-none">
              {data.subtitle}
            </p>
          </div>
        </div>

        {/* 뒷면 */}
        <div
          className={`absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2.5rem] 
             bg-[linear-gradient(140deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_5%,rgba(255,255,255,0.05)_10%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.04)_90%,rgba(255,255,255,0.09)_95%,rgba(255,255,255,0)_100%)]
             p-[1.5px] backdrop-blur-2xl shadow-lg overflow-hidden flex flex-col items-center justify-center text-slate-800`}
        >
          <div
            className="relative w-full h-full rounded-[2.5rem] overflow-hidden
            bg-[linear-gradient(180deg,#FFAE00_0%,#FF5E00_100%)]
            flex flex-col items-center justify-center
          "
          >
            {/* 세션별 이미지 */}
            <img
              src={data.image}
              alt={data.title}
              className="relative bottom-11 w-full h-full scale-125 pointer-events-none select-none"
            />
            <div
              className={`absolute flex justify-center items-center h-full w-full pt-7 pb-20 px-8`}
            >
              <div
                className="w-full h-full border border-amber-100/25 rounded-[2rem] overflow-hidden
                    bg-[linear-gradient(140deg,rgba(255,255,255,0.1)_0.4%,rgba(255,255,255,0.4)_0.9%,rgba(255,255,255,0.2)_10%,rgba(255,255,255,0.05)_15%,rgba(255,255,255,0)_25%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.02)_95%,rgba(255,255,255,0.03)_100%)]
                    p-[1.5px] backdrop-blur-xs
              "
              >
                <div className="flex flex-col justify-center items-start gap-6 w-full px-5 py-5 text-black text-[17px] text-left font-semibold leading-relaxed break-keep whitespace-pre-line tracking-[-0.4px] select-none">
                  <p>{data.description1}</p>
                  <p>{data.description2}</p>
                  <p>{data.description3}</p>
                </div>
              </div>
            </div>
            <p className="w-full pr-6 text-right text-3xl font-bold mb-8 text-black select-none">
              {data.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrackCard = () => {
  const cards = [
    {
      id: 1,
      title: "BE",
      subtitle: "Backend",
      description1:
        "Backend는 서비스의 핵심 로직과 데이터를 책임지는 트랙입니다.",
      description2:
        "API, 서버 구조, 데이터베이스를 설계하고 안정적인 서비스 운영 환경을 구축합니다.",
      description3:
        "Spring Boot를 중심으로 REST API 개발부터 배포, 인프라 기초까지\n단계적으로 학습합니다.",
      image: bgLogo,
    },
    {
      id: 2,
      title: "FE",
      subtitle: "Frontend",
      description1:
        "Frontend는 사용자가 만나는 화면과 인터페이스를 구현하는 트랙입니다.",
      description2:
        "기획•디자인을 바탕으로 UI/UX를\n코드로 옮기고, 백엔드와 연동해\n실제 기능을 완성합니다.",
      description3:
        "React를 중심으로 컴포넌트 설계부터\n 상태 관리, API 통신까지 단계적으로 학습합니다.",
      image: feLogo,
    },
    {
      id: 3,
      title: "P&D",
      subtitle: "Planning & Design",
      description1:
        "P&D는 서비스 기획과 UI/UX 디자인을\n 통해 프로젝트의 방향을 설계하는 트랙\n입니다.",
      description2:
        "사용자 관점에서 문제를 정의하고,\n개발자와 협업하며 아이디어를 실제 서비스로 구체화합니다.",
      description3: "기획부터 디자인, 협업까지 전 과정을 경험합니다.",
      image: pndLogo,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-transparent flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col items-start mb-13 gap-4 z-10">
        <div className="flex flex-row items-center gap-4">
          <img src={light} alt="light" className="w-10 h-10" />
          <p
            className="font-semibold text-xl bg-linear-to-r from-[#FF9000] to-[#FF5E00] 
                    bg-clip-text text-transparent
                    /* 1. 외곽선 추가 (두께와 색상) */
                    [-webkit-text-stroke:0.3px_#FFAE00] 
                    /* 2. 내부 입체 감을 위한 그림자 (x, y, blur, color) */
                    [text-shadow:0_1px_1px_rgba(124,66,5,0.5)]
          "
          >
            Track
          </p>
        </div>
        <p className="text-[#C56908] font-semibold text-4xl">
          3가지의 트랙이 있어요!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 w-full max-w-7xl relative z-10 place-items-center">
        {cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
      <div>
        <p className="text-[#87725F] text-xl mt-16 z-10 relative animate-bounce duration-initial">
          궁금한 트랙부터 눌러서 확인해보세요!
        </p>
      </div>
    </div>
  );
};

export default TrackCard;
