import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { listCategory } from '../../../services/categoryService';

export default function Navigations() {
  const { dataCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);
  return (
    <>
      <nav className="h_with-link">
        <ul className="h_nav-list">
          <li className="h_nav-item">
            <Link className="h_nav-link">TRANG CHỦ</Link>
          </li>
          <li className="h_nav-item">
            <div className="h_nav-link">DANH MỤC</div>
            <div className="submenu-content">
              <div className="submenu-wrap">
                <ul className="submenu-list">
                  {dataCategory?.map((cate, index) => {
                    return (
                      <li className="submenu-item" key={cate.id}>
                        <NavLink
                          to={`/categories/${cate.id}`}
                          className={({ isActive }) =>
                            `submenu-link submenu-title ${isActive ? 'submenu-link-active' : ''}`
                          }
                        >
                          {cate.categoryName}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </li>
          <li className="h_nav-item">
            <div className="h_nav-link">THƯƠNG HIỆU</div>
            <div className="submenu-content">
              <div className="submenu-wrap">
                <ul className="submenu-list">
                  {dataCategory?.map((cate, index) => {
                    return (
                      <li className="submenu-item" key={cate.id}>
                        <NavLink
                          // to={`/categories/${cate.id}`}
                          className={({ isActive }) =>
                            `submenu-link submenu-title ${isActive ? 'submenu-link-active' : ''}`
                          }
                        >
                          {cate.categoryName}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <ul className=" h_sort-list">
        <li className="h_sort-item">
          <NavLink to="/" className="h_sort-link" end>
            TRANG CHỦ
          </NavLink>
        </li>
        {dataCategory?.map((cate, index) => {
          return (
            <li className="h_sort-item" key={cate.id}>
              <NavLink to={`/categories/${cate.id}`} className="h_sort-link">
                {cate.categoryName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}
