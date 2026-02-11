import React, { useState, useEffect } from "react";
import RequiredParticipationData from "../../data/RequiredParticipationData";
import star from "../../assets/star.svg";
import {
	mediumStyle,
	boldStyle,
	titleStyle,
} from "../../styles/typography";

const sectionLabelStyle = {
	...mediumStyle,
	fontSize: "20px",
	fontStyle: "normal",
	background: "linear-gradient(180deg, #FFAF01, #BE781D 0%)",
	backgroundClip: "text",
	WebkitBackgroundClip: "text",
	WebkitTextFillColor: "transparent",
	WebkitTextStrokeWidth: "0.1px",
	WebkitTextStrokeColor: "#FFAF01",
	textShadow: "0 4px 1.8px #00000080",
};

const RequiredParticipation = () => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}
		
		checkMobile()
		window.addEventListener('resize', checkMobile)
		
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	const titleStyleMobile = {
		...titleStyle,
		fontSize: "24px",
		lineHeight: "36px",
	}

	const cardTextStyleMobile = {
		...boldStyle,
		fontWeight: 700,
		fontFamily: "Pretendard",
		fontSize: "20px",
		lineHeight: "32px",
		color: "#FFFFFF",
	}

	const noteTextStyleMobile = {
		...boldStyle,
		fontSize: "16px",
		color: "#AF6524",
	}

	const smallTextStyleMobile = {
		...boldStyle,
		fontSize: "14px",
		color: "#959595",
	}

	const titleStyleDesktop = {
		...titleStyle,
		fontSize: "40px",
		lineHeight: "60px",
	}

	const cardTextStyleDesktop = {
		...boldStyle,
		fontWeight: 700,
		fontFamily: "Pretendard",
		fontSize: "32px",
		lineHeight: "70px",
		color: "#FFFFFF",
	}

	const noteTextStyleDesktop = {
		...boldStyle,
		fontSize: "20px",
		color: "#AF6524",
	}

	const smallTextStyleDesktop = {
		...boldStyle,
		fontSize: "16px",
		color: "#959595",
	}

	return (
		<section
			className="relative w-full px-[200px] max-md:px-4 pb-[16vh] max-md:pb-[8vh] box-border"
			style={{ overflow: "visible" }}
		>
			<div className="relative w-full max-w-[1040px] mx-auto">
				<div className="flex w-full max-w-[632.6772px] max-md:max-w-full h-[35.6772px] max-md:h-auto items-center gap-[19px] max-md:gap-2 text-left pt-[19vh] max-md:pt-[12vh]">
					<img src={star} alt="star" className="max-md:w-4 max-md:h-4" />
					<span className="max-md:text-[20px]" style={sectionLabelStyle}>Certificate</span>
				</div>
				<div className="mt-[27.16px] max-md:mt-4">
					<p
						className="w-full max-w-[598px] max-md:max-w-full h-[60px] max-md:h-auto m-0"
						style={isMobile ? titleStyleMobile : titleStyleDesktop}
					>
						수료증을 받기 위해서 지켜주세요!
					</p>
				</div>

				<div className="mt-[110.16px] max-md:mt-10 grid grid-cols-2 max-md:grid-cols-1 gap-x-[10px] gap-y-[31px] max-md:gap-y-4">
					{RequiredParticipationData.map((text, index) => (
						<div
							key={index}
							className={`w-full max-w-[511px] max-md:max-w-full h-[106px] max-md:h-auto max-md:min-h-[80px] rounded-[30px] pl-[31px] max-md:pl-5 pr-[31px] max-md:pr-5 flex items-center justify-start box-border glass glass-ideal ${index === 0 ? "" : index === 1 ? "" : "mt-[31px] max-md:mt-0"}`}
						>
							<p
								className="text-left m-0 max-md:break-all"
								style={isMobile ? cardTextStyleMobile : cardTextStyleDesktop}
							>
								{text}
							</p>
						</div>
					))}

					{/* 마지막은 카드형식 아니라 예외 */}
					<div className="w-full max-w-[511px] max-md:max-w-full min-h-[106px] max-md:min-h-0 mt-[19px] max-md:mt-0 pl-[8px] max-md:pl-0 pr-[31px] max-md:pr-0 flex flex-col justify-center overflow-visible box-border bg-transparent">
						<p
							className="mb-2"
							style={isMobile ? noteTextStyleMobile : noteTextStyleDesktop}
						>
							(부득이한 상황 제외)
						</p>
						<p
							className="leading-relaxed m-0 whitespace-pre-line max-md:leading-[24px]"
							style={isMobile ? smallTextStyleMobile : smallTextStyleDesktop}
						>
							증빙자료 제출 - 직계가족 경조사, 학교 내/외 공식 일정
							{"\n"}
							진단서 제출 - 건강상 문제
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RequiredParticipation;