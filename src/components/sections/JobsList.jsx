import React, { useEffect, useState } from 'react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { MapPin, DollarSign, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { JobDetailModal } from './JobDetailModal';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

import { getJobImage } from '../../utils/jobImages';

export const JobsList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>Cargando empleos...</div>;

  return (
    <>
      <section className="container" style={{ padding: '4rem 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--white)', marginBottom: '1rem', fontWeight: 800 }}
          >
            ÚLTIMOS <span className="text-gradient">EMPLEOS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}
          >
            Oportunidades laborales exclusivas en Huaraz y alrededores.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}
        >
          {jobs.map(job => (
            <motion.div key={job.id} variants={item}>
              <Card tilt={true} className="job-card" style={{ padding: 0, overflow: 'hidden' }}>
                
                {/* Robust Category Image */}
                <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                   <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, #0f172a, transparent)', zIndex: 1 }}></div>
                   <img 
                     src={getJobImage(job.title)} 
                     alt={job.title}
                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                   />
                   <span style={{ 
                       position: 'absolute',
                       top: '1rem',
                       right: '1rem',
                       zIndex: 2,
                       fontSize: '0.75rem', 
                       fontWeight: 600, 
                       color: 'white', 
                       background: 'rgba(0,0,0,0.5)',
                       backdropFilter: 'blur(4px)',
                       padding: '0.25rem 0.75rem', 
                       borderRadius: '20px',
                       border: '1px solid rgba(255,255,255,0.1)'
                   }}>
                     {job.type}
                   </span>
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      {new Date(job.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--white)' }}>
                    {job.title}
                  </h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                     <Building2 size={16} color="var(--primary-400)" />
                    <span style={{ fontWeight: 500 }}>{job.company.name}</span>
                  </div>

                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    {job.description.substring(0, 90)}...
                  </p>

                  <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.875rem', 
                      color: 'var(--white)',
                      background: 'rgba(255,255,255,0.03)',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      marginBottom: '1.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={14} color="var(--accent-500)" /> {job.location}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
                      <DollarSign size={14} /> S/. {job.salary.toString().replace('$', '')}
                    </div>
                  </div>

                  <Button fullWidth size="md" variant="secondary" onClick={() => setSelectedJob(job)}>
                    Ver Detalle
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Modal Integration */}
      <JobDetailModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </>
  );
};
