import React from "react";
import style from "./sidebar.module.scss";
import ClearIcon from "@mui/icons-material/Clear";

interface SidebarProps {
  onClose: () => void;
  isOpen: boolean; // 사이드바가 열렸는지 닫혔는지 여부
}

const Sidebar = ({ onClose, isOpen }: SidebarProps) => {
  return (
    <div
      className={`${style.sidebar_container} ${isOpen ? style.open : ""}`}
    >
      <div className={style.header_container}>
        <div className={style.logo_container} aria-label="YoT로고">
          YoT
        </div>
        <div className={style.icon_container}>
          <ClearIcon
            className={style.exist_icon}
            aria-label="사이드바 닫기"
            onClick={onClose}
          />
        </div>
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
