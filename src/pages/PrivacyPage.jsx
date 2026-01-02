import React from 'react';

export const PrivacyPage = () => {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh', background: '#020617', color: '#cbd5e1' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="text-gradient" style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '2rem' }}>Política de Privacidad</h1>
        
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
           <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>1. Datos que Recopilamos</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Recopilamos nombre, contacto, experiencia laboral y datos de ubicación para facilitar el proceso de selección en Huaraz.
          </p>

          <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Uso de la Información</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Tus datos son compartidos únicamente con empresas a las que postulas. No vendemos tu información a terceros.
          </p>

          <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>3. Seguridad</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Implementamos cifrado y medidas de seguridad para proteger tu identidad digital.
          </p>
        </div>
      </div>
    </div>
  );
};
