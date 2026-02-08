import React, { useState } from 'react'
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

const Qanda = () => {
  const [selected, setSelected] = useState('주요')

  return (
    <div className="bg-[linear-gradient(180deg,#000000_0%,#3A250A_100%)] font-pretendard h-screen overflow-hidden flex flex-col">
      <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar min-h-0">
      <MainHeader />

    
      <div className="flex mt-41 gap-3 pl-57">
        <span style={{ ...qnaTitleStyle, color: "#FFFFFF" }}>자주 묻는 질문</span>
        <span style={{ ...qnaTitleStyle, color: "#FF9000" }}>'Q&A'</span>
      </div>

    
      <div className="flex gap-43 justify-center mx-auto max-w-[1200px] px-10">
        {/* 카테고리 */}
        <div className="flex flex-col gap-[30px] mt-[176px] relative">
          <div
            className="absolute left-0 w-[179px] h-[40px] rounded-[30px] p-[0.5px] z-0
              bg-[linear-gradient(160deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.06)_50%,rgba(255,255,255,0.08)_100%)]
              transition-all duration-600 ease-[cubic-bezier(0.34,1.4,0.5,1.02)]"
            style={{
              transform: `translateY(${categories.indexOf(selected) * (40 + 30)}px)`,
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
                className="relative z-10 w-[179px] h-[40px] flex items-center px-[23px] rounded-[30px] cursor-pointer transition-colors duration-300 text-left"
              >
                <div className="flex flex-row items-center">
                  <span
                    className={`select-none transition-colors duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-[#FF9000] to-[#FF5E00] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(255,255,255,0.145)]"
                        : "text-white"
                    }`}
                    style={isActive ? qnaCategoryActiveStyle : qnaCategoryStyle}
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
    </div>
  )
}

export default Qanda
