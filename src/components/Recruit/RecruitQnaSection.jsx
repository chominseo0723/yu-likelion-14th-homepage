import React from "react";
import star from "/workspaces/yu-likelion-14th-homepage/src/assets/star.svg";
import {
	mediumStyle,
	titleStyle,
} from "../../styles/typography";
import QnACard from "../Q&A/QnACard";
import { QNA_DATA } from "../../data/qnaData";
import Time from "../Q&A/Time";
import akar from "../../assets/akar-icons_arrow-back.svg";
import instagram from "../../assets/instagram-logo.svg";
import kakao from "../../assets/kakao-talk_logo.svg";

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

const RecruitQnaSection = () => {
	const qnaList = QNA_DATA["주요"] || [];

	return (
		<section
			className="relative w-full px-4 sm:px-8 md:px-12 lg:px-[200px] pb-[16vh] box-border"
			style={{ overflow: "visible" }}
		>
			<div className="relative w-full max-w-[1040px] mx-auto">
				<div className="flex w-full max-w-[632.6772px] h-[35.6772px] items-center gap-[19px] text-left pt-[19vh]">
					<img src={star} alt="star" />
					<span style={sectionLabelStyle}>Q&A</span>
				</div>
				<div className="mt-[27.16px]">
					<p
						className="w-full max-w-[598px] h-[60px] m-0"
						style={{ ...titleStyle, fontSize: "40px", lineHeight: "60px" }}
					>
						멋사에 이런게 궁금해요!
					</p>
				</div>

				<div className="flex flex-col items-center mt-[87.76px]">
					{qnaList.map((item, idx) => (
						<QnACard key={idx} q={item.q} a={item.a} />
					))}

					<span className="text-[20px] text-[#87725F] mt-[26px] w-full sm:w-96 md:w-[500px] lg:w-175 max-w-[90vw] text-right">
						추가로 궁금한 점이 있다면 디엠과 오픈채팅방으로 문의하세요
					</span>
					<div className="flex flex-row mt-3 gap-4 items-center w-full sm:w-96 md:w-[500px] lg:w-175 max-w-[90vw] justify-end">
						<img src={akar} alt="" />
						<a
							href="https://www.instagram.com/likelion_yu/"
							target="_blank"
							rel="noopener noreferrer"
							className="icon-contact-warm group relative flex items-center justify-center w-[50px] h-[50px] rounded-full transition-all duration-300 hover:scale-105 active:scale-95 [WebkitTouchCallout:none] select-none"
						>
							<img src={instagram} alt="멋쟁이사자처럼 영남대 인스타그램" className="w-[24px] h-[24px]" />
						</a>
						<a
							href="https://open.kakao.com/o/sDw4nwdi"
							target="_blank"
							rel="noopener noreferrer"
							className="icon-contact-warm group relative flex items-center justify-center w-[50px] h-[50px] rounded-full transition-all duration-300 hover:scale-105 active:scale-95 [WebkitTouchCallout:none] select-none"
						>
							<img src={kakao} alt="카카오 오픈채팅" className="w-[24px] h-[24px]" />
						</a>
					</div>
				</div>

				<Time />
			</div>
		</section>
	);
};

export default RecruitQnaSection;
