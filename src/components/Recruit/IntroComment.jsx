    import React, { useState, useEffect } from "react";

    const gradientOrangeStyle = {
      fontFamily: "Pretendard",
      fontWeight: 900,
      background: "linear-gradient(to right, #FF9000, #FF5E00)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      color: "transparent",
      textShadow: "0 4px 4px #FFFFFF25", //Inner Shadow
    };

    const semiBoldStyle = {
      fontFamily: "Pretendard",
      fontWeight: 600,
    };

    const IntroComment = () => {
      const [isMobile, setIsMobile] = useState(false)

      useEffect(() => {
        const checkMobile = () => {
          setIsMobile(window.innerWidth < 768)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        
        return () => window.removeEventListener('resize', checkMobile)
      }, [])

      const largeTextStyleMobile = {
        fontSize: "28px",
        lineHeight: "40px",
        ...semiBoldStyle,
      }

      const smallTextStyleMobile = {
        fontSize: "18px",
        lineHeight: "28px",
      }

      const largeTextStyleDesktop = {
        fontSize: "58px",
        lineHeight: "76px",
        ...semiBoldStyle,
      }

      const smallTextStyleDesktop = {
        fontSize: "30px",
        lineHeight: "50px",
      }

      return (
        <section
          className="pt-[19vh] max-md:pt-[30px] px-5 sm:px-10 md:px-[200px] max-md:px-4 pb-[16vh] max-md:pb-[20px] box-border"
          style={semiBoldStyle}
        >
          <div className="w-full max-w-[1040px] mx-auto">
            <div className="w-full max-w-[1040px] max-md:max-w-full h-[50px] max-md:h-auto flex items-center justify-start text-left mx-auto">
              <p 
                className="text-[#FFFFFF] tracking-normal max-md:break-all"
                style={isMobile ? smallTextStyleMobile : smallTextStyleDesktop}
              >
                {isMobile ? (
                  <>
                    멋쟁이 사자처럼은 &apos;잘하는 사람&apos;보다.<br />
                    <span className="text-[#FF9000]">
                      &apos;진짜 해보고 싶은 사람&apos;을
                    </span>{" "}
                    찾습니다.
                  </>
                ) : (
                  <>
                    멋쟁이 사자처럼은 &apos;잘하는 사람&apos;보다.{" "}
                    <span className="text-[#FF9000]">
                      &apos;진짜 해보고 싶은 사람&apos;을
                    </span>{" "}
                    찾습니다.
                  </>
                )}
              </p>
            </div>
            <div className="h-[22px] max-md:h-[12px] shrink-0" />
            <div
              className="w-full max-w-[1040px] max-md:max-w-full mx-auto text-left"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                className="text-white tracking-normal max-md:break-all"
                style={isMobile ? largeTextStyleMobile : largeTextStyleDesktop}
              >
                <span style={gradientOrangeStyle}>실력은 우리가</span>
                {/* 공백 2칸 처리 */}
                {"\u00A0\u00A0"}
                <span style={semiBoldStyle}>만듭니다.</span>
              </p>
              <p
                className="text-white tracking-normal max-md:break-all"
                style={isMobile ? largeTextStyleMobile : largeTextStyleDesktop}
              >
                <span style={gradientOrangeStyle}>의지만,</span>{" "}
                <span style={semiBoldStyle}>가져오세요.</span>
              </p>
            </div>
          </div>
        </section>
      );
    };

    export default IntroComment;