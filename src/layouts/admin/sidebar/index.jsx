import './sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';

export default function SidebarAdmin({ toggleDarkMode, toggleCloseSidebar, isDarkMode, isClose }) {
  return (
    <>
      <div className={!isClose ? 'sidebar-overlay' : ''} onClick={toggleCloseSidebar}></div>
      <nav className={`sidebar ${isClose ? 'close' : ''}`}>
        <Link to="/admin" className="sidebar-logo">
          <img className="sidebar-logo-imgs" src="/SQ_logo.png" alt="" />
          <span className="sidebar-logo-name">SQ_perfumer</span>
        </Link>
        <div className="sidebar-menu">
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <NavLink end to="/admin" className="sidebar-link">
                <i className="uil uil-estate"></i>
                <span className="sidebar-link-name">Trang Quản trị</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="content" className="sidebar-link">
                <i className="uil uil-files-landscapes"></i>
                <span className="sidebar-link-name">Content</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="categories" className="sidebar-link">
                <i className="uil uil-layer-group"></i>
                <span className="sidebar-link-name">Danh mục</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="sizes" className="sidebar-link">
                <i className="uil uil-image-resize-landscape"></i>
                <span className="sidebar-link-name">Kích thước</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="color" className="sidebar-link">
                <i className="uil uil-palette"></i>
                <span className="sidebar-link-name">Màu sắc</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="products" className="sidebar-link">
                <i className="uil uil-wallet"></i>
                <span className="sidebar-link-name">Sản phẩm</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="comments" className="sidebar-link">
                <i className="uil uil-comment-message"></i>
                <span className="sidebar-link-name">Bình luận</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="slider" className="sidebar-link">
                <i className="uil uil-images"></i>
                <span className="sidebar-link-name">Trình chiếu</span>
              </NavLink>
            </li>
          </ul>
          <ul className="sidebar-logout">
            <li className="sidebar-item ">
              <a href="" className="sidebar-link">
                <i className="uil uil-signout"></i>
                <span className="sidebar-link-name">Đăng xuất</span>
              </a>
            </li>
            <li className="sidebar-item sidebar-mode">
              <div href="#" className="sidebar-link">
                {isDarkMode ? <i className="uil uil-moon"></i> : <i className="uil uil-sun"></i>}
                <span className="sidebar-link-name">{`${isDarkMode ? 'Chế độ tối' : 'chế độ sáng'}`}</span>
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
