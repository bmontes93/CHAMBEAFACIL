import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import './Card.css';

export const Card = ({
  children,
  className = '',
  hover = false,
  title,
  tilt = false,
  ...props
}) => {
  const ref = useRef(null);

  // Motion values for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // If tilt is enabled, use motion.div with calculated rotations
  if (hover || tilt) {
    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: 1000
        }}
        className={`card ${className}`}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        {...props}
      >
        <div style={{ transform: "translateZ(20px)" }}>
           {title && <h3 className="card-title">{title}</h3>}
           <div className="card-body">
             {children}
           </div>
        </div>
        
        {/* Sheen Gradient Layer */}
        <motion.div 
           style={{
             position: 'absolute',
             top: 0, left: 0, width: '100%', height: '100%',
             background: 'linear-gradient(125deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0) 100%)',
             opacity: 0,
             zIndex: 1,
             pointerEvents: 'none',
             borderRadius: 'var(--radius-md)' // Ensure it matches card
           }}
           whileHover={{ opacity: 1 }}
        />
      </motion.div>
    );
  }

  // Fallback / Standard render
  return (
    <div 
      ref={ref}
      className={`card ${className}`} 
      {...props}
    >
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};
