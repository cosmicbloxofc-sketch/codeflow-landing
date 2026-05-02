import { useEffect, useRef, useState } from 'react';

export default function FloatingOrbs({
  orbCount = 5,
  minSize = 100,
  maxSize = 300,
  speed = 0.5,
  colors = [
    'rgba(46, 91, 255, 0.15)',
    'rgba(91, 127, 255, 0.12)',
    'rgba(0, 212, 170, 0.1)',
    'rgba(46, 91, 255, 0.08)'
  ]
}) {
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Detectar mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Detectar prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    // Intersection Observer para pausar fora da viewport
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      // Cleanup mesmo se não houver contexto
      return () => {
        observer.disconnect();
        mediaQuery.removeEventListener('change', handleMotionChange);
        window.removeEventListener('resize', checkMobile);
      };
    }

    const parent = canvas.parentElement;

    const resize = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    let animationId;

    // Não animar se mobile, fora da viewport ou prefers-reduced-motion
    if (isMobile || !isVisible || prefersReducedMotion) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Cleanup completo mesmo quando não anima
      return () => {
        if (animationId) cancelAnimationFrame(animationId);
        window.removeEventListener('resize', resize);
        observer.disconnect();
        mediaQuery.removeEventListener('change', handleMotionChange);
        window.removeEventListener('resize', checkMobile);
      };
    }

    // Reduzir orbs no desktop (máximo 4)
    const effectiveOrbCount = Math.min(orbCount, 4);

    // Criar orbs
    const orbs = Array.from({ length: effectiveOrbCount }, () => {
      const size = minSize + Math.random() * (maxSize - minSize);
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        phase: Math.random() * Math.PI * 2
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      orbs.forEach((orb) => {
        // Movimento
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce nas bordas
        if (orb.x < -orb.size / 2) orb.x = canvas.width + orb.size / 2;
        if (orb.x > canvas.width + orb.size / 2) orb.x = -orb.size / 2;
        if (orb.y < -orb.size / 2) orb.y = canvas.height + orb.size / 2;
        if (orb.y > canvas.height + orb.size / 2) orb.y = -orb.size / 2;

        // Pulsação suave
        orb.phase += 0.02;
        const pulse = Math.sin(orb.phase) * 0.1 + 1;
        const currentSize = orb.size * pulse;

        // Criar gradiente radial
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, currentSize / 2
        );

        gradient.addColorStop(0, orb.color.replace(/[\d.]+\)$/, '0.25)'));
        gradient.addColorStop(0.5, orb.color);
        gradient.addColorStop(1, orb.color.replace(/[\d.]+\)$/, '0)'));

        // Desenhar orb
        ctx.fillStyle = gradient;
        ctx.filter = 'blur(40px)';
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, currentSize / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.filter = 'none';
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, [orbCount, minSize, maxSize, speed, colors, isVisible, isMobile, prefersReducedMotion]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
