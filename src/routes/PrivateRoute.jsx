// import LazyLoader from '../components/LazyLoader';
import React from 'react';
import Dashboard from '../pages/admin/dashboard';
import AdminLayout from '../layouts/admin/AdminLayout';
import ManagerCategory from '../pages/admin/managerCategory';
import ManagerProduct from '../pages/admin/managerProduct';

// const AdminPage = React.lazy(() => import('../layouts/admin/AdminLayout'));
// const DashboardPage = React.lazy(() => import('../pages/admin/dashboard'));
// const CategoryPage = React.lazy(() => import('../pages/admin/managerCategory'));
// const ProductPage = React.lazy(() => import('../pages/admin/managerProduct'));

// const PrivateRoutes = [
//   {
//     path: '/admin',
//     element: <LazyLoader children={<AdminPage />} />,
//     children: [
//       {
//         index: true,
//         element: <LazyLoader children={<DashboardPage />} />,
//       },
//       {
//         path: 'categories',
//         element: <LazyLoader children={<CategoryPage />} />,
//       },
//       {
//         path: 'products',
//         element: <LazyLoader children={<ProductPage />} />,
//       },
//     ],
//   },
// ];

const PrivateRoutes = [
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'categories',
        element: <ManagerCategory />,
      },
      {
        path: 'products',
        element: <ManagerProduct />,
      },
    ],
  },
];

export default PrivateRoutes;
