import React from "react";
import star from "../assets/star.svg";
import intro1 from "../assets/introduce/intro1.png";
import intro2 from "../assets/introduce/intro2.png";
import intro3 from "../assets/introduce/intro3.png";

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
    <div className="relative w-[1000px] h-[480px]">
      {/* 글래스 컨테이너 */}
      <div
        className="absolute left-0 top-0 z-10 
                    flex flex-col items-start self-stretch
                    h-[305px] p-[30px] gap-[10px]
                    bg-gradient-to-br from-[#3D2B1B]/80 to-[#121212]/90 
                    backdrop-blur-md rounded-[30px] shadow-2xl border border-white/10"
      >
        {/* 내부 스타일링 컨테이너 */}
        <div className="flex flex-col items-start w-[518px] gap-[30px]">
          {/* subtitle1 스타일링 */}
          <p
            className="whitespace-pre-line text-white select-none
                        w-[410px] h-[119px] 
                        font-pretendard text-[42px] font-[600] leading-[60px]"
          >
            {data.subtitle1}
          </p>

          {/* subtitle2 스타일링 */}
          <p
            className="whitespace-pre-line text-white break-keep select-none
                        w-[527.561px] h-[86.297px] 
                        font-pretendard text-[20px] font-[400] leading-[35px]"
          >
            {data.subtitle2}
          </p>
        </div>
      </div>

      {/* 이미지 박스 */}
      <div className="absolute left-[380px] top-[267px] z-5">
        <img
          src={data.background}
          alt={data.title}
          className="w-[562.55px] h-[317.531px] object-cover rounded-[20px] shadow-lg"
        />
      </div>
    </div>
  );
};

const Introduce = () => {
  return (
    <div className="w-full">
      {IntroData.map((data) => (
        <section
          key={data.id}
          className="snap-section min-h-screen w-full flex justify-center items-center py-[120px] px-10 bg-[#070708]"
        >
          <div className="w-full max-w-7xl flex flex-row items-start gap-10">
            {/* 수직 라인 */}
            <div className="flex flex-col items-center relative">
              <img src={star} className="w-[30px] h-[30px] z-5" />
              <div className="w-[2px] h-screen bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,144,0,1)_37%,rgba(255,94,0,1)_65%,rgba(0,0,0,1)_100%)] to-transparent absolute top-3 z-0" />
            </div>

            {/* 콘텐츠 영역 */}
            <div className="flex flex-col items-start gap-[32px]">
              <p
                className="font-normal text-[20px] bg-linear-to-r from-[#FF9000] to-[#FF5E00] 
                              bg-clip-text text-transparent
                              [-webkit-text-stroke:0.2px_#FFAE00]
                              [text-shadow:0_1.5px_1px_rgba(124,66,5,0.9)]
                              select-none
                    "
              >
                {data.title}
              </p>
              <IntroItem data={data} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Introduce;
