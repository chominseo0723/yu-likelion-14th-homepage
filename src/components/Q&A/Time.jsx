import React, { useEffect, useState } from 'react'
import backgroundstar from '../../assets/backgroundstar.svg'

const Time = () => {
  // 3월 8일 23:59:59 마감으로 설정 -> 확정 후 변경 할 수도..
  const DEADLINE = new Date('2026-03-08T23:59:59').getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const diff = DEADLINE - now

      if (diff <= 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative flex justify-center mt-138 mb-22">
      <img src={backgroundstar} alt="background" className="w-700" />

      <div className="absolute inset-0 flex flex-col items-center justify-center font-semibold">
        <p className="text-white text-[32px] mb-10">
          같이 성장해나가며{' '}
          <span className="text-[#FF9000] font-semibold">
            가능성에 멋을 더할
          </span>{' '}
          14기를 모집합니다.
        </p>

        {/* 카운트다운 */}
        <div className="flex text-[54px]items-center gap-[28px] mb-30">
          <TimeUnit value={timeLeft.days} label="일" />
          <TimeUnit value={timeLeft.hours} label="시" />
          <TimeUnit value={timeLeft.minutes} label="분" />
          <TimeUnit value={timeLeft.seconds} label="초" />
        </div>

        {/* 버튼 */}
       <button
  className="
    inline-flex
    items-center
    justify-center
    gap-[10px]
    px-[39px] py-[14px]
    rounded-[40px]

    bg-[linear-gradient(85deg,#FF5E00_0%,#FFAE00_100%)]
    
    text-white
    text-[18px]
    font-bold

  "
  // onClick={() => {
  //   // TODO: 지원 폼 연결
  // }}
>
  14기 지원하기
</button>

      </div>
    </div>
  )
}
const TimeUnit = ({ value, label }) => {
  const digits = value.split('') 

  return (
    <div className="flex items-center gap-[14px]">
    
      <div className="flex gap-[10px]">
        {digits.map((d, idx) => (
          <div
            key={idx}
            className="
              w-[62.7px] h-[92.2px]
              rounded-[23px]
              bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.06)_100%)]
backdrop-blur-xl
border border-[rgba(255,255,255,0.25)]
              flex items-center justify-center
              text-white
              text-[36px]
              font-bold
            "
          >
            {d}
          </div>
        ))}
      </div>
      <span
        className="
          text-white
          text-[15.5px]
          font-bold
          leading-[30px]
          translate-y-[28px]  
        "
      >
        {label}
      </span>
    </div>
  )
}

export default Time
