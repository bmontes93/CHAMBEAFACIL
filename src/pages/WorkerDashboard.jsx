import React, { useState, useEffect } from 'react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { CheckCircle, Clock, MapPin, Edit2, Facebook, Linkedin, Instagram, Twitter, Mail, Phone, ExternalLink } from 'lucide-react';

export const WorkerDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState({ active: 0, pending: 0, completed: 0 });

  useEffect(() => {
    const fetchApplications = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const res = await fetch('http://localhost:3000/api/applications/my', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        if (res.ok) {
           setApplications(data);
           setStats({
             active: data.length,
             pending: data.filter(a => a.status === 'PENDING').length,
             completed: 98 // Mocked for now (Profile completion)
           });
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchApplications();
  }, []);

  return (
    <div style={{ paddingTop: '6rem', minHeight: '100vh', background: '#020617', paddingBottom: '4rem' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem', alignItems: 'start' }}>
          
          {/* Left Sidebar: Professional Profile */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Card style={{ textAlign: 'center', padding: '2rem 1rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ 
                position: 'absolute', top: 0, left: 0, width: '100%', height: '80px', 
                background: 'linear-gradient(90deg, #0ea5e9, #6366f1)', opacity: 0.3 
              }}></div>
              
              <div style={{ 
                width: '100px', height: '100px', borderRadius: '50%', 
                background: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80")',
                backgroundSize: 'cover',
                margin: '0 auto 1rem auto',
                border: '4px solid #0f172a',
                position: 'relative', zIndex: 1
              }}></div>

              <h2 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Juan Perez</h2>
              <p style={{ color: '#38bdf8', fontWeight: 500, fontSize: '0.9rem' }}>Electricista Industrial</p>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                <MapPin size={14} /> Huaraz (Centenario)
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                 <Button size="sm" variant="glass" style={{ borderRadius: '50%', padding: '0.5rem' }}><Facebook size={18} /></Button>
                 <Button size="sm" variant="glass" style={{ borderRadius: '50%', padding: '0.5rem' }}><Instagram size={18} /></Button>
                 <Button size="sm" variant="glass" style={{ borderRadius: '50%', padding: '0.5rem' }}><Linkedin size={18} /></Button>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'left' }}>
                <h3 style={{ color: 'white', fontSize: '0.9rem', marginBottom: '0.75rem', fontWeight: 600 }}>Contacto</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  <Mail size={14} /> juan.perez@email.com
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                  <Phone size={14} /> +51 987 654 321
                </div>
              </div>
              
              <Button fullWidth size="sm" variant="secondary" style={{ marginTop: '1.5rem' }}>
                Editar Perfil
              </Button>
            </Card>

            <Card style={{ padding: '1.5rem' }}>
              <h3 style={{ color: 'white', fontSize: '1rem', marginBottom: '1rem' }}>Habilidades</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Electricidad', 'Mantenimiento', 'Seguridad', 'Tableros', 'Bilingüe'].map(skill => (
                  <span key={skill} style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Stats Overview */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
               <Card style={{ background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(56, 189, 248, 0.0))', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#38bdf8' }}>{stats.active}</div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Postulaciones activas</div>
               </Card>
               <Card style={{ background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.0))', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#22c55e' }}>{stats.pending}</div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>En Revisión</div>
               </Card>
               <Card style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(168, 85, 247, 0.0))', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#a855f7' }}>{stats.completed}%</div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Perfil completado</div>
               </Card>
            </div>

            {/* Applications Column */}
            <div>
              <h2 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Mis Postulaciones Recientes</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 
                 {applications.length === 0 ? (
                   <p style={{ color: '#64748b' }}>Aún no has postulado a ningún empleo.</p>
                 ) : (
                   applications.map(app => (
                     <Card key={app.id} tilt style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div>
                         <h3 style={{ color: 'white', fontSize: '1.1rem' }}>{app.job.title}</h3>
                         <p style={{ color: '#64748b', fontSize: '0.85rem' }}>{app.job.employer?.companyName || 'Empresa Confidencial'} • {app.job.district}</p>
                       </div>
                       <div style={{  textAlign: 'right' }}>
                         <span style={{ 
                           color: app.status === 'PENDING' ? '#fbbf24' : '#22c55e', 
                           fontSize: '0.8rem', 
                           display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end',
                           background: app.status === 'PENDING' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(34, 197, 94, 0.1)', 
                           padding: '4px 8px', borderRadius: '4px' 
                         }}>
                           <Clock size={14}/> {app.status === 'PENDING' ? 'En Revisión' : 'Visto'}
                         </span>
                         <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
                           {new Date(app.createdAt).toLocaleDateString()}
                         </div>
                       </div>
                     </Card>
                   ))
                 )}
  
              </div>
            </div>
  
            {/* Recommended Jobs */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                 <h2 style={{ color: 'white', fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>Recomendado para ti</h2>
                 <Button variant="link" size="sm">Ver todos</Button>
              </div>
              <Card style={{ border: '1px dashed rgba(255,255,255,0.1)', background: 'transparent' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.5rem' }}>
                   <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>⚡️</div>
                   <div style={{ flex: 1 }}>
                     <h3 style={{ color: 'white', fontSize: '1rem' }}>Postula a más empleos</h3>
                     <p style={{ color: '#64748b', fontSize: '0.85rem' }}>Completa tu perfil para mejores recomendaciones.</p>
                   </div>
                   <Button size="sm" variant="secondary" onClick={() => window.location.href='/jobs'}>Ver Ofertas</Button>
                 </div>
              </Card>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
