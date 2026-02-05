import React from "react";
import SessionData from "../data/SessionData";
import star from "../assets/star.svg";

const SessionCard = ({ data }) => {
  return (
    <div className="group w-[310.667px] h-[159px] max-w-sm [perspective:1000px] cursor-pointer">
      <div className="relative w-full h-full transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* 앞면 */}
        <div
          className={`absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[30px]
               bg-[linear-gradient(140deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.3)_17%,rgba(255,255,255,0.2)_28%,rgba(255,255,255,0.15)_36%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.25)_100%)]
               p-[1.5px] backdrop-blur-2xl shadow-lg overflow-hidden`}
        >
          <div
            className="w-full h-full rounded-[30px] overflow-hidden
            bg-[linear-gradient(103deg,#333333_0%,#353533_17%,#333331_28%,#31312F_36%,#2D2D2B_46%,#2A2A28_59%,#282826_70%,#232321_100%)]
            backdrop-blur-2xl flex flex-col items-center gap-7 justify-center
          "
          >
            <p className="flex justify-center items-center w-full text-[32px] font-bold text-white select-none">
              {data.title1}
            </p>
            <a
              href="#_"
              className="text-[18px] text-[#B4A69E] leading-5 border-b border-b-[#B4A69E] select-none"
            >
              교육과정 보러가기 {">>"}
            </a>
          </div>
        </div>
        {/* 뒷면 */}
        <div
          className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[30px]
             bg-[linear-gradient(103deg,#FF5E00_28.72%,#FF9000_97.77%)] flex flex-col items-center justify-center`}
          onClick={() => {
            if (data.url) {
              window.open(data.url, "_blank");
            } else {
              alert("등록된 링크가 없습니다.");
            }
          }}
        >
          <div className="rounded-[30px] flex flex-col gap-[20px]">
            <p className="w-[261px] h-[49.977px] flex items-center justify-center text-center font-bold text-[24px] text-black select-none whitespace-pre-line pt-[25.01px]">
              {data.subtitle}
            </p>
            <p className="h-[50px] text-[#7D3A13] text-center text-[18px] font-normal leading-18 border-b border-b-[#7D3A13] select-none">
              {data.title2} 보러가기 {">>"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Session = () => {
  return (
    <div className="min-h-screen w-full max-w-6xl bg-transparent flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      <div className="w-full flex flex-col items-start mb-[56.97px]">
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
            Session
          </p>
        </div>
        <p className="text-[#C56908] font-bold text-[40px]">
          교육과정이 궁금하다면?
        </p>
        <h3 className="text-white text-[20px] font-light whitespace-pre-line">
          14기 부터는! 중앙 멋사에서 내려오는 PBL 자료가 제공돼요!
          <br />
          운영진들이 직접 만든 맞춤 수업자료와 커리큘럼, 퀄리티 있는 공식
          PBL자료를 제공받을 수 있어요!
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-x-13.5 gap-y-12.5 w-full h-full max-w-7xl relative z-10">
        {SessionData.map((card) => (
          <SessionCard key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
};

export default Session;
