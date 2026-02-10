import React from "react";
import star from "../../assets/star.svg";
import { mediumStyle, titleStyle } from "../../styles/typography";

const sectionLabelStyle = {
	...mediumStyle,
	fontSize: "20px",
	fontStyle: "normal",
	background: "linear-gradient(131.092deg, #FF900080 0.6854%, #FF5E0080 97.057%)",
	backgroundClip: "text",
	WebkitBackgroundClip: "text",
	WebkitTextFillColor: "transparent",
	WebkitTextStrokeWidth: "0.1px",
	WebkitTextStrokeColor: "#FFAF01",
	textShadow: "0 4px 1.8px #00000080",
};

const AnnualSchedule = () => {
	const gridWidth = 1040;
	const lineSpanWidth = 1010;
	const gridInset = (gridWidth - lineSpanWidth) / 2;
	const gridHeight = 358.418;
	const blockGap = 116.16;
	const secondBlockOffset = gridHeight + blockGap;
	const sessionTextStyle = {
		fontSize: "32px",
		lineHeight: "50px",
		fontWeight: 700,
		color: "#FFFFFF",
	};

	return (
		<section className="relative w-full px-[200px] pb-[353.89px] box-border overflow-hidden">
			<div className="relative w-full max-w-[1040px] mx-auto">
				<div className="flex w-full max-w-[632.6772px] h-[35.6772px] items-center gap-[19px] text-left pt-[120px]">
					<img src={star} alt="star" />
					<span style={sectionLabelStyle}>Annual schedule</span>
				</div>

				<div className="mt-[27.16px]">
					<p
						className="w-full max-w-[598px] h-[60px] m-0"
						style={{
							...titleStyle,
							fontSize: "40px",
							lineHeight: "60px",
							color: "#C56908",
						}}
					>
						1년 동안 이렇게 함께해요
					</p>
				</div>

			<div 
				className="relative mt-[116.16px]"
				style={{
					width: `${gridWidth}px`,
					height: `${secondBlockOffset + gridHeight}px`,
					zIndex: 0,
				}}
			>
				{/* 세로 그리드 선*/}
				<div className="absolute inset-0" style={{ zIndex: -1 }}>
					{[0, secondBlockOffset].map((offset, groupIndex) => (
						<div
							key={groupIndex}
							className="absolute left-0"
							style={{ top: `${offset}px` }}
						>
							<div
								className="flex"
								style={{
									width: `${lineSpanWidth}px`,
									marginLeft: `${gridInset}px`,
									gap: "178px",
								}}
							>
								{[0, 1, 2, 3, 4, 5].map((index) => (
									<div
										key={index}
										className="relative"
										style={{
											width: "20px",
											height: `${gridHeight}px`,
										}}
									>
										<div
											className="absolute"
											style={{
												left: "50%",
												top: 0,
												transform: "translateX(-50%) scaleX(0.5)",
												transformOrigin: "center",
												width: "1px",
												height: `${gridHeight}px`,
												background: "linear-gradient(to bottom, #FFFFFF, #FF9000, #FF5E00, #000000)",
											}}
										/>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				{/* 상단 월별 레이블 영역 */}
				<div
					className="glass-main annual-schedule-blur relative flex items-center justify-center"
					style={{
						width: `${gridWidth}px`,
						height: "38px",
						zIndex: 1,
					}}
				>
					<div
						className="flex items-start justify-between text-center"
						style={{
							width: "864px",
							padding: "0",
							fontSize: "20px",
							fontWeight: 700,
							color: "#FFFFFF",
							lineHeight: "50px",
						}}
					>
						{["3월", "4월", "5월", "6월", "7월"].map((month) => (
							<p key={month} className="m-0">
								{month}
							</p>
						))}
					</div>
				</div>

				{/* 이벤트 박스들 */}
				<div
					className="glass-event annual-schedule-blur absolute flex items-center justify-center"
					style={{
						left: "0px",
						top: "88px",
						width: "863px",
						height: "90px",
						zIndex: 20,
					}}
				>
					<span style={sessionTextStyle}>1학기 정기 세션 주 2회</span>
				</div>

				<div
					className="glass-event annual-schedule-blur absolute flex items-center justify-center"
					style={{
						left: "0px",
						top: "208px",
						width: "422px",
						height: "100px",
						zIndex: 20,
					}}
				>
					<span style={sessionTextStyle}>네트워킹 데이 2회</span>
				</div>

				<div
					className="glass-event annual-schedule-blur absolute flex items-center justify-center"
					style={{
						left: "443px",
						top: "208px",
						width: "244px",
						height: "100px",
						zIndex: 20,
					}}
				>
					<span style={sessionTextStyle}>아이디어톤</span>
				</div>

				<div
					className="glass-event annual-schedule-blur absolute flex items-center justify-center"
					style={{
						left: "796px",
						top: "208px",
						width: "244px",
						height: "100px",
						zIndex: 20,
					}}
				>
					<span style={sessionTextStyle}>특강 세션</span>
				</div>

				{/* 하단 월별 레이블 영역 */}
				<div
					className="glass-main annual-schedule-blur absolute flex items-center justify-center"
					style={{
						top: `${secondBlockOffset}px`,
						left: "0px",
						width: `${gridWidth}px`,
						height: "38px",
						zIndex: 1,
					}}
				>
					<div
						className="flex items-center justify-between text-center"
						style={{
							width: "864px",
							padding: "0",
							fontWeight: 700,
							color: "#FFFFFF",
							lineHeight: "50px",
						}}
					>
						<p className="m-0" style={{ fontSize: "20px" }}>
							8월
						</p>
						<p className="m-0" style={{ fontSize: "24px" }}>
							9월
						</p>
						<p className="m-0" style={{ fontSize: "24px" }}>
							10월
						</p>
						<p className="m-0" style={{ fontSize: "24px" }}>
							11월
						</p>
						<p className="m-0" style={{ fontSize: "20px" }}>
							12월
						</p>
					</div>
				</div>

				<div
					className="glass-event annual-schedule-blur absolute flex items-center justify-center"
					style={{
						left: "0px",
						top: `${secondBlockOffset + 88}px`,
						width: "245px",
						height: "100px",
						zIndex: 20,
					}}
				>
					<span style={sessionTextStyle}>해커톤</span>
				</div>

				<div
					className="glass-event annual-schedule-blur absolute flex items-center justify-center"
					style={{
						left: "265px",
						top: `${secondBlockOffset + 88}px`,
						width: "775px",
						height: "100px",
						zIndex: 20,
					}}
				>
					<span style={sessionTextStyle}>연합/ 기업 해커톤</span>
				</div>
			</div>
			</div>
		</section>
	);
};

export default AnnualSchedule;