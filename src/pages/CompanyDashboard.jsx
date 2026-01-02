import React, { useState, useEffect } from 'react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Building2, Plus, Users, MapPin, DollarSign, Briefcase, Facebook, Linkedin, Instagram, Globe, MoreVertical } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock Map Component
const HuarazMapPicker = ({ onLocationSelect }) => {
  const [pin, setPin] = useState(null);

  const handleMapClick = (e) => {
    // Simple visual simulation of pinning
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPin({ x, y });
    onLocationSelect({ x, y }); // In real app, this would be lat/lng
  };

  return (
    <div 
      onClick={handleMapClick}
      style={{
        width: '100%',
        height: '300px',
        backgroundColor: '#1e293b',
        borderRadius: '12px',
        position: 'relative',
        cursor: 'crosshair',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        backgroundImage: 'url("/src/assets/mountains.png")', // Fallback/Theme bg
        backgroundSize: 'cover'
      }}
    >
      <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0,0,0,0.6)', padding: '5px 10px', borderRadius: '4px', color: '#cbd5e1', fontSize: '0.8rem' }}>
        Click para ubicar tu empresa en Huaraz
      </div>
      {pin && (
        <motion.div
          initial={{ scale: 0, bounce: 0 }}
          animate={{ scale: 1 }}
          type="spring"
          style={{
            position: 'absolute',
            top: pin.y - 24, // Center tip
            left: pin.x - 12,
            color: '#ef4444'
          }}
        >
          <MapPin size={24} fill="#ef4444" color="#7f1d1d" />
        </motion.div>
      )}
    </div>
  );
};

