import toptimerBg from "../assets/toptimer.svg";
import { useEffect, useState } from "react";
import arrow from "../assets/arrow.svg";

const DigitBox = ({ digit }) => (
  <div
    className="
      flex items-center justify-center
      w-[62px] h-[92px]
      rounded-[23px]
      bg-white/10
      backdrop-blur-md
      text-white  font-bold
    text-[54px]
       border border-white/10
     shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
    "
  >
    {digit}
  </div>
);

const TimeGroup = ({ value, label }) => {
  const digits = String(value).padStart(2, "0").split("");

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-2">
        <DigitBox digit={digits[0]} />
        <DigitBox digit={digits[1]} />
      </div>
      <span className="ml-1 text-sm text-white/60">{label}</span>
    </div>
  );
};





const TopTimer = () => {
const DEADLINE = new Date("2026-03-08T23:59:59");
     const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = DEADLINE - now;

      if (diff <= 0) return;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      
      {/* 배경 */}
      <img
        src={toptimerBg}
        alt="timer background"
        className="absolute inset-0 w-full h-full object-contain "
      />

      {/* 콘텐츠 */}
      <div className="relative z-10 text-center text-white">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row text-[30px] justify-center items-center gap-1">
                    <span className="text-[#FF9000] font-semibold">경험이 쌓여, 결과로 이어지는</span>
                    <span className="text-white font-semibold">동아리</span>
                </div>
                <span className="text-[30px]">멋쟁이 사자처럼 영남대학교에서</span>

                <div className="flex flex-row text-[50px] font-black">
                    <span>같이 성장해나갈</span>
                    <span className=" ml-3 bg-gradient-to-r
  from-[#FF9000]
  to-[#FF5E00]
  bg-clip-text
  text-transparent">14기 아기사자를 모집</span>
                    <span>합니다</span>
                </div>
            </div>

        {/* 타이머 */}
         <div className="flex gap-8 justify-center mt-10">
  <TimeGroup value={timeLeft.days} label="일" />
  <TimeGroup value={timeLeft.hours} label="시" />
  <TimeGroup value={timeLeft.minutes} label="분" />
  <TimeGroup value={timeLeft.seconds} label="초" />
</div>
{/* 지원하기 버튼 */}
<div className="flex flex-col items-center mt-12">
  <button
    className="
        inline-flex items-center justify-center
    px-[39px] py-[14px]
    rounded-[40px]
    bg-[linear-gradient(85deg,rgba(255,94,0,0.40)_0.3%,rgba(255,174,0,0.40)_90.1%)]
    shadow-[inset_0_4px_4px_rgba(255,233,207,0.25)]
    text-white font-semibold
    backdrop-blur-sm
    text-[20px]
    "
  >
    14기 지원하기
  </button>

  {/* 화살표 이미지  */}
  <img
    src={arrow}
    alt="scroll down"
    className="mt-4 w-20 h-20"
  />
</div>


        </div>
      
    </div>
  );
};

export default TopTimer;
