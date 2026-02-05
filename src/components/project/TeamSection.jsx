const TeamSection = ({ team }) => {
  return (
    <div
      className="
         w-[333px] h-[804px] shrink-0
    rounded-[30px]
    bg-white/[0.06]
    backdrop-blur-[20px]
    border border-white/[0.18]
    shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_40px_rgba(0,0,0,0.3)]
  pt-[20px] pb-[30px] px-[20.5px]
    space-y-8
      "
    >
      {/* P&D */}
      {team.pd && (
        <div className="space-y-3">
          {/* pill */}
          <div
            className="
              inline-flex items-center
              w-full
              h-[40px]
              px-[23px]
              rounded-full
              bg-[rgba(255,255,255,0.12)]
              border border-[rgba(255,255,255,0.2)]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]
            "
          >
            <span className=" bg-[linear-gradient(90deg,#FF9000_0%,#FF5E00_100%)]
    bg-clip-text 
    text-transparent text-[30px] font-black ">
              P&D
            </span>
          </div>

          {/* names */}
          {team.pd.map(name => (
            <p key={name} className="text-[24px] leading-[50px]">
              {name}
            </p>
          ))}
        </div>
      )}

      {/* FE */}
      {team.fe && (
        <div className="space-y-3">
          <div
            className="
              inline-flex items-center
             
              h-[40px]
              px-[23px]
              rounded-full
              bg-[rgba(255,255,255,0.12)]
              border border-[rgba(255,255,255,0.2)]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]
              w-full
            "
          >
            <span className=" bg-[linear-gradient(90deg,#FF9000_0%,#FF5E00_100%)]
    bg-clip-text
    text-transparent text-[30px] font-black">
              FE
            </span>
          </div>

          {team.fe.map(name => (
            <p key={name} className="text-[24px] leading-[50px]">
              {name}
            </p>
          ))}
        </div>
      )}

      {/* BE */}
      {team.be && (
        <div className="space-y-3">
          <div
            className="
            w-full
              inline-flex items-center
              h-[40px]
              px-[23px]
              rounded-full
              bg-[rgba(255,255,255,0.12)]
              border border-[rgba(255,255,255,0.2)]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]
            "
          >
            <span className=" bg-[linear-gradient(90deg,#FF9000_0%,#FF5E00_100%)]
    bg-clip-text
    text-transparent text-[30px] font-black">
              BE
            </span>
          </div>

          {team.be.map(name => (
            <p key={name} className="text-[24px] leading-[50px]">
              {name}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default TeamSection
