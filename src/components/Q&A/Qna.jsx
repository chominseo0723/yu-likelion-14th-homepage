import React from "react";
import light from "../../assets/light.svg";
import QnASection from "./QnASection";

const Qna = () => {
  return (
    <section className="flex flex-col">
      {/* 타이틀 영역 */}
      <div className="flex flex-col ml-52">
        <div className="flex flex-row items-center gap-4">
          <img src={light} alt="light" />
          <span
            className="font-normal text-[20px] bg-linear-to-r from-[#FF9000] to-[#FF5E00] 
                    bg-clip-text text-transparent
                    [-webkit-text-stroke:0.2px_#FFAE00]
                    [text-shadow:0_1.5px_1px_rgba(124,66,5,0.9)]
                    select-none"
          >
            Q&A
          </span>
        </div>

        <span className="text-[40px] text-[#C56908] font-bold mt-[27px]">
          멋사에 이런게 궁금해요!
        </span>
      </div>

      <div className="ml-138">
        <QnASection />
      </div>
    </section>
  );
};

export default Qna;
