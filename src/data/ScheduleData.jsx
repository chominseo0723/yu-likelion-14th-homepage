const ScheduleData = [
  {
    id: 1,
    title: "서류 접수 기간",
    dateType: "range",
    dateStart: "02. 12",
    dateEnd: "03. 08",
  },
  {
    id: 2,
    title: ["서류 선발", "결과 및 면접", "희망일 통지"],
    dateType: "single",
    dateSingle: "03.09",
  },
  {
    id: 3,
    title: "면접 기간",
    dateType: "range",
    dateStart: "03. 11",
    dateEnd: "03.13",
  },
  {
    id: 4,
    title: ["최종 선발", "결과 통지"],
    dateType: "single",
    dateSingle: "03.15",
  },
];

export default ScheduleData;
