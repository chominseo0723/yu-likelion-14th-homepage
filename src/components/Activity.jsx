import React, { useEffect, useState } from "react";
import ActivityData from "../data/ActivityData";
import star from "../assets/star.svg";

const ActivityListMobile = () => {
  const [clickedId, setClickedId] = useState(1);

  const getMobileDescription = (act) => {
    if (act.id === 4) {
      return {
        description1: act.description1,
        description2:
          "기획·디자인(P&D), 프론트엔드(FE), 백엔드(BE)\n로 나뉘어 각 파트에 필요한 기술과 개념을 집중적으로 학습\n합니다.\n이후 해커톤과 아이디어톤의 기반이 되는 세션입니다.",
      };
    }

    if (act.id === 7) {
      return {
        description1:
          "빠르게 변화하는 AI 기술을 이해하고, 이를 도구로 활용하는 법을 배우는 특별 세션입니다.",
        description2: act.description2,
      };
    }

    return {
      description1: act.description1,
      description2: act.description2,
    };
  };

  return (
    <div className="flex flex-col w-full gap-4">
      {ActivityData.map((act) => {
        const isActive = clickedId === act.id;
        
        const mobileDescription = getMobileDescription(act);

        return (
          <div key={act.id} className="w-full">
            {/* Activity Item */}
            <div
              onClick={() => setClickedId(act.id)}
              className={`relative z-10 w-full h-[40px] flex items-center pl-3 cursor-pointer transition-all duration-300 rounded-[30px]
                ${isActive ? 'glass-event' : ''}`}
            >
              <div className="flex flex-row items-center gap-4">
                <div
                  className={`text-[16px] select-none text-right transition-colors duration-300
                              ${isActive ? "text-[#B0701C]" : "text-[#B4A69E]"}`}
                >
                  0{act.id}
                </div>
                <div
                  className={`text-[20px] select-none transition-colors duration-300
                              ${isActive
                                  ? "font-black bg-gradient-to-r from-[#FF9000] to-[#FF5E00] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(255,255,255,0.145)]"
                                  : "text-white"}`}
                >
                  {act.title}
                </div>
              </div>
            </div>
            
            <div
              className={`w-full mt-4 overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-out
                ${isActive
                  ? "max-h-[1200px] opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"}`}
            >
              <div className="overflow-hidden rounded-[20px] mb-4">
                <img
                  src={act.img}
                  alt={act.title}
                  className="w-full h-auto rounded-[20px]"
                />
              </div>
              
              <div className="w-full rounded-[20px] p-5 glass glass-main">
                <p className="text-[16px] font-[700] leading-[28px] text-white mb-2 whitespace-pre-line break-all">
                  {mobileDescription.description1}
                </p>
                <p className="text-[16px] font-[400] leading-[28px] text-white whitespace-pre-line break-all">
                  {mobileDescription.description2}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ActivityListDesktop = () => {
  const [clickedId, setClickedId] = useState(1);

  const activeIndex = ActivityData.findIndex((act) => act.id === clickedId);

  return (
    <div className="flex flex-row items-start gap-[64px]">
      {/* 활동 목록 */}
      <div className="flex flex-col gap-[25px] relative">
        <div
          className="absolute left-0 w-[386px] h-[40px] rounded-[30px] p-[0.5px] backdrop-blur-2xl transition-all duration-600 ease-[cubic-bezier(0.34,1.4,0.5,1.02)] z-0"
          style={{ transform: `translateY(${activeIndex * (40 + 25)}px)` }}
        >
          <div className="w-full h-full rounded-[30px] glass-event"></div>
        </div>

        {ActivityData.map((act) => (
          <div
            key={act.id}
            onClick={() => setClickedId(act.id)}
            className="relatiive z-10 w-[386px] h-[40px] flex items-center pl-5 cursor-pointer transition-transform duration-300"
          >
            <div className="flex flex-row items-center gap-[62px]">
              <div
                className={`text-[20px] select-none text-right transition-colors duration-300
                            ${clickedId === act.id ? "text-[#B0701C]" : "text-[#B4A69E]"}`}
              >
                0{act.id}
              </div>
              <div
                className={`text-[30px] select-none transition-colors duration-300
                            ${clickedId === act.id
                                ? "font-black bg-gradient-to-r from-[#FF9000] to-[#FF5E00] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(255,255,255,0.145)]"
                                : "text-white"}`}
              >
                {act.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 활동 상세 */}
      <div className="flex flex-col relative min-h-[580px] w-[596px]">
        {ActivityData.map((act) => {
          const isActive = clickedId === act.id;

          return (
            <div
              key={act.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform
                          ${isActive
                              ? "opacity-100 z-10 scale-100 pointer-events-auto"
                              : "opacity-0 z-0 scale-95 pointer-events-none"}`}
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
                              bg-transparent`}
              >
                <div className="w-full h-full px-[30px] pt-[59px] pb-[10px] glass glass-main rounded-[30px] self-stretch">
                  <p className="w-[472px] min-h-[35px] text-[20px] font-[700] leading-[35px] text-white mb-2 whitespace-pre-line">
                    {act.description1}
                  </p>
                  <p className="w-[472px] min-h-[140px] text-[20px] font-[400] leading-[35px] text-white whitespace-pre-line">
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen w-full bg-transparent flex flex-col items-center justify-center py-20 max-md:py-10 px-4 relative overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col items-start mb-[62.53px] max-md:mb-8">
        <div className="flex flex-row items-center justify-start gap-4.75 max-md:gap-2 max-md:pl-0">
          <img src={star} alt="star" className="max-md:w-4 max-md:h-4" />
          <p
            className="font-normal text-[20px] max-md:text-[20px] bg-linear-to-r from-[#FF9000] to-[#FF5E00] 
                              bg-clip-text text-transparent
                              [-webkit-text-stroke:0.2px_#FFAE00]
                              [text-shadow:0_1.5px_1px_rgba(124,66,5,0.9)]
                              select-none
                    "
          >
            Activity
          </p>
        </div>
        <p className="text-[#C56908] text-[40px] max-md:text-[24px] font-semibold">
          멋사는 이런 활동을 해요
        </p>
      </div>
      <div className="w-[1046px] max-md:w-full h-auto">
        {isMobile ? <ActivityListMobile /> : <ActivityListDesktop />}
      </div>
    </div>
  );
};

export default Activity;