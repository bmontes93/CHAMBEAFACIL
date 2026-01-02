import React from 'react';

export const HelpPage = () => {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh', background: '#020617', color: '#cbd5e1' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="text-gradient" style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>Preguntas Frecuentes</h1>
        
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {[
            { q: "¿Es gratis postular?", a: "Sí, para los postulantes el servicio es 100% gratuito." },
            { q: "¿Cómo verifican las empresas?", a: "Validamos RUC activo y domicilio en Huaraz presencialmente." },
            { q: "¿Qué pasa si no me contactan?", a: "Tu perfil sigue activo en nuestra base de datos para futuras vacantes." },
            { q: "¿Ofrecen capacitaciones certificadas?", a: "Sí, nuestros talleres tienen certificación a nombre de la UNASAM." }
          ].map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
