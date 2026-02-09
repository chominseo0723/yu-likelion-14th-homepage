import React from "react";
import footerLogo from "../assets/likelion_logo.svg";
import footerTitle from "../assets/likelion_title.svg";
import instagram from "../assets/instagram-logo.svg";
import kakao from "../assets/kakao-talk_logo.svg";
import github from "../assets/github_logo.svg";

const MainFooter = () => {
  return (
    <>
      <footer className="w-full py-5 px-10 bg-[#070708] text-zinc-500 text-sm border-t border-white/10">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-0.5">
            <img src={footerLogo} className="w-16 h-16" />
            <img src={footerTitle} className="w-35 h-10" />
            <p className="text-[#A66822]">
              @ 2026 LIKELION YU. All rights reserved.
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            {/* 인스타 링크 */}
            <a
              href="https://www.instagram.com/likelion_yu"
              className="group relative flex items-center justify-center w-[50px] h-[50px] transition-all duration-300
                                    bg-[linear-gradient(135deg,#737373_0%,#2E2E35_17%,#1E1E1F_38%,#202021_56%,#3A3A40_86%,#4C4C4C_100%)]
                                    backdrop-blur-2xl 
                                    border border-white/20 
                                    rounded-full 
                                    shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-1px_2px_rgba(0,0,0,0.5),0_8px_20px_rgba(0,0,0,0.3)]
                                    hover:scale-105 hover:border-white/20 hover:shadow-2xl active:scale-95
                                    [WebkitTouchCallout:none] select-none"
              alt="instagramLogo"
              target="_blank"
            >
              <img
                src={instagram}
                className="w-[24px] h-[24px] [WebkitTouchCallout:none] select-none"
              ></img>
            </a>
            {/* 카카오 링크 */}
            <a
              href="https://open.kakao.com/o/sDw4nwdi"
              className="group relative flex items-center justify-center w-[50px] h-[50px] transition-all duration-300
                                    bg-[linear-gradient(135deg,#737373_0%,#2E2E35_17%,#1E1E1F_38%,#202021_56%,#3A3A40_86%,#4C4C4C_100%)]
                                    backdrop-blur-2xl 
                                    border border-white/20 
                                    rounded-full 
                                    shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-1px_2px_rgba(0,0,0,0.5),0_8px_20px_rgba(0,0,0,0.3)]
                                    hover:scale-105 hover:border-white/20 hover:shadow-2xl active:scale-95
                                    [WebkitTouchCallout:none] select-none"
              alt="kakaoLogo"
              target="_blank"
            >
              <img
                src={kakao}
                className="w-[24px] h-[24px] [WebkitTouchCallout:none] select-none"
              ></img>
            </a>
            {/* 깃허브 링크 */}
            <a
              href="https://github.com/Likelion-YeungNam-Univ"
              className="group relative flex items-center justify-center w-[50px] h-[50px] transition-all duration-300
                                    bg-[linear-gradient(135deg,#737373_0%,#2E2E35_17%,#1E1E1F_38%,#202021_56%,#3A3A40_86%,#4C4C4C_100%)]
                                    backdrop-blur-2xl 
                                    border border-white/20 
                                    rounded-full 
                                    shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-1px_2px_rgba(0,0,0,0.5),0_8px_20px_rgba(0,0,0,0.3)]
                                    hover:scale-105 hover:border-white/20 hover:shadow-2xl active:scale-95
                                    [WebkitTouchCallout:none] select-none"
              alt="githubLogo"
              target="_blank"
            >
              <img
                src={github}
                className="w-[24px] h-[24px] [WebkitTouchCallout:none] select-none"
              ></img>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
