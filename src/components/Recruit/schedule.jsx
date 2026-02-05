import React from "react";
import ScheduleData from "../../data/ScheduleData";
import light from "/src/assets/star.svg";
import {
    mediumStyle,
    semiBoldStyle,
    boldStyle
} from "../../styles/typography";

const dateGradient = {
	background: "linear-gradient(90deg, #FFAE00, #FF9F00, #FF5E00)",
	backgroundClip: "text",
	WebkitBackgroundClip: "text",
	WebkitTextFillColor: "transparent",
};

const Schedule = () => {
	return (
		<section className="relative w-full px-[200px] pb-[333px] box-border overflow-hidden">
			<div className="relative w-full max-w-[1040px] mx-auto">
				<div className="flex items-center text-left w-[632.6772px] h-[35.6772px] gap-[19px]">
					<img src={light} alt="schedule" className="w-[35.6772px] h-[35.6772px] shrink-0" />
					<span
						style={{
							...mediumStyle,
							fontSize: "20px",
							fontStyle: "normal",
							background: "linear-gradient(180deg, #FFAF01, #be781d 0%)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							WebkitTextStrokeWidth: "0.1px",
							WebkitTextStrokeColor: "#FFAF01",
							textShadow: "0 4px 1.8px #00000080",
						}}
					>
						Activscheduleity
					</span>
				</div>

				<div className="mt-[27.10px]">
					<p
						className="w-[598px] h-[60px] m-0"
						style={{
							...semiBoldStyle,
							color: "#C56908",
							fontSize: "40px",
							lineHeight: "60px",
							textShadow: "0 2px 4px #0000004D",
						}}
					>
						지원 후 이렇게 진행돼요!
					</p>
				</div>

				<div className="mt-[118.16px] flex flex-row flex-wrap gap-5">
					{ScheduleData.map((card) => (
						<div
							key={card.id}
							className="w-[245px] h-[395px] min-w-[245px] min-h-[395px] bg-transparent p-px rounded-[30px] shrink-0"
						>
							<div
								className="relative w-full h-full rounded-[30px] overflow-hidden flex flex-col box-border pt-[50.14px] pb-[16.78px] px-6 border border-[#3B2A1A80] backdrop-blur-md shadow-[inset_0_1px_0_0_#FFFFFF14,0_4px_24px_#0000001F]"
								style={{
									background:
										"linear-gradient(135deg, #FFAE002E 0%, #FF9F001F 50%, #FF5E002E 100%)",
									WebkitBackdropFilter: "blur(12px)",
								}}
							>
								<div
									className="absolute top-0 left-0 w-[70%] h-[55%] pointer-events-none"
									style={{
										background:
											"radial-gradient(ellipse 90% 90% at 0% 0%, #FFDCA038 0%, #FFBE640F 45%, transparent 70%)",
									}}
								/>

								<div className="relative shrink-0 text-center">
									{Array.isArray(card.title) ? (
										<p
											className="text-white whitespace-pre-line m-0"
											style={{
												...semiBoldStyle,
												fontSize: "32px",
												lineHeight: "50px",
												fontStyle: "normal",
												letterSpacing: "normal",
											}}
										>
											{card.title.join("\n")}
										</p>
									) : (
										<p
											className="text-white m-0"
											style={{
												...semiBoldStyle,
												fontSize: "32px",
												lineHeight: "50px",
												fontStyle: "normal",
												letterSpacing: "normal",
											}}
										>
											{card.title}
										</p>
									)}
								</div>

								<div className="flex-1 min-h-0" />

								<div className="relative flex shrink-0 flex-col items-stretch -ml-[6.3px] -mr-[4.07px] w-[calc(100%+6.3px+4.07px)]">
									{card.dateType === "range" ? (
										<div className="flex flex-col w-full gap-0 items-start">
											<span
												className="inline-block"
												style={{
													...boldStyle,
													fontSize: "40px",
													lineHeight: "normal",
													fontStyle: "normal",
													letterSpacing: "normal",
													...dateGradient,
												}}
											>
												{card.dateStart}
											</span>
											<span
												className="inline-block self-end"
												style={{
													...boldStyle,
													fontSize: "40px",
													lineHeight: "normal",
													fontStyle: "normal",
													letterSpacing: "normal",
													...dateGradient,
												}}
											>
												~ {card.dateEnd}
											</span>
										</div>
									) : (
										<span
											className="inline-block self-end"
											style={{
												...boldStyle,
												fontSize: "40px",
												lineHeight: "normal",
												fontStyle: "normal",
												letterSpacing: "normal",
												...dateGradient,
											}}
										>
											{card.dateSingle}
										</span>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Schedule;
