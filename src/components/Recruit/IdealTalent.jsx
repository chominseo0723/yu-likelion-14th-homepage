import React from "react";
import IdealTalentData from "../../data/IdealTalentData";
import light from "/src/assets/star.svg";
import recruitStarBackground from "../../assets/recruit-starbackground.png";
import {
	mediumStyle,
	semiBoldStyle,
	regularStyle,
	titleStyle,
} from "../../styles/typography";

const IdealTalent = () => {
	return (
		<section
			className="relative w-full px-[200px] pb-[416.22px] box-border"
			style={{ overflow: "visible" }}
		>
			<img
				src={recruitStarBackground}
				alt="constellation background"
				className="pointer-events-none absolute"
				style={{
					width: "1177.6976px",
					height: "auto",
					top: "56%",
					right: "30px",
					transform: "translateY(-50%) rotate(-8.36deg)",
					opacity: 0.9,
					zIndex: 0,
				}}
			/>
			<div className="relative w-full max-w-[1040px] mx-auto z-10">
				<div className="flex w-[632.6772px] h-[35.6772px] items-center gap-[19px] text-left">
                    {/* asset 변경 필요 */}
					<img src={light} alt="star" style={{ width: "35.6772px", height: "35.6772px" }}/> 
					<span
						style={{
							...mediumStyle,
							fontSize: "20px",
							fontStyle: "normal",
							background: "linear-gradient(180deg, #FFAF01, #be781d	 0%)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							WebkitTextStrokeWidth: "0.1px",
							WebkitTextStrokeColor: "#FFAF01",
							textShadow: "0 4px 1.8px #00000080",
						}}
					>
						Ideal talent
					</span>
				</div>
				<div className="mt-[27.16px]">
					<p
						className="w-[598px] h-[60px]"
						style={{ ...titleStyle, fontSize: "40px", lineHeight: "60px" }}
					>
						멋사는 이런분들을 기다려요!
					</p>
				</div>

				<div className="mt-[148.94px] flex flex-col gap-[27px]">
					  {IdealTalentData.map((card) => (
						<div
							key={card.id}
							className="relative w-full max-w-[599px] h-[305px] bg-transparent p-[1px] rounded-[30px]"
						>
							<div
								className="absolute inset-0 rounded-[30px] backdrop-blur-lg bg-white/5 pointer-events-none"
								aria-hidden="true"
							/>
							<div className="relative glass glass-ideal w-full h-full rounded-[30px] px-[30px] py-[30px]">
								<p
									className="text-white whitespace-pre-line"
									style={{
										...semiBoldStyle,
										fontSize: "42px",
										lineHeight: "60px",
										fontStyle: "normal",
									}}
								>
									{card.title}
								</p>
								<p 
									className="mt-[30px] text-[#E8D6C6] whitespace-pre-line"
									style={{
										...regularStyle,
										fontSize: "20px",
										lineHeight: "35px",
										fontStyle: "normal",
									}}>
									{card.body}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default IdealTalent;
