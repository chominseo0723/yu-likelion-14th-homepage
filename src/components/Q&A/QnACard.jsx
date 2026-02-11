import React, { useState, useEffect } from "react";
import {
  qnaQuestionOpenStyle,
  qnaQuestionClosedStyle,
  qnaAnswerStyle,
} from "../../styles/typography";

const QnACard = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const qnaQuestionClosedStyleMobile = {
    ...qnaQuestionClosedStyle,
    fontSize: "13px",
    lineHeight: "24px",
  };

  const qnaQuestionOpenStyleMobile = {
    ...qnaQuestionOpenStyle,
    fontSize: "13px",
    lineHeight: "24px",
  };

  const qnaAnswerStyleMobile = {
    ...qnaAnswerStyle,
    fontSize: "12px",
    lineHeight: "24px",
  };

  return (
    <div className="w-full sm:w-96 md:w-[500px] lg:w-175 mb-6 max-md:mb-5 font-pretendard max-w-[90vw]">
      {/* Q */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`
          glass-qna
          w-full text-left
          px-6 max-md:px-3 py-6 max-md:py-3
          flex items-center justify-between
          transition-all duration-200
          ${isOpen ? "rounded-t-[30px] max-md:rounded-t-[20px] rounded-b-none" : "rounded-[30px] max-md:rounded-[20px]"}
        `}
      >
        <span
          className={`max-md:break-all ${
            isOpen
              ? "bg-[linear-gradient(90deg,#FF9000_0%,#FF5E00_100%)] bg-clip-text text-transparent"
              : "text-white"
          }`}
          style={
            isMobile
              ? isOpen
                ? qnaQuestionOpenStyleMobile
                : qnaQuestionClosedStyleMobile
              : isOpen
                ? qnaQuestionOpenStyle
                : qnaQuestionClosedStyle
          }
        >
          Q. {q}
        </span>
      </button>

      {/* A */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className="
            glass-qna
            px-7 max-md:px-3 pt-[18.5px] pb-[17.38px] max-md:py-3
            rounded-b-[30px] max-md:rounded-b-[20px]
            border-t-0
          "
        >
          <div
            className="leading-[40px] tracking-[-0.72px] whitespace-pre-line pl-[1em] -indent-[1em] max-md:break-all"
            style={
              isMobile
                ? { ...qnaAnswerStyleMobile, color: "#FFFFFF" }
                : { ...qnaAnswerStyle, color: "#FFFFFF" }
            }
          >
            {a}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnACard;
