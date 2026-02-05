import React, { useEffect, useRef, useState } from "react";
import Ellipse from "../assets/Ellipse.svg";
import EllipseLikelion from "../assets/EllipseLikelion.png";

{
  /* 텍스트 스타일링 */
}
const gradientOrangeStyle = {
  fontFamily: "Pretendard",
  fontWeight: 900,
  background: "linear-gradient(98deg, #FF9000, #FF5E00)",
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

{
  /* 라인 스타일링 */
}
const WidthLine = () => (
  <div className="w-full flex justify-center py-10">
    <svg
      width="100%"
      height="1"
      viewBox="0 0 1439 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M1438.99 0.5L0 0.5"
        stroke="url(#paint0_linear_25_905)"
        strokeWidth="1"
      />
      <defs>
        <linearGradient
          id="paint0_linear_25_905"
          x1="1438.99"
          y1="1"
          x2="0"
          y2="1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="black" stopOpacity="0" />{" "}
          <stop offset="0.307692" stopColor="white" />
          <stop offset="0.471154" stopColor="#FFDAA9" />
          <stop offset="0.653846" stopColor="white" />
          <stop offset="1" stopColor="black" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const HeightLine = () => (
  <svg
    width="1"
    height="732px"
    viewBox="0 0 1 733"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path d="M0.5 0V733" stroke="url(#paint0_linear_25_904)" strokeWidth="1" />
    <defs>
      <linearGradient
        id="paint0_linear_25_904"
        x1="0.5"
        y1="0"
        x2="0.5"
        y2="733"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="black" stopOpacity="0" />
        <stop offset="0.307692" stopColor="white" />
        <stop offset="0.471154" stopColor="#FFDAA9" />
        <stop offset="0.653846" stopColor="white" />
        <stop offset="1" stopColor="black" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

{
  /* 카운트업 컴포넌트 */
}
const Counter = ({ targetValue, duration = 1500, shouldStart }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 뷰포트에 들어올 때 실행 시작
    if (!shouldStart) return;

    let startTime = null;
    // 콤마 제거 후 숫자로 변환
    const end = parseInt(String(targetValue).replace(/,/g, ""), 10);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease-out
      const easeOutQuad = (t) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(progress) * end);

      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetValue, duration, shouldStart]);

  // 세 자릿수마다 콤마 추가하여 출력
  return <>{count.toLocaleString()}</>;
};

const StatData = [
  { id: 1, value: "121", unit: ".univ", title: "참여 대학", size: "20" },
  { id: 2, value: "14,000", unit: "+", title: "멋사 출신 학생 수", size: "32" },
  {
    id: 3,
    value: "1,800",
    unit: "%",
    title: "누적 완성 서비스 수",
    size: "20",
  },
  { id: 4, value: "14", unit: ".years", title: "운영기간", size: "20" },
];

const Stats = () => {
  const [inView, setInView] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    // 관찰자(Observer) 인스턴스 생성
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 요소가 뷰포트에 들어왔을 때
        if (entry.isIntersecting) {
          setInView(true);
          // 한 번 감지되면 관찰 중단
          if (scrollRef.current) {
            observer.unobserve(scrollRef.current);
          }
        }
      },
      {
        threshold: 0.3, // 요소의 80%가 보일 때 시작
      },
    );

    // 3. 관찰 시작
    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    // 언마운트 시 정리(Clean-up)
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center gap-25">
      {/* 타이틀 */}
      <div className="flex flex-col items-center">
        <p
          className="text-white tracking-normal inline-block"
          style={{
            fontSize: "42px",
            lineHeight: "62px",
            ...semiBoldStyle,
          }}
        >
          국내
          {"\u00A0"}
          <span style={gradientOrangeStyle}>최대 규모의</span>
          {"\u00A0"}
          전국 IT 창업 동아리
        </p>
        <p
          className="text-white tracking-normal inline-block"
          style={{
            fontSize: "42px",
            lineHeight: "62px",
            ...semiBoldStyle,
          }}
        >
          <span style={gradientOrangeStyle}>멋쟁이 사자처럼</span>이{"\u00A0"}
          14기 아기사자 여러분을 기다립니다.
        </p>
      </div>

      {/* 수치 */}
      <div ref={scrollRef} className="relative w-full h-full max-w-5xl">
        {/* 라인 & 로고 */}
        <div className="absolute top-51 left-1/2 -translate-x-1/2 w-screen pointer-events-none">
          <WidthLine />
        </div>
        <div className="absolute -top-25 inset-0 flex justify-center pointer-events-none">
          <HeightLine />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-10 flex items-center justify-center">
          {/* 바깥쪽 원 (Ellipse) */}
          <img
            src={Ellipse}
            alt="logo-bg"
            className="absolute w-[118.87px] h-[118.87px] z-0 max-w-none"
          />
          {/* 안쪽 사자 로고 (EllipseLikelion) */}
          <img
            src={EllipseLikelion}
            alt="likelion-logo"
            className="relative w-[83.925px] h-[83.925px] z-5 max-w-none"
          />
        </div>

        {/* 2x2 수치 */}
        <div className="grid grid-cols-2 gap-[80px] w-full max-w-7xl relative z-10 place-items-center select-none">
          {StatData.map((stat) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-[30px]"
                key={stat.id}
              >
                <div className="flex flex-row gap-[5px] justify-center items-center">
                  <p
                    className="text-[100px] italic font-black inline-block pr-2 -mb-10
                               bg-[linear-gradient(264deg,#FFAE00_10.88%,#FF9000_90.45%)]
                               bg-clip-text text-transparent
                               [text-shadow:0_4px_4px_rgba(255,255,255,0.15)]"
                  >
                    <Counter targetValue={stat.value} shouldStart={inView} />
                  </p>
                  <p
                    className={`relative text-[${stat.size}px] font-bold ${stat.id == 1 || stat.id == 4 ? "top-12" : "bottom-2.5"}`}
                  >
                    {stat.unit}
                  </p>
                </div>
                <p className="text-[24px] font-normal">{stat.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
