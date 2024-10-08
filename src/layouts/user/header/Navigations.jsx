import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
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
            <NavLink to="/" className={({ isActive }) => `h_nav-link ${isActive ? 'h_nav-link-active' : ''}`} end>
              Home
            </NavLink>
          </li>
          {dataCategory?.map((cate, index) => {
            return (
              <li className="h_nav-item" key={cate.id}>
                <NavLink
                  to={`/shops/${cate.id}`}
                  className={({ isActive }) => `h_nav-link ${isActive ? 'h_nav-link-active' : ''}`}
                >
                  {cate.categoryName}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className=" h_sort-list">
        <li className="h_nav-item">
          <NavLink to="/" className="h_nav-link" end>
            Home
          </NavLink>
        </li>
        {dataCategory?.map((cate, index) => {
          return (
            <li className="h_nav-item" key={cate.id}>
              <NavLink to={`/shops/${cate.id}`} className="h_nav-link">
                {cate.categoryName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}
