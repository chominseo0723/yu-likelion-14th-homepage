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
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #000000 35%, #362209 100%)",
      }}
    >
      <div className="fixed top-0 left-0 w-full z-20">
        <MainHeader scrollToHome={() => {}} />
      </div>
      <div className="relative min-h-screen">
        <main className="no-scrollbar relative z-10 pt-[100px] overflow-x-hidden">
          <section className="snap-section-center relative">
            <IntroComment />
          </section>
          <section className="snap-section-center relative">
            <IdealTalent />
          </section>
          <section className="snap-section-center relative">
            <Schedule />
          </section>
          <section className="snap-section-center relative">
            <AnnualSchedule />
          </section>
          <section className="snap-section-center relative">
            <RequiredParticipation />
          </section>
          <section className="snap-section-center relative">
            <RecruitQnaSection />
          </section>
          <MainFooter />
        </main>
      </div>
    </div>
  );
};

export default Recruit;
