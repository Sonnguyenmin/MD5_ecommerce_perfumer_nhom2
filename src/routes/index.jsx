import { createBrowserRouter } from 'react-router-dom';
import PublicRoutes from './PublicRoute';
import PrivateRoutes from './PrivateRoute';

const routes = createBrowserRouter([...PublicRoutes, ...PrivateRoutes]);

export default routes;
