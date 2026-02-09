import React, { useState } from "react";
import star from "../assets/star.svg";

const ReviewData = [
  {
    id: 1,
    title: "혼자하는 삽질에\n지쳐있다면? 멋사로!",
    detail:
      "저는 프로그래밍은 따로 혼자 공부하고, 사이드 프로젝트를 진행했습니다. 그래서 삽질을 엄청 많이 하기도 했고, 학과 친구들은 다들 개발쪽엔 관심이 없다보니 모든 걸 혼자 했습니다. 멋사에 들어온 후로는 **학과에서 배우지 못한 이론을 자세히 배울 수 있었고,** 운영진분들에게 질문을 많이 하면서 성장을 할 수 있었습니다. 다양한 팀원을 만나서 기획부터 개발까지 어떻게 진행을 하고 협업을 하는지 배울 수 있었고 **혼자 만들었던 것보다 훨씬 완성도 높은 결과물을 만들어 낼 수 있었습니다. 혼자 하는 삽질에 지쳤다면, 멋사에 들어오는 걸 추천드립니다.**",
    author: "김*민 | 13기 활동 | BE | 정보통신공학과",
  },
  {
    id: 2,
    title: "내 디자인이 구현되는 모습에\n가슴이 뛰었습니다.",
    detail:
      "멋쟁이사자처럼에 들어오기 전의 저는 “UX/UI 쪽으로 가고 싶다”는 생각만 있었을 뿐, 실제 협업 경험은 거의 없었습니다. 그래서 멋쟁이사자처럼을 선택했습니다. 가장 기억에 남는 순간은 해커톤에서 제가 디자인한 서비스가 실제로 동작하던 장면입니다. **화면이 구현되는 모습을 보며 가슴이 뛰었고**, 그때 “아, 이게 진짜구나”라는 생각이 들었습니다. 반대로 아이디어톤에서 주제를 변경해야 했던 경험은 협업이 생각보다 훨씬 현실적인 일이라는 것을 알려주었습니다. ",
    author: "김*윤 | 13기 활동 | P&D | 시각디자인학과",
  },
  {
    id: 3,
    title: "추억과 성장,\n오래 기억에 남을 소중한 경험",
    detail:
      "2년간 멋사에서 활동하며 프로젝트와 사람을 통해 많이 성장할 수 있었습니다. 웹 개발에 대한 막연한 관심으로 시작했지만, **다양한 프로젝트와 협업을 경험하며 개발 흐름뿐 아니라 태도와 소통, 팀워크의 중요성을 배울 수 있었습니다.** 특히 멋진 분들을 많이 만나 좋은 자극을 받았고, 활동 이후에도 프로젝트를 이어가며 실무적인 프론트엔드 지식과 백엔드 협업, 진로에 대한 고민을 함께 나눌 수 있었던 점이 인상 깊었습니다. 힘든 순간도 있었지만 그보다 **더 많은 추억과 성장을 얻었고, 오래 기억에 남을 소중한 경험이었다고 생각합니다.**",
    author: "김*현 | 12기 활동, 13기 운영진 | FE | 정보통신공학과",
  },
  {
    id: 4,
    title: "성취감과 자신감을 얻은\n 멋사 활동",
    detail:
      "FE 지식을 어느 정도 알고 있다고 생각했지만, 해커톤에서 실제 프로젝트를 진행하며 부족함을 느꼈습니다. 특히 P&D 파트에서 제작한 Figma를 기반으로 UI를 구현하는 과정에서, 화면이 복잡해지자 컴포넌트를 어떻게 나눠야 할지, 작업을 어떻게 분담해야 할지, 어디서부터 시작해야 할지 고민이 필요했습니다. 이 경험을 통해 **개발은 협업이라는 점과, 기획자·디자이너·개발자 간 소통의 중요성을 깊이 느꼈습니다. 하나의 프로젝트를 완성하며 성취감과 자신감을 얻었고,** 멋사 활동을 통해 아직 배울 것이 훨씬 많다는 현실적인 시선을 갖게 되었습니다.",
    author: "조*서 | 13기 활동 | FE | 컴퓨터공학과",
  },
];

const ReviewCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextIndex = (activeIndex + 1) % ReviewData.length;
  const currentData = ReviewData[activeIndex];
  const nextData = ReviewData[nextIndex];

  {
    /* 볼드체 파싱 함수 */
  }
  const renderBoldText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-[700]">
            {part.replace(/\*\*/g, "")}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="relative flex flex-col gap-[200px] w-full max-w-[1200px]">
      <div className="flex flex-col w-full gap-[154px]">
        {/* 리뷰 타이틀 */}
        <div className="w-[1040px] h-[164px]">
          <p
            key={activeIndex}
            className="animate-review whitespace-pre-line text-[60px] text-white font-[600] leading-[82px] text-left"
          >
            {currentData.title}
          </p>
        </div>

        {/* 리뷰 내용 */}
        <div className="glass-main rounded-[30px] w-[810px] h-[398px] p-[30px] gap-[14px] flex flex-col justify-between self-end shadow-2xl z-10">
          <div className="w-[750px] h-[300px] text-[24px] font-[400] leading-[42px] text-white/90 whitespace-pre-line">
            {renderBoldText(currentData.detail)}
          </div>
          <div className="text-[20px] font-[700] leading-[42px] text-white">
            {currentData.author}
          </div>
        </div>
      </div>
      {/* 다음 리뷰 미리보기 */}
      <div
        onClick={() => setActiveIndex(nextIndex)}
        className="absolute bottom-[-320px] right-0 cursor-pointer group transition-all duration-500 hover:translate-y-[-10px] z-50"
      >
        <div className="flex flex-col items-end gap-4">
          <div
            className={`glass rounded-[30px] w-[567px] h-[278.6px] p-[30px] bg-white/5 border border-white/10 overflow-hidden transition-all duration-600 ease-in-out
                        blur-[3px] group-hover:blur-none opacity-90 group-hover:opacity-100`}
          >
            <p className="text-white text-[16.8px] font-[400] leading-[29.4px] line-clamp-4 pointer-events-none">
              {nextData.detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Review = () => {
  return (
    <div className="min-h-screen w-full bg-transparent flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden pb-[100px]">
      <div className="w-full max-w-7xl flex flex-col items-start mb-[67.65px]">
        <div className="flex flex-row items-center justify-center gap-4.75">
          <img src={star} alt="star" />
          <p
            className="font-normal text-[20px] bg-linear-to-r from-[#FF9000] to-[#FF5E00] 
                            bg-clip-text text-transparent
                            [-webkit-text-stroke:0.2px_#FFAE00]
                            [text-shadow:0_1.5px_1px_rgba(124,66,5,0.9)]
                            select-none
                  "
          >
            Review
          </p>
        </div>
        <p className="text-[#C56908] text-[40px] font-semibold leading-[60px]">
          멋사는 어땠나요?
        </p>
      </div>
      <div>
        <ReviewCard />
      </div>
    </div>
  );
};

export default Review;
