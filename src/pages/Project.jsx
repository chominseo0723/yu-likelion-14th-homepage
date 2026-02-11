import { useState, useEffect } from 'react'
import MainHeader from '../header/MainHeader'
import ProjectCard from '../components/project/ProjectCard'
import { projectData } from '../components/project/projectData'
import MainFooter from '../footer/MainFooter'
import Time from '../components/Q&A/Time'
import { pageTitleStyle, body20Style } from '../styles/typography'
import star from '../assets/star.svg'

const Project = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const pageTitleStyleMobile = {
    ...pageTitleStyle,
    fontSize: "33px",
    lineHeight: "45px",
  }

  return (
    <div className="bg-[linear-gradient(180deg,#000000_0%,#3A250A_100%)] font-pretendard h-screen overflow-hidden flex flex-col">
      <div className="fixed top-0 left-0 w-full z-20">
        <MainHeader />
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden no-scrollbar snap-container-inner pt-[120px] max-md:pt-[0px]">
      <section className="snap-section-center min-h-0 pt-0">
      <div className="max-w-[1080px] mx-auto px-6 max-md:px-4">
 
        <div className="mt-24 max-md:mt-8">
          <div className="flex flex-row items-center gap-4 max-md:gap-2 mb-2">
            <img src={star} alt="star" className="w-6 h-6 max-md:w-4 max-md:h-4" />
            <span className="text-[20px] max-md:text-[20px] bg-linear-to-r from-[#FF9000] to-[#FF5E00] bg-clip-text text-transparent [-webkit-text-stroke:0.2px_#FFAE00] [text-shadow:0_1.5px_1px_rgba(124,66,5,0.9)]">
              Project
            </span>
          </div>
          <h1 style={isMobile ? { ...pageTitleStyleMobile, color: "#FFFFFF" } : { ...pageTitleStyle, color: "#FFFFFF" }}>
            아이디어가 <span style={isMobile ? { ...pageTitleStyleMobile, color: "#FF9000" } : { ...pageTitleStyle, color: "#FF9000" }}>'프로젝트'</span>로
          </h1>
          <p className="mt-4 text-white max-md:text-[16px] max-md:mt-3 max-md:mb-3" style={body20Style}>
            멋쟁이사자처럼 13기 프로젝트 둘러보기
          </p>
          <p className="text-white max-md:text-[16px]" style={body20Style}>
            14기 여러분이 한 학기 동안 도전하게 될 프로젝트입니다.
          </p>
        </div>

        
        <div className="mt-20 max-md:mt-10 grid grid-cols-3 max-md:grid-cols-1 gap-x-[21px] gap-y-[47px] max-md:gap-y-6 max-md:place-items-center">
          {projectData.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
      </section>

      <Time />
      <MainFooter />
      </div>
    </div>
  )
}

export default Project