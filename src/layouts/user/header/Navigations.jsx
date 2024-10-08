import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { listCategory } from "../../../services/categoryService";

export default function Navigations() {
  const  {data}  = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCategory());
  }, []);

  return (
    <>
      <nav className="h_with-link">
        <ul className="h_nav-list">
          {
            data?.map((item) => (
              <li className="h_nav-item" key={item.id}>
            <NavLink end to="" className="h_nav-link">
              {item.categoryName}
            </NavLink>
          </li>
            ))
          }
          
        </ul>
      </nav>
      <ul className=" h_sort-list">
      {
        data?.map((item) => (
          <li className="h_sort-item " key={item.id}>
          <NavLink to="" className="h_sort-link ">
            {item.categoryName}
          </NavLink>
        </li>
        ))
      }
       
      </ul>
    </>
  );
}
