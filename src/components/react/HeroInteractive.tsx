import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "Desarrollador Full Stack",
  "Ingeniería de Sistemas · UPC (6to ciclo)",
  "Especialista Java · Spring Boot",
  "Desarrollador C# · .NET",
  "Frontend React · Next.js · Astro",
  "Desarrollo Acelerado con IA",
];

const techStack = [
  { name: "Java", color: "from-orange-500/20 to-red-500/20 text-orange-400 border-orange-500/30" },
  { name: "Spring Boot", color: "from-emerald-500/20 to-green-500/20 text-emerald-400 border-emerald-500/30" },
  { name: "C# / .NET", color: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30" },
  { name: "React", color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30" },
  { name: "Astro", color: "from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-500/30" },
  { name: "SQL Server", color: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30" },
  { name: "Docker", color: "from-sky-500/20 to-blue-500/20 text-sky-400 border-sky-500/30" },
];

export default function HeroInteractive() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < current.length) {
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2200);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 30 : 65
    );
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 z-10">
      <div className="max-w-5xl mx-auto w-full">
        {/* Top Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/20 text-xs text-zinc-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-zinc-400">UPC · Sistemas de Información</span>
            <span className="text-zinc-600">|</span>
            <span className="text-cyan-400 font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Disponible para proyectos
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight"
          >
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Paulo Espinoza
            </span>
          </motion.h1>

          {/* Typewriter text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-9 sm:h-11 flex items-center justify-center text-lg sm:text-2xl font-mono text-zinc-300 mb-6"
          >
            <span className="text-cyan-400 mr-2">$</span>
            <span>{roles[roleIndex].substring(0, charIndex)}</span>
            <span className="w-2.5 h-6 bg-cyan-400 ml-1 animate-pulse inline-block align-middle" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-400 mb-10 leading-relaxed"
          >
            Construyendo soluciones de software robustas y escalables con arquitectura moderna,
            backend en <strong className="text-zinc-200">Java &amp; .NET</strong>, interfaces reactivas y desarrollo acelerado con inteligencia artificial.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-semibold shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Explorar Proyectos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3 rounded-xl glass-card text-zinc-200 hover:text-white hover:border-zinc-500 text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              Contactarme
            </button>

            <a
              href="https://github.com/paulollito29-sketch"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card text-zinc-400 hover:text-white hover:border-cyan-500/40 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/paulo-espinoza9/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card text-zinc-400 hover:text-white hover:border-blue-500/40 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Interactive Tech Badge Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto"
          >
            {techStack.map((tech, i) => (
              <motion.span
                key={tech.name}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`px-3 py-1 text-xs font-mono rounded-lg bg-gradient-to-b border ${tech.color} backdrop-blur-sm cursor-default shadow-sm`}
              >
                {tech.name}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Animated Terminal / Code Preview Canvas Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-14 max-w-3xl mx-auto rounded-2xl glass-card border border-white/10 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-950/70 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-zinc-500 ml-2">paulo-dev@portfolio:~</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>FullStack.ts</span>
            </div>
          </div>
          <div className="p-5 font-mono text-xs sm:text-sm text-zinc-300 space-y-2 bg-[#070a12]/80">
            <p className="text-zinc-500">// Perfil de ingeniería de software</p>
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-cyan-300">developer</span> = &#123;
            </p>
            <p className="pl-4">
              <span className="text-blue-400">name:</span> <span className="text-emerald-300">"Paulo Espinoza"</span>,
            </p>
            <p className="pl-4">
              <span className="text-blue-400">university:</span> <span className="text-emerald-300">"UPC - 6to Ciclo"</span>,
            </p>
            <p className="pl-4">
              <span className="text-blue-400">focus:</span> [<span className="text-yellow-300">"Spring Boot"</span>, <span className="text-yellow-300">".NET"</span>, <span className="text-yellow-300">"React"</span>, <span className="text-yellow-300">"AI-Driven Dev"</span>],
            </p>
            <p className="pl-4">
              <span className="text-blue-400">status:</span> <span className="text-emerald-400">"Open to internships &amp; high-impact roles"</span>
            </p>
            <p>&#125;;</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
