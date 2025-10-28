import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../src/Navbar";
import LoginPage from "../src/pages/Login";
import ProductsPage from "./pages/Products";
import ProductDetail from "../src/pages/ProductDetail";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "../src/PrivateRoute";
import './styles.css';
import { ThemeProvider } from "./contexts/ThemeContext";


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
