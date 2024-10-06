import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/index.jsx';
import './i18n.js';

import './assets/css/base.scss';
import './assets/css/grid.scss';
import './assets/css/main.scss';
import './assets/css/responsive.scss';
import { Provider } from 'react-redux';
import store from './redux/store/index.js';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <RouterProvider router={routes}></RouterProvider>
  </Provider>,
  // </StrictMode>
);
