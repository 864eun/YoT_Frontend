import React, { useState } from 'react';
import MainHeader from '../components/common/headers/main/MainHeader';
import ServiceHeader from '../components/common/headers/service/ServiceHeader';
import Footer from '../components/common/footer/Footer';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import Sidebar from '../components/common/sidebar/sidebar';

interface LayoutProps {
  serviceTitle?: string;
  serviceDescription?: string;
  hideServiceHeader?: boolean;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ 
  serviceTitle, 
  serviceDescription, 
  hideServiceHeader = false 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseSidebar = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.layout_container}>
      <MainHeader onMenuClick={handleMenuClick} />
      {!hideServiceHeader && (
        <ServiceHeader title={serviceTitle} description={serviceDescription} />
      )}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={handleCloseSidebar}>
          <Sidebar onClose={handleCloseSidebar} />
        </div>
      )}
      <main className={styles.main_container}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
