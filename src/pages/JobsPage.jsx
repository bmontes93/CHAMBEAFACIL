import React from 'react';
import { JobsList } from '../components/sections/JobsList';
import { motion } from 'framer-motion';

export const JobsPage = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#020617' }}>
      {/* Hero Section for Jobs */}
      <div style={{ position: 'relative', height: '50vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
          backgroundImage: 'url("/src/assets/worker_hero.png")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'brightness(0.6)'
        }}></div>
        <div style={{ 
          position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%', 
          background: 'linear-gradient(to top, #020617 0%, transparent 100%)' 
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gradient" 
            style={{ fontSize: '4rem', fontFamily: 'var(--font-heading)', fontWeight: 900, marginBottom: '1rem' }}
          >
            BUSCO CHAMBA
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ color: '#e2e8f0', fontSize: '1.5rem', maxWidth: '600px', margin: '0 auto' }}
          >
            Oportunidades laborales en Huaraz y el Callejón de Huaylas.
          </motion.p>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 20, marginTop: '-5rem' }}>
        <JobsList />
      </div>
    </div>
  );
};
