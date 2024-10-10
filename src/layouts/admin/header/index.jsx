import { useDispatch, useSelector } from 'react-redux';
import './header.scss';

import React from 'react';
// import { Button } from 'antd';
import { logout } from '../../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';

export default function HeaderAdmin({
  toggleCloseSidebar,
  toggleDarkMode,
  isDarkMode,
  handleChangeLanguage,
  language,
}) {
  // Lấy dữ liệu từ Redux store
  const { data } = useSelector((state) => state.auth);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  /**
   * Hàm đăng xuất người dùng
   */
  const handleLogout = () => {
    dispatch(logout());

    navigate('/login');
  };

  return (
    <>
      <header className="header-admin">
        <i className="uil uil-bars header-sidebar-toggle" onClick={toggleCloseSidebar}></i>
        {/* <div className="header-search">
          <i className="uil uil-search"></i>
          <input type="text" placeholder="Mời bạn tìm kiếm tại đây ..." />
        </div> */}
        <ul className="header-list-icon">
          <li className="header-item-icon" onClick={toggleDarkMode}>
            {isDarkMode ? <i className="uil uil-moonset"></i> : <i className="uil uil-sunset"></i>}
          </li>
          <li className="header-item-icon header-action-translate">
            <img src={language === 'vi' ? '/vietnam.png' : '/england.svg'} alt="" />
            <ul className="header-img-translate">
              <li className="header-img-translate-item mb-2" onClick={() => handleChangeLanguage('en')}>
                <img src="/england.svg" alt="" />
                <span className="ml-3">{t('england')}</span>
              </li>
              <li className="header-img-translate-item" onClick={() => handleChangeLanguage('vi')}>
                <img src="/vietnam.png" alt="" />
                <span className="ml-3">{t('vietnamese')}</span>
              </li>
            </ul>
          </li>
          <li className="header-item-icon">
            <i className="uil uil-bell bell-icon"></i>
            <span className="bell-count">3</span>
          </li>
          <li className="header-item-icon">
            <i className="uil uil-cog"></i>
          </li>
          <li className="header-item-icon">
            <div className="header-profile">
              <img src="/profile.png" alt="" />
              <div className="header-profile-name">
                <span>Admin</span>
                <p>Admin</p>
              </div>
              <ul className="profile-wrapper">
                <li className="profile-inner">
                  <div href="" className="profile-inner-link">
                    <i className="uil uil-user"></i>
                    {data?.data?.fullName || t('nameAdmin')}
                  </div>
                </li>
                <li className="profile-inner">
                  <div className="profile-inner-link" onClick={handleLogout}>
                    <i className="uil uil-sign-out-alt"></i>
                    {t('signOutAdmin')}
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </header>
    </>
  );
}
