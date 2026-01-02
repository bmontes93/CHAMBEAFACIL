import React from 'react';
import { Button } from '../components/common/Button';

export const ComplaintsPage = () => {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh', background: '#020617', color: '#cbd5e1' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <h1 className="text-gradient" style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>Libro de Reclamaciones</h1>
        
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ marginBottom: '2rem', textAlign: 'center' }}>
            Conforme al Código de Protección y Defensa del Consumidor.
          </p>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>Tipo:</label>
              <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}>
                <option>Queja</option>
                <option>Reclamo</option>
              </select>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>Detalle:</label>
              <textarea rows={5} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} placeholder="Describe lo sucedido..."></textarea>
            </div>

            <Button variant="primary" fullWidth>Enviar Reclamo</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
