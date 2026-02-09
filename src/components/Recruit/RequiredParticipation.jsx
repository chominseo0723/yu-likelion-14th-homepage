import React from "react";
import RequiredParticipationData from "../../data/RequiredParticipationData";
import star from "/workspaces/yu-likelion-14th-homepage/src/assets/star.svg";
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
	return (
		<section
			className="relative w-full px-[200px] pb-[16vh] box-border"
			style={{ overflow: "visible" }}
		>
			<div className="relative w-full max-w-[1040px] mx-auto">
				<div className="flex w-full max-w-[632.6772px] h-[35.6772px] items-center gap-[19px] text-left pt-[19vh]">
					<img src={star} alt="star" />
					<span style={sectionLabelStyle}>Certificate</span>
				</div>
				<div className="mt-[27.16px]">
					<p
						className="w-full max-w-[598px] h-[60px] m-0"
						style={{
              ...titleStyle,
              fontSize: "40px",
              lineHeight: "60px",
            }}
					>
						수료증을 받기 위해서 지켜주세요!
					</p>
				</div>

				<div className="mt-[110.16px] grid grid-cols-2 gap-x-[10px]">
					{RequiredParticipationData.map((text, index) => (
						<div
							key={index}
							className={`w-full max-w-[511px] h-[106px] rounded-[30px] pl-[31px] pr-[31px] flex items-center justify-start box-border glass glass-ideal ${index === 0 ? "" : index === 1 ? "" : "mt-[31px]"}`}
						>
							<p
								className="text-left m-0"
								style={{
									...boldStyle,
									fontWeight: 700,
									fontFamily: "Pretendard",
									fontSize: "32px",
									lineHeight: "70px",
									color: "#FFFFFF",
								}}
							>
								{text}
							</p>
						</div>
					))}

					{/* 마지막은 카드형식 아니라 예외 */}
					<div className="w-full max-w-[511px] min-h-[106px] mt-[19px] pl-[8px] pr-[31px] flex flex-col justify-center overflow-visible box-border bg-transparent">
						<p
							className="mb-2"
							style={{
								...boldStyle,
								fontSize: "20px",
								color: "#AF6524",
							}}
						>
							(부득이한 상황 제외)
						</p>
						<p
							className="leading-relaxed m-0 whitespace-pre-line"
							style={{
								...boldStyle,
								fontSize: "16px",
								color: "#959595",
							}}
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
