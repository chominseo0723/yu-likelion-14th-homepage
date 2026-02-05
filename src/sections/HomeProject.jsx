import React from 'react'
import star from "./../assets/star.svg"
import { Link } from 'react-router-dom'
import MEDIV from '../assets/MEDIV.svg'
import CLMN from '../assets/CLMN.svg'
import Scooty from '../assets/Scooty.svg'
import DEEPSAFE from '../assets/DEEPSAFE.svg'
import ONDOMI from '../assets/ONDOMI.svg'
import BRIDGEE from '../assets/BRIDGEE.svg'
import ILKAN from '../assets/ILKAN.svg'
import STARTPOINTER from '../assets/STARTPOINTER.svg'

// 프로젝트 카드들 추가
const cards = [MEDIV, CLMN, DEEPSAFE, BRIDGEE, Scooty, ONDOMI, ILKAN, STARTPOINTER]

const Project = () => {
  return (
    <div className='flex flex-col font-pretendard'>
            <div className='flex flex-row ml-52 gap-5 items-center'>
                <img src={star} />
                <span className='
                  font-normal text-[20px] bg-linear-to-r from-[#FF9000] to-[#FF5E00] 
                    bg-clip-text text-transparent
                    [-webkit-text-stroke:0.2px_#FFAE00]
                    [text-shadow:0_1.5px_1px_rgba(124,66,5,0.9)]
                    select-none
                '>Project</span>
            </div>
            <Link className='text-[40px] font-bold text-[#C56908] ml-52' to='/project'>멋사 13기 활동 더보기  &gt;&gt;</Link>
<div className="marquee-mask mt-12">
        <div className="marquee-track pause-on-hover gap-12">
          {[...cards, ...cards, ...cards].map((src, i) => (
            <div to="/" key={i} className="shrink-0">
              <img src={src} alt={`project-${i}`} />
            </div>
          ))}
        </div>
      <div className='flex justify-center'>
        <Link className='text-[#87725F] border-b border-[#87725F] inline-block text-[20px] font-pretendard mt-15' to="/project">멋사 13기 활동 더보기 &gt;&gt;</Link>
      </div>
      </div>
    </div>
  )
}

export default Project