import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigations() {
  return (
    <>
      <nav className="h_with-link">
        <ul className="h_nav-list">
          <li className="h_nav-item">
            <NavLink end to="" className="h_nav-link">
              nước hoa mới
            </NavLink>
          </li>
          <li className="h_nav-item">
            <NavLink to="" className="h_nav-link">
              nam
            </NavLink>
          </li>
          <li className="h_nav-item">
            <NavLink to="" className="h_nav-link">
              nữ
            </NavLink>
            {/* <div className="submenu-content">
              <div className="submenu-wrap">
                <div className="sub_content-left">
                  <ul className="submenu-list">
                    <li className="submenu-item ">
                      <NavLink to="" className="submenu-link submenu-title">
                        Áo
                      </NavLink>
                    </li>
                    <li className="submenu-item">
                      <NavLink to="" className="submenu-link">
                        Áo Phông
                      </NavLink>
                    </li>
                    <li className="submenu-item">
                      <NavLink to="" className="submenu-link">
                        Áo polo
                      </NavLink>
                    </li>
                    <li className="submenu-item">
                      <NavLink to="" className="submenu-link">
                        Áo ba lô
                      </NavLink>
                    </li>
                    <li className="submenu-item">
                      <NavLink to="" className="submenu-link">
                        Áo kiểu
                      </NavLink>
                    </li>
                    <li className="submenu-item">
                      <NavLink to="" className="submenu-link">
                        Áo sơ mi
                      </NavLink>
                    </li>
                    <li className="submenu-item">
                      <NavLink to="" className="submenu-link">
                        Áo phông dài tay
                      </NavLink>
                    </li>
                    <li className="submenu-item">
                      <NavLink to="" className="submenu-link">
                        Áo len
                      </NavLink>
                    </li>
                    <li className="submenu-item">
                      <NavLink to="" className="submenu-link">
                        Áo nỉ
                      </NavLink>
                    </li>
                    <li className="submenu-item">
                      <NavLink to="" className="submenu-link">
                        Áo nỉ có mũ
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="sub_content-right">
                  <NavLink to="" className="sub-right-link">
                    Sản phẩm mới
                  </NavLink>
                  <NavLink to="" className="sub-right-link">
                    BST Gia đình
                  </NavLink>
                  <NavLink to="" className="sub-right-link">
                    BST info yourself
                  </NavLink>
                  <div className="sub-right-img"></div>
                </div>
              </div>
            </div> */}
          </li>
          <li className="h_nav-item">
            <NavLink to="" className="h_nav-link">
              unisex
            </NavLink>
          </li>
          <li className="h_nav-item">
            <NavLink to="" className="h_nav-link">
              niche
            </NavLink>
          </li>
        </ul>
      </nav>
      <ul className=" h_sort-list">
        <li className="h_sort-item ">
          <NavLink to="" className="h_sort-link ">
            Nước hoa mới
          </NavLink>
        </li>
        <li className="h_sort-item">
          <NavLink to="" className="h_sort-link">
            Nam
          </NavLink>
        </li>
        <li className="h_sort-item">
          <NavLink to="" className="h_sort-link">
            Nữ
          </NavLink>
        </li>
        <li className="h_sort-item">
          <NavLink to="" className="h_sort-link">
            Unisex
          </NavLink>
        </li>
        <li className="h_sort-item">
          <NavLink to="" className="h_sort-link">
            Niche
          </NavLink>
        </li>
      </ul>
    </>
  );
}
