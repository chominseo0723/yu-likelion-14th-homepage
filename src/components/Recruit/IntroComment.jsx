import React from "react";

const gradientOrangeStyle = {
  fontFamily: "Pretendard",
  fontWeight: 900,
  background: "linear-gradient(to right, #FF9000, #FF5E00)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
  textShadow: "0 4px 4px #FFFFFF25", //Inner Shadow
};

const semiBoldStyle = {
  fontFamily: "Pretendard",
  fontWeight: 600,
};

const IntroComment = () => {
  return (
    <section
      className="pt-[209px] px-5 sm:px-10 md:px-[200px] pb-[269.15px] box-border"
      style={semiBoldStyle}
    >
      <div className="w-full max-w-[1040px] mx-auto">
        <div className="w-full max-w-[1040px] h-[50px] flex items-center justify-start text-left mx-auto">
          <p className="text-[#FFFFFF] text-[30px] leading-[50px] tracking-normal">
            멋쟁이 사자처럼은 &apos;잘하는 사람&apos;보다.{" "}
            <span className="text-[#FF9000]">
              &apos;진짜 해보고 싶은 사람&apos;을
            </span>{" "}
            찾습니다.
          </p>
        </div>
        <div className="h-[22px] shrink-0" />
        <div
          className="w-full max-w-[1040px] mx-auto text-left"
          style={{
            width: "1040px",
            height: "160.8535px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            className="text-white tracking-normal"
            style={{
              fontSize: "58px",
              lineHeight: "76px",
              ...semiBoldStyle,
            }}
          >
            <span style={gradientOrangeStyle}>실력은 우리가</span>
            {/* 공백 2칸 처리 */}
            {"\u00A0\u00A0"}
            <span style={semiBoldStyle}>만듭니다.</span>
          </p>
          <p
            className="text-white tracking-normal"
            style={{
              fontSize: "58px",
              lineHeight: "76px",
              ...semiBoldStyle,
            }}
          >
            <span style={gradientOrangeStyle}>의지만,</span>{" "}
            <span style={semiBoldStyle}>가져오세요.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroComment;