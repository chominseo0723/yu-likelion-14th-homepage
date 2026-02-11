import React, { useState } from "react";
 import { Link, NavLink } from "react-router-dom";
import LOGO from "./../assets/LOGO.svg";
import { headerNavStyle, headerButtonStyle } from "../styles/typography";

const navBaseClass =
  "w-[150px] h-[40px] flex flex-row items-center justify-center text-[#686E7D] hover:text-[#FFAE00] cursor-pointer transition-all duration-200";
 const navActiveClass = "text-[#FFAE00]";

const MainHeader = ({ scrollToHome }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="relative font-pretendard py-9 max-md:py-4 bg-transparent glass-header z-40">
        <div
          className="absolute inset-0 backdrop-blur-sm pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative flex flex-row items-center justify-between max-md:px-4">
          <Link to="/">
            <img
              className="pl-10 max-md:pl-0 cursor-pointer max-md:w-[120px]"
              src={LOGO}
              alt="멋쟁이사자처럼"
            />
          </Link>

          {/* 데스크탑 - 네비게이션 */}
          <div className="flex flex-row items-center gap-[60px] max-md:hidden">
            <div className="flex flex-row items-center">
              {/* HOME 눌렀을 때 첫화면  */}
              <NavLink
                to="/"
                onClick={scrollToHome}
                className={({ isActive }) =>
                  `${navBaseClass} ${isActive ? navActiveClass : ""}`
                }
                style={headerNavStyle}
              >
                HOME
              </NavLink>

              <NavLink
                to="/recruit"
                className={({ isActive }) =>
                  `${navBaseClass} ${isActive ? navActiveClass : ""}`
                }
                style={headerNavStyle}
              >
                RECRUIT
              </NavLink>
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  `${navBaseClass} ${isActive ? navActiveClass : ""}`
                }
                style={headerNavStyle}
              >
                PROJECT
              </NavLink>
              <NavLink
                to="/qanda"
                className={({ isActive }) =>
                  `${navBaseClass} ${isActive ? navActiveClass : ""}`
                }
                style={headerNavStyle}
              >
                Q&A
              </NavLink>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSczac64aVsLkuYSKIUUqYGXawEPr0AjzgX8qOcOtbOeeqZ1fA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="w-[192px] h-[52px] border rounded-[40px] px-10 py-3 text-white bg-gradient-to-r from-[#FF5E00]/40 to-[#FFAE00]/40 border-white/30 backdrop-blur-sm mr-15 cursor-pointer hover:from-[#FF5E00] hover:to-[#FFAE00] transition-all duration-300 ease-in-out flex items-center justify-center whitespace-nowrap"
                style={headerButtonStyle}
              >
                14기 지원하기
              </div>
            </a>
          </div>

          {/* 모바일 - 메뉴 */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center relative z-50"
            aria-label="메뉴"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* 모바일 - 메뉴 오버레이 */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black z-50"
          onClick={closeMobileMenu}
        />
      )}

      {/* 모바일 - 메뉴 슬라이드 */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[280px] bg-black border-l border-white/10 z-50 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 pt-20 ">
          <nav className="flex flex-col gap-6">
            <NavLink
              to="/"
              onClick={() => {
                scrollToHome && scrollToHome();
                closeMobileMenu();
              }}
              className={({ isActive }) =>
                `text-xl py-3 px-4 rounded-lg transition-all duration-200 ${
                  isActive ? "text-[#FFAE00] bg-white/5" : "text-white hover:text-[#FFAE00] hover:bg-white/5"
                }`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/recruit"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `text-xl py-3 px-4 rounded-lg transition-all duration-200 ${
                  isActive ? "text-[#FFAE00] bg-white/5" : "text-white hover:text-[#FFAE00] hover:bg-white/5"
                }`
              }
            >
              RECRUIT
            </NavLink>
            <NavLink
              to="/project"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `text-xl py-3 px-4 rounded-lg transition-all duration-200 ${
                  isActive ? "text-[#FFAE00] bg-white/5" : "text-white hover:text-[#FFAE00] hover:bg-white/5"
                }`
              }
            >
              PROJECT
            </NavLink>
            <NavLink
              to="/qanda"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `text-xl py-3 px-4 rounded-lg transition-all duration-200 ${
                  isActive ? "text-[#FFAE00] bg-white/5" : "text-white hover:text-[#FFAE00] hover:bg-white/5"
                }`
              }
            >
              Q&A
            </NavLink>
          </nav>

          <div className="mt-auto">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSczac64aVsLkuYSKIUUqYGXawEPr0AjzgX8qOcOtbOeeqZ1fA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              <div className="w-full h-[48px] border rounded-[40px] px-6 py-3 text-white bg-gradient-to-r from-[#FF5E00]/40 to-[#FFAE00]/40 border-white/30 backdrop-blur-sm cursor-pointer hover:from-[#FF5E00] hover:to-[#FFAE00] transition-all duration-300 ease-in-out flex items-center justify-center whitespace-nowrap text-base font-bold">
                14기 지원하기
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
