import React, { ReactNode, useState } from 'react'; // ReactNode 추가
import { Outlet } from 'react-router-dom';
import MainHeader from '../components/common/headers/main/MainHeader';
import ServiceHeader from '../components/common/headers/service/ServiceHeader';
import Footer from '../components/common/footer/Footer';
import styles from './Layout.module.scss';
import Sidebar from '../components/common/sidebar/Sidebar';
import Overlay from '../components/common/overlay/Overlay';

interface LayoutProps {
  serviceTitle?: string;
  serviceDescription?: string; 
  hideServiceHeader?: boolean; 
  children: ReactNode; 
}

const Layout = ({ serviceTitle, serviceDescription, hideServiceHeader = false, children } :LayoutProps ) => {
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
        {children} {/* children을 여기에 렌더링 */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
