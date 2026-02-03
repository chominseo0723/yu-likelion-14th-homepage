import React from 'react'
import light from "../../assets/light.svg";
import QnASection from './QnASection'

const Qna = () => {
  return (
    <section className="flex flex-col">
      {/* 타이틀 영역 */}
      <div className="flex flex-col pl-50">
        <div className="flex flex-row items-center gap-4">
          <img src={light} alt="light" />
          <span className="font-medium text-[20px]
            bg-[linear-gradient(92deg,rgba(255,144,0,0.5)_0.69%,rgba(255,94,0,0.5)_97.06%)]
            bg-clip-text text-transparent">
            Q&A
          </span>
        </div>

        <span className="text-[40px] text-[#C56908] font-bold mt-[27px]">
          멋사에 이런게 궁금해요!
        </span>
      </div>

      <div className='ml-138'>
      <QnASection />
      </div>
    </section>
  )
}

export default Qna
