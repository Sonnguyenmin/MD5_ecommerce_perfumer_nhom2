import React, { useEffect } from 'react';
import FooterLayout from './footer';
import HeaderLayout from './header';
import { Outlet, useLocation } from 'react-router-dom';
import BackToTop from '../../components/backToTop';

export default function UserLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);
  return (
    <>
      <div id="apps">
        <HeaderLayout />
        <main className="apps_container">
          <Outlet />
        </main>
        <FooterLayout />
        <BackToTop />
      </div>
    </>
  );
}
