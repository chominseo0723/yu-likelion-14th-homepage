import React, { useState, useEffect } from "react";
import ScheduleData from "../../data/ScheduleData";
import star from "../../assets/star.svg";
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

const TIMELINE_DOT_TOP_POSITION = "35px";
const CARD_GAP = "20px";
const HORIZONTAL_PADDING = "20px";

const ScheduleDesktop = () => {
	return (
		<section
			className="relative w-full px-[200px] pb-[16vh] box-border"
			style={{ overflow: "visible" }}
		>
			<div className="relative w-full max-w-[1040px] mx-auto">
				<div className="flex items-center text-left w-[632.6772px] h-[35.6772px] gap-[19px] pt-[19vh]">
					<img src={star} alt="star" />
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
						Activity
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

				<div className="mt-[118.16px] flex flex-row flex-wrap gap-5 relative">
					{ScheduleData.map((card) => (
						<div
							key={card.id}
							className="relative w-[245px] h-[395px] min-w-[245px] min-h-[395px] bg-transparent p-[1px] rounded-[30px] shrink-0"
						>
							<div 
								className="absolute pointer-events-none z-20" 
								style={{ 
									top: TIMELINE_DOT_TOP_POSITION,
									left: HORIZONTAL_PADDING,
									width: `calc(108% - ${HORIZONTAL_PADDING} * 2)`,
									height: "3px",
									opacity: 0.6,
									transform: "translateY(-50%)"
								}}
							>
								<div
									className="w-full h-full"
									style={{
										background: "linear-gradient(90deg, #FFAE00 0%, #FF8A00 50%, #FF5E00 100%)",
										boxShadow: "0 0 12px rgba(255, 140, 0, 0.35)",
										filter: "blur(1.5px)"
									}}
								/>
							</div>
							
							<div className="absolute pointer-events-none z-20" style={{ top: TIMELINE_DOT_TOP_POSITION, left: HORIZONTAL_PADDING, transform: "translate(-50%, -50%)", opacity: 0.7 }}>
								<span 
									className="block w-[12px] h-[12px] rounded-full bg-white" 
									style={{
										boxShadow: "0 0 12px rgba(255, 210, 140, 0.9), 0 0 24px rgba(255, 140, 0, 0.65)",
										filter: "blur(2px)"
									}} 
								/>
							</div>
							
							<div
								className="absolute inset-0 rounded-[30px] backdrop-blur-md bg-white/1 pointer-events-none z-10"
								aria-hidden="true"
							/>
							<div
								className="relative w-full h-full rounded-[30px] overflow-hidden flex flex-col box-border pt-[50.14px] pb-[16.78px] px-6 glass glass-ideal glass-header z-10"
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

const ScheduleMobile = () => {
	const titleStyleMobile = {
		...semiBoldStyle,
		color: "#C56908",
		fontSize: "24px",
		lineHeight: "36px",
		textShadow: "0 2px 4px #0000004D",
	};

	return (
		<section
			className="relative w-full px-[200px] max-md:px-4 pb-[16vh] max-md:pb-8 box-border"
			style={{ overflow: "visible" }}
		>
			<div className="relative w-full max-w-[1040px] mx-auto">
				<div className="flex items-center text-left w-[632.6772px] max-md:w-full h-[35.6772px] gap-[19px] max-md:gap-2 pt-[19vh] max-md:pt-12">
					<img src={star} alt="star" className="max-md:w-4 max-md:h-4" />
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
						className="max-md:text-[20px]"
					>
						Activity
					</span>
				</div>

				<div className="mt-[27.10px] max-md:mt-4">
					<p
						className="w-[598px] max-md:w-full h-[60px] max-md:h-auto m-0"
						style={titleStyleMobile}
					>
						지원 후 이렇게 진행돼요!
					</p>
				</div>

				<div className="mt-[118.16px] max-md:mt-8 flex flex-row max-md:flex-col flex-wrap gap-5 max-md:gap-4 relative max-md:items-center">
					{ScheduleData.map((card) => (
						<div
							key={card.id}
							className="relative w-[245px] h-[395px] max-md:w-full max-md:max-w-full min-w-[245px] max-md:min-w-0 max-md:h-auto bg-transparent p-[1px] rounded-[30px] max-md:rounded-[20px] shrink-0"
						>
							<div 
								className="absolute pointer-events-none z-20 max-md:hidden" 
								style={{ 
									top: TIMELINE_DOT_TOP_POSITION,
									left: HORIZONTAL_PADDING,
									width: `calc(108% - ${HORIZONTAL_PADDING} * 2)`,
									height: "3px",
									opacity: 0.6,
									transform: "translateY(-50%)"
								}}
							>
								<div
									className="w-full h-full"
									style={{
										background: "linear-gradient(90deg, #FFAE00 0%, #FF8A00 50%, #FF5E00 100%)",
										boxShadow: "0 0 12px rgba(255, 140, 0, 0.35)",
										filter: "blur(1.5px)"
									}}
								/>
							</div>
							
							<div className="absolute pointer-events-none z-20 max-md:hidden" style={{ top: TIMELINE_DOT_TOP_POSITION, left: HORIZONTAL_PADDING, transform: "translate(-50%, -50%)", opacity: 0.7 }}>
								<span 
									className="block w-[12px] h-[12px] rounded-full bg-white" 
									style={{
										boxShadow: "0 0 12px rgba(255, 210, 140, 0.9), 0 0 24px rgba(255, 140, 0, 0.65)",
										filter: "blur(2px)"
									}} 
								/>
							</div>
							
							<div
								className="absolute inset-0 rounded-[30px] max-md:rounded-[20px] backdrop-blur-md bg-white/1 pointer-events-none z-10"
								aria-hidden="true"
							/>
							<div
								className="relative w-full h-full rounded-[30px] max-md:rounded-[20px] overflow-hidden flex flex-col box-border pt-[50.14px] max-md:pt-5 pb-[16.78px] max-md:pb-5 px-6 max-md:px-5 glass glass-ideal glass-header z-10 max-md:glass-event max-md:annual-schedule-blur"
							>
								<div
									className="absolute top-0 left-0 w-[70%] h-[55%] pointer-events-none"
									style={{
										background:
											"radial-gradient(ellipse 90% 90% at 0% 0%, #FFDCA038 0%, #FFBE640F 45%, transparent 70%)",
									}}
								/>

								<div className="relative shrink-0 text-center max-md:text-left">
									{Array.isArray(card.title) ? (
										<p
											className="text-white whitespace-pre-line m-0 max-md:text-[18px] max-md:leading-[28px] max-md:font-bold"
											style={{
												...semiBoldStyle,
												fontSize: "20px",
												lineHeight: "30px",
												fontStyle: "normal",
												letterSpacing: "normal",
											}}
										>
											{card.title.join("\n")}
										</p>
									) : (
										<p
											className="text-white m-0 max-md:text-[18px] max-md:leading-[28px] max-md:font-bold"
											style={{
												...semiBoldStyle,
												fontSize: "20px",
												lineHeight: "30px",
												fontStyle: "normal",
												letterSpacing: "normal",
											}}
										>
											{card.title}
										</p>
									)}
								</div>

								<div className="flex-1 min-h-0 max-md:hidden" />

								<div className="relative flex shrink-0 flex-col items-stretch -ml-[6.3px] -mr-[4.07px] w-[calc(100%+6.3px+4.07px)] max-md:mt-2 max-md:-ml-0 max-md:-mr-0 max-md:w-full max-md:items-start">
									{card.dateType === "range" ? (
										<div className="flex flex-col w-full gap-0 items-start max-md:flex-row max-md:gap-1 max-md:items-center">
											<span
												className="inline-block max-md:text-[14px] max-md:text-[#FF9000]"
												style={{
													...boldStyle,
													fontSize: "20px",
													lineHeight: "normal",
													fontStyle: "normal",
													letterSpacing: "normal",
													...dateGradient,
												}}
											>
												{card.dateStart}
											</span>
											<span
												className="inline-block self-end max-md:self-auto max-md:text-[14px] max-md:text-[#FF9000]"
												style={{
													...boldStyle,
													fontSize: "20px",
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
											className="inline-block self-end max-md:self-start max-md:text-[14px] max-md:text-[#FF9000]"
											style={{
												...boldStyle,
												fontSize: "20px",
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

const Schedule = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	return isMobile ? <ScheduleMobile /> : <ScheduleDesktop />;
};

export default Schedule;