import React, { useEffect, useState } from 'react';
import { FaBars, FaHome, FaVideo, FaCalendarAlt } from 'react-icons/fa';
import { SlDrawer } from 'react-icons/sl';
import { NavLink } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome />, to: '/' },
    {
      id: 'createVideo',
      label: 'createVideo',
      icon: <FaVideo />,
      to: '/create-video',
    },
    { id: 'myVideo', label: 'myVideo', icon: <SlDrawer />, to: '/myVideo' },
    {
      id: 'calendar',
      label: 'calendar',
      icon: <FaCalendarAlt />,
      to: '/calendar',
    },
  ];

  // 메뉴 클릭 시 닫기
  const handleMenuClick = () => setMenuOpen(false);

  return (
    <>
      {/* 오버레이: 헤더/메뉴보다 아래(z-40) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={handleMenuClick}
        ></div>
      )}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
          ${scrolled ? 'bg-stone-200 shadow-md' : 'bg-transparent'}
        `}
      >
        <nav className="flex justify-between items-center w-[92%] mx-auto py-2 relative">
          <div>
            <img
              className="w-16 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
              alt="..."
            />
          </div>
          {/* 모바일 메뉴 */}
          <div
            className={`
              nav-links transition-all duration-500
              ${
                menuOpen
                  ? 'fixed left-0 top-[64px] w-full bg-stone-200 z-50'
                  : 'hidden'
              }
              md:static md:block md:bg-transparent md:shadow-none md:w-auto
            `}
          >
            <ul className="flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-8 p-6 md:p-0">
              {navItems.map(item => (
                <NavLink
                  key={item.id}
                  to={item.to}
                  className="hover:text-stone-500 hover:font-semibold"
                  onClick={handleMenuClick}
                >
                  {item.label}
                </NavLink>
              ))}
            </ul>
          </div>
          {/* 햄버거 버튼 */}
          <div className="flex items-center gap-6">
            <button className="bg-stone-400 text-stone-200 px-5 py-2 rounded-full hover:bg-stone-500">
              Sign in
            </button>
            <FaBars
              className="md:hidden cursor-pointer z-50"
              size={28}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
