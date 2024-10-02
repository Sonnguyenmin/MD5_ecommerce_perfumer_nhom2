import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductBreadcrumb() {
  return (
    <>
      <div className="breadcrumb apps_content">
        <ul className="breadcrumb_list">
          <li className="breadcrumb_item">
            <ion-icon name="home-outline" />
            <Link to="/" className="breadcrumb_link">
              Trang chủ
            </Link>
          </li>
          <li className="breadcrumb_item">
            <Link className="breadcrumb_link">
              <strong>Tên nước hoa</strong>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
