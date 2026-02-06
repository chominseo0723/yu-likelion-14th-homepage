import React, { useRef, useEffect, useState } from "react";
import MainHeader from "../header/MainHeader";
import MainFooter from "../footer/MainFooter";
import HomeProject from "../sections/HomeProject";
import Introduce from "../components/Introduce"; // vercel 오류 -> 이거 대소문자 구분해야돼요!!!
import Stats from "../components/Stats";
import Activity from "../components/Activity";
import TrackCard from "../components/TrackCard";
import SessionCard from "../components/Session";
import openingVideo from "./../assets/오프닝 영상.mp4";
import arrow from "./../assets/arrow.svg";
import TopTimer from "../components/TopTimer";
import Qna from "../components/Q&A/Qna";
import Time from "../components/Q&A/Time";

const MainScreen = () => {
  const homeRef = useRef(null);
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
  // 새로고침할 때마다 오프닝 다시 재생되게
  sessionStorage.removeItem("openingPlayed");
  setHasPlayed(false);
}, []);

  useEffect(() => {
    const played = sessionStorage.getItem("openingPlayed");
    if (played === "true") {
      setHasPlayed(true);
    }
  }, []);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleVideoEnded = () => {
    setHasPlayed(true);
    sessionStorage.setItem("openingPlayed", "true");
  };

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
    ref={videoRef}
    src={openingVideo}
    muted
    playsInline
    autoPlay={!hasPlayed}   // 처음 접속시에만 자동재생
    onEnded={() => {
      const video = videoRef.current;
      if (!video) return;

      // 마지막 프레임에 멈춤
      video.pause();
      video.currentTime = video.duration;

      setHasPlayed(true);
      sessionStorage.setItem("openingPlayed", "true");
    }}
    className="absolute inset-0 w-full h-full object-contain z-0"
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

        {/* recruit */}
        <section className="snap-section flex items-center justify-center bg-[#070708] text-white">
          <h1 className="text-4xl font-bold">RECRUIT CONTENT</h1>
        </section>

        {/* introduce */}
        <section className="snap-section flex items-center justify-center bg-[#070708] text-white">
          <div className="snap-container no-scorll h-screen overflow-y-auto no-scrollbar z-0">
            <Introduce />
          </div>
        </section>

        {/* stats */}
        <section className="snap-section flex items-center justify-center bg-[#070708] text-white">
          <div className="z-0">
            <Stats />
          </div>
        </section>

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
