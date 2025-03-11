import React from 'react';
import styles from './MainHeader.module.scss';
import MenuIcon from '@mui/icons-material/Menu';

interface MainHeaderProps {
  onMenuClick: () => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({ onMenuClick }) => {
  return (
    <header className={styles.header_container}>
      <div className={styles.nav_container}>
        <div aria-label="YoT 로고" className={styles.logo_container}>
          로고
        </div>
        <div className={styles.log_in_container}>
          <span aria-label="로그인 화면 이동">LOG-IN</span>
        </div>
        <div className={styles.menu_container}>
          <MenuIcon
            className={styles.menu_icon}
            aria-label="메뉴 사이드바 활성화"
            onClick={onMenuClick}
          />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
