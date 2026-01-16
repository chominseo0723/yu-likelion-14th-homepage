import React from 'react'
import Logo from "./../assets/Logo.svg"
const MainHeader = () => {
  return (
    <div className='flex flex-row font-pretendard py-9 items-center justify-between'>
        <img className='pl-10' src={Logo}/>
            <div className='flex flex-row gap-10 items-center'>
                <span className='text-[20px] text-[#686E7D] hover:text-[#FFAE00] hover:font-extrabold cursor-pointer'>HOME</span>
                <span className='text-[20px] text-[#686E7D] hover:text-[#FFAE00] hover:font-extrabold cursor-pointer'>RECTUIT</span>
                <span className='text-[20px] text-[#686E7D] hover:text-[#FFAE00] hover:font-extrabold cursor-pointer'>PROJECT</span>
                <span className='text-[20px] text-[#686E7D] mr-5 hover:text-[#FFAE00] hover:font-extrabold cursor-pointer'>Q&A</span>
                <div className='border rounded-[40px] px-10 py-3 font-extrabold text-white text-[20px] bg-gradient-to-r
    from-[#FF5E00]/40
    to-[#FFAE00]/40
    border-white/30
    backdrop-blur-sm mr-15 cursor-pointer hover:bg-gradient-to-r
    hover:from-[#FF5E00]
    hover:to-[#FFAE00]
    hover:border-white/30'>14기 지원하기</div>
            </div>
        
    </div>
  )
}

export default MainHeader