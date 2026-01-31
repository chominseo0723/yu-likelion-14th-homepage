import React from "react";

import { Link } from "react-router-dom";
import LOGO from "./../assets/LOGO.svg";

const MainHeader = ({ scrollToHome }) => {
  return (
    <div className="flex flex-row font-pretendard py-9 items-center justify-between bg-transparent">
      <img
        className="pl-10 cursor-pointer"
        src={LOGO}
        onClick={() => scrollToSection(sectionRefs.home)}
      />

      <div className="flex flex-row gap-10 items-center">
        {/* HOME 눌렀을 때 첫화면  */}
        <span
          onClick={scrollToHome}
          className="text-[20px] text-[#686E7D] hover:text-[#FFAE00] hover:font-extrabold cursor-pointer transition-all"
        >
          <Link to="/">HOME</Link>
        </span>

        <span className="text-[20px] text-[#686E7D] hover:text-[#FFAE00] hover:font-extrabold cursor-pointer">
          <Link to="/recruit">RECRUIT</Link>
        </span>
        <span className="text-[20px] text-[#686E7D] hover:text-[#FFAE00] hover:font-extrabold cursor-pointer">
          <Link to="/project">Project</Link>
        </span>
        <span className="text-[20px] text-[#686E7D] mr-5 hover:text-[#FFAE00] hover:font-extrabold cursor-pointer">
          <Link to="/qanda">Q&A</Link>
        </span>

        <div
          className="border rounded-[40px] px-10 py-3 font-extrabold text-white text-[20px] bg-gradient-to-r
          from-[#FF5E00]/40
          to-[#FFAE00]/40
          border-white/30
          backdrop-blur-sm mr-15 cursor-pointer
          hover:from-[#FF5E00]
          hover:to-[#FFAE00]"
        >
          14기 지원하기
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
