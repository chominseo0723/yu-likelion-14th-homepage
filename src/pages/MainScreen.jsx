import React, { useRef } from "react";
import MainHeader from "../header/MainHeader";
import MainFooter from "../footer/MainFooter";
import bodyImg from "../assets/body.svg";
import Project from "../sections/Project";

const MainScreen = () => {
  const homeRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative w-screen h-screen bg-[#070709] overflow-hidden font-pretendard">
      <div className="fixed top-0 left-0 w-full z-10">
        <MainHeader scrollToHome={scrollToHome} />
      </div>

      <main className="snap-container no-scrollbar h-screen overflow-y-auto">
        {/* HOME */}
        <section
          ref={homeRef}
          className="snap-section relative flex items-center justify-center overflow-hidden"
        >
          <img
            src={bodyImg}
            className="absolute top-0 w-auto h-full object-cover z-0"
          />
        </section>

        {/* recruit */}
        <section className="snap-section flex items-center justify-center bg-[#070708] text-white">
          <h1 className="text-4xl font-bold">RECRUIT CONTENT</h1>
        </section>

        {/* project */}
        <section className="snap-section flex">
          <div className="mt-45">
            <Project />
          </div>
        </section>

        {/* Q&A */}
        <section className="snap-section flex flex-col bg-[#070708] text-white">
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-4xl font-bold">Q&A</h1>
          </div>
        </section>

        <MainFooter />
      </main>
    </div>
  );
};

export default MainScreen;
