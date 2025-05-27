import React from 'react';
import { FaBars, FaHome, FaVideo, FaCalendarAlt } from 'react-icons/fa';
import { SlDrawer } from 'react-icons/sl';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const navLinks = document.querySelector('.nav-links');
  function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu';
    navLinks.classList.toggle('top-[9%]');
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome />, to: '/' },
    {
      id: 'createVideo',
      label: 'createVideo',
      icon: <FaVideo />,
      to: '/create',
    },
    { id: 'myVideo', label: 'myVideo', icon: <SlDrawer />, to: '/myVideo' },
    {
      id: 'calendar',
      label: 'calendar',
      icon: <FaCalendarAlt />,
      to: '/calendar',
    },
  ];

  const userItems = [
    { id: 'logIn', label: 'Home', icon: <FaHome />, to: '/login' },
    { id: 'Register', label: 'Home', icon: <FaHome />, to: '/register' },
  ];

  return (
    <header className="bg-stone-200">
      <nav className="flex justify-between items-center w-[92%]  mx-auto">
        <div>
          <img
            className="w-16 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
            alt="..."
          />
        </div>
        <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            {navItems.map(item => (
              <NavLink
                key={item.id}
                to={item.to}
                className="hover:text-stone-500 hover:font-semibold"
              >
                {item.label}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-stone-400 text-stone-200 px-5 py-2 rounded-full hover:bg-stone-500">
            Sign in
          </button>
          <FaBars className="md:hidden" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
