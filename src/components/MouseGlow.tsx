import { useEffect, useState } from 'react';

export default function MouseGlow() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-shadow duration-300 pointer-events-none"
      style={{
        background: `radial-gradient(400px at ${mousePos.x}px ${mousePos.y}px, rgba(192, 57, 43, 0.04), rgba(139, 0, 0, 0.02) 40%, transparent 80%)`,
      }}
    />
  );
}
