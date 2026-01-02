import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Building2, MapPin, DollarSign, Calendar } from 'lucide-react';
import { Button } from '../common/Button';

export const JobDetailModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'rgba(0,0,0,0.8)', 
          backdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          style={{ 
            background: '#0f172a', 
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '24px',
            maxWidth: '600px',
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Image */}
           <div style={{ height: '150px', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', position: 'relative' }}>
             <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'url("/src/assets/mountains.png")', backgroundSize: 'cover', opacity: 0.2 }}></div>
             <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer' }}>
               <X size={20} />
             </button>
           </div>

           {/* Content */}
           <div style={{ padding: '2rem' }}>
             <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 64, height: 64, borderRadius: '16px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Building2 size={32} color="#0f172a" />
                </div>
                <div>
                  <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>{job.title}</h2>
                  <p style={{ color: '#94a3b8', margin: 0 }}>{job.company.name}</p>
                </div>
             </div>

             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
               <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', display: 'flex', gap: '0.75rem', alignItems: 'center', color: '#cbd5e1' }}>
                 <MapPin color="#38bdf8" /> {job.location}
               </div>
               <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', display: 'flex', gap: '0.75rem', alignItems: 'center', color: '#cbd5e1' }}>
                 <DollarSign color="#22c55e" /> S/. {job.salary.toString().replace('$', '')}
               </div>
             </div>

             <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Descripción</h3>
             <p style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '2rem' }}>
               {job.description} Buscamos personas proactivas y responsables residentes en Huaraz o alrededores.
             </p>

             <Button 
               fullWidth 
               size="lg" 
               style={{ background: '#2563eb', borderColor: '#2563eb', color: 'white' }}
               onClick={async () => {
                 const token = localStorage.getItem('token');
                 if (!token) {
                   alert('Debes iniciar sesión para postular');
                   // simple redirect or open login modal could be added here
                   return;
                 }

                 try {
                   const res = await fetch('http://localhost:3000/api/applications', {
                     method: 'POST',
                     headers: {
                       'Content-Type': 'application/json',
                       'Authorization': `Bearer ${token}`
                     },
                     body: JSON.stringify({ jobId: job.id })
                   });

                   const data = await res.json();
                   
                   if (res.ok) {
                     alert('¡Postulación enviada correctamente! La empresa revisará tu perfil.');
                     onClose();
                   } else {
                     alert(data.error);
                   }
                 } catch (err) {
                   alert('Error al conectar con el servidor');
                 }
               }}
             >
               <CheckCircle2 size={20} /> Postular Ahora
             </Button>
           </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
