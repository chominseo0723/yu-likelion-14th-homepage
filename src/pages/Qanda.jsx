import React, { useState } from 'react'
import MainHeader from '../header/MainHeader'
import MainFooter from '../footer/MainFooter'
import QnACard from '../components/Q&A/QnACard'
import { QNA_DATA } from '../data/qnaData'
import Time from '../components/Q&A/Time'

const categories = [
  '주요',
  '모집 / 지원',
  '선발 기준',
  '활동',
  '비용 / 운영',
  '기타',
]

const Qanda = () => {
  const [selected, setSelected] = useState('주요')

  return (
    <div className="bg-[linear-gradient(180deg,#000000_0%,#3A250A_100%)] font-pretendard min-h-screen">
      <MainHeader />

    
      <div className="flex mt-41 gap-3 pl-97">
        <span className="text-white text-[42px] font-semibold">자주 묻는 질문</span>
        <span className="text-[#FF9000] text-[42px] font-semibold">'Q&A'</span>
      </div>

    
      <div className="flex gap-43 justify-center mx-auto max-w-[1200px] px-10">
        {/* 카테고리 */}
        <div className="flex flex-col gap-6 mt-[176px] relative">
          <div
            className="absolute left-0 w-[280px] h-[48px] rounded-[30px] p-[0.5px] z-0
              bg-[linear-gradient(160deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.2)_100%)]
              transition-all duration-600 ease-[cubic-bezier(0.34,1.4,0.5,1.02)]"
            style={{
              transform: `translateY(${categories.indexOf(selected) * (48 + 24)}px)`,
            }}
          >
            <div className="glass-toc-slide w-full h-full rounded-[30px]" />
          </div>

          {categories.map((c, index) => {
            const isActive = selected === c
            return (
              <button
                key={c}
                type="button"
                onClick={() => setSelected(c)}
                className="relative z-10 w-[280px] h-[48px] flex items-center pl-5 rounded-[30px] cursor-pointer transition-colors duration-300 text-left"
              >
                <div className="flex flex-row items-center gap-4">
                  <span
                    className={`text-[20px] select-none text-right transition-colors duration-300 ${
                      isActive ? "text-[#B0701C]" : "text-[#B4A69E]"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span
                    className={`text-[24px] select-none transition-colors duration-300 ${
                      isActive
                        ? "font-black bg-linear-to-r from-[#FF9000] to-[#FF5E00] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(255,255,255,0.145)]"
                        : "text-white font-medium"
                    }`}
                  >
                    {c}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Q&A 리스트 */}
        <div className="mt-44 w-full">
          {(QNA_DATA[selected] || []).map((item, idx) => (
            <QnACard
              key={`${selected}-${idx}`}
              q={item.q}
              a={item.a}
            />
          ))}
        </div>
      </div>

      <Time />
      <MainFooter />
    </div>
  )
}

export default Qanda
