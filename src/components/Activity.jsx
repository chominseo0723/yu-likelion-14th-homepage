import React, { useEffect, useState } from "react";
import ActivityData from "../data/ActivityData";
import star from "../assets/star.svg";

const ActivityList = () => {
  const [clickedId, setClickedId] = useState(1);

  const activeIndex = ActivityData.findIndex((act) => act.id === clickedId);

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

        {ActivityData.map((act) => (
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
        {ActivityData.map((act) => {
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
