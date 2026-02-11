import React, { useState, useEffect } from "react";
import IdealTalentData from "../../data/IdealTalentData";
import star from "../../assets/star.svg";
import recruitStarBackground from "../../assets/recruit-starbackground.png";
import {
  mediumStyle,
  semiBoldStyle,
  regularStyle,
  titleStyle,
} from "../../styles/typography";

const IdealTalent = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  const cardTitleStyleMobile = {
    ...semiBoldStyle,
    fontSize: "24px",
    lineHeight: "36px",
    fontStyle: "normal",
  };

  const cardBodyStyleMobile = {
    ...regularStyle,
    fontSize: "16px",
    lineHeight: "28px",
    fontStyle: "normal",
  };

  const titleStyleDesktop = {
    ...titleStyle,
    fontSize: "40px",
    lineHeight: "60px",
  };

  const cardTitleStyleDesktop = {
    ...semiBoldStyle,
    fontSize: "42px",
    lineHeight: "60px",
    fontStyle: "normal",
  };

  const cardBodyStyleDesktop = {
    ...regularStyle,
    fontSize: "20px",
    lineHeight: "35px",
    fontStyle: "normal",
  };

  return (
    <section
      className="relative w-full px-[200px] max-md:px-4 pb-[416.22px] max-md:pb-[8vh] box-border"
      style={{ overflow: "visible" }}
    >
      <img
        src={recruitStarBackground}
        alt="constellation background"
        className="pointer-events-none absolute max-md:hidden"
        style={{
          width: "1177.6976px",
          height: "auto",
          top: "56%",
          right: "30px",
          transform: "translateY(-50%) rotate(-8.36deg)",
          opacity: 0.9,
          zIndex: 0,
        }}
      />
      <div className="relative w-full max-w-[1040px] mx-auto z-10">
        <div className="flex w-[632.6772px] max-md:w-full h-[35.6772px] max-md:h-auto items-center gap-[19px] max-md:gap-2 text-left">
          {/* asset 변경 필요 */}
          <img src={star} alt="star" className="max-md:w-4 max-md:h-4" />
          <span
            className="max-md:text-[20px]"
            style={{
              ...mediumStyle,
              fontSize: "20px",
              fontStyle: "normal",
              background: "linear-gradient(180deg, #FFAF01, #be781d	 0%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitTextStrokeWidth: "0.1px",
              WebkitTextStrokeColor: "#FFAF01",
              textShadow: "0 4px 1.8px #00000080",
            }}
          >
            Ideal talent
          </span>
        </div>
        <div className="mt-[27.16px] max-md:mt-4">
          <p
            className="w-[598px] max-md:w-full h-[60px] max-md:h-auto"
            style={isMobile ? titleStyleMobile : titleStyleDesktop}
          >
            멋사는 이런분들을 기다려요!
          </p>
        </div>

        <div className="mt-[148.94px] max-md:mt-12 flex flex-col gap-[27px] max-md:gap-4">
          {IdealTalentData.map((card) => (
            <div
              key={card.id}
              className="relative w-full max-w-[599px] max-md:max-w-full h-[305px] max-md:h-auto max-md:min-h-[220px] bg-transparent p-[1px] rounded-[30px]"
            >
              <div
                className="absolute inset-0 rounded-[30px] backdrop-blur-lg bg-white/5 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative glass glass-ideal w-full h-full rounded-[30px] px-[30px] max-md:px-5 py-[30px] max-md:py-5">
                <p
                  className="text-white whitespace-pre-line max-md:break-all"
                  style={
                    isMobile ? cardTitleStyleMobile : cardTitleStyleDesktop
                  }
                >
                  {card.title}
                </p>
                <p
                  className="mt-[30px] max-md:mt-4 text-[#E8D6C6] whitespace-pre-line max-md:break-all"
                  style={isMobile ? cardBodyStyleMobile : cardBodyStyleDesktop}
                >
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealTalent;
