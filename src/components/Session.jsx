import React, { useState } from "react";
import SessionData from "../data/SessionData";
import star from "../assets/star.svg";

const SessionCard = ({ data, flippedId, setFlippedId }) => {
  const isFlipped = flippedId === data.id;

  return (
    <div
      className="group w-[310.667px] max-md:w-full max-md:max-w-[310px] h-[159px] max-w-sm [perspective:1000px] cursor-pointer"
      onClick={() => setFlippedId(isFlipped ? null : data.id)}
    >
      <div
        className={`relative w-full h-full transition-all duration-500 ease-out 
        [transform-style:preserve-3d] 
        group-hover:[transform:rotateY(180deg)]
        ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* 앞면 */}
        <div
          className={`absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[30px]
               bg-[linear-gradient(140deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.3)_17%,rgba(255,255,255,0.2)_28%,rgba(255,255,255,0.15)_36%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.25)_100%)]
               p-[1.5px] backdrop-blur-2xl shadow-lg overflow-hidden`}
        >
          <div
            className="w-full h-full rounded-[30px] overflow-hidden
                       bg-[linear-gradient(103deg,#333333_0%,#353533_17%,#333331_28%,#31312F_36%,#2D2D2B_46%,#2A2A28_59%,#282826_70%,#232321_100%)]
                       backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <div className="rounded-[30px] flex flex-col gap-[20px] max-md:gap-3 max-md:px-4">
              <p className="w-[261px] max-md:w-full h-[49.977px] max-md:h-auto flex items-center justify-center text-center font-bold text-[32px] max-md:text-[24px] text-white select-none pt-[25.01px] max-md:pt-0 whitespace-nowrap max-md:whitespace-normal max-md:break-all">
                {data.title1}
              </p>
              <p className="h-[50px] max-md:h-auto text-[#B4A69E] text-center text-[18px] max-md:text-[14px] font-normal leading-18 select-none">
                <span className="border-b border-b-[#B4A69E] pb-1">
                  교육과정 보러가기 {">>"}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* 뒷면 */}
        <div
          className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[30px]
             bg-[linear-gradient(103deg,#FF5E00_28.72%,#FF9000_97.77%)] flex flex-col items-center justify-center`}
          onClick={(e) => {
            e.stopPropagation();
            if (data.url) {
              window.open(data.url, "_blank");
            } else {
              alert("등록된 링크가 없습니다.");
            }
          }}
        >
          <div className="rounded-[30px] flex flex-col gap-[20px] max-md:gap-3 max-md:px-4">
            <p className="w-[261px] max-md:w-full h-[49.977px] max-md:h-auto flex items-center justify-center text-center font-bold text-[24px] max-md:text-[20px] text-black select-none whitespace-pre-line pt-[25.01px] max-md:pt-0 max-md:break-all">
              {data.subtitle}
            </p>
            <p className="h-[50px] max-md:h-auto text-[#7D3A13] text-center text-[18px] max-md:text-[14px] font-normal leading-18 border-b border-b-[#7D3A13] select-none">
              {data.title2} 보러가기 {">>"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Session = () => {
  const [flippedId, setFlippedId] = useState(null);

  return (
    <div className="min-h-screen w-full mx-auto bg-transparent flex flex-col items-center max-md:items-stretch justify-center py-20 max-md:py-10 px-4 relative overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col items-start mb-[56.97px] max-md:mb-8">
        <div className="flex flex-row items-center justify-start gap-4.75 max-md:gap-2">
          <img src={star} alt="star" className="max-md:w-4 max-md:h-4" />
          <p
            className="font-normal text-[20px] max-md:text-[20px] bg-linear-to-r from-[#FF9000] to-[#FF5E00] 
                    bg-clip-text text-transparent
                    [-webkit-text-stroke:0.2px_#FFAE00]
                    [text-shadow:0_1.5px_1px_rgba(124,66,5,0.9)]
                    select-none"
          >
            Session
          </p>
        </div>
        <p className="text-[#C56908] font-bold text-[40px] max-md:text-[24px] leading-[60px] max-md:leading-[36px]">
          교육과정이 궁금하다면?
        </p>
        <h3 className="text-white text-[20px] max-md:text-[16px] font-light whitespace-pre-line leading-[35px] max-md:leading-[28px] mt-[9.97px] max-md:mt-2 max-md:break-all">
          14기부터는! 중앙 멋사에서 내려오는 PBL 자료가 제공돼요!
          <br />
          운영진들이 직접 만든 맞춤 수업자료와 커리큘럼, 퀄리티 있는 PBL 자료를
          제공받을 수 있어요!
        </h3>
      </div>

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-x-13.5 gap-y-12.5 max-md:gap-4 w-full h-full max-w-7xl relative z-10 items-center max-md:justify-items-center">
        {SessionData.map((card) => (
          <SessionCard
            key={card.id}
            data={card}
            flippedId={flippedId}
            setFlippedId={setFlippedId}
          />
        ))}
      </div>
    </div>
  );
};

export default Session;
