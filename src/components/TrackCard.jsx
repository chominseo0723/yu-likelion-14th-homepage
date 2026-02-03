import React, { useState } from "react";
import TrackData from "../data/TrackData.jsx";
import star from "../assets/star.svg";

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
            Track
          </p>
        </div>
        <p className="text-[#C56908] text-[40px] font-semibold">
          3가지의 트랙이 있어요!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full max-w-7xl relative z-10 place-items-center">
        {TrackData.map((card) => (
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
