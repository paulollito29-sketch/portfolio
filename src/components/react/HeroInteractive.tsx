import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Github, Linkedin, Mail, MapPin, Building, ShieldCheck, Briefcase } from "lucide-react";

const specializations = [
  "Ingeniero de Sistemas de Información · UPC",
  "Desarrollo Asistido por Inteligencia Artificial (IA)",
  "Metodología SDD (Spec-Driven Development)",
  "Arquitectura Backend en Java (Spring Boot) & C# (.NET)",
  "Bases de Datos Relacionales (PostgreSQL / SQL Server)",
  "Frontend Moderno (Angular / React / Next.js / Astro)",
];

const enterpriseStrengths = [
  { label: "Metodología SDD", desc: "Spec-Driven Dev" },
  { label: "Desarrollo con IA", desc: "Workflows con LLMs" },
  { label: "Backend Core", desc: "Spring Boot & Java" },
  { label: "Data Integrity", desc: "PostgreSQL & SQL Server" },
];

export default function HeroInteractive() {
  const [specIndex, setSpecIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = specializations[specIndex];
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < current.length) {
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2400);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setSpecIndex((prev) => (prev + 1) % specializations.length);
          }
        }
      },
      isDeleting ? 25 : 55
    );
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, specIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 z-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Recruiter Top Notice Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border border-emerald-500/30 text-xs text-slate-200 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-400">Open to Work</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Disponible para Roles en Ingeniería de Sistemas &amp; Desarrollo Full Stack</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card border border-white/10 text-xs text-slate-400 font-mono">
            <MapPin className="w-3.5 h-3.5 text-sky-400" /> Lima, Perú · Modalidad Remota / Híbrida
          </div>
        </motion.div>

        {/* Executive Headline & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-3 text-xs sm:text-sm font-mono text-sky-400 uppercase tracking-widest"
          >
            <Building className="w-4 h-4" />
            <span>Ingeniero de Sistemas de Información · UPC</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-5 leading-[1.1]"
          >
            Paulo Espinoza
            <span className="block text-2xl sm:text-4xl lg:text-5xl mt-2 font-bold gradient-accent">
              Ingeniero de Sistemas de Información
            </span>
          </motion.h1>

          {/* Dynamic Specialization Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-10 flex items-center justify-center text-base sm:text-xl font-mono text-slate-300 mb-6"
          >
            <span className="text-sky-400 font-bold mr-2">&gt;</span>
            <span>{specializations[specIndex].substring(0, charIndex)}</span>
            <span className="w-2 h-5 bg-sky-400 ml-1 animate-pulse inline-block align-middle" />
          </motion.div>

          {/* Recruiter Elevator Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
          >
            <strong>Ingeniero de Sistemas de Información de la Universidad Peruana de Ciencias Aplicadas (UPC)</strong>. Especializado en el diseño e implementación de sistemas backend robustos en <strong className="text-sky-300">Java / Spring Boot</strong> y <strong className="text-indigo-300">C# / .NET</strong>, bases de datos relacionales y aplicaciones web modernas con <strong className="text-emerald-300">React &amp; Astro</strong>, aplicando patrones de arquitectura de sistemas y desarrollo acelerado con IA.
          </motion.p>

          {/* Recruiter Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3.5 mb-14"
          >
            <button
              onClick={() => scrollTo("contact")}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 hover:from-blue-500 hover:to-sky-500 text-white text-sm font-semibold shadow-[0_0_30px_rgba(37,99,235,0.45)] hover:shadow-[0_0_40px_rgba(14,165,233,0.65)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Briefcase className="w-4 h-4" />
              <span>Contactar para Entrevista</span>
            </button>

            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3.5 rounded-xl glass-card border border-white/15 hover:border-sky-400/50 text-slate-200 hover:text-white text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Ver Casos de Estudio</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </button>

            <a
              href="https://www.linkedin.com/in/paulo-espinoza9/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl glass-card border border-white/15 text-slate-300 hover:text-white hover:border-blue-500/50 transition-all"
              aria-label="Perfil de LinkedIn de Paulo Espinoza"
              title="LinkedIn Profesional"
            >
              <Linkedin className="w-4.5 h-4.5 text-[#0a66c2]" />
            </a>

            <a
              href="https://github.com/paulollito29-sketch"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl glass-card border border-white/15 text-slate-300 hover:text-white hover:border-sky-500/50 transition-all"
              aria-label="GitHub de Paulo Espinoza"
              title="Repositorios de GitHub"
            >
              <Github className="w-4.5 h-4.5 text-slate-200" />
            </a>
          </motion.div>
        </div>

        {/* Enterprise Strengths Metric Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {enterpriseStrengths.map((item) => (
            <div
              key={item.label}
              className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-sky-500/30 transition-all flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">{item.label}</div>
                <div className="text-sm font-bold text-white mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