export const CompanyDashboard = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [stats, setStats] = useState({ active: 0, applicants: 0, views: 0 });

  useEffect(() => {
    const fetchMyJobs = async () => {
       const token = localStorage.getItem('token');
       if (!token) return;

       try {
         const res = await fetch('http://localhost:3000/api/jobs/my', {
           headers: { 'Authorization': `Bearer ${token}` }
         });
         const data = await res.json();
         if (res.ok) {
           setJobs(data);
           // Calculate stats (Simple aggregation)
           const totalApplicants = data.reduce((acc, job) => acc + (job._count?.applications || 0), 0);
           setStats({
             active: data.length,
             applicants: totalApplicants,
             views: 1340 // Still mocked as we don't track views yet
           });
         }
       } catch (error) {
         console.error(error);
       }
    };
    fetchMyJobs();
  }, [showPostModal]); // Reload when a new post is made

  return (
    <div style={{ paddingTop: '6rem', minHeight: '100vh', background: '#020617', paddingBottom: '4rem' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '2rem', alignItems: 'start' }}>
          
          {/* Left Sidebar: Company Profile */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Card style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ 
                width: '100%', height: '120px', 
                background: '#1e293b', 
                borderRadius: '16px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <Building2 size={48} color="#94a3b8" />
              </div>
              
              <h2 style={{ color: 'white', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>Mi Empresa</h2>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>Administra tus ofertas</p>
              
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                 <Button size="sm" variant="glass" style={{ borderRadius: '50%', padding: '0.5rem' }}><Facebook size={18} /></Button>
                 <Button size="sm" variant="glass" style={{ borderRadius: '50%', padding: '0.5rem' }}><Linkedin size={18} /></Button>
                 <Button size="sm" variant="glass" style={{ borderRadius: '50%', padding: '0.5rem' }}><Globe size={18} /></Button>
              </div>

              <div style={{ marginTop: '2rem', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                  <MapPin size={16} color="#38bdf8" /> Huaraz, Perú
                </div>
              </div>

              <Button fullWidth size="sm" variant="secondary" style={{ marginTop: '2rem' }}>
                Editar Empresa
              </Button>
            </Card>

            <Card style={{ background: 'linear-gradient(180deg, rgba(34, 197, 94, 0.1), transparent)', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem' }}>
                <div style={{ background: '#22c55e', borderRadius: '50%', padding: '0.5rem' }}>
                   <Users size={20} color="black" />
                </div>
                <div>
                   <div style={{ color: 'white', fontWeight: 700 }}>Plan Empresarial</div>
                   <div style={{ color: '#86efac', fontSize: '0.8rem' }}>Verificado y Activo</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Header Actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <h1 className="text-gradient" style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', margin: 0 }}>Panel de Control</h1>
               <Button variant="primary" onClick={() => setShowPostModal(true)}>
                 <Plus size={18} /> Publicar Oferta
               </Button>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
               <Card tilt style={{ padding: '1.5rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                   <div>
                     <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>{stats.active}</div>
                     <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Ofertas Activas</div>
                   </div>
                   <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}><Briefcase size={20} color="#38bdf8" /></div>
                 </div>
               </Card>
               <Card tilt style={{ padding: '1.5rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                   <div>
                     <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>{stats.applicants}</div>
                     <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Postulantes</div>
                   </div>
                   <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}><Users size={20} color="#22c55e" /></div>
                 </div>
               </Card>
               <Card tilt style={{ padding: '1.5rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                   <div>
                     <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>{stats.views}</div>
                     <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Vistas Totales</div>
                   </div>
                   <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}><Users size={20} color="#fbbf24" /></div>
                 </div>
               </Card>
            </div>

            {/* Active Listings */}
            <div>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                 <h2 style={{ color: 'white', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>Ofertas Recientes</h2>
                 <Button variant="link">Ver Historial</Button>
               </div>
               
               <div style={{ display: 'grid', gap: '1rem' }}>
                  {jobs.length === 0 ? (
                    <p style={{ color: '#64748b' }}>No tienes ofertas activas.</p>
                  ) : (
                    jobs.map(job => (
                      <Card key={job.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                           <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', color: '#94a3b8' }}>Img</div>
                           <div>
                             <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{job.title}</h3>
                             <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem', color: '#94a3b8' }}>
                               <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={12}/> {job.district}</span>
                               <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><DollarSign size={12}/> S/. {job.salary}</span>
                             </div>
                           </div>
                         </div>
                         
                         <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ color: '#38bdf8', fontWeight: 700, fontSize: '1.2rem' }}>{job._count?.applications || 0}</div>
                              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Aplicantes</div>
                            </div>
                            <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.1)' }}></div>
                            <Button size="sm" variant="glass">Gestionar</Button>
                            <Button size="sm" variant="glass" style={{ padding: '0.5rem' }}><MoreVertical size={16} /></Button>
                         </div>
                      </Card>
                    ))
                  )}
               </div>
            </div>

          </div>

        </div>
      </div>

      {/* Post Job Modal (Simplified Overlay) */}
      {showPostModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#0f172a', padding: '2rem', borderRadius: '20px', maxWidth: '600px', width: '90%', maxHeight: '90vh', overflowY: 'auto', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
            <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Nueva Oferta (Huaraz)</h2>
            <form style={{ display: 'grid', gap: '1rem' }}>
              <input type="text" placeholder="Título del Puesto" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                 <select style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}>
                   <option>Huaraz</option>
                   <option>Independencia</option>
                   <option>Taricá</option>
                   <option>Jangas</option>
                 </select>
                 <input type="text" placeholder="Sueldo (S/.)" style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
              </div>

              <textarea rows={4} placeholder="Descripción detallada..." style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}></textarea>

              <div>
                <label style={{ display: 'block', color: '#cbd5e1', marginBottom: '0.5rem' }}>Ubicación Exacta (Obligatorio)</label>
                <HuarazMapPicker onLocationSelect={(loc) => console.log(loc)} />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <Button fullWidth onClick={() => setShowPostModal(false)} variant="glass">Cancelar</Button>
                <Button fullWidth variant="primary" onClick={async (e) => {
                  e.preventDefault();
                  const token = localStorage.getItem('token');
                  if (!token) {
                    alert('Debes iniciar sesión para publicar');
                    return;
                  }

                  const title = document.querySelector('input[placeholder="Título del Puesto"]').value;
                  const district = document.querySelector('select').value;
                  const salary = document.querySelector('input[placeholder="Sueldo (S/.)"]').value;
                  const description = document.querySelector('textarea').value;
                  
                  // Simple validation
                  if(!title || !salary || !description) {
                     alert('Por favor completa todos los campos');
                     return;
                  }

                  try {
                    const res = await fetch('http://localhost:3000/api/jobs', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                      },
                      body: JSON.stringify({
                        title,
                        district,
                        salary,
                        description,
                        type: 'FULL_TIME' // Default for now
                      })
                    });

                    if (res.ok) {
                      alert('¡Oferta publicada con éxito!');
                      setShowPostModal(false);
                      // Ideally trigger a refresh of the jobs list here
                    } else {
                      const err = await res.json();
                      alert('Error: ' + err.error);
                    }
                  } catch (error) {
                    console.error(error);
                    alert('Error de conexión');
                  }
                }}>Publicar Ahora</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
