// // src/components/Navbar.tsx
// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../src/hooks/useAuth';
// import { useAuth } from './contexts/AuthContext';
// import { useTheme } from './contexts/ThemeContext';
// import './styles.css';

// const Navbar: React.FC = () => {
//   const { isAuthenticated, logout } = useAuth();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { theme, toggleTheme } = useTheme();

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <nav className="nav">
//       <NavLink to="/products" className="nav-brand">
//         seizeonstar.catalog
//       </NavLink>
//       <div className="nav-section">
//         <div className={`nav-links ${isMenuOpen ? 'nav-links-mobile-open' : ''}`}>
//           <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsMenuOpen(false)}>
//             Products
//           </NavLink>
//           {isAuthenticated && (
//             <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsMenuOpen(false)}>
//               Dashboard
//             </NavLink>
//           )}
//           {isAuthenticated ? (
//             <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="button nav-button">
//               Logout
//             </button>
//           ) : (
//             <NavLink to="/login" className="button nav-button" onClick={() => setIsMenuOpen(false)}>Login</NavLink>
//           )}
//         </div>
//         <div className="nav-controls">
//           <button onClick={toggleTheme} className="ghost" style={{ padding: '6px 10px', fontSize: '18px' }}>
//             {theme === 'light' ? '🌙' : '☀️'}
//           </button>
//           <button className="hamburger-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             <svg viewBox="0 0 100 80" width="20" height="20">
//               <rect width="100" height="15" rx="8"></rect>
//               <rect y="30" width="100" height="15" rx="8"></rect>
//               <rect y="60" width="100" height="15" rx="8"></rect>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.tsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { useTheme } from './contexts/ThemeContext';
import './styles.css';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="nav">
      <NavLink to="/products" className="nav-brand">
        seizeonstar.catalog
      </NavLink>
      <div className="nav-section">  
        <div className={`nav-links ${isMenuOpen ? 'nav-links-mobile-open' : ''}`}>  
            <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsMenuOpen(false)}>  
                Products  
            </NavLink>  
            {isAuthenticated && (  
                <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsMenuOpen(false)}>  
                    Dashboard  
                </NavLink>  
            )}  
        </div>  
        <div className="nav-controls">
          <button onClick={toggleTheme} className="ghost" style={{ padding: '6px 10px', fontSize: '18px' }}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="button nav-button">
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="button nav-button">Login</NavLink>
          )}
          <button className="hamburger-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg viewBox="0 0 100 80" width="20" height="20" fill="var(--accent)">
              <rect width="100" height="15" rx="8"></rect>
              <rect y="30" width="100" height="15" rx="8"></rect>
              <rect y="60" width="100" height="15" rx="8"></rect>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
