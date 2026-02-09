import MainHeader from '../header/MainHeader'
import ProjectCard from '../components/project/ProjectCard'
import { projectData } from '../components/project/projectData'
import MainFooter from '../footer/MainFooter'
import Time from '../components/Q&A/Time'
import { pageTitleStyle, body20Style } from '../styles/typography'

const Project = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#000000_0%,#3A250A_100%)] font-pretendard h-screen overflow-hidden flex flex-col">
      <div className="fixed top-0 left-0 w-full z-20">
        <MainHeader />
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden no-scrollbar snap-container-inner pt-[120px]">
      <section className="snap-section-center min-h-0 pt-0">
      <div className="max-w-[1080px] mx-auto px-6">
 
        <div className="mt-24">
          <h1 style={{ ...pageTitleStyle, color: "#FFFFFF" }}>
            아이디어가 <span style={{ ...pageTitleStyle, color: "#FF9000" }}>'프로젝트'</span>로
          </h1>
          <p className="mt-4 text-white" style={body20Style}>
            멋쟁이사자처럼 13기 프로젝트 둘러보기
          </p>
          <p className="text-white" style={body20Style}>
            14기 여러분이 한 학기 동안 도전하게 될 프로젝트입니다.
          </p>
        </div>

        
        <div className="mt-20 grid grid-cols-3 gap-x-[21px] gap-y-[47px]">
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
