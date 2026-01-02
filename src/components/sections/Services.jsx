import React from 'react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Briefcase, Users, GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Services.css';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const Services = () => {
  return (
    <section className="services" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div className="services-header" style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="services-title"
            style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'white', marginBottom: '1rem' }}
          >
            IMPULSANDO <span className="text-gold">HUARAZ</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="services-description"
            style={{ color: '#94a3b8', fontSize: '1.2rem' }}
          >
            Soluciones para el crecimiento de nuestra gente y empresas en el Callejón de Huaylas.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="services-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
        >
          <motion.div variants={item}>
            <Card hover>
              <div style={{ color: '#38bdf8', marginBottom: '1.5rem' }}>
                <Briefcase size={48} strokeWidth={1.5} />
              </div>
              <h3 className="card-title" style={{ color: 'white' }}>Para Empresas</h3>
              <p className="card-body">
                Publica ofertas en Huaraz y alrededores al instante. Conecta con talento operativo local verificado.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Button variant="secondary" size="sm" style={{ width: '100%' }}>
                  Publicar Vacante
                </Button>
              </div>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card hover>
              <div style={{ color: '#fbbf24', marginBottom: '1.5rem' }}>
                <Users size={48} strokeWidth={1.5} />
              </div>
              <h3 className="card-title" style={{ color: 'white' }}>Para Postulantes</h3>
              <p className="card-body">
                Chambas en Huaraz sin tanta vuelta. Si buscas trabajo formal o cachuelos, este es tu lugar.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Button variant="secondary" size="sm" style={{ width: '100%' }}>
                  Buscar Chamba
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card hover>
              <div style={{ color: '#ec4899', marginBottom: '1.5rem' }}>
                <GraduationCap size={48} strokeWidth={1.5} />
              </div>
              <h3 className="card-title" style={{ color: 'white' }}>Capacitaciones</h3>
              <p className="card-body">
                Talleres presenciales y virtuales para potenciar tu perfil profesional en Áncash.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Button variant="secondary" size="sm" style={{ width: '100%' }}>
                  Ver Talleres
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
