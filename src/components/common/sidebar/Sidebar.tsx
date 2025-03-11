import React from 'react';
import style from './sidebar.module.scss';
import ClearIcon from '@mui/icons-material/Clear';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <div className={style.sidebar_container}>
      <div className={style.header_container}>
        <div>로고</div>
        <ClearIcon 
          className={style.exist_icon} 
          aria-label="사이드바 닫기" 
          onClick={onClose} 
        />
      </div>
      <div className={style.main_container}>
        <ul className={style.ul_container}>
          <li>로그인</li>
          <li>나만의 코스</li>
          <li>오늘의 코스</li>
          <li>캘린더</li>
          <li>공지</li>
          <li>문의하기</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
