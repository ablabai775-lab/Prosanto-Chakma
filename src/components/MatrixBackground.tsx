import React, { useEffect, useRef, useState } from 'react';

interface MatrixBackgroundProps {
  reducedMotion?: boolean;
  scanlinesEnabled?: boolean;
}

export const MatrixBackground: React.FC<MatrixBackgroundProps> = ({
  reducedMotion = false,
  scanlinesEnabled = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPaused, setIsPaused] = useState(reducedMotion);

  useEffect(() => {
    setIsPaused(reducedMotion);
  }, [reducedMotion]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Characters: Katakana, Cyber Hex, Numbers, Symbols
    const chars = '0123456789ABCDEF010101XYZ$#%&*+-=<>λπ§¢¥ψ';
    const charArray = chars.split('');

    const fontSize = 14;
    let columns = Math.floor(width / fontSize);
    let drops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
    };

    window.addEventListener('resize', handleResize);

    // Floating cyber particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }

    const particles: Particle[] = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.3 ? '#00ff66' : '#ffffff',
      alpha: Math.random() * 0.4 + 0.1,
    }));

    let lastDraw = 0;
    const interval = 45; // ~22fps for classic digital terminal aesthetic

    const draw = (now: number) => {
      animationFrameId = requestAnimationFrame(draw);

      if (isPaused) return;

      if (now - lastDraw < interval) return;
      lastDraw = now;

      // Dark translucent wash to create matrix fading trails
      ctx.fillStyle = 'rgba(5, 7, 6, 0.12)';
      ctx.fillRect(0, 0, width, height);

      // Render Matrix rain drops
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Head of stream is bright white or intense neon green
        if (Math.random() > 0.88) {
          ctx.fillStyle = '#ffffff';
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#00ff66';
        } else {
          ctx.fillStyle = '#00ff66';
          ctx.shadowBlur = 3;
          ctx.shadowColor = '#00ff66';
        }

        ctx.fillText(text, x, y);

        // Reset drops when leaving screen or randomly
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      // Render subtle cyber ambient particles
      ctx.shadowBlur = 0;
      for (const p of particles) {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }
      ctx.globalAlpha = 1.0;
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isPaused]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-35 transition-opacity duration-700"
        aria-hidden="true"
      />

      {/* Radial vignette overlay so typography stays 100% legible */}
      <div 
        className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,rgba(5,7,6,0.75)_65%,#050706_100%]"
        aria-hidden="true" 
      />

      {/* Scanline overlay */}
      {scanlinesEnabled && (
        <div className="absolute inset-0 scanlines opacity-40 mix-blend-screen" aria-hidden="true" />
      )}
    </div>
  );
};
