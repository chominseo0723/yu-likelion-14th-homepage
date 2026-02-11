import React from "react";
import star from "../../assets/star.svg";
import QnASection from "./QnASection";

const Qna = () => {
  return (
   <section className="w-full bg-transparent flex flex-col items-center justify-center py-20 max-md:py-8 px-4 relative overflow-hidden font-pretendard mt-100 max-md:mt-50">
      <div className="w-full max-w-6xl">
        {/* 타이틀 */}
        <div className="w-full flex flex-col items-start mb-[56.97px] max-md:mb-6">
          <div className="flex flex-row items-center gap-5 max-md:gap-2">
            <img src={star} alt="star" className="max-md:w-3 max-md:h-3" />
            <span
              className="font-normal text-[20px] max-md:text-[14px] bg-linear-to-r from-[#FF9000] to-[#FF5E00] 
                        bg-clip-text text-transparent
                        [-webkit-text-stroke:0.2px_#FFAE00]
                        [text-shadow:0_1.5px_1px_rgba(124,66,5,0.9)]
                        select-none"
            >
              Q&A
            </span>
          </div>

          <span className="text-[40px] max-md:text-[20px] max-md:leading-[30px] text-[#C56908] font-bold mt-[27px] max-md:mt-2">
            멋사에 이런 게 궁금해요!
          </span>
        </div>

        {/* Q&A 내용 */}
        <div className="w-full">
          <QnASection />
        </div>
      </div>
    </section>
  );
};

export default Qna;