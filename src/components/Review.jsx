import React, { useState, useEffect, useRef } from "react";
import star from "../assets/star.svg";

const ReviewData = [
  {
    id: 1,
    title: "성취감과 자신감을 얻은\n 멋사 활동",
    detail:
      "FE 지식을 어느 정도 알고 있다고 생각했지만, 해커톤에서 실제 프로젝트를 진행하며 부족함을 느꼈습니다. 특히 P&D 파트에서 제작한 Figma를 기반으로 UI를 구현하는 과정에서, 화면이 복잡해지자 컴포넌트를 어떻게 나눠야 할지, 작업을 어떻게 분담해야 할지, 어디서부터 시작해야 할지 고민이 필요했습니다. 이 경험을 통해 **개발은 협업이라는 점과, 기획자·디자이너·개발자 간 소통의 중요성을 깊이 느꼈습니다. 하나의 프로젝트를 완성하며 성취감과 자신감을 얻었고,** 멋사 활동을 통해 아직 배울 것이 훨씬 많다는 현실적인 시선을 갖게 되었습니다.",
    author: "조*서 | 13기 활동 | FE | 컴퓨터공학과",
  },
  {
    id: 2,
    title: "혼자하는 삽질에\n지쳐있다면? 멋사로!",
    detail:
      "저는 프로그래밍은 따로 혼자 공부하고, 사이드 프로젝트를 진행했습니다. 그래서 삽질을 엄청 많이 하기도 했고, 학과 친구들은 다들 개발쪽엔 관심이 없다보니 모든 걸 혼자 했습니다. 멋사에 들어온 후로는 **학과에서 배우지 못한 이론을 자세히 배울 수 있었고,** 운영진분들에게 질문을 많이 하면서 성장을 할 수 있었습니다. 다양한 팀원을 만나서 기획부터 개발까지 어떻게 진행을 하고 협업을 하는지 배울 수 있었고 **혼자 만들었던 것보다 훨씬 완성도 높은 결과물을 만들어 낼 수 있었습니다. 혼자 하는 삽질에 지쳤다면, 멋사에 들어오는 걸 추천드립니다.**",
    author: "김*민 | 13기 활동 | BE | 정보통신공학과",
  },
  {
    id: 3,
    title: "내 디자인이 구현되는 모습에\n가슴이 뛰었습니다.",
    detail:
      "멋쟁이사자처럼에 들어오기 전의 저는 \"UX/UI 쪽으로 가고 싶다\"는 생각만 있었을 뿐, 실제 협업 경험은 거의 없었습니다. 그래서 멋쟁이사자처럼을 선택했습니다. 가장 기억에 남는 순간은 해커톤에서 제가 디자인한 서비스가 실제로 동작하던 장면입니다. **화면이 구현되는 모습을 보며 가슴이 뛰었고**, 그때 \"아, 이게 진짜구나\"라는 생각이 들었습니다. 반대로 아이디어톤에서 주제를 변경해야 했던 경험은 협업이 생각보다 훨씬 현실적인 일이라는 것을 알려주었습니다. ",
    author: "김*윤 | 13기 활동 | P&D | 시각디자인학과",
  },
  {
    id: 4,
    title: "추억과 성장,\n오래 기억에 남을 소중한 경험",
    detail:
      "2년간 멋사에서 활동하며 프로젝트와 사람을 통해 많이 성장할 수 있었습니다. 웹 개발에 대한 막연한 관심으로 시작했지만, **다양한 프로젝트와 협업을 경험하며 개발 흐름뿐 아니라 태도와 소통, 팀워크의 중요성을 배울 수 있었습니다.** 특히 멋진 분들을 많이 만나 좋은 자극을 받았고, 활동 이후에도 프로젝트를 이어가며 실무적인 프론트엔드 지식과 백엔드 협업, 진로에 대한 고민을 함께 나눌 수 있었던 점이 인상 깊었습니다. 힘든 순간도 있었지만 그보다 **더 많은 추억과 성장을 얻었고, 오래 기억에 남을 소중한 경험이었다고 생각합니다.**",
    author: "김*현 | 12기 활동, 13기 운영진 | FE | 정보통신공학과",
  },
];

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

