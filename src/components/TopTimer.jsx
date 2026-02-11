import toptimerBg from "../assets/toptimer.svg";
import { useEffect, useState } from "react";
import arrow from "../assets/arrow.svg";
import { timeDigitStyle, label15Style, heroSubStyle, heroMainStyle, headerButtonStyle } from "../styles/typography";

const DigitBox = ({ digit, isMobile, timeDigitStyleMobile }) => (
  <div
    className="glass-timer-digit flex items-center justify-center w-[62px] h-[92px] max-md:w-[30px] max-md:h-[48px] rounded-[23px] max-md:rounded-[12px] text-white"
    style={isMobile ? timeDigitStyleMobile : timeDigitStyle}
  >
    {digit}
  </div>
);

const TimeGroup = ({ value, label, isMobile, timeDigitStyleMobile }) => {
  const digits = String(value).padStart(2, "0").split("");

  return (
    <div className="flex items-center gap-[14px] max-md:gap-[4px]">
      <div className="flex gap-[10px] max-md:gap-[4px]">
        <DigitBox digit={digits[0]} isMobile={isMobile} timeDigitStyleMobile={timeDigitStyleMobile} />
        <DigitBox digit={digits[1]} isMobile={isMobile} timeDigitStyleMobile={timeDigitStyleMobile} />
      </div>
      <span className="text-white translate-y-[28px] max-md:translate-y-[14px] max-md:text-[10px]" style={label15Style}>{label}</span>
    </div>
  );
};





const TopTimer = () => {
const DEADLINE = new Date("2026-03-08T23:59:59");
  const [isMobile, setIsMobile] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const timeDigitStyleMobile = {
    ...timeDigitStyle,
    fontSize: "28px",
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      
      {/* 배경 */}
      <img
        src={toptimerBg}
        alt="timer background"
        className="absolute inset-0 w-full h-full object-contain "
      />

      {/* 콘텐츠 */}
      <div className="relative z-10 text-center text-white px-4">
            <div className="flex flex-col justify-center items-center max-md:flex-col">
                <div className="flex flex-row max-md:flex-col justify-center items-center gap-1 max-md:gap-0" style={heroSubStyle}>
                    <div className="flex flex-row items-center gap-1">
                      <span className="text-[#FF9000] max-md:text-[20px] max-md:leading-[30px]">경험이 쌓여, 결과로 이어지는</span>
                      <span className="text-white max-md:text-[20px] max-md:leading-[30px]">동아리</span>
                    </div>
                </div>
                <span className="text-white max-md:text-[18px] max-md:leading-[40px]" style={heroSubStyle}>멋쟁이 사자처럼 영남대학교에서</span>

                <div className="flex flex-col max-md:flex-col text-white max-md:gap-0" style={heroMainStyle}>
                    <span className="max-md:text-[18px] max-md:leading-[40px]">같이 성장해나갈</span>
                    <span className="ml-3 max-md:ml-0 bg-gradient-to-r from-[#FF9000] to-[#FF5E00] bg-clip-text text-transparent max-md:text-[24px] max-md:leading-[34px]">14기 아기사자를 모집합니다</span>
                </div>
            </div>

        {/* 타이머 */}
         <div className="flex gap-[28px] max-md:gap-1 justify-center mt-10 max-md:mt-6">
  <TimeGroup value={timeLeft.days} label="일" isMobile={isMobile} timeDigitStyleMobile={timeDigitStyleMobile} />
  <TimeGroup value={timeLeft.hours} label="시" isMobile={isMobile} timeDigitStyleMobile={timeDigitStyleMobile} />
  <TimeGroup value={timeLeft.minutes} label="분" isMobile={isMobile} timeDigitStyleMobile={timeDigitStyleMobile} />
  <TimeGroup value={timeLeft.seconds} label="초" isMobile={isMobile} timeDigitStyleMobile={timeDigitStyleMobile} />
</div>
{/* 지원하기 버튼 */}
<div className="flex flex-col items-center mt-[135px]">
<a
  href="https://docs.google.com/forms/d/e/1FAIpQLSczac64aVsLkuYSKIUUqYGXawEPr0AjzgX8qOcOtbOeeqZ1fA/viewform"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="w-[192px] h-[52px] border rounded-[40px] px-10 py-3 text-white bg-gradient-to-r from-[#FF5E00]/40 to-[#FFAE00]/40 border-white/30 backdrop-blur-sm cursor-pointer hover:from-[#FF5E00] hover:to-[#FFAE00] transition-all duration-300 ease-in-out flex items-center justify-center whitespace-nowrap"
    style={headerButtonStyle}
  >
    14기 지원하기
  </button>
</a>


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