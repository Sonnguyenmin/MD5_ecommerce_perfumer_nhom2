import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navigations from './Navigations';
import CartHeader from './CartHeader';
import AccountUser from './AccountUser';

export default function HeaderLayout() {
  return (
    <>
      <>
        {/* Header */}
        <header className="h ">
          <div className="grid wide">
            <div className="h_content apps_content">
              {/* logo */}
              <div className="h_logo">
                <Link to="/" className="h_logo-link">
                  <img src="/SQ_logo.png" alt="" className="h_logo-img" />
                </Link>
              </div>
              {/* ----------- */}
              {/* Thanh điều hướng */}
              <Navigations />
              {/* Thanh Tìm kiếm */}
              <div className="h_search">
                <input type="checkbox" hidden id="mobile-search-checkbox" className="h_search-checkbox" />
                <div className="h_search-wrapper">
                  <button className="h_search-btn"></button>
                  <input type="text" className="h_search-input" placeholder="Tìm kiếm" />
                  <div className="h_search-btn-icon">
                    <ion-icon name="close-circle-outline" />
                  </div>
                  <div className="h_search-history">
                    <h3 className="h_search-history-heading">Lịch sử tìm kiếm</h3>
                    <ul className="h_search-history-list">
                      <li className="h_search-history-item">
                        <a href="" className="h_search-history-link">
                          Áo khoác nam
                        </a>
                      </li>
                      <li className="h_search-history-item">
                        <a href="" className="h_search-history-link">
                          Áo khoác nữ
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* ------------- */}
              {/* Thanh cửa hàng */}
              <div className="h_group-icon">
                <label htmlFor="mobile-search-checkbox" className="h_search-icon">
                  <span>Tìm kiếm</span>
                </label>
                <Link to="/newspaper" className="h_store-icon">
                  <span>Tin tức</span>
                </Link>
                <AccountUser />
                <CartHeader />
              </div>
              {/* ----------------- */}
            </div>
          </div>
        </header>
        {/* The end */}
      </>
    </>
  );
}
