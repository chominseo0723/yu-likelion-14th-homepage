import React, { useEffect, useState } from 'react'
import backgroundstar from '../../assets/backgroundstar.svg'
import {
  timePhraseStyle,
  headerButtonStyle,
  timeDigitStyle,
  timeUnitLabelStyle,
} from '../../styles/typography'

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

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-white mb-10" style={timePhraseStyle}>
          같이 성장해나가며{' '}
          <span className="text-[#FF9000]" style={timePhraseStyle}>
            가능성에 멋을 더할
          </span>{' '}
          14기를 모집합니다.
        </p>

        {/* 카운트다운 */}
        <div className="flex items-center gap-[28px] mb-30">
          <TimeUnit value={timeLeft.days} label="일" />
          <TimeUnit value={timeLeft.hours} label="시" />
          <TimeUnit value={timeLeft.minutes} label="분" />
          <TimeUnit value={timeLeft.seconds} label="초" />
        </div>

        {/* 버튼 */}
        <button
          className="w-[192px] h-[52px] border rounded-[40px] px-10 py-3 text-white bg-gradient-to-r from-[#FF5E00]/40 to-[#FFAE00]/40 border-white/30 backdrop-blur-sm cursor-pointer hover:from-[#FF5E00] hover:to-[#FFAE00] transition-all duration-300 ease-in-out flex items-center justify-center whitespace-nowrap"
          style={headerButtonStyle}
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
            className="glass-timer-digit w-[62.7px] h-[92.2px] rounded-[23px] flex items-center justify-center text-white"
            style={timeDigitStyle}
          >
            {d}
          </div>
        ))}
      </div>
      <span
        className="text-white translate-y-[28px]"
        style={timeUnitLabelStyle}
      >
        {label}
      </span>
    </div>
  )
}

export default Time
