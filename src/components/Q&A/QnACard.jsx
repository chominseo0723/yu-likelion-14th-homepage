import React, { useState } from 'react'

const QnACard = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false)

  const lines = a.split('\n')

  let isNoticeBlock = false

  return (
    <div className="w-172 mb-6 font-pretendard">
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
  className={`
    transition-all duration-300 ease-out
    leading-tight
    ${isOpen
      ? "font-bold text-[28px] bg-[linear-gradient(90deg,#FF9000_0%,#FF5E00_100%)] bg-clip-text text-transparent"
      : "text-white font-medium text-[24px]"}
  `}
>
  Q. {q}
</span>
      </button>

      {/* A */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
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
          <div className="leading-relaxed">
            {lines.map((line, idx) => {
              const trimmed = line.trim()

              if (trimmed.startsWith('(')) {
                isNoticeBlock = true
              }

              const isNotice = isNoticeBlock

              if (trimmed.endsWith(')')) {
                isNoticeBlock = false
              }

              return (
                <p
                  key={idx}
                  className={
                    isNotice
                      ? 'text-[15px] text-[#C56908] mt-3'
                      : 'text-[22px] text-white'
                  }
                >
                  {line}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QnACard
