// import LazyLoader from '../components/LazyLoader';
import React from "react";
import Dashboard from "../pages/admin/dashboard";
import AdminLayout from "../layouts/admin/AdminLayout";
import ManagerCategory from "../pages/admin/managerCategory";
import ManagerProduct from "../pages/admin/managerProduct";
import ManagerUser from "../pages/admin/managerUser";
import ManagerBanner from "../pages/admin/managerBanner";
import ManagerBrand from "../pages/admin/managerBrand";
import ProductDetail from "../pages/admin/productDetailManagement/ProductDetail";
import ManageOrder from "../pages/admin/managerOrder";
import ManageOrderDetail from "../pages/admin/managerOrderDetail";

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
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "categories",
        element: <ManagerCategory />,
      },
      {
        path: "products",
        element: <ManagerProduct />,
      },
      {
        path: "users",
        element: <ManagerUser />,
      },
      {
        path: "slider",
        element: <ManagerBanner />,
      },
      {
        path: "brands",
        element: <ManagerBrand />,
      },
      {
        path: "order",
        element: <ManageOrder />,
      },
      {
        path: "orderDetail/:id",
        element: <ManageOrderDetail />,
      },
      {
        path: "productDetail/:id",
        element: <ProductDetail />,
      },
    ],
  },
];

export default PrivateRoutes;
