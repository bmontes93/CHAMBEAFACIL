import React from 'react';
import { motion } from 'framer-motion';

export const PageLoader = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100vh', 
      background: '#020617', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      zIndex: 99999 
    }}>
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.5, 1, 0.5] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="logo"
        style={{ fontSize: '2rem' }}
      >
        Chambea<span>Huaraz</span>
      </motion.div>
    </div>
  );
};
