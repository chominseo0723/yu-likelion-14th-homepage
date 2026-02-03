import React from "react";
import beLogo from "../assets/BE.svg";
import feLogo from "../assets/FE.svg";
import pndLogo from "../assets/P&D.svg";

const TrackData = [
  {
    id: 1,
    title: "BE",
    subtitle: "Backend",
    description1:
      "Backend는 서비스의 핵심 로직과 데이터를 책임지는 트랙입니다.",
    description2:
      "API, 서버 구조, 데이터베이스를 설계하고 안정적인 서비스 운영 환경을 구축합니다.",
    description3:
      "Spring Boot를 중심으로 REST API 개발부터 배포, 인프라 기초까지 단계적으로 학습합니다.",
    image: beLogo,
  },
  {
    id: 2,
    title: "FE",
    subtitle: "Frontend",
    description1:
      "Frontend는 사용자가 만나는 화면과 인터페이스를 구현하는 트랙입니다.",
    description2:
      "기획•디자인을 바탕으로 UI/UX를\n코드로 옮기고, 백엔드와 연동해\n실제 기능을 완성합니다.",
    description3:
      "React를 중심으로 컴포넌트 설계부터\n 상태 관리, API 통신까지 단계적으로 학습합니다.",
    image: feLogo,
  },
  {
    id: 3,
    title: "P&D",
    subtitle: "Planning & Design",
    description1:
      "P&D는 서비스 기획과 UI/UX 디자인을\n 통해 프로젝트의 방향을 설계하는 트랙 입니다.",
    description2:
      "사용자 관점에서 문제를 정의하고,\n개발자와 협업하며 아이디어를 실제 서비스로 구체화합니다.",
    description3: "기획부터 디자인, 협업까지 전 과정을 경험합니다.",
    image: pndLogo,
  },
];

export default TrackData;
