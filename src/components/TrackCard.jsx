import React, { useState } from "react";
import bgLogo from "../assets/BE.svg";
import feLogo from "../assets/FE.svg";
import pndLogo from "../assets/P&D.svg";
import light from "../assets/light.svg";

const Card = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group w-[326.333px] h-[372px] max-w-sm [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-all duration-500 ease-out [transform-style:preserve-3d] shadow-xl rounded-[30px]
            ${isFlipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(15deg)]"}`}
      >
        {/* 앞면 */}
        <div
          className={`absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[30px]
               bg-[linear-gradient(110deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.3)_17%,rgba(255,255,255,0.2)_28%,rgba(255,255,255,0.15)_36%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.25)_100%)]
               p-[0.5px] backdrop-blur-2xl shadow-lg overflow-hidden`}
        >
          <div
            className="relative w-full h-full rounded-[30px] overflow-hidden
             bg-[linear-gradient(140deg,#261F19_0%,#2B251C_17%,#27221C_38%,#27211B_56%,#27221C_86%,#2B251C_100%)]
            backdrop-blur-2xl flex flex-col items-center justify-between
          "
          >
            {/* 세션별 이미지 */}
            <img
              src={data.image}
              alt={data.title}
              className="relative w-[379.87px] h-[169.94px] scale-122 pointer-events-none select-none mt-[65.13px]"
            />
            <p className="relative w-full pr-[21.58px] text-right text-[24px] font-bold text-white select-none mb-[20.96px]">
              {data.subtitle}
            </p>
          </div>
        </div>

        {/* 뒷면 */}
        <div
          className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[30px]
               bg-[linear-gradient(110deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.3)_17%,rgba(255,255,255,0.2)_28%,rgba(255,255,255,0.15)_36%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.25)_100%)]
               p-[0.5px] backdrop-blur-2xl shadow-lg overflow-hidden`}
        >
          <div
            className="relative w-full h-full rounded-[30px] overflow-hidden
              bg-[linear-gradient(180deg,#FFAE00_0%,#FF5E00_100%)]
              flex flex-col items-center justify-between
          "
          >
            {/* 세션별 이미지 */}
            <img
              src={data.image}
              alt={data.title}
              className="relative w-[379.87px] h-[169.94px] scale-122 pointer-events-none select-none mt-[65.13px]"
            />
            <p className="relative w-full pr-[21.58px] text-right text-[24px] font-bold text-black select-none mb-[20.96px]">
              {data.subtitle}
            </p>

            {/* 설명 */}
            <div
              className="absolute top-[15px] left-[24.65px] inset-0 w-[277.033px] h-[291px] rounded-[30px]
              bg-[linear-gradient(110deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.2)_2%,rgba(255,255,255,0.1)_17%,rgba(255,255,255,0.11)_28%,rgba(255,255,255,0.15)_36%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_100%)]
              p-[0.5px] backdrop-blur-[1.5px] overflow-hidden flex items-center"
            >
              <div className="relative w-full h-full rounded-[30px] bg-transparent px-[18px] bg-transparent ">
                <div className="flex flex-col pt-[28px] pb-[13px] gap-5 w-full text-black text-[16px] text-left font-semibold leading-relaxed break-keep whitespace-pre-line tracking-[-0.4px] select-none">
                  <p>{data.description1}</p>
                  <p>{data.description2}</p>
                  <p>{data.description3}</p>
                </div>
              </div>
            </div>
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
        "Spring Boot를 중심으로 REST API 개발부터 배포, 인프라 기초까지 단계적으로 학습합니다.",
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
        "P&D는 서비스 기획과 UI/UX 디자인을\n 통해 프로젝트의 방향을 설계하는 트랙 입니다.",
      description2:
        "사용자 관점에서 문제를 정의하고,\n개발자와 협업하며 아이디어를 실제 서비스로 구체화합니다.",
      description3: "기획부터 디자인, 협업까지 전 과정을 경험합니다.",
      image: pndLogo,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-transparent flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col items-start mb-[62.53px]">
        <div className="flex flex-row items-center justify-center gap-4.75">
          <img src={light} alt="light" className="w-[19.7] h-[19.7]" />
          <p
            className="font-normal text-[20px] bg-linear-to-r from-[#FF9000] to-[#FF5E00] 
                            bg-clip-text text-transparent
                            [-webkit-text-stroke:0.2px_#FFAE00]
                            [text-shadow:0_1.5px_1px_rgba(124,66,5,0.9)]
                            select-none
                  "
          >
            Track
          </p>
        </div>
        <p className="text-[#C56908] text-[40px] font-semibold">
          3가지의 트랙이 있어요!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full max-w-7xl relative z-10 place-items-center">
        {cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
      <div>
        <p className="text-[#87725F] text-xl mt-[62.53px] z-10 relative">
          궁금한 트랙부터 눌러서 확인해보세요!
        </p>
      </div>
    </div>
  );
};

export default TrackCard;
