import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, MapPin, Users, Briefcase } from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 100]);
  const yText = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section className="hero-avant">
      {/* Parallax Background */}
      <motion.div style={{ y: yBg }} className="hero-bg-layer"></motion.div>
      <div className="hero-noise"></div>

      <div className="container hero-content-avant">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-main-text"
          style={{ y: yText }}
        >
          <div className="line-overflow"><motion.h1 
             initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          >CHAMBEA</motion.h1></div>
          <div className="line-overflow"><motion.h1 
             initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
             className="text-gold"
          >HUARAZ</motion.h1></div>
        </motion.div>

        <motion.div 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <p>
            CONECTANDO EL TALENTO DEL <span style={{ color: '#38bdf8', fontWeight: 700 }}>CALLEJÓN</span> CON EL MUNDO.
          </p>
        </motion.div>

        <motion.div 
           className="hero-search-avant"
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="glass-panel">
            <MapPin color="#38bdf8" size={24} />
            <input type="text" placeholder="¿QUÉ CHAMBA BUSCAS EN ANCASH?" />
            <div className="search-btn-icon">
              <Search size={20} />
            </div>
          </div>
        </motion.div>

        {/* Localized Floating Stats */}
        <motion.div 
          className="stat-card st1"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="stat-number">500+</div>
          <div className="stat-label">EMPRESAS<br/>HUARACINAS</div>
        </motion.div>

        <motion.div 
          className="stat-card st2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <div className="stat-number">1.2K</div>
          <div className="stat-label">CHAMBAS<br/>EN EL CALLEJÓN</div>
        </motion.div>
      </div>
    </section>
  );
};
