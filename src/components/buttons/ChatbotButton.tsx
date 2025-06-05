import React, { useState } from 'react';

function ChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 챗봇 버튼 */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-orange-400 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
          aria-label="챗봇 열기"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 3.866-3.582 7-8 7a8.96 8.96 0 01-4.472-1.191L3 21l1.191-4.472A8.96 8.96 0 013 12c0-3.866 3.582-7 8-7s8 3.134 8 7z"
            />
          </svg>
        </button>
      )}

      {/* 챗봇 채팅창 */}
      {open && (
        <div className="fixed bottom-28 right-8 z-50 w-80 max-w-xs bg-gray-900 rounded-2xl shadow-2xl flex flex-col">
          {/* 상단바 및 닫기 버튼 */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-800 rounded-t-2xl">
            <span className="text-white font-bold">챗봇</span>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white text-2xl"
              aria-label="챗봇 닫기"
            >
              ×
            </button>
          </div>
          {/* 채팅 내용 */}
          <div className="flex-1 px-4 py-3 bg-gray-900 text-white overflow-y-auto text-sm">
            좋아하는 영화 장르나 제목을 알려주세요.
          </div>
          {/* 입력창 */}
          <div className="flex items-center px-4 py-3 bg-gray-800 rounded-b-2xl">
            <input
              type="text"
              className="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white border-none outline-none"
              placeholder="메시지를 입력하세요..."
            />
            <button className="ml-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-3 py-2 rounded-lg transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatbotButton;
