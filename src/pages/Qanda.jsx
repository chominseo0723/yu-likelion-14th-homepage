import React, { useState, useEffect } from 'react'
import MainHeader from '../header/MainHeader'
import MainFooter from '../footer/MainFooter'
import QnACard from '../components/Q&A/QnACard'
import { QNA_DATA } from '../data/qnaData'
import Time from '../components/Q&A/Time'
import { qnaTitleStyle, qnaCategoryStyle, qnaCategoryActiveStyle } from '../styles/typography'

const categories = [
  '주요',
  '모집 / 지원',
  '선발 기준',
  '활동',
  '비용 / 운영',
  '기타',
]

const qnaTitleStyleMobile = {
  ...qnaTitleStyle,
  fontSize: "30px",
  lineHeight: "28px",
}

const qnaTitleStyleMobileLarge = {
  ...qnaTitleStyle,
  fontSize: "33px",
  lineHeight: "32px",
}

const qnaCategoryStyleMobile = {
  ...qnaCategoryStyle,
  fontSize: "12px",
  lineHeight: "normal",
}

const qnaCategoryActiveStyleMobile = {
  ...qnaCategoryActiveStyle,
  fontSize: "12px",
  lineHeight: "normal",
}

const Qanda = () => {
  const [selected, setSelected] = useState('주요')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="bg-[linear-gradient(180deg,#000000_0%,#3A250A_100%)] font-pretendard h-screen overflow-hidden flex flex-col">
      <div className="fixed top-0 left-0 w-full z-20">
        <MainHeader />
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden no-scrollbar snap-container-inner pt-[120px] max-md:pt-[0px]">
      <section className="snap-section-center min-h-0 pt-0">
      <div className="flex mt-41 max-md:mt-8 gap-3 max-md:gap-2 mx-auto max-w-[1200px] px-10 max-md:px-4">
        <span style={isMobile ? { ...qnaTitleStyleMobile, color: "#FFFFFF" } : { ...qnaTitleStyle, color: "#FFFFFF" }}>자주 묻는 질문</span>
        <span style={isMobile ? { ...qnaTitleStyleMobileLarge, color: "#FF9000" } : { ...qnaTitleStyle, color: "#FF9000" }}>'Q&A'</span>
      </div>

    
      <div className="flex max-md:flex-col gap-43 max-md:gap-6 justify-center mx-auto max-w-[1200px] px-10 max-md:px-4">
        {/* 카테고리 */}
        <div className="flex max-md:flex-row max-md:overflow-x-auto max-md:w-full flex-col gap-[30px] max-md:gap-3 mt-[176px] max-md:mt-6 max-md:mb-5 relative">
          <div
            className="absolute max-md:hidden left-0 w-[179px] h-[46px] rounded-[30px] p-[0.5px] z-0
              bg-[linear-gradient(160deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.2)_100%)]
              transition-transform duration-300"
            style={{
              transform: `translateY(${categories.indexOf(selected) * (76)}px)`,
            }}
          >
            <div className="glass-toc-slide w-full h-full rounded-[30px]" />
          </div>

          {categories.map((c) => {
            const isActive = selected === c
            return (
              <button
                key={c}
                type="button"
                onClick={() => setSelected(c)}
                className="relative z-10 w-[179px] max-md:w-auto max-md:flex-shrink-0 h-[46px] max-md:h-[32px] max-md:py-1 max-md:px-3 flex items-center px-[23px] py-[3px] rounded-[30px] max-md:rounded-[20px] cursor-pointer transition-colors duration-300 max-md:transition-none text-left max-md:border max-md:border-white/20"
                style={isActive ? { background: 'linear-gradient(160deg,rgba(255,255,255,0.25) 0%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.2) 100%)' } : {}}
              >
                <span
                  className={`select-none transition-colors duration-300 max-md:transition-none max-md:whitespace-nowrap ${
                    isActive
                      ? "bg-gradient-to-r from-[#FF9000] to-[#FF5E00] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(255,255,255,0.145)]"
                      : "text-white"
                  }`}
                  style={
                    isMobile 
                      ? (isActive ? qnaCategoryActiveStyleMobile : qnaCategoryStyleMobile)
                      : (isActive ? qnaCategoryActiveStyle : qnaCategoryStyle)
                  }
                >
                  {c}
                </span>
              </button>
            )
          })}
        </div>

        {/* Q&A 리스트 */}
        <div className="mt-44 max-md:mt-0 w-full max-md:mb-8">
          {(QNA_DATA[selected] || []).map((item, idx) => (
            <QnACard
              key={`${selected}-${idx}`}
              q={item.q}
              a={item.a}
            />
          ))}
        </div>
      </div>
      </section>

      <Time />
      <MainFooter />
      </div>
    </div>
  )
}

export default Qanda