import React from "react";
import { Link } from "react-router-dom";
import LOGO from "./../assets/LOGO.svg";

const hoverAnimation =
  "w-[150px] h-[40px] flex flex-row items-center justify-center text-[20px] font-[500] text-[#686E7D] hover:text-[#FFAE00] hover:font-[800] cursor-pointer transition-all duration-200";

const MainHeader = ({ scrollToHome }) => {
  return (
    <div className="flex flex-row font-pretendard py-9 items-center justify-between bg-transparent glass-header z-50">
      <Link to="/">
        <img
          className="pl-10 cursor-pointer"
          src={LOGO}
          onClick={() => scrollToSection(sectionRefs.home)}
        />
      </Link>

      <div className="flex flex-row items-center gap-[60px]">
        <div className="flex flex-row items-center">
          {/* HOME 눌렀을 때 첫화면  */}
          <span onClick={scrollToHome} className={hoverAnimation}>
            <Link to="/">HOME</Link>
          </span>

          <span className={hoverAnimation}>
            <Link to="/recruit">RECRUIT</Link>
          </span>
          <span className={hoverAnimation}>
            <Link to="/project">Project</Link>
          </span>
          <span className={hoverAnimation}>
            <Link to="/qanda">Q&A</Link>
          </span>
        </div>

        <div
          className="w-[192px] h-[52px] border rounded-[40px] px-10 py-3 font-extrabold text-white text-[20px] bg-gradient-to-r
          from-[#FF5E00]/40
          to-[#FFAE00]/40
          border-white/30
          backdrop-blur-sm mr-15 cursor-pointer
          hover:from-[#FF5E00]
          hover:to-[#FFAE00]
          transition-all duration-300 ease-in-out
          flex items-center justify-center whitespace-nowrap"
        >
          14기 지원하기
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
