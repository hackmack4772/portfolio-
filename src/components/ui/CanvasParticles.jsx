import React, { useEffect, useRef } from "react";
import { useDarkMode } from "../../Context/DarkModeContext";

function CanvasParticles() {
  const canvasRef = useRef(null);
  const { isDarkMode } = useDarkMode();
  const isDarkModeRef = useRef(isDarkMode);

  // Keep dark mode state synced in a ref to avoid destroying/rebuilding canvas loop on toggle
  useEffect(() => {
    isDarkModeRef.current = isDarkMode;
  }, [isDarkMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 120 };

    // Set canvas dimensions with a debounced handler to avoid layout thrashing during resizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 150);
    };

    // Particle blueprint
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5; // Clean, micro-particles
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = -Math.random() * 0.4 - 0.1; // Floating upwards
        this.opacity = Math.random() * 0.5 + 0.1;
        this.baseOpacity = this.opacity;
        this.hueOffset = Math.random() * 60;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Reset if floating out of bounds
        if (this.y < 0) {
          this.y = canvas.height;
          this.x = Math.random() * canvas.width;
        }
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX;
        }

        // Mouse repulsion physics
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius; // Closer = stronger force
            const angle = Math.atan2(dy, dx);
            const targetX = this.x + Math.cos(angle) * force * 4;
            const targetY = this.y + Math.sin(angle) * force * 4;

            // Smooth movement away
            this.x += (targetX - this.x) * 0.1;
            this.y += (targetY - this.y) * 0.1;
            this.opacity = Math.min(0.9, this.baseOpacity + force * 0.4);
          } else {
            if (this.opacity > this.baseOpacity) {
              this.opacity -= 0.01;
            }
          }
        }
      }

      draw() {
        const isDark = isDarkModeRef.current;
        const colorHue = isDark ? 270 + this.hueOffset : 180 + this.hueOffset;
        const color = isDark 
          ? `hsla(${colorHue}, 70%, 75%, ${this.opacity})` 
          : `hsla(${colorHue}, 50%, 40%, ${this.opacity})`;

        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = color;
        
        // Caching optimization: shadowBlur is omitted to avoid massive rasterization GPU lag
        
        ctx.fill();
        ctx.restore();
      }
    }

    const initParticles = () => {
      particles = [];
      const densityCount = Math.floor((canvas.width * canvas.height) / 15000);
      const numberOfParticles = Math.min(densityCount, 120); // Cap at 120 particles to optimize CPU/GPU rendering
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Listeners
    window.addEventListener("resize", handleResize);
    
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Initial setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Run exactly once on mount!

  return (
    <canvas
      ref={canvasRef}
      id="canvas-particles"
      className="fixed inset-0 -z-50 pointer-events-none block"
      style={{ mixBlendMode: isDarkMode ? "screen" : "normal" }}
    />
  );
}

export default CanvasParticles;
