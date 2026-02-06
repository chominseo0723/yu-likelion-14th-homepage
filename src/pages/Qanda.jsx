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
        <div className="flex flex-col gap-6 mt-[176px]">
          {categories.map((c) => {
            const isActive = selected === c

        return (
  <button
    key={c}
    onClick={() => setSelected(c)}
    className={`
      w-43
      pl-6
      rounded-[30px]
      text-[30px]
      transition-all duration-200
      text-left
      ${
        isActive
          ? `
            bg-[linear-gradient(109deg,rgba(255,255,255,0.15)_16.55%,rgba(153,153,153,0.15)_97.22%)]
            backdrop-blur-md
            border border-[rgba(255,255,255,0.2)]
          `
          : `
            font-medium
            text-white
            bg-transparent
            hover:text-[#FF9000]
          `
      }
    `}
  >
    {isActive ? (
      <span
        className="
          font-bold
          bg-[linear-gradient(90deg,#FF9000_0%,#FF5E00_100%)]
          bg-clip-text
          text-transparent
        "
      >
        {c}
      </span>
    ) : (
      c
    )}
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
