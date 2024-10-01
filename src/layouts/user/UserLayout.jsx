import React from 'react';
import FooterLayout from './footer';
import HeaderLayout from './header';
import { Outlet } from 'react-router-dom';
import BackToTop from '../../components/backToTop';

export default function UserLayout() {
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
