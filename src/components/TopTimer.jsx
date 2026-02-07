import toptimerBg from "../assets/toptimer.svg";
import { useEffect, useState } from "react";
import arrow from "../assets/arrow.svg";

const DigitBox = ({ digit }) => (
  <div
    className="
      glass-timer-digit
      flex items-center justify-center
      w-[62px] h-[92px]
      rounded-[23px]
      text-white font-bold
      text-[54px]
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
      <span className="ml-1 mt-15 text-[15px] text-white">{label}</span>
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
                <div className="flex flex-row justify-center items-center gap-1 text-[30px] leading-[50px]">
                    <span className="text-[#FF9000] font-semibold">경험이 쌓여, 결과로 이어지는</span>
                    <span className="text-white font-semibold">동아리</span>
                </div>
                <span className="text-[30px] leading-[50px]">멋쟁이 사자처럼 영남대학교에서</span>

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
<div className="flex flex-col items-center mt-[135px]">
  <button
    className="w-[192px] h-[52px] border rounded-[40px] px-10 py-3 font-extrabold text-white text-[20px]
      bg-gradient-to-r from-[#FF5E00]/40 to-[#FFAE00]/40 border-white/30 backdrop-blur-sm cursor-pointer
      hover:from-[#FF5E00] hover:to-[#FFAE00] transition-all duration-300 ease-in-out
      flex items-center justify-center whitespace-nowrap"
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
