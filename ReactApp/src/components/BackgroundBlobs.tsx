import { useRef, useEffect } from 'react';

export function BackgroundBlobs() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const setDimensions = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    setDimensions();
    window.addEventListener('resize', setDimensions);

    // Initial blobs data. Reverted to intended low target opacity, handling the blurring natively via radial gradients.
    const blobs = [
      { x: width * 0.08, y: height * 0.05, r: 250, dx: 0.5, dy: -0.3, a: 0.20, c: 0 },
      { x: width * 0.75, y: height * 0.25, r: 215, dx: -0.4, dy: 0.4, a: 0.20, c: 1 },
      { x: width * 0.20, y: height * 0.55, r: 190, dx: 0.3, dy: 0.5, a: 0.20, c: 1 },
      { x: width * 0.65, y: height * 0.75, r: 170, dx: -0.5, dy: -0.2, a: 0.20, c: 0 },
      { x: width * 0.10, y: height * 0.6, r: 150, dx: -0.1, dy: -0.6, a: 0.20, c: 0 },
      { x: width * 0.30, y: height * 0.35, r: 130, dx: -0.2, dy: -0.5, a: 0.20, c: 1 },

    ];

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      blobs.forEach(b => {
        // Update positions
        b.x += b.dx;
        b.y += b.dy;

        // Bounce off edges (generous margins to allow them to drift slightly offscreen)
        if (b.x < -b.r * 2 || b.x > width + b.r * 2) b.dx *= -1;
        if (b.y < -b.r * 2 || b.y > height + b.r * 2) b.dy *= -1;

        // Draw natively blurred blobs using radial gradients
        const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r * 1.8);
        if(b.c === 0) {
          gradient.addColorStop(0, `rgba(76, 250, 206, ${b.a})`);
        } else {
          gradient.addColorStop(0, `rgba(109, 195, 247, ${b.a})`);
        }
        gradient.addColorStop(1, `rgba(76, 250, 206, 0)`); // fade to transparent

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -5,
        pointerEvents: 'none',
        filter: 'blur(80px)'
      }}
      aria-hidden="true"
    />
  );
}
