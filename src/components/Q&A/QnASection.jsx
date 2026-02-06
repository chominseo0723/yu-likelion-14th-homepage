import React from 'react'
import QnACard from './QnACard'
import { QNA_DATA } from "../../data/qnaData";
import akar from "../../assets/akar-icons_arrow-back.svg";
import insta from "../../assets/insta.svg";
import kakao from "../../assets/kakao.svg";
const QnASection = () => {
  const qnaList = QNA_DATA['주요']

  return (
    <div className="flex flex-col items-center mt-16">
      {qnaList.map((item, idx) => (
        <QnACard
          key={idx}
          q={item.q}
          a={item.a}
        />
      ))}
       

<span className='text-[20px] text-[#87725F] pl-46 mt-[26px]'>추가로 궁금한점이 있다면 디엠과 오픈채팅방으로 문의주세요!</span>

<div className='flex flex-row mt-3 gap-4 pl-120'>
      <img src={akar}/>
     <a
  href="https://www.instagram.com/likelion_yu/"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src={insta} alt="멋쟁이사자처럼 영남대 인스타그램" />
</a>

      <a
  href="https://open.kakao.com/o/sDw4nwdi"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src={kakao} alt="카카오 오픈채팅" />
</a>
</div>
    </div>
  )
}

export default QnASection
