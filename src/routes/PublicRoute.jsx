import React from 'react';
import UserLayout from '../layouts/user/UserLayout';
import HomeUser from '../pages/user/home';
import NotFound from '../pages/404/NotFound';
import UnauthorizedPage from '../pages/401/Unauthorized';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import ProductDetails from '../pages/user/productDetail';
import Shops from '../pages/user/shops';
import CheckOut from '../pages/user/checkout';
// import LazyLoader from '../components/LazyLoader';

// const UserPage = React.lazy(() => import('../layouts/user/UserLayout'));
// const NotFound = React.lazy(() => import('../pages/404/NotFound'));
// const UnauthorizedPage = React.lazy(() => import('../pages/401/Unauthorized'));
// const HomeUser = React.lazy(() => import('../pages/user/home'));
// const PublicRoutes = [
//   {
//     path: '/',
//     element: <LazyLoader children={<UserPage />} />,
//     children: [
//       {
//         index: true,
//         element: <LazyLoader children={<HomeUser />} />,
//       },
//     ],
//   },
//   {
//     path: '*',
//     element: <LazyLoader children={<NotFound />} />,
//   },
//   {
//     path: '/Unauthorized',
//     element: <LazyLoader children={<UnauthorizedPage />} />,
//   },
// ];

const PublicRoutes = [
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomeUser />,
      },
      {
        path: '/productDetail',
        element: <ProductDetails />,
      },
      {
        path: '/shops',
        element: <Shops />,
      },
      {
        path: '/checkout',
        element: <CheckOut />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/Unauthorized',
    element: <UnauthorizedPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
];

export default PublicRoutes;
