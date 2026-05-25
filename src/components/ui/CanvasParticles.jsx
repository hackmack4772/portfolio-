import React, { useEffect, useRef } from "react";
import { useDarkMode } from "../../Context/DarkModeContext";

function CanvasParticles() {
  const canvasRef = useRef(null);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 120 };

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Particle blueprint
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5; // Small size for a clean look
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = -Math.random() * 0.4 - 0.1; // Floating upwards (anti-gravity)
        this.opacity = Math.random() * 0.5 + 0.1;
        this.baseOpacity = this.opacity;
        
        // Random glow color tailored to dark/light theme
        const colorHue = isDarkMode ? 270 + Math.random() * 60 : 180 + Math.random() * 60; // Purples for dark, cyans for light
        this.color = isDarkMode 
          ? `hsla(${colorHue}, 70%, 75%, ${this.opacity})` 
          : `hsla(${colorHue}, 50%, 40%, ${this.opacity})`;
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
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Draw soft glow
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        
        if (this.size > 1.5 && isDarkMode) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = this.color;
        }
        
        ctx.fill();
        ctx.restore();
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 10000); // Dynamic count based on screen size
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
    window.addEventListener("resize", resizeCanvas);
    
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
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      id="canvas-particles"
      className="fixed inset-0 -z-50 pointer-events-none block"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

export default CanvasParticles;
