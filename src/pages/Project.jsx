import MainHeader from '../header/MainHeader'
import ProjectCard from '../components/project/ProjectCard'
import { projectData } from '../components/project/projectData'
import MainFooter from '../footer/MainFooter'
import Time from '../components/Q&A/Time'

const Project = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#000000_0%,#3A250A_100%)] min-h-screen font-pretendard">
      <MainHeader />

      {/* 타이틀 */}
      <div className="mt-24 ml-50">
        <h1 className="text-[42px] font-semibold text-white">
          아이디어가 <span className="text-[#FF9000]">'프로젝트'</span>로
        </h1>
        <p className="mt-4 text-white text-[20px]">
          멋쟁이사자처럼 13기 프로젝트 둘러보기
        </p>
        <p className="text-white text-[20px]">
          14기 여러분이 한 학기 동안 도전하게 될 프로젝트입니다.
        </p>
      </div>

      {/* 카드 그리드 */}
      <div className="mt-20 px-50 grid grid-cols-3 gap-x-[21px] gap-y-[47px]">
        {projectData.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
        <Time/>
      <MainFooter/>
    </div>
  )
}

export default Project
