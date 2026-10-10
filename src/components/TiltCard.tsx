import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  tiltIntensity?: number;
  isFloating?: boolean;
  staggerIndex?: number;
  slideFrom?: 'left' | 'right' | 'bottom' | 'top' | 'none';
  slideDistance?: number;
  duration?: number;
  delay?: number;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  wrapperClassName = '',
  tiltIntensity = 10,
  isFloating = false,
  staggerIndex = 0,
  slideFrom,
  slideDistance,
  duration,
  delay,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for fluid settling
  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Compute slide entrance based on slideFrom or default
  const getInitial = () => {
    const dist = slideDistance ?? (slideFrom === 'left' || slideFrom === 'right' ? 90 : 45);
    switch (slideFrom) {
      case 'left':
        return { opacity: 0, x: -dist, y: 0, scale: 0.96 };
      case 'right':
        return { opacity: 0, x: dist, y: 0, scale: 0.96 };
      case 'top':
        return { opacity: 0, x: 0, y: -dist, scale: 0.96 };
      case 'bottom':
        return { opacity: 0, x: 0, y: dist, scale: 0.96 };
      case 'none':
        return { opacity: 0, scale: 0.98 };
      default:
        return { opacity: 0, y: 28, scale: 0.98 };
    }
  };

  // Floating / Breathing keyframe animation
  const floatingAnimation = isFloating && !isHovered
    ? {
        y: [0, -6, 0],
        scale: [1, 1.012, 1],
        transition: {
          duration: 4.6 + (staggerIndex % 4) * 0.7,
          repeat: Infinity,
          repeatType: 'mirror' as const,
          ease: 'easeInOut' as const,
        },
      }
    : undefined;

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration: duration ?? 0.8,
          delay: delay ?? (staggerIndex * 0.12),
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      viewport={{ once: true, margin: '-40px' }}
      className={`w-full ${wrapperClassName}`}
    >
      <motion.div
        ref={cardRef}
        animate={floatingAnimation}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
        className={`relative transition-shadow duration-300 w-full ${className} ${
          isHovered ? 'shadow-2xl shadow-blue-500/10' : ''
        }`}
      >
        {/* Subtle dynamic sheen reflection on hover */}
        <div
          className="pointer-events-none absolute inset-0 rounded-inherit opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: isHovered
              ? 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 40%)'
              : 'none',
          }}
        />
        {children}
      </motion.div>
    </motion.div>
  );
};
