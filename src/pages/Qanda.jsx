// Qanda.jsx
import React, { useState } from 'react'
import MainHeader from '../header/MainHeader'
import MainFooter from '../footer/MainFooter'
import QnACard from '../components/Q&A/QnACard'
import { QNA_DATA } from '../data/qnaData'

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

      {/* 타이틀 */}
      <div className="flex mt-41 gap-3 pl-50">
        <span className="text-white text-[42px] font-semibold">자주 묻는 질문</span>
        <span className="text-[#FF9000] text-[42px] font-semibold">Q&A</span>
      </div>

      <div className="flex gap-43">
        {/* 카테고리 */}
        <div className="flex flex-col gap-7.5 text-[30px] mt-44 pl-55">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelected(c)}
              className={`
                text-left
                ${selected === c ? 'text-[#FF9000] font-bold' : 'text-white'}
                hover:text-[#FF9000]
                transition
              `}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Q&A 리스트 */}
        <div className="mt-44 ">
          {(QNA_DATA[selected] || []).map((item, idx) => (
            <QnACard key={idx} q={item.q} a={item.a} />
          ))}
        </div>
      </div>

      <MainFooter />
    </div>
  )
}

export default Qanda
