import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/index.jsx';

import './assets/css/base.scss';
import './assets/css/grid.scss';
import './assets/css/main.scss';
import './assets/css/responsive.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
);
