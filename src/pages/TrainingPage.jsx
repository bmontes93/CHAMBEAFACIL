import React from 'react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { BookOpen, Video, Calendar, ShieldCheck, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const workshops = [
  {
    id: 1,
    title: "Seguridad y Salud en el Trabajo",
    category: "Normativa",
    date: "12 Ene, 2026",
    mode: "Virtual",
    icon: <ShieldCheck size={32} color="#38bdf8" />
  },
  {
    id: 2,
    title: "Excel Intermedio para Gestión",
    category: "Ofimática",
    date: "15 Ene, 2026",
    mode: "Presencial - Huaraz",
    icon: <TrendingUp size={32} color="#22c55e" />
  },
  {
    id: 3,
    title: "Habilidades Blandas y Liderazgo",
    category: "Desarrollo Personal",
    date: "20 Ene, 2026",
    mode: "Híbrido",
    icon: <BookOpen size={32} color="#fbbf24" />
  }
];

export const TrainingPage = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#020617' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', height: '45vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
        }}>
           {/* Abstract Background Elements */}
           <div style={{ position: 'absolute', top: '10%', left: '10%', width: '300px', height: '300px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
           <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '250px', height: '250px', background: 'rgba(251, 191, 36, 0.1)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gradient" 
            style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', fontWeight: 900, marginBottom: '1rem' }}
          >
            CAPACÍTATE HOY
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ color: '#cbd5e1', fontSize: '1.25rem' }}
          >
            Mejora tu perfil y accede a mejores oportunidades en el mercado laboral huaracino.
          </motion.p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container" style={{ padding: '4rem 1rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}
        >
          {workshops.map((workshop, index) => (
            <Card key={workshop.id} hover title={workshop.category} style={{ borderTop: '4px solid rgba(255,255,255,0.1)' }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '12px' }}>
                  {workshop.icon}
                </div>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
                  {workshop.mode}
                </span>
              </div>
              
              <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>{workshop.title}</h3>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', marginBottom: '2rem', fontSize: '0.9rem' }}>
                <Calendar size={16} /> Próximo inicio: {workshop.date}
              </div>

              <Button fullWidth variant="glass">Inscribirme Gratis</Button>
            </Card>
          ))}
        </motion.div>

        {/* Call to Action */}
        <div style={{ marginTop: '6rem', textAlign: 'center', background: 'linear-gradient(to right, rgba(56, 189, 248, 0.1), rgba(251, 191, 36, 0.05))', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>¿Quieres dictar un curso?</h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Si eres experto en tu área y quieres compartir tu conocimiento con la comunidad del callejón, únete a nuestra red de mentores.
          </p>
          <Button variant="primary">Postular como Mentor</Button>
        </div>
      </div>
    </div>
  );
};
