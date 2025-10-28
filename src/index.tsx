// src/router/index.tsx
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../src/App';
import Products from '../src/pages/Products';
import ProductDetail from '../src/pages/ProductDetail';
import Login from '../src/pages/Login';
import Dashboard from '../src/pages/Dashboard';
import PrivateRoute from '../src/PrivateRoute';
import './styles.css';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/products" replace /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id', element: <ProductDetail /> },
      { path: 'login', element: <Login /> },
      {
        path: 'dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      { path: '*', element: <div className="container"><h1>404 - Page Not Found</h1></div> }
    ],
  },
]);
