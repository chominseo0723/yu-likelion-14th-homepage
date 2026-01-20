import React from 'react'
import star from "./../assets/star.svg"
import { Link } from 'react-router-dom'
import spoon from "./../assets/spoon.svg"

const cards = [spoon, spoon, spoon, spoon]; {/* 추후 수정 */}

const Project = () => {
  return (
    <div className='flex flex-col font-pretendard'>
            <div className='flex flex-row ml-50 gap-5'>
                <img src={star} />
                <span className='
                   bg-[linear-gradient(92deg,rgba(255,144,0,0.5)_0.69%,rgba(255,94,0,0.5)_97.06%)]
                    bg-clip-text
                    text-transparent
                    [-webkit-background-clip:text]
                    [-webkit-text-fill-color:transparent]
                    [-webkit-text-stroke-width:0.2px]
                    [-webkit-text-stroke-color:#000]
                    font-pretendard
                    text-[20px]
                    font-medium
                    leading-[60px]
                '>Project</span>
            </div>
            <span className='text-[40px] font-bold text-[#C56908] ml-50'>13기가 진행한 프로젝트에요!</span>
<div className="marquee-mask mt-12">
        <div className="marquee-track pause-on-hover gap-12">
          {[...cards, ...cards, ...cards].map((src, i) => (
            <Link to="/" key={i} className="shrink-0">
              <img src={src} alt={`project-${i}`} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project