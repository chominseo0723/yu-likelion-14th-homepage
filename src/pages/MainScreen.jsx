import React, { useRef } from "react";
import MainHeader from "../header/MainHeader";
import MainFooter from "../footer/MainFooter";
import HomeProject from "../sections/HomeProject";
import Introduce from "../components/Introduce";
import Stats from "../components/Stats";
import Activity from "../components/Activity";
import TrackCard from "../components/TrackCard";
import SessionCard from "../components/Session";
import Review from "../components/Review";
import openingVideo from "./../assets/오프닝 영상.mp4";
import arrow from "./../assets/arrow.svg";
import TopTimer from "../components/TopTimer";
import Qna from "../components/Q&A/Qna";
import Time from "../components/Q&A/Time";
const MainScreen = () => {
  const homeRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const Spacer = ({ height = "h-[4px]" }) => (
    <div className={`snap-section ${height} bg-[#070708]`} />
  );

  return (
    <div className="relative w-screen h-screen bg-[#070708] overflow-hidden font-pretendard">
      <div className="fixed top-0 left-0 w-full z-10">
        <MainHeader scrollToHome={scrollToHome} />
      </div>

      <main className="snap-container no-scrollbar h-screen overflow-y-auto">
        {/* HOME */}
        <section
          ref={homeRef}
          className="snap-section relative overflow-hidden"
        >
          <video
            src={openingVideo}
            autoPlay
            loop
            muted
            playsInline
            className=" absolute
    inset-0
    w-full
    h-full
    object-contain
    z-0"
          />

          <img
            src={arrow}
            alt="scroll down"
            className="absolute bottom-[38px] left-1/2 -translate-x-1/2 z-10 w-20 h-20"
          />
        </section>

        <section className="snap-section relative overflow-hidden bg-[#070708]">
          <TopTimer />
        </section>

        {/* introduce */}
        <Introduce />
        <Spacer />

        {/* stats */}
        <section className="snap-section flex items-center justify-center bg-[#070708] text-white">
          <div className="z-0">
            <Stats />
          </div>
        </section>
        <Spacer />

        {/* activity */}
        <section className="snap-section flex items-center justify-center bg-[#070708] text-white">
          <div className="z-0">
            <Activity />
          </div>
        </section>

        {/* track */}
        <section className="snap-section flex items-center justify-center bg-[#070708] text-white">
          <div className="z-0">
            <TrackCard />
          </div>
        </section>

        {/* session */}
        <section className="snap-section flex items-center justify-center bg-[#070708] text-white">
          <div className="z-0">
            <SessionCard />
          </div>
        </section>
        {/* 위치 수정 (project,qna *session에 맞췄습니다 ! ) */}
        {/* project */}
        <section className="snap-section relative flex items-center justify-center bg-[#070708] text-white overflow-hidden">
          <div className="z-0 w-full flex justify-center">
            <HomeProject />
          </div>
        </section>

        {/* stats */}
        <section className="snap-section flex items-center justify-center bg-[#070708] text-white">
          <div className="relative z-5">
            <Review />
          </div>
        </section>

        {/* Q&A */}
        <section className="snap-section flex items-center justify-center bg-[#070708] text-white">
          <div className="z-0 w-full flex justify-center">
            <Qna />
          </div>
        </section>

        <Time />
        <MainFooter />
      </main>
    </div>
  );
};

export default MainScreen;
