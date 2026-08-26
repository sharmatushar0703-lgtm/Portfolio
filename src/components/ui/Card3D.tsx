import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface Card3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  depth?: number;
}

export function Card3D({ children, className, glowColor = 'rgba(56, 189, 248, 0.25)', depth = 25, ...props }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;
    
    setRotateX(rotX);
    setRotateY(rotY);
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 h-full"
      {...props}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className={cn(
          'glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 transform-style-3d relative overflow-hidden transition-colors h-full flex flex-col justify-between',
          className
        )}
      >
        {/* Dynamic 3D Specular Light Sheen */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100 z-0"
            style={{
              background: `radial-gradient(circle 280px at ${glowPos.x}% ${glowPos.y}%, ${glowColor}, transparent 70%)`,
            }}
          />
        )}

        <div className="relative z-10 transform-style-3d h-full flex flex-col justify-between">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
