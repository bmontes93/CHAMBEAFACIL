import React from 'react';

export const TermsPage = () => {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh', background: '#020617', color: '#cbd5e1' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="text-gradient" style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '2rem' }}>Términos y Condiciones</h1>
        
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>1. Aceptación</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Al usar ChambeaHuaraz, aceptas estos términos. Somos una plataforma que conecta talento local con empresas en el Callejón de Huaylas.
          </p>

          <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Uso de la Plataforma</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Te comprometes a proporcionar información veraz. Las ofertas de trabajo deben ser reales y respetar la legislación laboral peruana vigente.
          </p>

          <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>3. Responsabilidad</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
            ChambeaHuaraz actúa como intermediario. No somos responsables directos de las relaciones contractuales finales entre empleadores y postulantes, aunque verificamos la legitimidad de las empresas registradas.
          </p>
          
          <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '2rem' }}>
            Última actualización: Diciembre 2025
          </p>
        </div>
      </div>
    </div>
  );
};
