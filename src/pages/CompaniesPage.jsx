import React from 'react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { CheckCircle, Users, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export const CompaniesPage = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#020617' }}>
      {/* Hero Section for Companies */}
      <div style={{ position: 'relative', height: '60vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
          backgroundImage: 'url("/src/assets/office_hero.png")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}></div>
         <div style={{ 
          position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%', 
          background: 'linear-gradient(to top, #020617 0%, transparent 100%)' 
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: '4.5rem', fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'white', lineHeight: 1 }}
          >
            TALENTO <span className="text-gold">HUARACINO</span><br/>PARA TU EMPRESA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ color: '#cbd5e1', fontSize: '1.25rem', marginTop: '1.5rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            La plataforma líder de reclutamiento operativo en el Callejón de Huaylas.
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}
          >
            <Button size="lg" variant="primary">Publicar Oferta Gratis</Button>
            <Button size="lg" variant="glass">Ver Base de Datos</Button>
          </motion.div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="container" style={{ padding: '6rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <Card hover>
            <div style={{ color: '#fbbf24', marginBottom: '1.5rem' }}><CheckCircle size={40} /></div>
            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>Validación Real</h3>
            <p style={{ color: '#94a3b8' }}>Verificamos antecedentes y referencias de cada postulante en Huaraz.</p>
          </Card>
          <Card hover>
            <div style={{ color: '#38bdf8', marginBottom: '1.5rem' }}><Users size={40} /></div>
            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>Base Local</h3>
            <p style={{ color: '#94a3b8' }}>Acceso a más de 5,000 perfiles operativos en Áncash listos para trabajar.</p>
          </Card>
          <Card hover>
             <div style={{ color: '#ec4899', marginBottom: '1.5rem' }}><TrendingUp size={40} /></div>
            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>Rapidez</h3>
            <p style={{ color: '#94a3b8' }}>Cubre vacantes en menos de 24 horas con nuestro sistema de match.</p>
          </Card>
        </div>
      </div>
    </div>
  );
};
