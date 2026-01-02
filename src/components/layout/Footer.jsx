import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer style={{ 
      background: '#020617', 
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingTop: '6rem',
      paddingBottom: '2rem',
      color: '#94a3b8',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          
          {/* Brand Column */}
          <div>
            <Link to="/" className="logo" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'block' }}>
              Chambea<span>Huaraz</span>
            </Link>
            <p style={{ lineHeight: 1.6, marginBottom: '2rem' }}>
              Conectando el talento del Callejón de Huaylas con las mejores oportunidades locales. Tecnología y confianza al servicio de nuestra gente.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'white', padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}><Facebook size={20} /></a>
              <a href="#" style={{ color: 'white', padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}><Instagram size={20} /></a>
              <a href="#" style={{ color: 'white', padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Plataforma</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/jobs" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Buscar Empleo</Link></li>
              <li><Link to="/companies" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Buscar Personal</Link></li>
              <li><Link to="/login" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Ingresar</Link></li>
              <li><Link to="/register" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Registrarse</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Términos y Condiciones</Link></li>
              <li><Link to="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Política de Privacidad</Link></li>
              <li><Link to="/complaints" style={{ color: 'inherit', textDecoration: 'none' }}>Libro de Reclamaciones</Link></li>
              <li><Link to="/help" style={{ color: 'inherit', textDecoration: 'none' }}>Ayuda / FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Contacto</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <MapPin size={18} color="#38bdf8" />
                <span>Av. Luzuriaga 456, Huaraz</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} color="#38bdf8" />
                <span>+51 943 123 456</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={18} color="#38bdf8" />
                <span>contacto@chambeahuaraz.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', textAlign: 'center', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} ChambeaHuaraz. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
