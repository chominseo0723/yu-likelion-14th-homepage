import React from "react";
import MainHeader from "../header/MainHeader";
import MainFooter from "../footer/MainFooter";
import IntroComment from "../components/Recruit/IntroComment";
import IdealTalent from "../components/Recruit/IdealTalent";
import AnnualSchedule from "../components/Recruit/AnnualSchedule";
import Schedule from "../components/Recruit/schedule";
import RequiredParticipation from "../components/Recruit/RequiredParticipation";
import RecruitQnaSection from "../components/Recruit/RecruitQnaSection";

const Recruit = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full z-20">
        <MainHeader scrollToHome={() => {}} />
      </div>
      <div className="relative min-h-screen">
        <main className="snap-container no-scrollbar h-screen overflow-y-auto pt-[100px] relative z-10">
          <section
            className="snap-section relative"
            style={{ height: "auto", minHeight: "100vh", scrollSnapStop: "normal" }}
          >
            <IntroComment />
          </section>
          <section
            className="snap-section relative"
            style={{ height: "auto", minHeight: "100vh", scrollSnapStop: "normal" }}
          >
            <IdealTalent />
          </section>
          <section
            className="snap-section relative"
            style={{ height: "auto", minHeight: "100vh", scrollSnapStop: "normal" }}
          >
            <Schedule />
          </section>
          <section
            className="snap-section relative"
            style={{ height: "auto", minHeight: "100vh", scrollSnapStop: "normal" }}
          >
            <AnnualSchedule />
          </section>
          <section
            className="snap-section relative"
            style={{ height: "auto", minHeight: "100vh", scrollSnapStop: "normal" }}
          >
            <RequiredParticipation />
          </section>
          <section
            className="snap-section relative"
            style={{ height: "auto", minHeight: "100vh", scrollSnapStop: "normal" }}
          >
            <RecruitQnaSection />
          </section>
        </main>
      </div>
      <MainFooter />
    </div>
  );
};

export default Recruit;
