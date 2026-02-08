import React, { useEffect, useRef, useState } from "react";
import star from "../assets/star.svg";
import intro1 from "../assets/introduce/intro1.png";
import intro2 from "../assets/introduce/intro2.png";
import intro3 from "../assets/introduce/intro3.png";
import {
  qnaTitleStyle,
  body20Leading35Style,
  body20Style,
} from "../styles/typography";

const IntroData = [
  {
    id: 1,
    title: "Structure",
    subtitle1: "코딩/ 기획/ 디자인,\n혼자 하기 막막했다면?",
    subtitle2:
      "기초부터 심화까지 이어지는 체계적인 커리큘림을 통해,\n배움을 프로젝트로 연결하고 결과까지 완성하는 과정을 함께합니다.",
    background: intro1,
  },
  {
    id: 2,
    title: "Growth",
    subtitle1: "결과물을 만들어나가는\n활동 구조",
    subtitle2:
      "강의와 실습을 통해 익힌 내용을 팀 프로젝트로 확장하며,\n직접 만든 결과물을 포트폴리오로 남길 수 있습니다.",
    background: intro2,
  },
  {
    id: 3,
    title: "Collaboration",
    subtitle1: "혼자가 아닌, 함께 만드는\n협업 경험",
    subtitle2:
      "기획·디자인·개발이 연결된 팀 프로젝트를 통해\n아이디어가 서비스로 완성되는 전 과정을 직접 경험합니다.",
    background: intro3,
  },
];

const IntroItem = ({ data }) => {
  return (
    // 전체 컨테이너
    <div className="relative w-[948px] h-[480px]">
      {/* 글래스 컨테이너 */}
      <div
        className="absolute left-0 top-0 z-5
                    flex flex-col items-start self-stretch
                    w-[578px] h-[305px] p-[30px] gap-[10px]
                    rounded-[30px] glass glass-main"
      >
        {/* 내부 스타일링 컨테이너 */}
        <div className="flex flex-col items-start w-[518px] gap-[30px]">
          {/* subtitle1 스타일링 */}
          <p
            className="whitespace-pre-line text-white select-none w-[410px] h-[119px]"
            style={qnaTitleStyle}
          >
            {data.subtitle1}
          </p>

          {/* subtitle2 스타일링 */}
          <p
            className="whitespace-pre-line text-white break-keep select-none w-[527.561px] h-[86.297px]"
            style={body20Leading35Style}
          >
            {data.subtitle2}
          </p>
        </div>
      </div>

      {/* 이미지 박스 */}
      <div className="absolute left-[380px] top-[267px] z-0">
        <img
          src={data.background}
          alt={data.title}
          className="w-[562.55px] h-[317.531px] object-cover rounded-[20px] shadow-lg"
        />
      </div>
    </div>
  );
};

const IntroSection = ({ data, body20Style }) => {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);

  const fastProgress = Math.min(1, progress * 2.5);
  const brightness = 0.8 + fastProgress * 0.2;

  useEffect(() => {
    // MainScreen의 snap-container를 참조하거나 window를 참조
    const scrollContainer = document.querySelector(".snap-container") || window;

    const calculateProgress = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 별이 화면 중간(진입)에 왔을 때 0%
      // 섹션이 화면 위로 나갈 때 100%
      const startPoint = windowHeight / 2;
      const endPoint = 0;

      const currentProgress = (startPoint - rect.top) / rect.height;

      setProgress(Math.max(0, Math.min(1, currentProgress)));
    };

    scrollContainer.addEventListener("scroll", calculateProgress);
    calculateProgress();

    return () =>
      scrollContainer.removeEventListener("scroll", calculateProgress);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="snap-section min-h-screen w-full flex justify-center items-center bg-transparent"
    >
      <div className="w-full max-w-7xl flex flex-row justify-center items-start gap-10">
        {/* 수직 라인 영역 */}
        <div className="flex flex-col items-center relative min-w-[30px]">
          {/* 별 아이콘 */}
          <img
            src={star}
            className="w-[30px] h-[30px] z-10 relative"
            alt="star"
          />

          {/* 실시간으로 자라나는 선 */}
          <div
            className="w-[2px] absolute top-4 z-5 transition-transform duration-75 ease-out"
            style={{
              height: "100vh", // 다음 섹션까지 충분히 내려가도록 설정
              background:
                "linear-gradient(180deg, #FFFFFF 0%, #FF9000 20%, #FF5E00 50%, rgba(0,0,0,0) 100%)",
              transform: `scaleY(${progress})`,
              transformOrigin: "top",
            }}
          />
        </div>

        {/* 콘텐츠 영역 */}
        <div
          className="flex flex-col items-start gap-[32px]"
          style={{
            opacity: fastProgress,
            transition: "all 0.4s ease-out",
            filter: `brightness(${brightness}) contrast(${0.9 + fastProgress * 0.1})`,
          }}
        >
          <p
            className="bg-linear-to-r from-[#FF9000] to-[#FF5E00] bg-clip-text text-transparent select-none"
            style={body20Style}
          >
            {data.title}
          </p>
          <IntroItem data={data} />
        </div>
      </div>
    </section>
  );
};

const Introduce = () => {
  return (
    <div className="relative w-full">
      {IntroData.map((data) => (
        <IntroSection key={data.id} data={data} body20Style={body20Style} />
      ))}
    </div>
  );
};

export default Introduce;
