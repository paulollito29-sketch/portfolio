import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundScroll() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { scrollYProgress } = useScroll();

  // Scroll transforms for dynamic visual depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const orb1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.4, 0.9]);
  const orb2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.3, 1.1]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.35, 0.6, 0.4, 0.25]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes for futuristic cyber-constellation network
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 65);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.8,
      alpha: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.6 ? "#06b6d4" : Math.random() > 0.3 ? "#3b82f6" : "#8b5cf6",
    }));

    let time = 0;
    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle energetic connecting lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = p1.alpha;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = (1 - dist / 130) * 0.18;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Animated Gradient Mesh */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-[#07090e]"
      />

      {/* Cybernetic Grid Pattern with Scroll-Linked Opacity */}
      <motion.div
        style={{ opacity: gridOpacity }}
        className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"
      />

      {/* Glowing Orb 1 (Cyan/Blue) */}
      <motion.div
        style={{ scale: orb1Scale }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"
      />

      {/* Glowing Orb 2 (Purple/Indigo) */}
      <motion.div
        style={{ scale: orb2Scale }}
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-32 w-96 h-96 md:w-[650px] md:h-[650px] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none"
      />

      {/* Glowing Orb 3 (Emerald/Blue bottom) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 left-1/3 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-blue-600/10 blur-[110px] pointer-events-none"
      />

      {/* Interactive Constellation Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Subtle Noise Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent_1px,#07090e_1px)] bg-[size:32px_32px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_100%)]" />
    </div>
  );
}
