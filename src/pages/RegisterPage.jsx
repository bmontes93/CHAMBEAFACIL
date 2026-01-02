import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Facebook } from 'lucide-react';

const SocialButton = ({ icon, onClick }) => (
  <button 
    title="Registrarse con social"
    onClick={onClick}
    style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      padding: '0.75rem',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '12px',
      color: 'white',
      cursor: 'pointer',
      fontSize: '0.9rem',
      transition: 'all 0.2s'
    }}
    onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
    onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
  >
    {icon}
  </button>
);

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'WORKER',
    district: 'Huaraz'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password,
          role: formData.role,
          district: formData.district
        })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        // Redirect based on role
        if (data.user.role === 'COMPANY') navigate('/dashboard/company');
        else navigate('/dashboard/worker');
      } else {
        alert(data.error || 'Error al registrarse');
      }
    } catch (error) {
      console.error(error);
      alert('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      paddingTop: '5rem',
      background: '#020617',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'url("/src/assets/mountains.png")', backgroundSize: 'cover', opacity: 0.2, filter: 'blur(10px)' }}></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ 
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(16px)',
          padding: '3rem',
          borderRadius: '20px',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          width: '100%',
          maxWidth: '500px',
          position: 'relative',
          zIndex: 10
        }}
      >
        <h2 style={{ color: 'white', fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center' }}>Crea tu Cuenta</h2>
        <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '2rem' }}>Únete al talento de Huaraz</p>
        
        {/* Social Login */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <SocialButton 
            onClick={() => handleSocialLogin('Google')}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            }
          />
          <SocialButton 
            onClick={() => handleSocialLogin('Facebook')}
            icon={<Facebook size={20} fill="#1877F2" color="#1877F2" style={{ stroke: 'none' }} />}
          />
          <SocialButton 
             onClick={() => handleSocialLogin('X')}
             icon={
               <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
               </svg>
             } 
          />
        </div>
        
        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          {/* Role Selection */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
            <button
               type="button"
               onClick={() => setFormData({...formData, role: 'WORKER'})}
               style={{ flex: 1, padding: '0.5rem', borderRadius: '8px', border: formData.role === 'WORKER' ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)', background: formData.role === 'WORKER' ? 'rgba(56, 189, 248, 0.2)' : 'transparent', color: 'white', cursor: 'pointer' }}
            >
              Busco Chamba
            </button>
            <button
               type="button"
               onClick={() => setFormData({...formData, role: 'COMPANY'})}
               style={{ flex: 1, padding: '0.5rem', borderRadius: '8px', border: formData.role === 'COMPANY' ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)', background: formData.role === 'COMPANY' ? 'rgba(56, 189, 248, 0.2)' : 'transparent', color: 'white', cursor: 'pointer' }}
            >
              Soy Empresa
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
             <div>
                <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Nombre</label>
                <input name="firstName" onChange={handleChange} required type="text" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white' }} />
             </div>
             <div>
                <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Apellido</label>
                <input name="lastName" onChange={handleChange} required type="text" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white' }} />
             </div>
          </div>

          <div>
            <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Distrito (Huaraz y Alrededores)</label>
            <select name="district" onChange={handleChange} style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white' }}>
              <option value="Huaraz">Huaraz</option>
              <option value="Independencia">Independencia</option>
              <option value="Taricá">Taricá</option>
              <option value="Jangas">Jangas</option>
              <option value="Carhuaz">Carhuaz</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Correo Electrónico</label>
            <input name="email" onChange={handleChange} required type="email" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white' }} />
          </div>
          
          <div>
            <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Contraseña</label>
            <input name="password" onChange={handleChange} required type="password" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white' }} />
          </div>
          
          <Button fullWidth variant="primary" size="lg" style={{ marginTop: '1rem' }} disabled={loading}>
            {loading ? 'Creando cuenta...' : 'Registrarse'}
          </Button>
        </form>
        
        <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: '#94a3b8' }}>
          ¿Ya tienes cuenta? <a href="/login" style={{ color: '#38bdf8' }}>Ingresa aquí</a>
        </div>
      </motion.div>
    </div>
  );
};
