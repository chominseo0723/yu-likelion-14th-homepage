import { useNavigate } from "react-router-dom";

const ProjectCard = ({
  id,
  tag,
  image,
  title,
  subtitle,
  description,
  author,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/project/${id}`)}
      className="
        w-[333px] h-[355px] max-md:w-full max-md:max-w-[333px] max-md:h-auto max-md:min-h-[355px]
        glass-projectCard
        shadow-[0_4px_4px_rgba(255,255,255,0.25)] font-pretendard
        p-4
        text-white
        cursor-pointer
      "
    >
      {/* 썸네일 영역 */}
      <div className="relative w-full h-[181px] rounded-[30px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        {/* 아이디어톤 태그 */}
        <span className="absolute top-3 left-3 text-xs w-16 text-center bg-[#000000]/10 py-2 rounded-[40px] text-white text-[12px]">
          {tag}
        </span>
      </div>

      {/* 텍스트 영역 */}
      <div className="mt-[17.88px]">
        {/* 제목 */}
        <div className="flex items-end gap-2 max-md:flex-wrap">
          <h3 className="text-[32px] max-md:text-[33px] font-bold leading-[50px] max-md:leading-[45px]">
            {title}
          </h3>
          <span className="text-[16px] max-md:text-[14px] font-light text-white leading-[50px] max-md:leading-[45px]">
            {subtitle}
          </span>
        </div>

        {/* 설명 */}
        <p className="mt-[6px] text-[12px] leading-[20px] text-white line-clamp-2 max-md:break-all">
          {description}
        </p>

        {/* 작성자 */}
        <div className="mt-[8px] text-[10px] text-white text-right">
          {author}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
