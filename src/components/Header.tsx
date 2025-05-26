import React from 'react';
import { FaBars, FaHome, FaVideo, FaCalendarAlt } from 'react-icons/fa';
import { SlDrawer } from 'react-icons/sl';
import { Link, NavLink } from 'react-router-dom';

function Header() {
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
    <header className="z-30 sticky top-0 bg-stone-200 text-stone-500 px-4">
      <div className="container flex mx-auto justify-between items-center h-14">
        <div>
          <Link to="/" className="text-xl font-bold">
            YoT
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          {navItems.map(item => (
            <NavLink
              key={item.id}
              className="hover:font-semibold text-stone-600 duration-300 transition-colors"
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button className="md:hidden">
          <FaBars />
        </button>
        <div className="md:flex  hidden gap-2">
          <NavLink
            to={'/login'}
            className="hidden md:block border-1 border-stone-500  hover:bg-stone-500 text-stone-500  hover:text-stone-100 text-base font-bold py-1 px-1 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50"
          >
            Log-in
          </NavLink>
          <NavLink
            to={'/register'}
            className="hidden md:block border-1 bg-stone-500 border-stone-500 hover:bg-stone-600 text-stone-100 hover:text-stone-200 text-base font-bold py-1 px-1 rounded transition-colors duration-300 focus:outline-none focus:ring-2  focus:ring-opacity-50"
          >
            Resister
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
