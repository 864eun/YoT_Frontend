import React, { useState } from 'react';
import MainHeader from '../components/common/headers/main/MainHeader';
import ServiceHeader from '../components/common/headers/service/ServiceHeader';
import Footer from '../components/common/footer/Footer';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import Sidebar from '../components/common/sidebar/Sidebar';
import Overlay from '../components/common/overlay/Overlay';

const Layout = ({ serviceTitle, serviceDescription, hideServiceHeader = false }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsOverlayOpen(!isOverlayOpen); 
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setIsOverlayOpen(false); 
  };

  return (
    <div className={styles.layout_container}>
      <MainHeader onMenuClick={handleMenuClick} />
      {!hideServiceHeader && (
        <ServiceHeader title={serviceTitle} description={serviceDescription} />
      )}
      <Overlay isOpen={isOverlayOpen} /> 
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <main className={styles.main_container}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
