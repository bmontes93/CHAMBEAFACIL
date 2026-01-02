// Utility to get a robust image based on job title
// Imports would be absolute paths or we can assume they are in public/assets or src/assets.
// Since we generated them in artifacts, we should ideally move them to src/assets.
// For now, I will assume we move them to src/assets/jobs/

export const getJobImage = (title) => {
  const lowerTitle = title.toLowerCase();

  // Mapping Logic
  if (lowerTitle.includes('meser') || lowerTitle.includes('cocin') || lowerTitle.includes('chef') || lowerTitle.includes('restaurante')) {
    return '/src/assets/jobs/job_food_service.png';
  }
  if (lowerTitle.includes('cajer') || lowerTitle.includes('vent') || lowerTitle.includes('tienda') || lowerTitle.includes('comercial')) {
    return '/src/assets/jobs/job_retail_sales.png';
  }
  if (lowerTitle.includes('peluquer') || lowerTitle.includes('estilista') || lowerTitle.includes('spa') || lowerTitle.includes('belleza')) {
    return '/src/assets/jobs/job_beauty_spa.png';
  }
  if (lowerTitle.includes('obrer') || lowerTitle.includes('albañil') || lowerTitle.includes('construc')) {
    return '/src/assets/jobs/job_construction_trade.png';
  }
  if (lowerTitle.includes('admin') || lowerTitle.includes('contad') || lowerTitle.includes('oficina') || lowerTitle.includes('secretari') || lowerTitle.includes('asistente')) {
    return '/src/assets/jobs/job_office_admin.png';
  }
  if (lowerTitle.includes('ingenier') || lowerTitle.includes('arquitect') || lowerTitle.includes('proyectista') || lowerTitle.includes('cadista')) {
    return '/src/assets/jobs/job_engineering_arch.png';
  }
  if (lowerTitle.includes('profesor') || lowerTitle.includes('docente') || lowerTitle.includes('educaci') || lowerTitle.includes('tutor')) {
     return '/src/assets/jobs/job_education_teaching.png';
  }
  if (lowerTitle.includes('medic') || lowerTitle.includes('enfermer') || lowerTitle.includes('salud') || lowerTitle.includes('farmacia')) {
     return '/src/assets/jobs/job_health_medical.png';
  }

  // Default Fallback
  return '/src/assets/jobs/job_generic.png'; // We should ensure this exists or use a robust standard one
};
