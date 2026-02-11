import React, { useState, useEffect } from "react";
import star from "../../assets/star.svg";
import { mediumStyle, titleStyle } from "../../styles/typography";
import QnACard from "../Q&A/QnACard";
import { QNA_DATA } from "../../data/qnaData";
import Time from "../Q&A/Time";
import akar from "../../assets/akar-icons_arrow-back.svg";
import instagram from "../../assets/instagram-logo.svg";
import kakao from "../../assets/kakao-talk_logo.svg";

const sectionLabelStyle = {
  ...mediumStyle,
  fontSize: "20px",
  fontStyle: "normal",
  background: "linear-gradient(180deg, #FFAF01, #BE781D 0%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  WebkitTextStrokeWidth: "0.1px",
  WebkitTextStrokeColor: "#FFAF01",
  textShadow: "0 4px 1.8px #00000080",
};

const RecruitQnaSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const qnaList = QNA_DATA["주요"] || [];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const titleStyleMobile = {
    ...titleStyle,
    fontSize: "24px",
    lineHeight: "36px",
  };

  const titleStyleDesktop = {
    ...titleStyle,
    fontSize: "40px",
    lineHeight: "60px",
  };

  return (
    <section
      className="relative w-full px-4 sm:px-8 md:px-12 lg:px-[200px] pb-[16vh] box-border"
      style={{ overflow: "visible" }}
    >
      <div className="relative w-full max-w-[1040px] mx-auto">
        <div className="flex w-full max-w-[632.6772px] h-[35.6772px] items-center gap-[19px] max-md:gap-2 text-left pt-[19vh] max-md:pt-12">
          <img src={star} alt="star" className="max-md:w-4 max-md:h-4" />
          <span className="max-md:text-[20px]" style={sectionLabelStyle}>
            Q&A
          </span>
        </div>
        <div className="mt-[27.16px] max-md:mt-4">
          <p
            className="w-full max-w-[598px] h-[60px] max-md:h-auto m-0"
            style={isMobile ? titleStyleMobile : titleStyleDesktop}
          >
            멋사에 이런게 궁금해요!
          </p>
        </div>

        <div className="flex flex-col items-center mt-[87.76px] max-md:mt-8">
          {qnaList.map((item, idx) => (
            <QnACard key={idx} q={item.q} a={item.a} />
          ))}

          <span className="text-[20px] max-md:text-[14px] text-[#87725F] pl-46 max-md:pl-0 max-md:text-center mt-[26px] max-md:mt-4">
            추가로 궁금한 점이 있다면 디엠과 오픈채팅방으로 문의하세요
          </span>
          <div className="flex flex-row mt-3 max-md:mt-2 gap-4 max-md:gap-3 pl-120 max-md:pl-30 items-center max-md:justify-center">
            <img src={akar} alt="" className="max-md:w-5 max-md:h-5" />
            <a
              href="https://www.instagram.com/likelion_yu/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-contact-warm group relative flex items-center justify-center w-[50px] h-[50px] max-md:w-[40px] max-md:h-[40px] rounded-full transition-all duration-300 hover:scale-105 active:scale-95 [WebkitTouchCallout:none] select-none"
            >
              <img
                src={instagram}
                alt="멋쟁이사자처럼 영남대 인스타그램"
                className="w-[24px] h-[24px] max-md:w-[20px] max-md:h-[20px]"
              />
            </a>
            <a
              href="https://open.kakao.com/o/sDw4nwdi"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-contact-warm group relative flex items-center justify-center w-[50px] h-[50px] max-md:w-[40px] max-md:h-[40px] rounded-full transition-all duration-300 hover:scale-105 active:scale-95 [WebkitTouchCallout:none] select-none"
            >
              <img
                src={kakao}
                alt="카카오 오픈채팅"
                className="w-[24px] h-[24px] max-md:w-[20px] max-md:h-[20px]"
              />
            </a>
          </div>
        </div>

        <Time />
      </div>
    </section>
  );
};

export default RecruitQnaSection;
