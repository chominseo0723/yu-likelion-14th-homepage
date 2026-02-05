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
        <main className="relative z-10 pt-[100px]">
          <section className="relative" style={{ minHeight: "100vh" }}>
            <IntroComment />
          </section>
          <section className="relative" style={{ minHeight: "100vh" }}>
            <IdealTalent />
          </section>
          <section className="relative" style={{ minHeight: "100vh" }}>
            <Schedule />
          </section>
          <section className="relative" style={{ minHeight: "100vh" }}>
            <AnnualSchedule />
          </section>
          <section className="relative" style={{ minHeight: "100vh" }}>
            <RequiredParticipation />
          </section>
          <section className="relative" style={{ minHeight: "100vh" }}>
            <RecruitQnaSection />
          </section>
        </main>
      </div>
      <MainFooter />
    </div>
  );
};

export default Recruit;
