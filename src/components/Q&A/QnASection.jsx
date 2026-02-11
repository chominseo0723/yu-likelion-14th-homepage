import React from 'react'
import QnACard from './QnACard'
import { QNA_DATA } from "../../data/qnaData";
import akar from "../../assets/akar-icons_arrow-back.svg";
import instagram from "../../assets/instagram-logo.svg";
import kakao from "../../assets/kakao-talk_logo.svg";
import { caption20Style } from "../../styles/typography";
const QnASection = () => {
  const qnaList = QNA_DATA['주요']

  return (
    <div className="flex flex-col items-center mt-16 max-md:mt-8">
      {qnaList.map((item, idx) => (
        <QnACard
          key={idx}
          q={item.q}
          a={item.a}
        />
      ))}
       
<span className='text-[20px] max-md:text-[14px] text-[#87725F] pl-46 max-md:pl-0 max-md:text-center mt-[26px] max-md:mt-4'>추가로 궁금한 점이 있다면 디엠과 오픈채팅방으로 문의하세요</span>

<div className="flex flex-row mt-3 max-md:mt-2 gap-4 max-md:gap-3 pl-120 max-md:pl-0 items-center max-md:justify-center">
      <img src={akar} alt="" className="max-md:w-5 max-md:h-5" />
      <a
        href="https://www.instagram.com/likelion_yu/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-contact-warm group relative flex items-center justify-center w-[50px] h-[50px] max-md:w-[40px] max-md:h-[40px] rounded-full transition-all duration-300 hover:scale-105 active:scale-95 [WebkitTouchCallout:none] select-none"
      >
        <img src={instagram} alt="멋쟁이사자처럼 영남대 인스타그램" className="w-[24px] h-[24px] max-md:w-[20px] max-md:h-[20px]" />
      </a>
      <a
        href="https://open.kakao.com/o/sDw4nwdi"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-contact-warm group relative flex items-center justify-center w-[50px] h-[50px] max-md:w-[40px] max-md:h-[40px] rounded-full transition-all duration-300 hover:scale-105 active:scale-95 [WebkitTouchCallout:none] select-none"
      >
        <img src={kakao} alt="카카오 오픈채팅" className="w-[24px] h-[24px] max-md:w-[20px] max-md:h-[20px]" />
      </a>
</div>
    </div>
  )
}

export default QnASection