import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './adminLayout.scss';
import { Navigate, Outlet } from 'react-router-dom';
import HeaderAdmin from './header';
import SidebarAdmin from './sidebar';
import { useCookies } from 'react-cookie';
import { loadUserFormCookie } from '../../services/authService';
import { useTranslation } from 'react-i18next';

export default function AdminLayout() {
  //#region KHởi tạo các chế độ

  // Khởi tạo trạng thái cho chế độ tối
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const modeLocal = JSON.parse(localStorage.getItem('mode')) || 'light';
    return modeLocal === 'light' ? false : true;
  });

  // Khởi tạo trạng thái cho việc đóng sidebar
  const [isClose, setIsClose] = useState(() => {
    const closeLocal = JSON.parse(localStorage.getItem('close')) || 'notClose';
    return closeLocal === 'notClose' ? false : true;
  });

  // Lấy giá trị cookie accessToken
  const [cookies] = useCookies(['accessToken']);

  // Khởi tạo hàm dispatch để gửi các action tới Redux
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(() => {
    return JSON.parse(localStorage.getItem('language')) || 'vi';
  });

  //#endregion

  /**
   * useEffect để xử lý khi cookie accessToken thay đổi
   */
  useEffect(() => {
    const token = cookies.accessToken; // Lấy accessToken từ cookies
    dispatch(loadUserFormCookie(token)); // Gửi action để load user từ cookie
  }, [cookies]);

  /**
   * useEffect để lấy ngôn ngữ đã lưu trong localStorage khi component được mount
   */
  useEffect(() => {
    const storedLanguage = JSON.parse(localStorage.getItem('language')) || 'vi';
    setLanguage(storedLanguage);
    i18n.changeLanguage(storedLanguage); // Change the language
  }, [i18n]);

  /**
   * Hàm xử lý thay đổi ngôn ngữ
   * @param {*} lang - Ngôn ngữ muốn thay đổi
   */
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);

    localStorage.setItem('language', JSON.stringify(lang));
    setLanguage(lang);
  };

  /**
   * Hàm để chuyển đổi giữa chế độ tối và sáng
   */
  const toggleDarkMode = () => {
    const updateMode = isDarkMode === true ? false : true;
    setIsDarkMode(updateMode);
    localStorage.setItem('mode', JSON.stringify(updateMode));
  };

  /**
   * Hàm để chuyển đổi trạng thái đóng sidebar
   */
  const toggleCloseSidebar = () => {
    const updateClose = isClose === true ? false : true;
    setIsClose(updateClose);
    localStorage.setItem('close', JSON.stringify(updateClose));
  };

  /**
   * Hàm kiểm tra xem người dùng có phải là admin hay không
   * @returns {boolean} - true nếu là admin, false nếu không
   */
  const isRoleAdmin = () => {
    const user = JSON.parse(localStorage.getItem('userInfo')) || null; // Lấy thông tin người dùng từ localStorage
    if (user) {
      // Kiểm tra xem người dùng có quyền admin không
      if (user?.roles.some((item) => item === 'ROLE_ADMIN')) {
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
          t={t}
        />
        <div className="admin-content">
          <HeaderAdmin
            toggleCloseSidebar={toggleCloseSidebar}
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
            t={t}
            handleChangeLanguage={handleChangeLanguage}
            language={language}
          />
          <div className="admin-wrapper">
            {isRoleAdmin() ? <Outlet /> : <Navigate to={'/unauthorized'} />}
            {/* <Outlet /> */}
          </div>
        </div>
      </main>
    </>
  );
}
