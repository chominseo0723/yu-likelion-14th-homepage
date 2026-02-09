import React, { useState } from 'react'
import {
  qnaQuestionOpenStyle,
  qnaQuestionClosedStyle,
  qnaAnswerStyle,
} from '../../styles/typography'

const QnACard = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-175 mb-6 font-pretendard">
      {/* Q */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`
          glass-qna
          w-full text-left
          px-6 py-6
          flex items-center justify-between
          transition-all duration-200
          ${isOpen ? 'rounded-t-[30px] rounded-b-none' : 'rounded-[30px]'}
        `}
      >
      <span
        className={`transition-all duration-300 ease-out ${
          isOpen
            ? "bg-[linear-gradient(90deg,#FF9000_0%,#FF5E00_100%)] bg-clip-text text-transparent"
            : "text-white"
        }`}
        style={isOpen ? qnaQuestionOpenStyle : qnaQuestionClosedStyle}
      >
        Q. {q}
      </span>
      </button>

      {/* A */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div
          className="
            glass-qna
            px-8 py-6
            rounded-b-[30px]
            border-t-0
          "
        >
          <div
            className="leading-relaxed whitespace-pre-line pl-[1em] -indent-[1em]"
            style={{ ...qnaAnswerStyle, color: '#FFFFFF' }}
          >
            {a}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QnACard
