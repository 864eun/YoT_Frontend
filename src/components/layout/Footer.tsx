import React from 'react';

function Footer() {
  return (
    <footer className="h-auto bottom-0 text-stone-500 px-4 py-7  bg-stone-200">
      <div className="container mx-auto  max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-4 text-sm ">
        <div>
          <h5 className="font-semibold mb-2">회사 정보</h5>
          <p>회사명: ABC Corp</p>
          <p>사업자번호: 123-45-67890</p>
          <p>서울시 강남구...</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">고객 지원</h5>
          <ul>
            <li>
              <a href="/faq" className="hover:underline">
                자주 묻는 질문
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                문의하기
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">정책</h5>
          <ul>
            <li>
              <a href="/terms" className="hover:underline">
                이용약관
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                개인정보처리방침
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">팔로우 하기</h5>
          <div className="flex space-x-3">
            <a href="#">
              <img src="/icons/facebook.svg" alt="Facebook" className="h-5" />
            </a>
            <a href="#">
              <img src="/icons/instagram.svg" alt="Instagram" className="h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-6">
        © 2025 ABC Corp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
