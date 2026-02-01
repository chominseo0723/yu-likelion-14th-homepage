import React from "react";
import MainHeader from "../header/MainHeader";
import MainFooter from "../footer/MainFooter";
import IntroComment from "../components/Recruit/IntroComment";

const Recruit = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full z-20">
        <MainHeader scrollToHome={() => {}} />
      </div>
      <div className="relative pt-[100px] min-h-screen">
        <main className="relative z-10 min-h-screen">
          <IntroComment />
        </main>
      </div>
      <MainFooter />
    </div>
  );
};

export default Recruit;
