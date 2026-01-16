import React, { useRef } from "react";
import MainHeader from "../header/MainHeader";
import bodyImg from "../assets/body.svg";
import footerLogo from "../assets/likelion_logo.svg";
import footerTitle from "../assets/likelion_title.svg";
import instagram from "../assets/streamline_instagram-solid.svg";

const MainScreen = () => {
  const sectionRefs = {
    home: useRef(null),
    recruit: useRef(null),
    project: useRef(null),
    qa: useRef(null),
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative w-screen h-screen bg-[#070709] overflow-hidden font-pretendard">
      <div className="fixed top-0 left-0 w-full z-10">
        <MainHeader
          scrollToSection={scrollToSection}
          sectionRefs={sectionRefs}
        />
      </div>

      <main className="snap-container no-scrollbar h-screen overflow-y-auto">
        {/* 메인 */}
        <section
          ref={sectionRefs.home}
          className="snap-section relative flex items-center justify-center overflow-hidden"
        >
          {/* 배경 이미지 */}
          <img
            src={bodyImg}
            className="absolute top-0 w-auto h-full object-cover z-0"
          />
          <div>{/* Timer 컴포넌트 */}</div>
        </section>

        {/* recruit 섹션 */}
        <section
          ref={sectionRefs.recruit}
          className="snap-section flex items-center justify-center bg-[#070708] text-white"
        >
          <h1 className="text-4xl font-bold">RECRUIT CONTENT</h1>
        </section>

        {/* project 섹션 */}
        <section
          ref={sectionRefs.project}
          className="snap-section flex items-center justify-center bg-[#070708] text-white"
        >
          <h1 className="text-4xl font-bold">PROJECT SHOWCASE</h1>
        </section>

        {/* Q&A + footer 섹션 */}
        <section
          ref={sectionRefs.qa}
          className="snap-section flex flex-col bg-[#070708] text-white"
        >
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-4xl font-bold">Q&A</h1>
          </div>
          <footer className="w-full py-4 px-10 bg-zinc-900 text-zinc-500 text-sm border-t border-white/10">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-1">
                <img src={footerLogo} className="w-16 h-16" />
                <img src={footerTitle} className="w-35 h-10" />
              </div>
              <div className="flex flex-row justify-center items-center gap-4">
                <a
                  href="https://www.instagram.com/"
                  className="group relative flex items-center justify-center w-16 h-16 transition-all duration-300
                             bg-[linear-gradient(135deg,_#262627_30%,_#1E1E1F_70%,_#262629_100%)] backdrop-blur-xl
                             border border-white/20 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.3), 0_4px_15px_rgba(0,0,0,0.2)]
                             hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-amber-600/30 hover:shadow-2xl"
                  alt="instagram"
                >
                  <img src={instagram} className="w-8 h-8"></img>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="group relative flex items-center justify-center w-16 h-16 transition-all duration-300
                             bg-[linear-gradient(135deg,_#262627_30%,_#1E1E1F_70%,_#262629_100%)] backdrop-blur-xl
                             border border-white/20 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.3), 0_4px_15px_rgba(0,0,0,0.2)]
                             hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-amber-600/30 hover:shadow-2xl"
                  alt="instagram"
                >
                  <img src={instagram} className="w-8 h-8"></img>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="group relative flex items-center justify-center w-16 h-16 transition-all duration-300
                             bg-[linear-gradient(135deg,_#262627_30%,_#1E1E1F_70%,_#262629_100%)] backdrop-blur-xl
                             border border-white/20 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.3), 0_4px_15px_rgba(0,0,0,0.2)]
                             hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-amber-600/30 hover:shadow-2xl"
                  alt="instagram"
                >
                  <img src={instagram} className="w-8 h-8"></img>
                </a>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default MainScreen;
