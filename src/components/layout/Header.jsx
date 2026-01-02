import React, { useState, useEffect } from 'react';
import { Button } from '../common/Button';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Check auth state
    const checkAuth = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Listen for storage events or just check on mount (for now mount is enough as login redirects)
    checkAuth();

    // Custom event listener for login/logout updates effectively
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const getDashboardLink = () => {
    if (!user) return '/';
    return user.role === 'COMPANY' ? '/dashboard/company' : '/dashboard/worker';
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          Chambea<span>Huaraz</span>
        </Link>

        <nav className="nav-links">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/jobs" className="nav-link">Busco Chamba</Link>
          <Link to="/companies" className="nav-link">Busco Personal</Link>
          {/* <Link to="/training" className="nav-link">Capacitaciones</Link> */}
        </nav>

        <div className="nav-buttons">
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: 500 }}>
                Hola, {user.name.split(' ')[0]}
              </span>
              <Button size="sm" variant="primary" onClick={() => navigate(getDashboardLink())}>
                Mi Dashboard
              </Button>
              <Button size="sm" variant="glass" onClick={handleLogout} style={{ padding: '0.5rem' }}>
                Sal
              </Button>
            </div>
          ) : (
            <>
              <Button variant="glass" size="sm" className="hidden-mobile" onClick={() => navigate('/login')}>
                Acceder
              </Button>
              <Button variant="glass" size="sm" onClick={() => navigate('/register')} style={{ borderColor: 'var(--primary-400)', color: 'var(--primary-400)' }}>
                Registrarse
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
