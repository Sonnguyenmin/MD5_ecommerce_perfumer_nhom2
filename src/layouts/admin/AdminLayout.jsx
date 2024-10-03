import React, { useState } from 'react';
import './adminLayout.scss';
import { Navigate, Outlet } from 'react-router-dom';
import HeaderAdmin from './header';
import SidebarAdmin from './sidebar';

export default function AdminLayout() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const modeLocal = JSON.parse(localStorage.getItem('mode')) || 'light';
    return modeLocal === 'light' ? false : true;
  });
  const [isClose, setIsClose] = useState(() => {
    const closeLocal = JSON.parse(localStorage.getItem('close')) || 'notClose';
    return closeLocal === 'notClose' ? false : true;
  });

  const toggleDarkMode = () => {
    const updateMode = isDarkMode === true ? false : true;
    setIsDarkMode(updateMode);
    localStorage.setItem('mode', JSON.stringify(updateMode));
  };

  const toggleCloseSidebar = () => {
    const updateClose = isClose === true ? false : true;
    setIsClose(updateClose);
    localStorage.setItem('close', JSON.stringify(updateClose));
  };

  const isRoleAdmin = () => {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (user) {
      if (user.roles.includes('ROLE_ADMIN')) {
        return true;
      }
      return false;
    }
    return false;
  };

  return (
    <>
      <main className={`sidebarMain ${isDarkMode ? 'dark' : ''}`}>
        <SidebarAdmin
          toggleCloseSidebar={toggleCloseSidebar}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
          isClose={isClose}
        />
        <div className="admin-content">
          <HeaderAdmin
            toggleCloseSidebar={toggleCloseSidebar}
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
          />
          <div className="admin-wrapper">
            {isRoleAdmin() ? <Outlet /> : <Navigate to={'/login'} />}
            {/* <Outlet /> */}
          </div>
        </div>
      </main>
    </>
  );
}
