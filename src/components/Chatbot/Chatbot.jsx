import React, { useState, useRef, useEffect } from "react";
import { QNA_DATA, CHATBOT_ONLY_QNA } from "../../data/qnaData";
import OpenAI from "openai";
import likelionLogo from "../../assets/likelion_logo_chatbot.svg";
const MIN_KEYWORD_LENGTH = 1;
const MESSAGE_DELAY_MS = 500;
const OPEN_CHAT_URL = "https://open.kakao.com/o/sDw4nwdi";
const OPEN_CHAT_MESSAGE =
  "\n\n💬 추가 문의사항이 있으시면 오픈채팅방을 이용해주세요!\n👉 " +
  OPEN_CHAT_URL;

const LIKELION_CONTEXT = `
당신은 영남대학교 멋쟁이사자처럼 14기 챗봇입니다.

멋쟁이사자처럼(Likelion)은:
- 국내 최대 규모의 IT 창업 동아리입니다
- 기획, 디자인, 프론트엔드, 백엔드 개발을 배우고 실전 프로젝트를 진행합니다
- 영남대학교에서는 14기를 모집 중입니다
- **14기 아기사자 신청 기간은 3월 8일 23:59까지입니다**
- 한 기수는 기획/디자인 4명, 프론트엔드 12명, 백엔드 8명으로 총 24명, 4팀으로 활동합니다
- 비전공자도 지원 가능하며, 운영진이 직접 만든 교육 자료로 지원합니다
- 1년 단위로 활동하며, 신입 부원 모집은 매년 1학기에만 진행합니다
- 세션 교육, 아이디어톤, 해커톤 등 다양한 활동을 합니다
- 참가비는 30,000원입니다

답변할 때:
1. 친근하고 도움이 되는 톤으로 답변하세요
2. 짧고 명확하게 답변하세요 (2-3문장 내외)
3. 확실하지 않은 정보는 오픈채팅방으로 문의하라고 안내하세요
4. 한국어로 답변하세요
`;

const STOPWORDS = [
  "은","는","이","가","을","를","의","에","에서","와","과","도","로","으로","까지","부터",
  "한테","께","이나","나","요","이요","네요","어요","아요","해요","죠","지요","나요","까요",
  "어","아","지","고","며","면","서","게","도록","한","그","저","이런","저런","어떤","무슨",
  "어느","있","없","하",
];

const extractKeywords = (text) => {
  const words = text.replace(/[?!.,]/g, " ").split(/\s+/).filter(Boolean);
  const keywords = [];

  words.forEach((word) => {
    if (word.length >= MIN_KEYWORD_LENGTH && !STOPWORDS.includes(word)) {
      keywords.push(word);
    }
    for (const stopword of STOPWORDS) {
      if (word.endsWith(stopword) && word.length > stopword.length) {
        const stem = word.slice(0, -stopword.length);
        if (stem.length >= MIN_KEYWORD_LENGTH && !STOPWORDS.includes(stem)) {
          keywords.push(stem);
          break;
        }
      }
    }
  });

  return [...new Set(keywords)];
};

const renderMessageWithLinks = (text) => {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlPattern);

  return parts.map((part, index) => {
    if (part.match(urlPattern)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFB84D] hover:text-[#FF9000] underline font-semibold transition-colors"
        >
          {part}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
const [messages, setMessages] = useState([
  { 
    type: "bot", 
    text: "안녕하세요! 영남대 멋쟁이사자처럼 14기 챗봇입니다.\n무엇이 궁금하신가요?" 
  },
]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const findAnswer = (question) => {
  const lowerQuestion = String(question ?? "").toLowerCase().trim();
    const allQnA = [];

    Object.keys(QNA_DATA).forEach((category) => {
      QNA_DATA[category].forEach((item) => allQnA.push({ ...item, category }));
    });
    CHATBOT_ONLY_QNA.forEach((item) => allQnA.push({ ...item, category: "chatbot-only" }));

    const keywords = extractKeywords(lowerQuestion);

    return allQnA
      .map((item) => {
        let score = 0;
          const itemQ = String(item.q ?? "").toLowerCase();
      const itemA = String(item.a ?? "").toLowerCase();

      if (itemQ.includes(lowerQuestion)) score += 100;
        keywords.forEach((k) => {
              if (itemQ.includes(k)) score += 15;
        if (itemA.includes(k)) score += 8;
        });
        return { ...item, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
  };

  const askGPT = async (question) => {
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      return data.choices?.[0]?.message?.content || null;
    } catch (e) {
      console.error("API 호출 에러:", e);
      return null;
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const question = inputValue;
    setMessages((prev) => [...prev, { type: "user", text: question }]);
    setInputValue("");

    const answers = findAnswer(question);

    setTimeout(async () => {
      if (answers.length > 0 && answers[0].score >= 15) {
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: `${answers[0].q}\n\n${answers[0].a}${OPEN_CHAT_MESSAGE}` },
        ]);
      } else {
        setMessages((prev) => [...prev, { type: "bot", text: "🤔 답변을 생성하고 있습니다..." }]);

        const gptAnswer = await askGPT(question);

        setMessages((prev) =>
          prev.filter((msg) => msg.text !== "🤔 답변을 생성하고 있습니다...")
        );

        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: gptAnswer
              ? `${gptAnswer}${OPEN_CHAT_MESSAGE}`
              : `죄송합니다. 관련된 답변을 찾을 수 없습니다.${OPEN_CHAT_MESSAGE}`,
          },
        ]);
      }
    }, MESSAGE_DELAY_MS);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-8 z-40 font-pretendard">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="glass w-20 text-3xl h-20 rounded-full bg-gradient-to-r from-[#FF9000] to-[#FF5E00] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
        >
            <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="relative glass w-96 h-[calc(100vh-1.5rem)] max-h-[600px] bg-[#1a1a1a]/90 overflow-hidden">
          <div
            className="absolute inset-0 backdrop-blur-lg bg-white/5 pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative flex flex-col h-full">
            {/* 헤더 */}
            <div className="relative bg-gradient-to-r from-[#FF9000] to-[#FF5E00] p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={likelionLogo}
                  alt="멋쟁이사자처럼"
                  className="w-8 h-8"
                />
                <h3 className="text-white font-bold text-lg">
                  영남대 멋쟁이사자
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                aria-label="챗봇 닫기"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* 메시지 영역 */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-3 bg-[#0a0a0a]/50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-[#FF9000] to-[#FF5E00] text-white shadow-lg"
                        : "glass bg-[#2a2a2a]/70 text-white"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap break-words">
                      {renderMessageWithLinks(message.text)}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* 입력 영역 */}
            <div className="p-4 bg-[#1a1a1a]/80 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="질문을 입력하세요..."
                  className="flex-1 bg-[#2a2a2a] text-white px-4 py-3 rounded-xl 
                          border border-white/20 
                          focus:outline-none focus:border-[#FF9000] 
                          placeholder-gray-500
                          transition-all"
                />
                <button
                  onClick={handleSend}
                  className="bg-gradient-to-r from-[#FF9000] to-[#FF5E00] text-white px-6 py-3 rounded-xl 
                          hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  전송
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;