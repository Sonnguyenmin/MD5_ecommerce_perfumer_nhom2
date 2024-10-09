import './sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SidebarAdmin({ toggleDarkMode, toggleCloseSidebar, isDarkMode, isClose }) {
  const { t } = useTranslation();
  return (
    <>
      <div className={!isClose ? 'sidebar-overlay' : ''} onClick={toggleCloseSidebar}></div>
      <nav className={`sidebar ${isClose ? 'close' : ''}`}>
        <Link to="/admin" className="sidebar-logo">
          <img className="sidebar-logo-imgs" src="/SQ_logo.png" alt="" />
          <span className="sidebar-logo-name">SQD_perfumer</span>
        </Link>
        <div className="sidebar-menu">
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <NavLink end to="/admin" className="sidebar-link">
                <i className="uil uil-estate"></i>
                <span className="sidebar-link-name">{t('dashboard')}</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="brands" className="sidebar-link">
                <i className="uil uil-cube"></i>
                <span className="sidebar-link-name">{t('brand')}</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="categories" className="sidebar-link">
                <i className="uil uil-layer-group"></i>
                <span className="sidebar-link-name">{t('category')}</span>
              </NavLink>
            </li>
            {/* <li className="sidebar-item">
              <NavLink to="capacity" className="sidebar-link">
                <i className="uil uil-image-resize-landscape"></i>
                <span className="sidebar-link-name">
                  {t("capacity")}
                </span>
              </NavLink>
            </li> */}
            <li className="sidebar-item">
              <NavLink to="products" className="sidebar-link">
                <i className="uil uil-box"></i>
                <span className="sidebar-link-name">{t('product')}</span>
              </NavLink>
            </li>
            <li className="sidebar-item hidden">
              <NavLink to="productDetail" className="sidebar-link">
                <i className="uil uil-dropbox"></i>
                <span className="sidebar-link-name">{t('productDetail')}</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="order" className="sidebar-link">
                <i className="uil uil-shopping-basket"></i>
                <span className="sidebar-link-name">{t('order')}</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="comments" className="sidebar-link">
                <i className="uil uil-comment-message"></i>
                <span className="sidebar-link-name">{t('comment')}</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="slider" className="sidebar-link">
                <i className="uil uil-meeting-board"></i>
                <span className="sidebar-link-name">{t('banner')}</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="users" className="sidebar-link">
                <i className="uil uil-users-alt"></i>
                <span className="sidebar-link-name">{t('user')}</span>
              </NavLink>
            </li>
          </ul>
          <ul className="sidebar-logout">
            {/* <li className="sidebar-item ">
              <div className="sidebar-link">
                <i className="uil uil-signout"></i>
                <span className="sidebar-link-name">{t('signOut')}</span>
              </div>
            </li> */}
            <li className="sidebar-item sidebar-mode">
              <div className="sidebar-link">
                {isDarkMode ? <i className="uil uil-moon"></i> : <i className="uil uil-sun"></i>}
                <span className="sidebar-link-name">{isDarkMode ? t('darkMode') : t('lightMode')}</span>
              </div>
              <div className="sidebar-toggle">
                <span className={`sidebar-switch ${isDarkMode ? 'dark' : ''}`} onClick={toggleDarkMode}></span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