// 모바일 버전 - 스와이프 및 버튼 내비게이션
const ReviewMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      if (activeIndex < ReviewData.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    }

    if (touchStart - touchEnd < -75) {
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
  };

  const currentData = ReviewData[activeIndex];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-10 px-4">
      <div className="w-full max-w-7xl flex flex-col items-start mb-6">
        <div className="flex flex-row items-center justify-center gap-2">
          <img src={star} alt="star" className="w-4 h-4" />
          <p className="font-normal text-[16px] bg-linear-to-r from-[#FF9000] to-[#FF5E00] bg-clip-text text-transparent [-webkit-text-stroke:0.2px_#FFAE00] [text-shadow:0_1.5px_1px_rgba(124,66,5,0.9)] select-none">
            Review
          </p>
        </div>
        <p className="text-[#C56908] text-[24px] font-semibold leading-[36px]">
          멋사는 어땠나요?
        </p>
      </div>

      <div 
        className="w-full relative touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Title */}
        <div className="w-full h-auto overflow-hidden mb-6">
          <p className="whitespace-pre-line text-[24px] text-white font-[600] leading-[36px] text-left break-all">
            {currentData.title}
          </p>
        </div>

        {/* Review Card */}
        <div className="glass-main rounded-[20px] w-full h-auto p-5 gap-3 flex flex-col shadow-2xl">
          <div className="w-full h-auto text-[16px] font-[400] leading-[28px] text-white/90 whitespace-pre-line break-all">
            {renderBoldText(currentData.detail)}
          </div>
          <div className="text-[14px] font-[700] leading-[24px] text-white">
            {currentData.author}
          </div>
        </div>

        {/* Navigation dot */}
        <div className="flex justify-center gap-2 mt-6">
          {ReviewData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-[#FF9000] w-6' : 'bg-white/30'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={() => activeIndex > 0 && setActiveIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            className={`px-4 py-2 rounded-full ${
              activeIndex === 0 ? 'text-white/30' : 'text-white'
            } transition-all`}
          >
            ← 이전
          </button>
          <button
            onClick={() => activeIndex < ReviewData.length - 1 && setActiveIndex(activeIndex + 1)}
            disabled={activeIndex === ReviewData.length - 1}
            className={`px-4 py-2 rounded-full ${
              activeIndex === ReviewData.length - 1 ? 'text-white/30' : 'text-white'
            } transition-all`}
          >
            다음 →
          </button>
        </div>
      </div>
    </div>
  );
};

const ScrollSection = ({ index, setActiveIndex }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveIndex(index);
      },
      { threshold: 0.6 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [index, setActiveIndex]);

  return (
    <section
      ref={sectionRef}
      className="snap-section h-screen w-full bg-transparent"
    />
  );
};

const ReviewCard = ({ activeIndex }) => {
  const currentData = ReviewData[activeIndex];
  const isLast = activeIndex === ReviewData.length - 1;
  const nextData = !isLast ? ReviewData[activeIndex + 1] : null;

  return (
    <div className="relative flex flex-col w-full max-w-[1200px] px-4">
      <div className="flex flex-col w-full gap-[60px]">
        {/* 리뷰 타이틀 */}
        <div className="w-[1040px] h-[164px] overflow-hidden">
          <p
            key={`title-${activeIndex}`}
            className="animate-review whitespace-pre-line text-[60px] text-white font-[600] leading-[82px] text-left"
          >
            {currentData.title}
          </p>
        </div>

        {/* 리뷰 내용 카드 영역 */}
        <div className="relative w-full flex justify-end">
          <div className="absolute top-[-75px] left-0 w-full h-[70px] z-20 pointer-events-none bg-gradient-to-b from-transparent via-[#0F1012]/50 to-transparent backdrop-blur-[2px]" />
          <div
            key={`card-${activeIndex}`}
            className="glass-main rounded-[30px] w-[810px] h-[398px] p-[30px] gap-[14px] flex flex-col justify-between shadow-2xl z-10 animate-slideUp"
          >
            <div className="w-[750px] h-[300px] text-[24px] font-[400] leading-[42px] text-white/90 whitespace-pre-line">
              {renderBoldText(currentData.detail)}
            </div>
            <div className="text-[20px] font-[700] leading-[42px] text-white">
              {currentData.author}
            </div>
          </div>
        </div>
      </div>

      {/* 마지막 카드가 아닐 때만 다음 리뷰 미리보기를 렌더링 */}
      {!isLast && nextData && (
        <div className="absolute bottom-[-322px] right-0 z-50 pointer-events-none opacity-40">
          <div className="flex flex-col items-end gap-4">
            <div
              key={`next-${activeIndex}`}
              className="glass rounded-[30px] w-[567px] h-[278.6px] p-[30px] bg-white/5 border border-white/10 overflow-hidden blur-[6px] transition-all duration-700"
            >
              <p className="text-white text-[16.8px] font-[400] leading-[29.4px] line-clamp-4">
                {nextData.detail}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ReviewDesktop = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full">
      {/* 고정 UI 레이어 */}
      <div className="sticky top-0 left-0 min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 overflow-hidden z-10 pointer-events-none">
        <div className="w-full max-w-7xl flex flex-col items-start mb-[40px]">
          <div className="flex flex-row items-center justify-center gap-[19px]">
            <img src={star} alt="star" />
            <p className="font-normal text-[20px] bg-linear-to-r from-[#FF9000] to-[#FF5E00] bg-clip-text text-transparent [-webkit-text-stroke:0.2px_#FFAE00] [text-shadow:0_1.5px_1px_rgba(124,66,5,0.9)] select-none">
              Review
            </p>
          </div>
          <p className="text-[#C56908] text-[40px] font-semibold leading-[60px]">
            멋사는 어땠나요?
          </p>
        </div>

        {/* 카드 컴포넌트 */}
        <ReviewCard activeIndex={activeIndex} />
      </div>

      {/* 스크롤 공간 레이어 */}
      <div className="relative mt-[-100vh] z-0">
        {ReviewData.map((_, index) => (
          <ScrollSection
            key={index}
            index={index}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </div>
  );
};

const Review = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <ReviewMobile /> : <ReviewDesktop />;
};

export default Review;