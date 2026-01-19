import React from 'react'
import star from "./../assets/star.svg"
import { Link } from 'react-router-dom'
import spoon from "./../assets/spoon.svg"

const Project = () => {
  return (
    <div className='flex flex-col font-pretendard'>
            <div className='flex flex-row'>
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
            <span className='text-[40px] font-bold text-[#C56908]'>13기가 진행한 프로젝트에요!</span>

            <div className='flex flex-row gap-12'>
                {/* 임시 경로 및 임시 이미지 */}
                  <Link to="/">
                        <img src={spoon}/>
                  </Link>
                    <Link to="/">
                        <img src={spoon}/>
                  </Link> 
                    <Link to="/">
                        <img src={spoon}/>
                  </Link> 
                    <Link to="/">
                        <img src={spoon}/>
                  </Link>  

            </div>
          
    </div>
  )
}

export default Project