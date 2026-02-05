import { useParams } from 'react-router-dom'
import { projectDetail } from '../data/projectDetail'
import TeamSection from '../components/project/TeamSection'
import MainHeader from '../header/MainHeader'
import MainFooter from '../footer/MainFooter'
import projectStar from '../assets/projectstar.svg'

const ProjectDetail = () => {
  const { id } = useParams()
  const data = projectDetail[id]

  if (!data) {
    return <div className="text-white">존재하지 않는 프로젝트입니다.</div>
  }

  return (
    <div className="relative
    min-h-screen
    overflow-hidden
    font-pretendard
    text-white

    bg-[radial-gradient(ellipse_at_center,rgba(120,80,30,0.25)_0%,rgba(0,0,0,0.85)_70%),linear-gradient(180deg,#000000_0%,#3A250A_100%)]">
      <img
        src={projectStar}
        alt=""
        className="
          absolute
        
          bottom-[160px]
          w-[1400px]
         
          mix-blend-screen
          pointer-events-none
          z-0
        "
      />

      <div className="relative z-10">
        <MainHeader />
        {/* 전체 컨테이너 */}
        <div className="max-w-[1080px]  mx-auto px-4 mb-60 ">
  <div className="w-[1072px] h-[603px] mx-auto rounded-[30px] overflow-hidden bg-black">
  <img
    src={data.heroImage}
    alt={data.title}
    className="w-full h-full object-contain"
  />
</div>


          {/* 태그 */}
<div className="flex gap-3 mt-10">
  {data.tag.map(tag => (
    <span
      key={tag}
      className="
        px-5 py-2
        rounded-[40px]
        text-[12px]
        font-medium
        bg-white/10
        border border-white/[0.25]
        backdrop-blur-md
      "
    >
      {tag}
    </span>
  ))}
</div>


          {/* 타이틀 */}
          <h1 className="mt-4 text-[42px] font-semibold leading-[60px]">
            {data.title}
            <span className="ml-2 text-[42px] font-normal">
              ({data.subtitle})
            </span>
          </h1>

          {/* 요약 */}
          <p className="mt-4 text-[20px] leading-[35px] max-w-[900px]">
            {data.summary}
          </p>

          {/* 메인 콘텐츠 */}
          <div className="flex gap-[40px] mt-20 items-start">
            {/* 팀 섹션 */}
            <TeamSection team={data.team} />

            {/* 서비스 설명 카드 */}
            <div
              className="
                flex-1
                rounded-[30px]
                bg-white/[0.06]
                backdrop-blur-[20px]
                border border-white/[0.18]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_40px_rgba(0,0,0,0.3)]
                p-10
                space-y-12
              "
            >
              {/* 서비스 배경 */}
              <div>
                <span className="text-[20px] font-semibold flex items-center gap-2">
                  🗯️ 서비스 배경
                </span>
                <p className="mt-4 text-[14px] leading-[35px] whitespace-pre-line">
                  {data.background}
                </p>
              </div>

              {/* 핵심 기능 */}
              <div>
                <span className="text-[20px] font-semibold flex items-center gap-2">
                  💡 서비스 소개 및 핵심 기능
                </span>
                <p className="mt-4 text-[14px] leading-[35px] whitespace-pre-line">
                  {data.solution}
                </p>
              </div>
            </div>
          </div>
        </div>

        <MainFooter />
      </div>
    </div>
  )
}

export default ProjectDetail
